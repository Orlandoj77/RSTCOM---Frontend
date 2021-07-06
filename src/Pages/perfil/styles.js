import styled from "styled-components";

export const Container = styled.div``;
export const Main = styled.div``;
export const Form = styled.form`
  position: absolute;
  padding: 30px;
  top: 0px;
  left: 300px;
  width: 1066px;
  height: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  opacity: 1;
`;

export const Form2 = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;
export const Head = styled.div``;

export const Image = styled.img`
  height: 40px;
  width: 40px;
  margin-left: 30px;
`;
export const Image2 = styled.img`
  position: absolute;
  top: 0px;

  width: 100%;
  height: 100%;
`;
export const Image3 = styled.img`
  position: relative;
  top: 25px;
  left: 34px;
  width: 60px;
  height: 60px;
  transform: matrix(1, 0.02, -0.02, 1, 0, 0);
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
    width: 100%;
  }
`;
export const RegisterButton = styled.button`
  top: 448px;
  left: 320px;
  width: 270px;
  height: 52px;
  color: #fff;
  margin-top: 30px;
  background: #071ac8 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #ffffff29;
  border-radius: 20px;
  opacity: 1;
  border: none;

  &:hover {
    background: #071 0% 0% no-repeat padding-box;
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
  text-decoration: underline;
  height: 27px;
  text-align: left;
  font: normal normal normal 20px/27px Segoe UI;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
`;
export const Title2 = styled.h2`
  top: 181px;
  left: 1075px;

  height: 27px;
  text-align: left;
  font: normal normal normal 20px/27px Segoe UI;
  letter-spacing: 0px;
  color: red;
  opacity: 1;
`;
export const Title3 = styled.h2`
  top: -30px;
  left: 108px;
  width: 100px;

  text-align: left;
  font: normal normal normal 20px/27px Segoe UI;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  position: relative;
`;
export const Link = styled.a``;
export const A = styled.a`
  position: relative;
  top: -35px;
  left: 200px;
  width: 162px;
  height: 20px;
  text-align: left;
  font: italic normal normal 15px/20px Segoe UI;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  cursor: pointer;
  text-decoration: none;
`;
export const P = styled.a`
  position: relative;
  top: -29px;
  left: 108px;
  width: 162px;
  height: 20px;
  text-align: left;
  font: italic normal normal 15px/20px Segoe UI;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;
export const List = styled.a`
  position: relative;
  top: 168px;
  left: 34px;
  width: 121px;
`;
export const List1 = styled.a`
  font: normal normal normal 18px/24px Segoe UI;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;
export const List2 = styled.a`
  font: normal normal normal 18px/24px Segoe UI;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  text-decoration: none;
`;
