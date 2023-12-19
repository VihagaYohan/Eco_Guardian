import AsyncStorage from "@react-native-async-storage/async-storage";

// add data to local storage
export const storeData = async (key, content) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(content));
  } catch (e) {
    showConsole(`Unable to set ${key} in local storage`);
  }
};

// get data from local storage
export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (e) {
    showConsole(`Unable to retrieve ${key} from local storage`);
  }
};

// show console
export const showConsole = (message) => {
  if (__DEV__) {
    console.log(message);
  }
};
