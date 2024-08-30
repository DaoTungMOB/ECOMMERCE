import { Row } from "antd";
import styled from "styled-components";

export const WarpperHeader = styled(Row)`
  padding: 10px 120px;
  background-color: rgb(36, 122, 125);
  align-items: center;
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
`;
