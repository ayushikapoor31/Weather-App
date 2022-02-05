class Weather {
    constructor(city, state) {
        this.apikey = '*******************************';
        this.city = city;
        this.state = state;
    }
    async getWeather(){
        const response =await fetch(`http://api.weatherstack.com/current?access_key=${this.apikey}&query=(${this.city},${this.state})&units=m`);
        const responseData=await response.json();
        return responseData;
    }
    //change weather location
    changeLocation(city,state){
        this.city=city;
        this.state=state;
    }
}