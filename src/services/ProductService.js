import axios from "axios";
// import { axiosJWT } from "./UserService";

// Hàm lấy tất cả sản phẩm có thể được lọc theo tên và giới hạn số lượng
export const getAllProduct = async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}/product/get-all`
  );
  return res.data;
};
