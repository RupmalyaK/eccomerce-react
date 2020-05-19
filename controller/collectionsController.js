export const searchItemsByName = (searchObj) => {
    const {CollectionsModel, searchString,categories,isFeatured} = searchObj;
    let {priceMin, priceMax} = searchObj; 
    if (!priceMin)
        {
            priceMin = 0;
        }
    if (!priceMax || priceMax === "0")
        {
            priceMax = Number.MAX_VALUE;
        }    
    return new Promise (async (resolve, reject) => {
        try{
        const collections = await CollectionsModel.find({}); 
        let items = [];
        let startItems = []; 
        collections.forEach(collection => {
            const itemsFromCollections = [];
            const itemsStartWithFromCollections = []; 
           collection.items.forEach(item => {
                item = {...item._doc , type:collection.title};
                let flag = true; 
                if(item.price < priceMin || item.price > priceMax)
                    {
                        flag = false;
                    }
                
                if(isFeatured === "true" && !item.isFeatured)
                    {
                      
                        flag = false; 
                    }
            
                 if(categories)
                    {
                        if(categories.indexOf(item.type.toLowerCase()) === -1)
                            {
                               
                                flag = false;
                            }
                    }           
               if (item.name.match(new RegExp(`^${searchString}`, 'i')) && flag)
                {
                    itemsStartWithFromCollections.push(item)
                }
                else if  ( (item.name.match(new RegExp(searchString, 'i')) !== null) && flag)
                    {
                        itemsFromCollections.push(item); 
                    }
            });
            
            if (itemsStartWithFromCollections.length != 0)
            {
                items = items.concat(itemsStartWithFromCollections);
            }  

            if (itemsFromCollections.length != 0)
                {
                   startItems = startItems.concat(itemsFromCollections); 
                }
        });
        items = items.concat(startItems); 
        resolve(items); 
       }    
    catch(error)
    {
       reject(error);
    }  
    });
}

export const sortByPrice = (items, isAsc) =>
    {
        items.sort((itemA, itemB) => {
            if (isAsc === "true")
                {
                   
                    return itemA.price - itemB.price;      
                }
                return itemB.price - itemA.price;      
          });
          return items; 
    }

export const sortByName = (items, isAsc) =>
    {
        items.sort((itemA, itemB) => {
            if(isAsc === "true")
                {
                    return itemA.name.localeCompare(itemB.name);
                }

                return itemB.name.localeCompare(itemA.name);
        });
    }  
        