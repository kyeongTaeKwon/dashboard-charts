import axios from "axios";

const URL = "https://static.adbrix.io/front/coding-test/event_1.json";

export const getEventCount = async () => {
  try {
    const { data } = await axios.get(URL);

    return data;
  } catch (error) {
    throw error;
  }
};
