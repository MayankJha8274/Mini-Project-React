import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import "./infoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}) {

    const INIT_URL = "https://plus.unsplash.com/premium_photo-1729600377083-bbe558d8b7a6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    const HOT_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo12pHoOgD5krbTYivP_zldlfK_rnU795Lhg&s";
    const COLD_URL = "https://images.everydayhealth.com/images/wellness/what-freezing-cold-temperatures-do-to-your-body-alt-1440x810.jpg?sfvrsn=8c38eab7_5";
    const HUMID_URL = "https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1024,format=auto/sites/default/files/d8/images/canvas/2024/03/06/eaf63785-a769-40a9-8615-ec365eadcf8d_1126e908.jpg";

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={info.humidity > 80 ? HUMID_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <SunnyIcon /> : <AcUnitIcon />}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component="div">
                  <p>Temperature: {info.temp}&deg; C</p>
                  <p>Feels Like: {info.weather} </p>
                  <p>Min Temperature: {info.tempMin} °C</p>
                  <p>Max Temperature: {info.tempMax} °C</p>
                  <p>Humidity: {info.humidity} %</p>
                </Typography>
              </CardContent>
            </Card>
            </div>
        </div>
    )
}