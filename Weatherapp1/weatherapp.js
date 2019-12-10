function weatherBalloon( cityID ) {
    var key = '3932cec165132323f674317bda640def';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      console.log(data);
    })
    .catch(function() {
      // catch any errors
    });
  }
  
  window.onload = function() {
    weatherBalloon( 7522434 );
  }

  /*function drawWeather( d ) {
    var celcius = Math.round(parseFloat(d.main.temp)-273.15);
    //var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
    
    document.getElementById('description').innerHTML = d.weather[0].description;
    document.getElementById('temp').innerHTML = celcius + '&deg;';
    document.getElementById('location').innerHTML = d.name;
  }*/

 function weatherBalloon( cityID ) {
    var key = '3932cec165132323f674317bda640def';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      drawWeather(data); // Call drawWeather
    })
    .catch(function() {
      // catch any errors
    });
  }

  function drawWeather( d ) {
    var celcius = Math.round(parseFloat(d.main.temp)-273.15);
    var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
    var description = d.weather[0].description;
    var sunrise = d.sys.sunrise;
    var sunset = d.sys.sunset;

    var initClock = function(){
      setInterval(function(){
          var date = new Date();
          var hour = date.getHours();
          var minute = date.getMinutes();
          var second = date.getSeconds();

          changeTime(hour + " : " + minute + " : " + second);

          }, 1000);
      }

      var changeTime = function(time){
        document.getElementById("clock").innerHTML = time;
      }

      initClock();
    
    
    document.getElementById('description').innerHTML = description;
    document.getElementById('temp').innerHTML = celcius + '&deg;';
    document.getElementById('location').innerHTML = d.name;
    document.getElementById('sunset').innerHTML = sunset;
    document.getElementById('sunrise').innerHTML = sunrise;
    //document.getElementById('clock').innerHTML = time;
    
    if( description.indexOf('rain') > 0 ) {
      document.body.className = 'rainy';
    } else if( description.indexOf('cloud') > 0 ) {
      document.body.className = 'cloudy';
    } else if( description.indexOf('sunny') > 0 ) {
      document.body.className = 'sunny';
    }
  }