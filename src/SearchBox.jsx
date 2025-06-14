import TextField from '@mui/material/TextField';    
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
export default function SearchBox({updateInformation}){
    const [city , setCity ] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "3cfd4edc4320c0f8096c9fc0458012f4";

    let weatherInfo = async() =>{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        
        let result = {
            city : city,
            temp :  jsonResponse.main.temp,
            maxTemp : jsonResponse.main.temp_max,
            minTemp : jsonResponse.main.temp_min,
            humidity : jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_like,
            Description : jsonResponse.weather[0].description

        }
        console.log(result);
        return result
    }

    let handlechange = (event) =>{
    
        setCity(event.target.value);
    }   
    let handlesubmit = async (event) =>{
        event.preventDefault();
        console.log(city);
        setCity("");
       let info = await  weatherInfo();  
       updateInformation(info);
    }
    return(
        <div className="S">
            <h2>Search for weather</h2>
            <form onSubmit={handlesubmit}>

            <TextField id="city" label="city name" variant="outlined" required value={city} onChange={handlechange}  /><br/><br/>
            <Button variant="contained" type="submit">Search</Button>
            </form>

        </div>
    )
}