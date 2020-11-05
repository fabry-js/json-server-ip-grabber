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
      axios.post('http://localhost:3000/posts', {
        title: response.data.ip
      })
  })
  .catch(function (e){
    console.error(e);
  })
}
logData()

export default App;
