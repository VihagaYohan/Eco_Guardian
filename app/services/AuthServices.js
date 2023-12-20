import baseURL from "./API";

// endpoints
import { users, getAllUsers } from "./Endpoints";

import moment from "moment";
import axios from "axios";

// constants
import { KEYS } from "../constants";

// utils
import { storeData } from "../utils/helpers";

// user login
export const userLogin = async (payload) => {
  try {
    let user = null;
    let users = await allUsers();
    if (users?.data.length > 0) {
      users?.data.map(async (item) => {
        if (item.user_name === payload.userName) {
          console.log(`${item.user_name} - ${payload.userName}`);
          if (item.password === payload.password) {
            // store user type
            await storeData(KEYS.userType, item.dep_id);

            // store user
            await storeData(KEYS.user, item);
            return item;
          }
        } else {
          throw "User not found";
        }
      });
    }
  } catch (e) {
    console.log(`Error at user login ${e.message}`);
  }
};

// register
export const userRegister = async (payload) => {
  try {
    id = 0;
    let result = await usersLength();
    console.log(result.data.length);
    id = result.data.length;
    axios
      .post("http://192.168.1.4:8080/api/v1/user/saveUser", {
        user_name: payload.username,
        email: payload.email,
        password: payload.password,
        created_at: moment().format(),
        updated_at: moment().format(),
        first_name: payload.firstName,
        last_name: payload.lastName,
        dep_id: payload.depId,
        id: id,
      })
      .then((res) => console.log(res))
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  } catch (e) {
    console.log(e);
  }
};

// get users length
export const allUsers = async () => {
  try {
    let result = await axios.get(`${getAllUsers}`);
    return result;
  } catch (e) {
    console.log(e);
  }
};
