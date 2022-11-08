import { getAuthorizationHeader } from "../helpers/authHelpers";
import { BACKEND_BASE_PATH } from "./endPoints";

const getPath = (url: string, basePath = BACKEND_BASE_PATH) => `${basePath}${url}`;

const RequestMethod = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE"
};

export const MediaType = {
  APPLICATION_JSON: "application/json",
  MULTIPART_FORM_DATA: "multipart/form-data"
};

const fetchWithCredentials = (url: string, options: RequestInit = {}, basePath?: string) =>
  fetch(getPath(url, basePath), {
    method: RequestMethod.GET,
    credentials: "include",
    ...options,
    headers: new Headers({
      Accept: MediaType.APPLICATION_JSON,
      ...options.headers
    })
  });

const asyncFetch = async <T>(request: Promise<Response>): Promise<{ data: T; status: number }> => {
  const response = await request;
  const data = await response
    .clone()
    .json()
    .catch(() => response.text());

  return {
    data,
    status: response.status
  };
};

const handleRequest = async <T>(
  path: string,
  options?: RequestInit,
  basePath?: string
): Promise<{
  data: T | null;
  status: number;
}> => {
  const { data, status } = await asyncFetch<T>(fetchWithCredentials(path, options, basePath));
  return {
    data,
    status
  };
};

const request = async <T>(
  path: string,
  parameters?: RequestInit,
  basePath?: string
): Promise<{ data: T | null; status: number } | null> => {
  try {
    const { data, status } = await handleRequest<T>(path, parameters, basePath);
    return { data, status };
  } catch (e) {
    // Network error
    if (e instanceof TypeError && e.message === "Failed to fetch") {
      global.location.reload();
    }
  }
  return null;
};

type RequestBody = object | FormData;
type ResponseBody<T> = {
  data: T | null;
  status: number;
} | null;

const postRequest = <T>(
  path: string,
  requestBody?: RequestBody,
  parameters?: RequestInit
): Promise<ResponseBody<T>> => {
  const requestParameters: RequestInit = { method: RequestMethod.POST };

  if (requestBody) {
    requestParameters.headers = {};
    if (requestBody instanceof FormData) {
      requestParameters.body = requestBody;
    } else {
      requestParameters.body = JSON.stringify(requestBody);
      requestParameters.headers["Content-Type"] = MediaType.APPLICATION_JSON;
    }
    if (parameters?.headers) {
      Object.assign(requestParameters, {
        headers: Object.assign(requestParameters.headers, parameters.headers)
      });
    }
  }

  return request<T>(path, requestParameters);
};

const putRequest = <T>(
  path: string,
  requestBody?: object,
  parameters?: RequestInit,
  contentType?: string
): Promise<ResponseBody<T>> => {
  let requestParameters: RequestInit = { method: RequestMethod.PUT };

  if (requestBody) {
    requestParameters.headers = {};
    requestParameters.headers = {
      "Content-Type": contentType || MediaType.APPLICATION_JSON
    };
    if (parameters?.headers) {
      requestParameters = { ...parameters };
    }
    requestParameters.body = JSON.stringify(requestBody);
  }

  return request<T>(path, requestParameters);
};

const deleteRequest = <T>(
  path: string,
  requestBody?: object,
  parameters?: RequestInit,
  contentType?: string
): Promise<ResponseBody<T>> => {
  let requestParameters: RequestInit = {
    method: RequestMethod.DELETE,
    headers: getAuthorizationHeader()
  };

  if (requestBody) {
    requestParameters.headers = {};
    requestParameters.headers = {
      "Content-Type": contentType || MediaType.APPLICATION_JSON
    };
    if (parameters?.headers) {
      requestParameters = { ...parameters };
    }
    requestParameters.body = JSON.stringify(requestBody);
  }

  return request<T>(path, requestParameters);
};

export { request, postRequest, putRequest, deleteRequest };
