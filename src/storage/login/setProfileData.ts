import AsyncStorage from "@react-native-async-storage/async-storage";
import { getProfileData } from "./getProfileData";

const setProfileData = async (data: any) => {
  try {
    //const storagePlayer = await getProfileData();

    const storage = JSON.stringify(data);
    console.log(data, "DWADAWDAWDWADWADWA");
    await AsyncStorage.setItem("ProfileData", storage);
  } catch (error) {
    throw error;
  }
};

export default setProfileData;
