const axios = require('axios');
const mapArrToString = require('../mapArrToString/mapArrToString');

const getData = async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    const userIds = response.data.map((user) => user.id);
    return mapArrToString(userIds);
  } catch (err) {
    console.log(err);
  }
};

module.exports = getData;
