import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  padding: 0 30px;
  margin: 60px auto;
  max-width: 960px; 
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const InnerContainer = styled(FlexRow)`
  width: auto;
  max-width: 1920px; 
  min-height: 100vh;
  justify-content: start;
  @media screen and (min-width: 2000px) {
    margin: 0 auto;
  } 
  @media screen and (max-width: 800px) {
    margin: 120px 16px 0 ;
    flex-direction: column;
  }
`;

export const MobileBox = styled.div`
  width: auto;
  display: none;
  @media screen and (max-width: 800px) {
    display: flex;
  }
`;

export const DesktopBox = styled.div` 
  display: flex;
  width: 100%;
  max-width: 826px;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const Typography = styled.span`
  font-size: 14px;
  letter-spacing: 0 ;
  color: #000000;
  opacity: 1;
  font-weight: 500;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width:800px) {
    font-size: 12px;
    font-size: ${(props) => props?.style?.fontSize - 2}px !important;
  }
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 25px;
  height: 25px;
  border: 3px solid #ffffff;
  box-sizing: border-box;
  border-radius: 50%;
  border-top-color: #db0051;
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

export const SeeMoreBox = styled(FlexRow)`
  color: #db0051;
  font-size: 18px;
`;

export const SeeMoreText = styled.span`
  cursor: pointer;
  padding: 20px;
  font-size: 14px;
`;
