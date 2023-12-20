import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

// constants
import { DIMENSION, COLORS, ICONS } from "../constants";

// components
import { UITextView, UITextInput, UIButton } from "../components";

// services
import { userLogin } from "../services/AuthServices";

const LoginForm = (props) => {
  const [username, setUserName] = useState("David");
  const [email, setEmail] = useState("johndoe@gmail.com");
  const [password, setPassword] = useState("asdf");
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [depId, setDepId] = useState(null);

  // handle user login
  const handleLogin = async () => {
    try {
      if (
        username &&
        email &&
        password &&
        firstName &&
        lastName &&
        depId !== undefined
      ) {
        const payload = {
          id: 4,
          username,
          email,
          firstName,
          lastName,
          password,
          depId,
        };
        await userLogin(payload);
      } else {
        console.log("empty");
      }
    } catch (e) {
      console.log(JSON.stringify(e));
    }
  };

  return (
    <View>
      <UIButton label="Login" onPress={() => handleLogin()} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoginForm;
