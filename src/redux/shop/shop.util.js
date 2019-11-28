
const filterItems = (collection) => {
    const noOfItemsToPreview = 5; 
    const newItemsTypeArr = []; 
    const filteredItemsArr = collection.map((itemType, index) => {
        const tempItem = {...itemType, items:itemType.items.slice(0 , noOfItemsToPreview - 1)}
        return tempItem; 
    })
    return filteredItemsArr; 
}


export {
    filterItems,
};