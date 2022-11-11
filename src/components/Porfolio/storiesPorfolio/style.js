import styled from "styled-components";


export const PortLink = styled.button`
  text-decoration: none;
  color: #fff;
  border-color: #f7be68;
  background-color: #f7be68;
  font-size: 14px;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
  
  &:hover {
    color: #fff;
  }
`;
export const PortfolioBtn = styled.div`
  // background-color: #7a7a7a17;
  padding: 100px 0 70px;
  text-align: right;
  ${PortLink} > a {
    color: #fff;
    text-decoration:none;
  }
  ${PortLink} > a : hover {
    color: #fff;
  }
`;

