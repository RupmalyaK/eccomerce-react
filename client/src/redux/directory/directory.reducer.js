const INITIAL_STATE = {
    items : [
        {
          "title": "Jackets", 
          "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png", 
          "routeUrl":"jackets", 
        },
        {
            "title": "Hats",    
            "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
            "routeUrl":"hats", 
        },
        {
            "title": "Sneakers",    
            "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
            "routeUrl":"sneakers",
            
        },
        {
            "title": "Womens",    
            "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
            "routeUrl":"womens", 
            "size":"large"
           
        },
        {
            "title": "Mens",    
            "imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
            "routeUrl":"mens",
            "size":"large"
        }
    ],
}

const directoryReducer = (state = INITIAL_STATE , action) => {
    const {type} = action; 
    switch(type)
        {
            default:
                return state; 
        }
}


export default directoryReducer; 
