import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox() {

    let [city, setCity] = useState("");

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${import.meta.env.VITE_API_URL}?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }
            let jsonResponse = await response.json();
            let result = {
                temp : jsonResponse.main.temp,
                tempMin : jsonResponse.main.temp_min,
                tempMax : jsonResponse.main.temp_max,
                humidity : jsonResponse.main.humidity,
                feelsLike : jsonResponse.main.feels_like,
                weather : jsonResponse.weather[0].description,
            };
            console.log(result);
        } catch (error) {
            console.error("Error fetching weather:", error);
        }
    }

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = (evt) => {
        evt.preventDefault();
        console.log("Searching weather for:", city);
        getWeatherInfo();
        setCity("");
    };

    return (
        <div className='SearchBox'>
           <h3>Search for the weather</h3>
           <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
            <br /><br />
            <Button variant="contained" type="submit">
              Search
            </Button>
           </form>
        </div>
    )
}