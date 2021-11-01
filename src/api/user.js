import { instance } from ".";

export const login = async (data) => {
  const method = "post";
  const url = "/user/token";
  const result = await instance({ method, url, data });
  return result.data;
};
export const signUp = async (data) => {
  const method = "post";
  const url = "/user";
  const result = await instance({ method, url, data });
  return result.data;
};
