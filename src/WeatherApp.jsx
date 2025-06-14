import { useState } from "react"
import SearchBox from "./SearchBox"
import WeatherInfo from "./WeatherInfo"

export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo] = useState({
         city : "delhi",
        Description: "clear sky",
        feelsLike : 44.64,
        maxTemp :  44.77,
        minTemp: 44.77,
        temp: 19.77,
        humidity : 10
    });

    let updateInfo = (result) =>{
        setWeatherInfo(result);
    }
    return(
        <>
            <h1 style={{textAlign: "center"}}>Weather App by Abhi Verma</h1>
            <SearchBox updateInformation = {updateInfo} />
            <WeatherInfo info = {weatherInfo}/>

        </>
    )
}