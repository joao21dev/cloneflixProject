import React, { useEffect } from "react";
import { Container, Logo, BackgroundImage } from "./styles";
import logo from "../../assets/logo.png";
import backgroundImage from "../../assets/splash.png";

const Splash = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate("Login");
  };

  useEffect(() => {
    setTimeout(() => {
      handleLogin();
    }, 1500);
  }, []);

  return (
    <Container>
      <Logo source={logo} />
      <BackgroundImage source={backgroundImage} />
    </Container>
  );
};

export default Splash;
