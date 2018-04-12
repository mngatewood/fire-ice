export const getSwornMembers = async (housesData) => {
  let updatedHousesDataArray = []
  const urlRoot = "http://localhost:3001/api/v1/character/";
  const updatedHousesData = housesData.map( async house => {
    const membersArray = await house.swornMembers;
    const promises = membersArray.map(async member => {
      const urlQuery = member.substr(49);
      const url = `${urlRoot}${urlQuery}`;
      const response = await fetch(url);
      const memberData = await response.json();
      const memberDetails = await { name: memberData.name, died: memberData.died };
      return memberDetails;
    });
    const swornMembers = await Promise.all(promises);
    const updatedHouse = {
      name: house.name,
      founded: house.founded,
      seats: house.seats,
      titles: house.titles,
      coatOfArms: house.coatOfArms,
      ancestralWeapons: house.ancestralWeapons,
      words: house.words,
      swornMembers: [swornMembers]
    };
    updatedHousesDataArray = await [...updatedHousesDataArray, updatedHouse];
    console.log(updatedHousesDataArray);
    return updatedHousesDataArray;
  });
  console.log(updatedHousesDataArray);
  return updatedHousesDataArray;
}




