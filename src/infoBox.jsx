import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import "./infoBox.css";

export default function InfoBox() {

    const INIT_URL = "https://plus.unsplash.com/premium_photo-1729600377083-bbe558d8b7a6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    let info = {
        city: "Delhi",
        feelslike: 24.84,
        temp: 25.05,
        tempMin : 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze"
    };
    return (
        <div className="InfoBox">
            <h1>WeatherInfo - {info.weather}</h1>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="div">
          <p>Temperature: {info.temp}&deg; C</p>
          <p>Feels Like: {info.feelslike} °C</p>
          <p>Min Temperature: {info.tempMin} °C</p>
          <p>Max Temperature: {info.tempMax} °C</p>
          <p>Humidity: {info.humidity} %</p>
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
}