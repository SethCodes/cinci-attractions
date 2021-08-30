import axios from 'axios';

const weather = async () => {

    const api = '782a3ff54a8d337614b461d3cb2c5333';
    const q = 'Cincinnati';
    const url = `api.openweathermap.org/data/2.5/weather?q=${q}&appid=${api}`;
    
    const getWeather = await axios.get(url)
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err)
    });
    
    getWeather();

}

export default weather;