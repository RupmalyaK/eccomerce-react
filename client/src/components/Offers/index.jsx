import React from "react";



const Offers = (props) => {
    const {offers} = props; 
    const {isOneDayDelivery,isZeroEmi,isFreeShipping,isTwoDaysDelivery,isSameDayDelivery} = offers; 
       return (
        <div className="available-offers">
        <span style={{display:"block"}}>Available offers:</span>
            {
                isFreeShipping ? <>
                <li>No cost shipping.</li>
                </>:<></>
            }     
            {
            isZeroEmi ? <>
            <li>Zero cost EMI on selected cards.</li>    
            </>:<></>
            }
            {
              isOneDayDelivery ? <>
            <li>Items can be delivered to your location in one day</li>           
              </>:<></>  
            }
            {
              isTwoDaysDelivery ? <>
            <li>Items can be delivered to youe location in two days</li>           
              </>:<></>  
            }
            {
              isSameDayDelivery ? <>
            <li>Items can be delivered to your location in the same day</li>           
              </>:<></>  
            }
        </div> 
       ); 
}

export default Offers; 