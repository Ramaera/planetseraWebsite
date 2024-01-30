import axios from "axios";

const API_BASE_URL = "http://103.209.147.203:1337/api/products";

export const fetchData = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};
