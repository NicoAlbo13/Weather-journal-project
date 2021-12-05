/* Global Variables */
const api = 'api.openweathermap.org/data/2.5/forecast?id=';
const zipcode = document.getElementById('zip').value;
const apiKey = '&appid=9966fdbc869e3914dcbda7cb0663249e';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
