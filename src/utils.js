export const isJsonString = (data) => {
  // Kiểm tra nếu dữ liệu không phải là chuỗi, trả về false ngay lập tức
  if (typeof data !== "string") {
    return false;
  }
  try {
    // Thử parse JSON
    JSON.parse(data);
  } catch (error) {
    // Nếu có lỗi khi parse, trả về false
    return false;
  }
  // Nếu không có lỗi, trả về true
  return true;
};
