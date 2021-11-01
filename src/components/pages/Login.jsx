import { useState } from "react";
import styled from "styled-components";
import { login } from "../../api/user";
import { useHistory } from "react-router-dom";
import { instance } from "../../api";

const Login = () => {
  let history = useHistory();
  const [loginData, setLoginData] = useState({ userName: "", password: "" });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { success, token } = await login(loginData);
    if (success) {
      localStorage.setItem("token", token);
      instance.defaults.headers.common["Authorization"] = token;
      history.push("/");
    } else {
      alert("유저정보를 확인하세요");
    }
  };
  return (
    <>
      <Box>
        <Container>
          <Logo>
            <img
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              alt=""
            />
          </Logo>
          <FormContainer>
            <form onSubmit={handleSubmit}>
              <InputBox>
                <Label>
                  <Input
                    onChange={handleChange}
                    aria-label="전화번호, 사용자 이름 또는 이메일"
                    aria-required="true"
                    autocapitalize="off"
                    autocorrect="off"
                    maxlength="75"
                    name="userName"
                    type="text"
                    placeholder="전화번호, 사용자 이름 또는 이메일"
                  />
                </Label>
                <Label>
                  <Input
                    onChange={handleChange}
                    aria-label="비밀번호"
                    aria-required="true"
                    autocapitalize="off"
                    autocorrect="off"
                    maxlength="75"
                    name="password"
                    type="password"
                    placeholder="비밀번호"
                  />
                </Label>
              </InputBox>
              <Button>로그인</Button>
            </form>
          </FormContainer>
        </Container>
      </Box>
    </>
  );
};

const Box = styled.div`
  width: 20%;
  margin: 300px auto;
`;
const Container = styled.div``;
const FormContainer = styled.div``;
const Logo = styled.div``;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  height: 36px;
`;
const Input = styled.input`
  height: 36px;
  width: 100%;
`;
const Button = styled.button`
  width: 250px;
  height: 36px;
  margin: 30px 10px;
`;
export default Login;
