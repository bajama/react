import { instance } from ".";

export const uploadImage = async (file) => {
  const method = "post";
  const url = "/upload/image";

  const formData = new FormData();
  formData.append("file", file);

  const result = await instance({ method, url, data: formData });
  return result.data;
};
