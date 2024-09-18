import React, { useEffect, useState } from "react";
import {
  WrapperContentProfile,
  WrapperHeader,
  WrapperInput,
  WrapperLabel,
  WrapperUploadFile,
} from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import * as UserService from "../../services/UserService";
import { useMutationHooks } from "../../hooks/useMutationHook";
import Loading from "../../components/LoadingComponent/Loading";

import * as message from "../../components/Message/Message";
import { updateUser } from "../../redux/slides/userSlide";
import { Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { getBase64 } from "../../utils";

const ProfilePage = () => {
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState(user?.email);
  const [name, setName] = useState(user?.name);
  const [phone, setPhone] = useState(user?.phone);
  const [address, setAddress] = useState(user?.address);
  const [avatar, setAvatar] = useState(user?.avatar);
  const mutation = useMutationHooks((data) => {
    const { id, access_token, ...rests } = data;
    UserService.updateUser(id, rests, access_token);
  });

  const dispatch = useDispatch();
  const { data, isLoading, isSuccess, isError } = mutation;

  useEffect(() => {
    setEmail(user?.email);
    setName(user?.name);
    setPhone(user?.phone);
    setAddress(user?.address);
    setAvatar(user?.avatar);
  }, [user]);

  useEffect(() => {
    if (isSuccess) {
      message.success("Cập nhật thành công");
      handleGetDetailsUser(user?.id, user?.access_token);
    } else if (isError) {
      message.error("Cập nhật thất bại");
    }
  });
  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token }));
  };
  const handleOnChangeName = (value) => {
    setName(value);
  };
  const handleOnchangeEmail = (value) => {
    setEmail(value);
  };
  const handleOnchangePhone = (value) => {
    setPhone(value);
  };
  const handleOnchangeAddress = (value) => {
    setAddress(value);
  };
  const handleOnchangeAvatar = async ({ fileList }) => {
    const file = fileList[0];

    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setAvatar(file.preview);
  };

  const handleUpdate = () => {
    mutation.mutate({
      id: user?.id,
      email,
      name,
      phone,
      address,
      avatar,
      access_token: user?.access_token,
    });
  };

  return (
    <div style={{ width: "1270px", margin: "0 auto", height: "500px" }}>
      <WrapperHeader>Thông tin người dùng</WrapperHeader>
      {/* <Loading isLoading={isLoading}> */}
      <WrapperContentProfile>
        <WrapperInput>
          <WrapperLabel htmlFor="name">Name</WrapperLabel>
          <InputForm
            id="name"
            style={{ width: "300px" }}
            value={name}
            onChange={handleOnChangeName}
          />
          <ButtonComponent
            onClick={handleUpdate}
            size={40}
            styleButton={{
              height: "30px",
              width: "fit-content",

              borderRadius: "4px",
              padding: "4px 6px 6px",
            }}
            textButton={"Cập nhật"}
            styleTextButton={{
              color: "rgb(36, 122, 125)",
              fontSize: "15px",
              fontWeight: "700",
            }}
          ></ButtonComponent>
        </WrapperInput>

        <WrapperInput>
          <WrapperLabel htmlFor="email">Email</WrapperLabel>
          <InputForm
            id="email"
            style={{ width: "300px" }}
            value={email}
            onChange={handleOnchangeEmail}
          />
          <ButtonComponent
            onClick={handleUpdate}
            size={40}
            styleButton={{
              height: "30px",
              width: "fit-content",

              borderRadius: "4px",
              padding: "4px 6px 6px",
            }}
            textButton={"Cập nhật"}
            styleTextButton={{
              color: "rgb(36, 122, 125)",
              fontSize: "15px",
              fontWeight: "700",
            }}
          ></ButtonComponent>
        </WrapperInput>

        <WrapperInput>
          <WrapperLabel htmlFor="phone">Phone</WrapperLabel>
          <InputForm
            id="phone"
            style={{ width: "300px" }}
            value={phone}
            onChange={handleOnchangePhone}
          />
          <ButtonComponent
            onClick={handleUpdate}
            size={40}
            styleButton={{
              height: "30px",
              width: "fit-content",

              borderRadius: "4px",
              padding: "4px 6px 6px",
            }}
            textButton={"Cập nhật"}
            styleTextButton={{
              color: "rgb(36, 122, 125)",
              fontSize: "15px",
              fontWeight: "700",
            }}
          ></ButtonComponent>
        </WrapperInput>

        <WrapperInput>
          <WrapperLabel htmlFor="address">Address</WrapperLabel>
          <InputForm
            id="address"
            style={{ width: "300px" }}
            value={address}
            onChange={handleOnchangeAddress}
          />
          <ButtonComponent
            onClick={handleUpdate}
            size={40}
            styleButton={{
              height: "30px",
              width: "fit-content",

              borderRadius: "4px",
              padding: "4px 6px 6px",
            }}
            textButton={"Cập nhật"}
            styleTextButton={{
              color: "rgb(36, 122, 125)",
              fontSize: "15px",
              fontWeight: "700",
            }}
          ></ButtonComponent>
        </WrapperInput>

        <WrapperInput>
          <WrapperLabel htmlFor="avatar">Avatar</WrapperLabel>
          <WrapperUploadFile
            onChange={handleOnchangeAvatar}
            maxCount={1}
            showUploadList={false}
          >
            <Button icon={<UploadOutlined />}>Select File</Button>
          </WrapperUploadFile>
          {avatar && (
            <img
              src={avatar}
              alt="avatar"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          )}
          {/* <InputForm
            id="avatar"
            style={{ width: "300px" }}
            value={avatar}
            onChange={handleOnchangeAvatar}
          /> */}
          <ButtonComponent
            onClick={handleUpdate}
            size={40}
            styleButton={{
              height: "30px",
              width: "fit-content",

              borderRadius: "4px",
              padding: "4px 6px 6px",
            }}
            textButton={"Cập nhật"}
            styleTextButton={{
              color: "rgb(36, 122, 125)",
              fontSize: "15px",
              fontWeight: "700",
            }}
          ></ButtonComponent>
        </WrapperInput>
      </WrapperContentProfile>
      {/* </Loading> */}
    </div>
  );
};

export default ProfilePage;
