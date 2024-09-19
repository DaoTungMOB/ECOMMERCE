import React from "react";
import { WrapperHeader } from "./style";
import { Button } from "antd";
import TableComponent from "../TableComponent/TableComponent";
import { PlusOutlined } from "@ant-design/icons";

const AdminProduct = () => {
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
        >
          <PlusOutlined style={{ fontSize: "60px" }} />
        </Button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <TableComponent />
      </div>
    </div>
  );
};

export default AdminProduct;
