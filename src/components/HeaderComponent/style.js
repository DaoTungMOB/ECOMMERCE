import { Row } from "antd";
import styled from "styled-components";

export const WarpperHeader = styled(Row)`
  background-color: rgb(36, 122, 125);
  align-items: center;
  gap: 16px;
  flex-wrap: nowrap;
  width: 1270px; // or 1270px
  padding: 10px 0;
`;
export const WrapperTextHeader = styled.span`
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  text-align: left;
`;
export const WrapperHeaderAccount = styled.div`
  display: flex;
  align-items: center;
  color: white;
  gap: 10px;
`;
export const WrapperTextHeaderSmall = styled.span`
  font-size: 12px;
  color: white;
  white-space: nowrap;
`;
export const WrapperContentPopup = styled.p`
  cursor: pointer;

  &:hover {
    color: rgb(36, 122, 125);
  }
`;
