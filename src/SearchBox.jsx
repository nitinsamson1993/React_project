import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox(){
    let [city, setCity] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "4c3c77ed62e08d4ae4f39b4c14969dc5";

    let getWeatherInfo = async()=>{
        let response = await fetch(`${API_URL}?q=${city} &appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);

        let result = {
            temp: jsonResponse.main.temp,
            temMin: jsonResponse.main.temp_min,
            temMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelslike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description
        }
        console.log(result);
    };

  

    let handleChange = (event) =>{
        setCity(event.target.value);
    }

    let handleSubmit = (event) =>{
        event.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    }

    return(
        <div className='SearchBox'>
            <h3>Search for  the weather</h3>
            <form onSubmit={handleSubmit}>
            <TextField id="City" label="City Name" variant="outlined" required value={city} onChange={handleChange}/><br></br><br></br><br></br>
            <Button variant="contained" type="submit" >Search</Button>
            </form>
        </div>
    )
}