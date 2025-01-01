import axiosInstance from "../utils/axios";

export const fetchMenuByStoreId = async (storeId) => {
  try {
    const response = await axiosInstance.get(`/menu/${storeId}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error.message);
    
    throw error.response ? error.response.data : error;
  }
};
