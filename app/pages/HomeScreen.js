import React, { Component, useLayoutEffect, useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";

// constants
import { COLORS, DIMENSION, KEYS, STYLES } from "../constants";

// components
import { UITextView, UIContainer, UIFAB, UILoader } from "../components";

// utils
import { getData } from "../utils/helpers";

// services
import { getAllCompalaintsByUser } from "../services/ComplaintService";
import moment from "moment";
import { Routes } from "../navigation";

const HomeScreen = ({ navigation, route }) => {
  const [user, setUser] = useState();
  const [complains, setCompalins] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Home",
      headerLeft: (props) => <></>,
    });
  }, []);

  useEffect(() => {
    getCurrentUser();
    fetchComplaints();
  }, []);

  useEffect(() => {
    fetchComplaints();
  }, [user]);

  useEffect(() => {
    console.log(user);
  }, [complains]);

  // fetch current user from storage
  const getCurrentUser = async () => {
    try {
      let result = await getData(KEYS.user);
      setUser(result);
    } catch (e) {
      console.log("error");
    }
  };

  // fetch complaints
  const fetchComplaints = async () => {
    try {
      let complaintList = await getAllCompalaintsByUser(user?.id);
      setCompalins(complaintList);
      console.log(complains);
    } catch (e) {
      Alert.alert("Unable to fetch list of complaints");
    }
  };

  // render UI
  return (
    <UIContainer>
      <View style={{ flex: 1, paddingVertical: DIMENSION.PADDING }}>
        <UITextView text={`Hello`} textStyle={styles.title} />


        {complains.length === 0 ? (
          <View style={{justifyContent:'center', alignItems:'center'}}>
            <UITextView
            text={`There are no complaints show`}/>
          </View>
        ) : (
          <FlatList
            data={complains}
            showsVerticalScrollIndicator={false}
            style={{ marginVertical: DIMENSION.MARGIN }}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={styles.cardStyle}
                  onPress={() => console.log(item)}
                >
                  <View
                    style={{
                      ...STYLES.flexRow,
                      justifyContent: "space-between",
                    }}
                  >
                    <UITextView
                      text={item?.compalin_name}
                      textStyle={styles.cardTitle}
                    />

                    <UITextView
                      text={
                        item?.priority_id === 1
                          ? "LOW"
                          : item?.priority_id === 2
                          ? "MEDIUM"
                          : item?.priority_id === 3
                          ? "HIGH"
                          : "CRITICAL"
                      }
                      textStyle={styles.priorityId}
                    />
                  </View>
                  <UITextView
                    text={moment(item?.created_date).format("DD/MMM/YYYY")}
                    textStyle={styles.date}
                  />
                </TouchableOpacity>
              );
            }}
          />
        )}

        <UIFAB onPress={() => navigation.navigate(Routes.newComplaint)} />
      </View>
    </UIContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
  },
  cardStyle: {
    width: "100%",
    paddingVertical: DIMENSION.PADDING,
    paddingHorizontal: DIMENSION.PADDING,
    borderWidth: 1,
    marginBottom: DIMENSION.MARGIN / 2,
    borderRadius: DIMENSION.CARD_BORDER_RADIUS,
  },
  cardTitle: {
    color: COLORS.grey.grey500,
    fontSize: 18,
    fontWeight: "bold",
  },
  priorityId: {
    color: COLORS.red.red800,
    fontSize: 15,
    fontWeight: "bold",
  },
  date: {
    alignSelf: "flex-end",
    marginVertical: DIMENSION.MARGIN,
  },
});

export default HomeScreen;
