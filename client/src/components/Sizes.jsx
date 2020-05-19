import React,{useState} from "react";



const Sizes = (props) => {
    const {sizes, selectedSize,handleClickSize} = props; 
    

    const displayAllSizes = () => {
        const sizeArr = sizes.map(size => {
            return(
                <span id={size} className={selectedSize === size ? "shadow-lg size" : "shadow-sm size"}  onClick={handleClickSize}>
                    <div>{size}</div>
                </span>    
            )
        })
        return(<div>
            <h5>Select size:</h5>
            <div className="sizes">
                {sizeArr}
            </div>
        </div>)         
    }
     
    return (
    <>
        {displayAllSizes() }
    </>); 
}


export default Sizes; 