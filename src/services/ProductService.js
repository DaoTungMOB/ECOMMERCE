import axios from "axios";
// import { axiosJWT } from "./UserService";

// Hàm lấy tất cả sản phẩm có thể được lọc theo tên và giới hạn số lượng
export const getAllProduct = async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}/product/get-all`
  );
  return res.data;
};

// Hàm tạo mới một sản phẩm
export const createProduct = async (data) => {
  const res = await axios.post(
    `${process.env.REACT_APP_API_URL}/product/create`,
    data
  );
  return res.data;
};
