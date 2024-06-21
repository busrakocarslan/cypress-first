import styled from "styled-components";

export const AboutContainer = styled.div`
  
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  height: calc(100% - 100px);
  background-color: #D9AFD9;
background-image: linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%);

 
  line-height: 2;
  span {
    color: orange;
    font-family: "Girassol", sans-serif;
    font-size: 3rem;
  }
`;

export const InfoContainer = styled.div`
  text-align: center;
  margin: 0 10px;
  max-width: 1000px;
  border: 10px solid orangered;
  padding: 25px;
  border-radius: 5px;
  a {
    color: orangered;
    font-size:1.5rem;
    margin:1rem
  }
`;

export const HeaderContainer = styled.div`
  text-align: center;
`;

export const StyledImage = styled.img`
  width: 100px;
  margin-bottom: 2rem;
`;
