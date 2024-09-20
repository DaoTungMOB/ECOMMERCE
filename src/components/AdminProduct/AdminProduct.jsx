import React, { useState } from "react";
import { WrapperHeader, WrapperUploadFile } from "./style";
import { Button, Form, Modal, message } from "antd";
import TableComponent from "../TableComponent/TableComponent";
import { PlusOutlined } from "@ant-design/icons";
import Inputcomponent from "../Inputcomponent/Inputcomponent";
import * as ProductService from "../../services/ProductService";
import { useMutationHooks } from "../../hooks/useMutationHook";
import { getBase64 } from "../../utils";
import Loading from "../LoadingComponent/Loading";

const AdminProduct = () => {
  // State để kiểm soát việc hiển thị modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State để lưu trữ thông tin sản phẩm
  const [stateProduct, setStateProduct] = useState({
    name: "",
    type: "",
    price: "",
    rating: "",
    description: "",
    image: "",
    countInStock: "",
    fileList: [], // Danh sách file upload
  });

  // Sử dụng mutation hook để gọi API tạo sản phẩm
  const mutation = useMutationHooks((data) =>
    ProductService.createProduct(data)
  );

  const { isLoading } = mutation;

  // Hàm đóng modal
  const handleCancel = () => {
    setIsModalOpen(false);
    setStateProduct({
      name: "",
      type: "",
      price: "",
      rating: "",
      description: "",
      image: "",
      countInStock: "",
      fileList: [],
    });
  };

  // Hàm xử lý khi form được submit
  const onFinish = async () => {
    try {
      const res = await mutation.mutateAsync(stateProduct);
      if (res.status === "OK") {
        message.success("Sản phẩm đã được tạo thành công");
        handleCancel();
        // Ở đây bạn có thể thêm logic để cập nhật danh sách sản phẩm
      } else {
        message.error(res.message || "Có lỗi xảy ra khi tạo sản phẩm");
      }
    } catch (error) {
      message.error(error.message || "Không thể tạo sản phẩm");
    }
  };

  // Hàm xử lý khi giá trị input thay đổi
  const handleOnchange = (e) => {
    setStateProduct({ ...stateProduct, [e.target.name]: e.target.value });
  };

  // Hàm xử lý khi upload ảnh
  const handleOnchangeAvatar = async ({ fileList }) => {
    const file = fileList[0];
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setStateProduct({ ...stateProduct, image: file.preview, fileList });
  };

  return (
    <div>
      <WrapperHeader>Quản lí sản phẩm</WrapperHeader>
      <div style={{ marginTop: "10px" }}>
        <Button
          style={{
            height: "150px",
            width: "150px",
            borderRadius: "6px",
            borderStyle: "dashed",
          }}
          onClick={() => setIsModalOpen(true)}
        >
          <PlusOutlined style={{ fontSize: "60px" }} />
        </Button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <TableComponent />
      </div>
      <Modal
        title="Tạo sản phẩm"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Hủy
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={onFinish}
            loading={isLoading}
          >
            OK
          </Button>,
        ]}
      >
        <Loading isLoading={isLoading}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Tên sản phẩm"
              name="name"
              rules={[
                { required: true, message: "Vui lòng nhập tên sản phẩm!" },
              ]}
            >
              <Inputcomponent
                value={stateProduct.name}
                onChange={handleOnchange}
                name="name"
              />
            </Form.Item>

            <Form.Item
              label="Loại sản phẩm"
              name="type"
              rules={[
                { required: true, message: "Vui lòng nhập loại sản phẩm!" },
              ]}
            >
              <Inputcomponent
                value={stateProduct.type}
                onChange={handleOnchange}
                name="type"
              />
            </Form.Item>

            <Form.Item
              label="Số lượng"
              name="countInStock"
              rules={[{ required: true, message: "Vui lòng nhập số lượng!" }]}
            >
              <Inputcomponent
                value={stateProduct.countInStock}
                onChange={handleOnchange}
                name="countInStock"
              />
            </Form.Item>

            <Form.Item
              label="Giá"
              name="price"
              rules={[{ required: true, message: "Vui lòng nhập giá!" }]}
            >
              <Inputcomponent
                value={stateProduct.price}
                onChange={handleOnchange}
                name="price"
              />
            </Form.Item>

            <Form.Item
              label="Đánh giá"
              name="rating"
              rules={[{ required: true, message: "Vui lòng nhập đánh giá!" }]}
            >
              <Inputcomponent
                value={stateProduct.rating}
                onChange={handleOnchange}
                name="rating"
              />
            </Form.Item>

            <Form.Item
              label="Mô tả"
              name="description"
              rules={[{ required: true, message: "Vui lòng nhập mô tả!" }]}
            >
              <Inputcomponent
                value={stateProduct.description}
                onChange={handleOnchange}
                name="description"
              />
            </Form.Item>

            <Form.Item
              label="Hình ảnh"
              name="image"
              rules={[{ required: true, message: "Vui lòng chọn hình ảnh!" }]}
            >
              <WrapperUploadFile
                fileList={stateProduct.fileList}
                onChange={handleOnchangeAvatar}
                maxCount={1}
                showUploadList={false}
              >
                <Button>Chọn file</Button>
                {stateProduct?.image && (
                  <img
                    src={stateProduct?.image}
                    alt="avatar"
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      marginLeft: "10px",
                    }}
                  />
                )}
              </WrapperUploadFile>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" loading={isLoading}>
                Tạo sản phẩm
              </Button>
            </Form.Item>
          </Form>
        </Loading>
      </Modal>
    </div>
  );
};

export default AdminProduct;
