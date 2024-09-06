import { Card } from "antd";
import styled from "styled-components";

export const WrapperCardStyle = styled(Card)`
  width: 220px;
  & img {
    height: 220px;
    width: 220px;
  }
`;
export const StyleNameProduct = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgb(56, 56, 61);
`;
export const WrapperReportText = styled.div`
  font-size: 11px;
  color: rgb(128, 128, 137);
  display: flex;
  align-items: center;
  margin: 6px 0 0px;
`;
export const WrapperPriceText = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: rgb(255, 66, 78);
`;
export const WrapperDiscountText = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: rgb(255, 66, 78);
`;
