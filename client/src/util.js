import INITIAL_SHOP_DATA from "./data/INITIAL_SHOP_DATA.js";
import axios from "axios";
export const toMongoDB = async () => {
    const collections = {...INITIAL_SHOP_DATA}; 
    try{
      Object.keys(collections).forEach(async (key) => {
          const collection = collections[key];
          const {title, routeName} = collection; 
          let res = await axios({
            url:"/api/collections/collection",
            method:"post",
            data:{
                  title,
                  routeName
                }
        });
        console.log(res)
        collection.items.forEach(async (item) => {
          const {name , imageUrl:primaryImageUrl , price} = item;
          const isFeatured = Math.random() >= 0.7; 
          res = await axios({
            url:"/api/collections/collection/items/",
            method:"post",
            data:{
                  collectionType:title, 
                  name,
                  primaryImageUrl,
                  price,
                  isFeatured
                },   
             });
             console.log(res); 
          });  
      });
      }
    catch(error)
      {
        console.log({error});
      }  
  }

export const collectionsArrToObj = (collectionsArr) => {
    console.log("::DEBUGGG", collectionsArr);
    const newObj = {};
    collectionsArr.forEach(collection => {
        const {title , ...rest} = collection; 
        newObj[title] = {rest}
    });
    return newObj; 
}