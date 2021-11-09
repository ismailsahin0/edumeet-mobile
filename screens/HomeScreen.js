import React from "react";

import { Background, Logo, Header, Paragraph, Button } from "../components";

const HomeScreen = ({ navigation }) => {
  return (
    <Background>
      <Logo />
      <Header>Login Template</Header>
      <Paragraph>
        The easiest way to start with your amazing application.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() =>
          navigation.navigate('Login')
        }
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.navigate('Register')
        }
      >
        Sign Up
      </Button>
    </Background>
  );
};


export default HomeScreen;
