const baseUrl =
  process.env.NODE_ENV === "production"
    ? "http://sleepy-sands-27967.herokuapp.com"
    : "http://localhost:3000";

export default baseUrl;
