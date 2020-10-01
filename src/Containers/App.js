import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '../Component/Card'
import ReactCardCarousel from "react-card-carousel"


//the style to carousel
//https://codesandbox.io/s/react-card-carousel-0gib5?file=/src/index.js:744-1248


function App() {

  // const [background, setBackground] = useState('https://wallpapercave.com/wp/wp2035103.jpg');

  // const handleBackground = (icon) => {
  //   switch (icon) {
  //       case '01d' || '01n':
  //           setBackground('https://images.unsplash.com/photo-1535304902304-466bec5bf8e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')
  //           break;
  //       case '02d' || '02n':
  //           setBackground('https://images.unsplash.com/photo-1509803874385-db7c23652552?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')
  //           break;
  //       case '03d' || '03n':
  //           setBackground('https://images.unsplash.com/photo-1598378028718-37a61e030860?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')
  //           break;
  //       case '04d' || '04n':
  //           setBackground('https://images.unsplash.com/photo-1533575988569-5d0786b24c67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')
  //           break;
  //       case '09d' || '09n':
  //           setBackground('https://images.unsplash.com/flagged/photo-1564484595462-16dbb2f0c0b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')
  //           break;
  //       case '10d' || '10n':
  //           setBackground('https://images.unsplash.com/photo-1517964101322-a4cfaaf56e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')
  //           break;
  //       case '11d' || '11n':
  //           setBackground('https://images.unsplash.com/photo-1472145246862-b24cf25c4a36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')
  //           break;
  //       case '13d' || '13n':
  //           setBackground('https://images.unsplash.com/photo-1542601098-8fc114e148e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')
  //           break;
  //       case '50d' || '50n':
  //           setBackground('https://images.unsplash.com/photo-1549863897-3aa27a8b31da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60')
  //           break;
  //   }
  //}

  const api = {
    key: '0f9f044edec430086cd2dff7dc0abaf3',
    base: 'https://api.openweathermap.org/data/2.5/'
  }  

  const placesPhotosUrl = [
    'https://images.unsplash.com/photo-1549701455-d0d42354b009?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1508009603885-50cf7c579365?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1583779457094-ab6f77f7bf57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1510953851460-301fe300c5ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1545069128-193f82499904?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1542743408-218cc173cda0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1534253893894-10d024888e49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1476984251899-8d7fdfc5c92c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1545893835-abaa50cbe628?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1506374322094-6021fc3926f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1544971587-b842c27f8e14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
  ]

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  const containerStyle = {
      position: 'relative',
      backgroundImage: 'url(\'https://images.unsplash.com/photo-1564639580159-74150c717f25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80\')',
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'middle',
      padding: '0',
      margin: '0 auto',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom',
      height: '100vh',
      width: '100%',
      transition: '0.4 ease-out',

         
  }

  const places = ['amsterdam','bangkok' ,'barcelona','beijing','berlin','istanbul',
                  'jerusalem','london' ,'los angeles','madrid','miami','moscow' ,
                  'new york','paris','shanghai','sydney','tel aviv','tokyo'];

  return (
    <div style={containerStyle} className="container">
      <div className="row main">
        <div className="title col-4 d-flex align-items-center justify-content-center">
          <h1>Weather App</h1>
        </div>
        <div className="col-8">
          <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
            {    
              places.map( (place,i) => {
                  return (
                      <Card place={place} photo={placesPhotosUrl[i]} apiBase={api.base} apiKey={api.key} key={i}/>
                  );
              })
            }
          </ReactCardCarousel>
        </div>
        <div className="date d-flex align-items-center justify-content-center">{dateBuilder(new Date())}</div>  
      </div>
    </div>
  );
}

export default App;
