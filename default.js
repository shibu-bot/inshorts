
import { data } from './constants/data.js';

import News from './model/news-schema.js';

const defaultData = async () => {

    try{
        // await News.deleteMany({});
        await News.insertMany(data);
        console.log("Data inserted successfully in the Collection");
    } catch(error){
        console.log( error.message);
    }
};

export default defaultData;