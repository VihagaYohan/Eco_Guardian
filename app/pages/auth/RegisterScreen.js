import React, { Component, useLayoutEffect, useRef } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { Formik, Form, Field, ErrorMessage } from "formik";

// constants
import {DIMENSION} from '../../constants'

// components
import { UITextView, UIContainer, UIFAB, UIButton } from "../../components";

// widgets
import {LoginForm} from '../../widgets'

const RegisterScreen = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Logs",
      headerLeft: (props) => <></>,
    });
  }, []);

  return (
    <UIContainer>
      <ScrollView
        style={{ flex: 1, marginVertical: DIMENSION.MARGIN }}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 100,
            height: 100,
            borderWidth: 1,
          }}
        ></View>

        <View style={{ marginVertical: DIMENSION.MARGIN * 4 }}>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: DIMENSION.PADDING,
              justifyContent: "space-between",
            }}
          >
            <UIButton
              label="Eco Guardian"
              onPress={() =>
                scrollRef.current.scrollTo({
                  x: DIMENSION.SCREEN_WIDTH,
                  y: 0,
                  animated: true,
                })
              }
              buttonStyle={{
                backgroundColor: COLORS.primaryColor,
                paddingVertical: 10,
                width: (DIMENSION.SCREEN_WIDTH - DIMENSION.PADDING * 2) / 2,
                borderRadius: 0,
              }}
            />

            <UIButton
              label="Eco Officer"
              onPress={() =>
                scrollRef.current.scrollTo({
                  x: -(DIMENSION.SCREEN_WIDTH - DIMENSION.PADDING * 2) / 2,
                  y: 0,
                  animated: true,
                })
              }
              buttonStyle={{
                backgroundColor: "rgba(102,187,106, 0.8)",
                paddingVertical: 10,
                width: (DIMENSION.SCREEN_WIDTH - DIMENSION.PADDING * 2) / 2,
                borderRadius: 0,
              }}
            />
          </View>

          <ScrollView
            ref={scrollRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            style={{
              paddingVertical: DIMENSION.PADDING * 2,
              width: DIMENSION.SCREEN_WIDTH - DIMENSION.PADDING * 2,
              marginHorizontal: DIMENSION.PADDING * 2,
            }}
          >
            <View style={styles.formholder}>
              <LoginForm />
            </View>

            <View style={styles.formholder}>
              <UITextView text="register" />
            </View>
          </ScrollView>
        </View>
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

export default RegisterScreen;
