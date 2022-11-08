const createError = (message, type) => {
  const error = new Error();
  error.message = message;
  error.name = type;
  return error;
};

export const UnauthorizedError = (message) =>
  createError(message, "Unauthorized");
export const ForbiddenError = (message) => createError(message, "Forbidden");
export const ServerError = (message) => createError(message, "Server");
export const AppServerError = (message) => createError(message, "AppServer");
