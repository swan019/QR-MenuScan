import axiosInstance from "@/utils/axios";

// Fetch store by ID
export const fetchMenuByIdTOCost = async (storeId) => {
  try {
    const response = await fetch(`https://qrmenuscan-backend.onrender.com/api/menu/${storeId}`, {
      method: 'GET',
    });
    const data = await response.json(); // Parse the JSON response
    return data;
  } catch (error) {
    alert("Problem fetching store Menu Try After Some Time", error.response?.data || error.message)
    return null
  }
};

export const fetchStoreById = async (storeId) => {
  try {
    const response = await axiosInstance.get(`/menu/${storeId}`);
    console.log(response.data);
    
    return response.data;
  } catch (error) {
    console.log("Error fetching store:", error.response?.data || error.message);
    alert("Error fetching store:", error.response?.data || error.message);
    return null;
  }
};

// // Update special store by ID
// export const updateSpecialStoreById = async (storeId, data) => {
//   try {
//     const response = await axiosInstance.put(`/store/special/${storeId}`, data);
//     return response.data;
//   } catch (error) {
//     console.error("Error updating special store:", error.response?.data || error.message);
//     throw error;
//   }
// };

// // Fetch special store by ID
// export const fetchSpecialStoreById = async (storeId) => {
//   try {
//     const response = await axiosInstance.get(`/store/special/${storeId}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching special store:", error.response?.data || error.message);
//     throw error;
//   }
// };

// // Update item by ID
// export const updateItemById = async (itemId, data) => {
//   try {
//     const response = await axiosInstance.put(`/item/${itemId}`, data);
//     return response.data;
//   } catch (error) {
//     console.error("Error updating item:", error.response?.data || error.message);
//     throw error;
//   }
// };

// Delete item by ID
export const deleteItemById = async (itemId) => {
  console.log("itemId : ",itemId);
  try {
    const response = await axiosInstance.delete(`/menu/${itemId}`);
    console.log("response.data.Data  :",response.data.Data);
    return response.data.Data;
  } catch (error) {
    console.log("Error deleting item:", error.response?.data || error.message);
    alert("Error deleting item:", error.response?.data || error.message);
    throw null;
  }
};

export const addMenuItem = async (menuItemData) => {
  try {
    console.log("IN API DATA : ", menuItemData);
    // const response = await axiosInstance.post("/add", menuItemData);
    console.log("Menu item added successfully:", response.data);
    return response.data;
  } catch (error) {
    console.log("Error adding menu item:", error.response?.data || error.message);
    throw error;
  }
};
