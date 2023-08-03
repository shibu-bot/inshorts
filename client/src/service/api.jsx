import axios from "axios";     // axios is used to make HTTP request from the browser to the server. It has a get() method which is used! It is similar to fetch.


export const getNews = async () => {
    
    const URL = "";
    
    try{
        
        return await axios.get(`${URL}/news`);
    } catch(error){
        console.log("Error while calling get News api :" + error);
    }
}