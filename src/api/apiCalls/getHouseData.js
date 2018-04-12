export const getHouseData = async() => {
  const url = 'http://localhost:3001/api/v1/houses';
  try {
    const response = await fetch(url);
    const houseData = response.json();
    return houseData;
  } catch (error) {
    throw Error("Error retrieving house data");
  }
};