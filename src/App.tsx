import {useState } from 'react';
import './App.css';

// import { GpsProvider } from './providers/GpsProvider';
// import GpsButton from './components/GpsButton';

function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [isPushed, setIsPushed] = useState(false);

  const successCallback = (position:GeolocationPosition) => {
    console.log(position);
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
    setIsPushed(true);
  }
  const errorCallback = (position:GeolocationPositionError) => {
    console.log(position);
  }
  // const onClickGetLocation = () => {    
  //   // navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  //   navigator.geolocation.watchPosition(successCallback, errorCallback);
  // }
  // Geolocation APIに対応していない時
  if (!navigator.geolocation) {    
    alert("この端末では位置情報が取得できません");  
  } 
  navigator.geolocation.watchPosition(successCallback, errorCallback);

  return (
    <div className="App">
      {/* <GpsProvider>                       */}
        {/* <button onClick={onClickGetLocation}>GPS取得</button> */}
          {/* {isPushed ? <div>{latitude}</div> : <div></div>}
          {isPushed ? <div>{longitude}</div> : <div></div>} */}
          <div>緯度:{latitude} 経度:{longitude}</div>
      {/* </GpsProvider> */}
    </div>
  );
}

export default App;
