import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SearchBox from './SearchBox';
import "./Weather.css"

export default function WeatherInfo({info}){
    
    const HOTIMG_URL = "https://images.unsplash.com/photo-1699932489226-d738c32a1490?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdCUyMHdlYXRoZXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";
    const COLDIMG_URL = "https://images.unsplash.com/photo-1641607745477-4e0b7b46b400?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZCUyMHdlYXRoZXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";
    const RAINIMG_URL = "https://plus.unsplash.com/premium_photo-1671406233410-9727cf249910?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFpbnklMjB3ZWF0aGVyJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D";
    return(
        <div className="weather">
            <h3>Weather Info - {info.Description}</h3>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {info.humidity > 80 ? RAINIMG_URL : info.temp > 20 ? HOTIMG_URL : COLDIMG_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2"  color=  'text.secondary'  component = "span">
           <div > Temperature = {info.temp}&deg;C </div>
           <div > Humidity = {info.humidity}&deg;C </div>
           <div > Min Temperature = {info.minTemp}&deg;C </div>
           <div > Max Temperature = {info.maxTemp}&deg;C </div>
           <div > Feels Like = {info.feelsLike}&deg;C </div>
           
        </Typography>
      </CardContent>
      
    </Card>

        </div>
    )
}