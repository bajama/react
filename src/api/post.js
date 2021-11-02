import { instance } from ".";

export const addPost = async (data) => {
  const method = "post";
  const url = "/post";
  const result = await instance({ method, url, data });
  return result.data;
};

export const getPostMain = async () => {
  const method = "get";
  const url = "/post/main";
  const result = await instance({ method, url });
  return result.data;
};

export const getPost = async (params) => {
  const method = "get";
  const url = "/post";
  const result = await instance({ method, url, params });
  return result.data;
};
