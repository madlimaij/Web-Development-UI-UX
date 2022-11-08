const API_PATH = "http://localhost:5001/upload-file";

export type FetchResponse<T> = {
  body?: T;
  isSuccess: boolean;
};

export { API_PATH };
