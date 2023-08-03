

import News from "../model/news-schema.js";  //extension likhna must h

const fetchNews = async (req, res) => {

    try{
        let data = await News.find({});

        res.status(200).json(data);
    } catch(error){
        res.status(500).json({message : data.message})
    }
}



export default fetchNews;