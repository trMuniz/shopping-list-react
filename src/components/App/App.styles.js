import styled from "styled-components";
import bg from "../../assets/background.png";

export const AppWrapper = styled.div`
    background-color: #f8f5ec;
    background-image: url(${bg});
    height: 100vh;
    background-size: cover;
    backgound-position: center center;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AppContainer = styled.div`
    width: 734px;
    height: 574px;
    background-color: #ffffff;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    border-radius: 10px;
`;