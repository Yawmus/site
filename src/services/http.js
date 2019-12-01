import { db } from './../firebase'
const axios = require('axios');

 //Make a request for a user with a given ID
//axios.get('/user?ID=12345')
  //.then(function (response) {
     //handle success
    //console.log(response);
  //})
  //.catch(function (error) {
     //handle error
    //console.log(error);
  //})
  //.finally(function () {
     //always executed
  //});

 //Optionally the request above could also be done as
//axios.get('/user', {
    //params: {
      //ID: 12345
    //}
  //})
  //.then(function (response) {
    //console.log(response);
  //})
  //.catch(function (error) {
    //console.log(error);
  //})
  //.then(function () {
     //always executed
//});  

export async function sendEmail(payload) {
  return await axios({
    url: `http://localhost:8080/sendEmail`,
    method: 'post',
    data: payload
  })
}

export async function setHighscore(payload) {
  try {
    const response = await axios({
      url: `http://localhost:8080/highscore`,
      method: 'post',
      data: payload
    })
    return response.data;
  } catch (error) {
    console.error(error);
  }
}


export async function getHighscore(game) {
  try {
    db.collection('highscores').get()
      .then(query => {
        const data = query.docs.map(doc => doc.data());
        data = data.filter(item => {
          return item.name == game
        })
        console.log('data', data);
      })
      .catch(err => {
        console.log(err);
      })

    //const response = await axios({
      //url: `http://localhost:8080/highscore?game=${game}`,
      //method: 'get'
    //})
    //return response.data;
  } catch (error) {
    console.error(error);
  }
}
