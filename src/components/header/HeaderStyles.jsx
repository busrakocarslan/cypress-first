import styled from "styled-components";

export const HeaderContainer = styled.div`
 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #4158D0;
background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
padding-top:1rem;
border-radius:15px;

`;
export const UserHeader = styled.h4`
  display: flex;
  font-size: 2rem;
  text-align: center;
  color: white;
  font-style: italic;
  letter-spacing:5px;
  background: inherit;
  margin-top: 0;
  margin-bottom: 0;
  `
export const MainHeader = styled.h2`


  margin-top: 0;
  font-size: 2rem;
`;

export const FormContainer = styled.form`


  display: flex;

  flex-wrap: wrap;
 
  justify-content: center;
  border: 2px solid white;
  border-radius: 3px;
  margin: 20px;
`;

export const FoodInput = styled.input`

  height: 3rem;
  width: 15rem;
  border: none;
  border-radius: 3px;

  text-indent: 10px;

  margin: 5px;
  font-size: 2rem;
`;

export const Button = styled.button`

 background-image: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);
  padding: 5px;

  height: 3rem;
  border: none;
  margin: 5px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 2rem;
 
  
  &:hover {
    font-size:1.8rem;
    transition: all 0.3s ease-in;
    
  }
`;

export const Select = styled.select`


  border-radius: 3px;
  margin: 5px;
  padding: 5px;
  height: 3rem;
  border: none;
  font-size: 2rem;
`;
