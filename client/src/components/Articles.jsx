
// importing the api that I created 
import { getNews } from "../service/api";

import { useEffect, useState } from "react";
import {Box} from "@mui/material";


// components
import Article from "./Article.jsx";

const Articles = () => {
  
  const [news, setNews] = useState([]);

  useEffect(() => {

    dailyNews();
  },[]);      // it takes two arguments: a callback fxn and the time when u want this to execute 
  // basically kya krna h aur kab krna h
  // Now [] empty array means that we want to use this when componentDidMount
  

  const dailyNews = async () =>  {
      let response = await getNews();

      setNews(response.data);
      
  }

  return (

    <Box>
      {
        news.map( data => {
             return <Article  data={data}/>
      })
      }
    </Box>
  )
}

export default Articles;  