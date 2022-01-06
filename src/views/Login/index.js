import React from "react";
import {
  Container,
  Logo,
  BackgroundImage,
  Input,
  ContainerInput,
  Button,
  Text,
  ContainerTexts,
  Form,
} from "./styles";
import logo from "../../assets/logo.png";
import backgroundImage from "../../assets/login.jpg";

const Login = ({ navigation }) => {
  const handleLogin = () => {
    navigation.replace('Home');
  };

  const handleForgetPassword = () => {
    alert("Forget Password");
  };

  const handleCreateAccount = () => {
    alert("Create Account");
  };

  return (
    <BackgroundImage source={backgroundImage}>
      <Container>
        <Logo source={logo} />

        <Form>
          <ContainerInput>
            <Input placeholder="E-mail" placeholderTextColor="white" />
          </ContainerInput>

          <ContainerInput>
            <Input placeholder="Password" placeholderTextColor="white" />
          </ContainerInput>

          <Button onPress={handleLogin}>
            <Text>Login</Text>
          </Button>

          <ContainerTexts>
            <Text onPress={handleForgetPassword}>Forget Password</Text>
            <Text>|</Text>
            <Text onPress={handleCreateAccount}> Create Account</Text>
          </ContainerTexts>
        </Form>
      </Container>
    </BackgroundImage>
  );
};

export default Login;
