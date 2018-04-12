export const getSwornMembers = (housesData) => {
  const urlRoot = "http://localhost:3001/api/v1/character/";
  const updatedHousesData = housesData.map( house => ({
    console.log(house);
    const membersArray = house.swornMembers;
    const promises = membersArray.map(async member => {
      const urlQuery = member.substr(49);
      const url = `${urlRoot}${urlQuery}`;
      const response = await fetch(url);
      const memberData = await response.json();
      const memberDetails = { name: memberData.name, died: memberData.died };
      console.log(memberDetails);
    });
    const swornMembers = (Promise.all(promises));
    const updatedHouse = {
      name: house.name,
      founded: house.founded,
      seats: house.seats,
      titles: house.titles,
      coatOfArms: house.coatOfArms,
      ancestralWeapons: house.ancestralWeapons,
      words: house.words,
      swornMembers: []
    }
  });
  return houseData;
  // return Promise.all(promises);
}




