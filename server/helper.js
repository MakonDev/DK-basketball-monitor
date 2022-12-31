require('dotenv').config()
const axios = require("axios");

const searchDKForEvents = async () => {
  const url = 'https://dk-cacher.herokuapp.com/getFinalData'
    
  let resp = []
  await axios.get(url, {
    headers: {
      "dk-secret": process.env.DK_SECRET 
    }
  })
  .then((response) => {
    resp = response.data
  }).catch((error) => {
    console.error("Error retrieving events: ", error)
  });

  return resp
}

module.exports = {
  search: async function() {
    const events = await searchDKForEvents()
    return events
  }
}