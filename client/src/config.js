export const API_ORIGIN_URL =
  process.env.NODE_ENV === "production"
    ? "https://shoppe-jay.herokuapp.com/api"
    : "http://localhost:3001/api";