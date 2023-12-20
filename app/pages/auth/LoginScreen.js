import React, { Component, useLayoutEffect, useRef, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { Formik, Form, Field, ErrorMessage } from "formik";

// components
import {
  UITextView,
  UIContainer,
  UIFAB,
  UIButton,
  UITextInput,
  UIAlert,
  UILoader
} from "../../components";

// widgets
import { LoginForm } from "../../widgets";

// constants
import { COLORS, CONSTANTS, DIMENSION } from "../../constants";

// service
import {userLogin} from '../../services/AuthServices'
import { Routes } from "../../navigation";

const LoginScreen = ({ navigation, route }) => {
  const [userName, setUserName] = useState('John');
  const [password, setPassword] = useState('asdf');
  const [loading, setLoading] = useState(false)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Logs",
      headerLeft: (props) => <></>,
    });
  }, []);

  // handle login
  const handleLoging = async () => {
    try  {
      setLoading(true)
        if(userName.length === 0 && password.length === 0 ) {
           Alert.alert('Please check username and password fields')
        } else {
          let result = await userLogin({userName, password})
          if(result) {
            setLoading(false)
            navigation.navigate(Routes.bottom)
          }
        }
    }catch(e) {
      Alert.alert('Login failed. Please check login credentials')
    }
  }

  return (
    <UIContainer>
      <ScrollView
        style={{ flex: 1, marginVertical: DIMENSION.MARGIN }}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../../assets/logo-color.png")}
          style={{
            width: 200,
            height: 200,
          }}
          resizeMode="contain"
        />

        {loading === false ?<View style={{ marginVertical: DIMENSION.MARGIN * 4 }}>
          <UITextInput
            placeholder="Enter user name"
            value={userName}
            onChangeText={(text) => setUserName(text)}
          />

          <UITextInput
            placeholder="Enter password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />

          <UIButton
          label="Login"
          onPress={() => handleLoging()}/>
        </View> : (
          <UILoader/>
        )}
      </ScrollView>
    </UIContainer>
  );
};

const styles = StyleSheet.create({
  formholder: {
    borderWidth: 1,
    width: DIMENSION.SCREEN_WIDTH - DIMENSION.PADDING * 2,
  },
});

export default LoginScreen;
