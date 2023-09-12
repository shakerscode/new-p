// authMiddleware.js

export const authMiddleware = (baseQuery) => async (args, api, extraOptions) => {
  const token = localStorage.getItem("userToken");

  if (token) {
    args.headers = {
      ...args.headers,
      Authorization: `Bearer ${JSON.parse(token)}`,
    };
  }

  return baseQuery(args, api, extraOptions);
};
