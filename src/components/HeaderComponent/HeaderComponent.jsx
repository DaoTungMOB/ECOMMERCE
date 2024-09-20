import { Badge, Button, Col, Popover } from "antd";
import React, { useEffect, useState } from "react";
import {
  WarpperHeader,
  WrapperContentPopup,
  WrapperHeaderAccount,
  WrapperTextHeader,
  WrapperTextHeaderSmall,
} from "./style";
import Search from "antd/es/transfer/search";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as UserService from "../../services/UserService";
import { resetUser } from "../../redux/slides/userSlide";
import Loading from "../LoadingComponent/Loading";

const HeaderComponent = ({ isHiddenSearch = false, isHiddenCart = false }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const handleNavigateLogin = () => {
    navigate("/sign-in");
  };
  const [userName, setUserName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const dispatch = useDispatch();
  const handleLogout = async () => {
    setLoading(true);
    await UserService.logoutUser();
    dispatch(resetUser());
    setLoading(false);
  };
  useEffect(() => {
    setLoading(true);
    setUserName(user?.name);
    setUserAvatar(user?.avatar);
    setLoading(false);
  }, [user?.name, user?.avatar]);
  const content = (
    <div>
      <WrapperContentPopup onClick={() => navigate("/profile-user")}>
        Thông tin người dùng
      </WrapperContentPopup>
      {user?.isAdmin && (
        <WrapperContentPopup onClick={() => navigate("/system/admin")}>
          Quản lý hệ thống
        </WrapperContentPopup>
      )}
      <WrapperContentPopup onClick={handleLogout}>
        Đăng xuất
      </WrapperContentPopup>
    </div>
  );

  return (
    <div
      style={{
        width: "100%",
        background: "rgb(36, 122, 125)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <WarpperHeader
        style={{
          justifyContent:
            isHiddenCart && isHiddenSearch ? "space-between" : "unset",
        }}
      >
        <Col span={5}>
          <WrapperTextHeader>Dao-Thanh-Tung</WrapperTextHeader>
        </Col>
        {!isHiddenSearch && (
          <Col span={13}>
            <ButtonInputSearch
              size="large"
              bordered={false}
              textButton="Tìm Kiếm"
              placeholder="Input search text"

              //
            />
          </Col>
        )}

        <Col
          span={6}
          style={{ display: "flex", gap: "20px", alignItems: "center" }}
        >
          <Loading isLoading={loading}>
            {" "}
            <WrapperHeaderAccount>
              {userAvatar ? (
                <img
                  src={userAvatar}
                  alt="avatar"
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <UserOutlined style={{ fontSize: "30px" }} />
              )}

              {user?.access_token ? (
                <>
                  <Popover content={content} trigger="click">
                    <div style={{ cursor: "pointer" }}>
                      {userName?.length ? userName : user?.email}
                    </div>
                  </Popover>
                </>
              ) : (
                <div
                  onClick={handleNavigateLogin}
                  style={{ cursor: "pointer" }}
                >
                  <WrapperTextHeaderSmall>
                    Đăng Nhập/Đăng Ký
                  </WrapperTextHeaderSmall>
                  <div>
                    <WrapperTextHeaderSmall>Tài Khoản</WrapperTextHeaderSmall>
                    <CaretDownOutlined />
                  </div>
                </div>
              )}
            </WrapperHeaderAccount>
          </Loading>
          {!isHiddenCart && (
            <div>
              <Badge count={4} size="small">
                <ShoppingCartOutlined
                  style={{ fontSize: "30px", color: "#fff" }}
                />
              </Badge>
              <WrapperTextHeaderSmall>Giỏ Hàng</WrapperTextHeaderSmall>
            </div>
          )}
        </Col>
      </WarpperHeader>
    </div>
  );
};

export default HeaderComponent;
