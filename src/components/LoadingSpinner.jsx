import styled from 'styled-components';
import React from "react"; 



const SpinnerOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinnerContainer = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  position:absolute;
  top:50%;
  left:50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;


const LoadingSpinner = WrappedComponent => {

  const spinner = (
    (props) => {
      const {isLoading , ...otherProps} = props; 

      const displayWrappedComponent = () => {
        return (
          isLoading ? (
            <SpinnerContainer>
                  <SpinnerOverlay/>
            </SpinnerContainer>) 
          : <WrappedComponent />
        );
      } 
     

            return(displayWrappedComponent());
        }
      );

      return spinner;
 }

export default LoadingSpinner; 

