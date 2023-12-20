import axios from "axios";

// endpoints
import { complaints } from "./Endpoints";

// fetch all compalints by user
export const getAllCompalaintsByUser = async (userId) => {
  try {
    let complaints = await axios.get(
      `http://192.168.1.4:8080/api/v1/complain/getAllComplains`
    );
    let complainList = complaints?.data.filter(item => item.complain_id === userId)
    return complainList;
  } catch (e) {
    console.log(`Error at fetch complaints by user ${e.message}`);
  }
};
