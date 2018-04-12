import { getSwornMembers } from "./getSwornMembers";

export const getHouseData = async() => {
  const url = 'http://localhost:3001/api/v1/houses';
  try {
    const response = await fetch(url);
    const houseData = await response.json();
    const houseDataWithSwornMembers = getSwornMembers(houseData);
    console.log(houseDataWithSwornMembers);
    return houseData;
  } catch (error) {
    throw Error("Error retrieving house data" + error.message);
  }
};