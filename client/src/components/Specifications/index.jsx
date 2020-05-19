import React from "react"; 
import {Row,Col} from "react-bootstrap";


const Specifications = (props) => {
    const {type,sizes} = props; 

    const displaySizes = () => { 
        const sizeElements = sizes.map((size , index) => {
          if(index === 0)
             {
             return(<span>{size}</span>);
             }  
         return(<span>,{size}</span>);
        });
        return sizeElements;
    }

    return (
        <div className="shadow summary" style={{width:"100%", height:"250px",marginTop:"10px",padding:"0px 20px",fontSize:"1.5rem",marginTop:"20px"}}>
            <h2>Specifications</h2>
            <Row className="padding-0 max-width">
                <Col xs={6}>
                Colors Available:
                </Col>
                Red,Orange,Yellow
                <Col xs={6}>
                </Col>
            </Row>
            <Row className="padding-0 max-width">
                <Col xs={6}>
                Pattern:
                </Col>
                Solid
                <Col xs={6}>
                </Col>
            </Row>
            <Row className="padding-0 max-width">
                <Col xs={6}>
                Technology:
                </Col>
                Lightweight
                <Col xs={6}>
                </Col>
            </Row>
            <Row className="padding-0 max-width">
                <Col xs={6}>
                Available Sizes:
                </Col>
                {type === "Sneakers" ? <span style={{marginRight:"6px"}}>UK:</span> : ""}
                {displaySizes()}
                <Col xs={6}>
                </Col>
            </Row>
            
            <span></span>
                                 
     </div>  
    );
}



export default Specifications; 