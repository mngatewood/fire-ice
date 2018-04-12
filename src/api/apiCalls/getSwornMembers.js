export const getSwornMembers = (houseData) => {
  const urlRoot = "http://localhost:3001/api/v1/character/";
  houseData.map( house => {
    const membersArray = house.swornMembers;
    membersArray.map(async member => {
      const urlQuery = member.substr(49);
      const url = `${urlRoot}${urlQuery}`;
      const response = await fetch(url);
      const memberData = await response.json();
      console.log(memberData);
    });
  });
  return houseData;
}