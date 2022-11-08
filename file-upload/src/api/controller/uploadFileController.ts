import { API_PATH, FetchResponse } from "../endpoint";

type FileUploadResponse = {
  message: string;
  fileName: string;
};

const uploadFile = async (
  file: any
): Promise<FetchResponse<FileUploadResponse>> => {
  const res = await fetch(API_PATH, { method: "POST", body: file });
  if (res.status === 201) {
    const data = await res.json();
    return {
      body: data,
      isSuccess: true,
    };
  }
  return {
    isSuccess: false,
  };
};

export { uploadFile };
