import styled from "styled-components";

export const Container = styled.div`
  padding: 0px;
  background-color: #f5f5f5;
`;

export const Row = styled.div`
  padding: 0px;
`;
export const Text = styled.div`
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 22px;
  }
  a{
    text-decoration: none;
  }
`;
export const Header = styled.div`
  padding-left: 48px;
  padding-right: 48px;
`;
export const H1 = styled.h1`
  font-weight: 700;
`;

export const BodyForm = styled.div`
  box-shadow: 0 0 3px rgb(0 0 0 / 15%);
  margin-top: 50px;
  margin-bottom: 50px;
`;
export const Form = styled.div`
  @media (max-width: 768px) {
    padding: 0px;
    margin: 0px;
  }
`;

export const HeaderForm = styled.div`
  padding-top: 48px;
  padding-left: 48px;
  padding-right: 48px;
  margin-bottom: 0px;
`;

export const FormGroup = styled.div``;

export const FooterForm = styled.form`
  padding: 48px;
  @media (max-width: 768px) {
    padding-left: 48px;
    padding-right: 48px;
    padding-bottom: 0px;
    margin: 0px;
  }
`;
export const Label = styled.label`
  display: inline-block;
  font-family: Roboto;
  font-weight: 700;
  line-height: 24px;
  margin: 0px 0px 5px;
`;
export const Input = styled.input`
  background-color: #ffffff;
  border-color: #cccccc;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  color: #959595;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  padding: 6px 15px;
  &:focus {
    outline: none;
    border-color: #66afe9;
  }
`;

export const TextArea = styled.textarea`
  background-color: #ffffff;
  border-color: #cccccc;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  color: #959595;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  padding: 6px 15px;
  min-height: 100px;
  &:focus {
    outline: none;
    border-color: #66afe9;
  }
`;

export const Bnt = styled.button`
  align-items: flex-start;
  background-color: #ff6e00;
  border-color: #ff6e00;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  color: #ffffff;
  display: inline-block;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding: 11px 15px;
  text-align: center;
  &:hover {
    opacity: 0.8;
  }
`;

export const Content = styled.div`
  padding-top: 48px;
  padding-left: 12px;
  padding-right: 12px;
  @media (max-width: 768px) {
    padding-left: 48px;
    padding-right: 48px;
    padding-top: 0px;
    margin: 0px;
  }
`;
export const Error = styled.label`
  color: red;
`;
export const Submit = styled.input`
  align-items: flex-start;
  background-color: #ff6e00;
  border-color: #ff6e00;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  color: #ffffff;
  display: inline-block;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding: 11px 15px;
  text-align: center;
  &:hover {
    opacity: 0.8;
  }
`;
