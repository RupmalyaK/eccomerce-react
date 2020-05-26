import React, {useEffect} from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {setBlurOn,setBlurOff} from "../../redux/system/system.action.js"
import CustomButton from "../CustomButton";

const Container = styled.div`
    background:#f8f9fa;
    display:block;
    position:fixed;
    top:50%;
    left:50%;
    width:500px;
    height:200px;
    margin-left:-250px;
    margin-top:-100px;
   // background:coral;
    z-index:20;
    text-align:center;
    padding-top:10px;
    display:flex;
    flex-direction:column;
    overflow:hidden;
    .text{
        height:100px;
        font-size:1.2rem;
      //  background:yellow;
        flex:3;    
    }
    .buttons{
        //background:red;
        flex:1;
        width:100%;
        margin-top:5%;
        padding:10px;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        z-index:22;
        flex-grow:1;

        .button{
            width:200px;
            height:50px;
            background:grey; 
            position:relative;
            display:flex;
            align-self:flex-end; 
            text-align:center;
            justify-content:center;
            align-items:center;
            //background:black;
            span{
                margin:0 auto;
                display:inline-block;
                font-size:1.2rem;
                
                color:white;
            }
        }
    }


`;

const ConfirmationPopup = (props) => {
    const {text,confirmHandler,cancelHandler} = props;
    const dispatch = useDispatch();
    
    useEffect(
        () => {
            dispatch(setBlurOn());
        },[]
    );

    const confirmHandlerWrapper = e => {
        dispatch(setBlurOff());
        confirmHandler(e);
    }

    const cancelHandlerWrapper = e => {
        dispatch(setBlurOff());
        cancelHandler(e);
    }
    return(
        <Container>
            <div>
                <div className="text">{text}</div>
                <div className="buttons">
                    <CustomButton onClick={confirmHandlerWrapper}>Yes</CustomButton>
                    <CustomButton onClick={cancelHandlerWrapper}>No</CustomButton>                      
                </div>
            </div>    
        </Container>
    );
}


export default ConfirmationPopup;