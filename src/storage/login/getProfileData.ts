import AsyncStorage from "@react-native-async-storage/async-storage";

export const getProfileData = async () => {
  console.log("dwad");
  try {
    const storage = await AsyncStorage.getItem(`ProfileData`);
    console.log(storage);
    return storage;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
