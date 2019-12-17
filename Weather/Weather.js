class Weather{
    // konstruktor
    constructor(c){
        this.city = c;
        this.key = '3932cec165132323f674317bda640def';
    }

    // data from API
    sync weatherData(){
        const resp = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+ this.city + '&appid=' + this.key);
        const data = await resp.json();
        console.log(data);
        return data;
    }

    // change city name
}