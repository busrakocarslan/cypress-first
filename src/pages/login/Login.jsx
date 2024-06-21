
import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledImg,StyledInput } from './LoginStyles'
import meal from "../../assets/meal2.svg"


const Login = () => {
  const Navigate = useNavigate()
  const [username, setUsername] = useState('You')
  const user= {
    username: `${username}`,
  }
  const loginSubmit  = (e) => {
    e.preventDefault()
    
    Navigate("/home")
    sessionStorage.setItem("user",JSON.stringify(user))
  }
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />
        <Header data-test='loginHeader'>
          {`Intercontinental `}Recipe
        </Header>
        <StyledForm onSubmit={loginSubmit}>
          <StyledInput data-test='loginName' type="text" placeholder="Username" name="username" onChange={(e)=>setUsername(e.target.value)} required />
          <StyledInput data-test='loginPass' type="password" placeholder="Password" required />
          <StyledButton data-test='loginSubmit' type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  )
}

export default Login