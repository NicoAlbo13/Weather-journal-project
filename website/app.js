/* Global Variables */
const api = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=9966fdbc869e3914dcbda7cb0663249e';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', magic);
/* Function called by event listener */
function magic(e){
    const zipcode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    getWeather(api, zipcode, apiKey)
    .then(function(data){
        postData('/add', {temperature:data.main.temp, date: newDate, resp: feelings});
    })
    .then(function(data){
        refreshUI()
    });
}

/* Function to GET Web API Data*/
const getWeather = async (baseURL, zip, key)=>{
    const res = await fetch(baseURL+zip+key);
    try{
        const data = await res.json();
        return data;
    }
    catch(error){
        console.log(error);
    }
}

/* Function to POST data */
const postData = async(url, data)=>{
    //console.log(data);
    console.log(JSON.stringify(data));
    const res = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    });
    try{
        const newData = await res.json();
        console.log(newData)
        return newData
    } catch(error){
        console.log(error);
    }
}

const refreshUI = async () => {
    const request = await fetch('/all');
    try{
      const allData = await request.json();
      document.getElementById('date').innerHTML = allData.date;
      document.getElementById('temp').innerHTML = allData.temperature;
      document.getElementById('content').innerHTML = allData.content;
      console.log(allData.date)
    }catch(error){
      console.log(error);
    }
  }
