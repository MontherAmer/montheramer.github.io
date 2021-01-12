export const getTimeAPI = ({lat,long})=>{
    let { data } = await Axios.get(`${process.env.REACT_APP_WEATHER_MAIN_URL}?location=${lat},${long}`, {
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_TIME_KEY
        }
      });
      
}






