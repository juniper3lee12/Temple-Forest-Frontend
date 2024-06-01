import Constants from "expo-constants";

// getData from server
const API_URL = Constants?.expoConfig?.hostUri
  ? Constants.expoConfig.hostUri.split(`:`).shift().concat(`:3001`)
  : `http://localhost:3001`;

export const getData = async (setData) => {
  try {
    const response = await fetch(`http://${API_URL}/meditate`);
    console.log(response);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    setData(data.notes);
  } catch (error) {
    console.error("Error:", error);
    Alert.alert("We cannot receive the information from server");
  }
};
