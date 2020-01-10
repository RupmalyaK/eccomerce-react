export const searchItemsByTitle = (CollectionsModel, searchString) => {
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
               if (item.name.match(new RegExp(`^${searchString}`, 'i')))
                {

                    itemsStartWithFromCollections.push(item)
                }
                else if  (item.name.match(new RegExp(searchString, 'i')) !== null)
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