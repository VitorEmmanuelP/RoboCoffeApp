import AsyncStorage from "@react-native-async-storage/async-storage";

export const getProfileData = async () => {
  try {
    const storage = await AsyncStorage.getItem(`ProfileData`);

    return storage;
  } catch (error) {
    throw error;
  }
};
