const AUTH_ACCESS_TOKEN = "auth_token";

const getAuthToken = () => {
  return localStorage.getItem(AUTH_ACCESS_TOKEN);
};

const getAuthorizationHeader = () => {
  const authToken = getAuthToken();
  return { Authorization: `Bearer ${authToken}` };
};

const setAuthToken = (token: string) => {
  if (token) {
    localStorage.setItem(AUTH_ACCESS_TOKEN, token);
  } else {
    throw new Error("Token not provided");
  }
};

const removeAuthToken = () => {
  localStorage.removeItem(AUTH_ACCESS_TOKEN);
};

export { getAuthorizationHeader, setAuthToken, removeAuthToken, getAuthToken };
