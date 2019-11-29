
const filterItems = (collection) => {
    const noOfItemsToPreview = 5;
    const newObj = {}; 
    for (var key in collection) {
        if (collection.hasOwnProperty(key)) {
            newObj[key] = {...collection[key], items:collection[key].items.slice(0 , noOfItemsToPreview - 1) };
        }
      }
      return newObj;
}


export {
    filterItems,
};


