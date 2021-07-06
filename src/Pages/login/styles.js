import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  width: 100%;
  height: 100%;
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 443px;
  height: 618px;
  margin-right: 133px;
  border-radius: 20px;
  position: relative;
`;
export const Image = styled.img`
  margin-left: 133px;
  position: relative;
  margin-left: 270px;
`;
export const Image2 = styled.img`
  display: flex;
  height: 100%;
  width: 1320px;
  position: absolute;

  @media (min-width: 1080px) {
    display: flex;
    height: 100%;
    width: 1320px;
    position: absolute;
  }
`;

export const InputName = styled.input`
  top: 354px;
  left: 1025px;
  width: 270px;
  height: 40px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  opacity: 1;
  transition: 0.9s;
  ::placeholder {
    color: #707070;
    opacity: 1;
  }
  &:focus {
    width: 70%;
  }
  &:hover {
    width: 70%;
  }
`;
export const InputEmail = styled.input`
  top: 354px;
  left: 1025px;
  width: 270px;
  text-decoration: underline;
  height: 40px;
  padding: 0px 10px 0px;
  margin-top: 10px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  opacity: 1;
  transition: 0.9s;
  ::placeholder {
    color: #707070;
    opacity: 1;
  }
  &:focus {
    width: 70%;
  }
  &:hover {
    width: 70%;
  }
`;

export const InputPassword = styled.input`
  top: 354px;
  left: 1025px;
  width: 270px;
  height: 40px;
  text-decoration: underline;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  opacity: 1;
  margin-top: 20px;
  padding: 0px 10px 0px;
  transition: 0.9s;
  ::placeholder {
    color: #707070;
    opacity: 1;
  }
  &:focus {
    width: 70%;
  }
  &:hover {
    width: 70%;
  }
`;
export const RegisterButton = styled.button`
  top: 473px;
  left: 1025px;
  width: 290px;
  height: 52px;
  color: #fff;
  margin-top: 10px;
  background: #071ac8 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #ffffff29;
  border-radius: 20px;
  opacity: 1;
  border: none;

  &:hover {
    color: #000;
    cursor: pointer;
  }
`;
export const RedirectLogin = styled.a`
  left: 1057px;
  height: 27px;
  padding: 20px;
  text-align: center;
  text-decoration: underline;
  font: normal normal normal 20px/37px Segoe UI;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
export const Title = styled.h2`
  top: 181px;
  left: 1075px;

  height: 27px;
  text-align: left;
  font: normal normal normal 20px/27px Segoe UI;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
`;
export const Link = styled.a``;
export const Fade = styled.a``;
