import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url('login.png');
    background-size: cover;
`
const LoginContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    border: 1px solid rgba(0,0,0,0.4);
    border-radius: 10px;
    background-color: #FBFBFB;
    padding: 2rem;
`
const LoginSectionTitle = styled.h3`
    font-weight: bold;
`
const FormLogin = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
const Field = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
`
const LabelTextfield = styled.h5`

`
const LinkGroup = styled.div`
    display: flex;
    gap: 0.75rem;
    align-items: center;
`
const ButtonForm = styled(Button)`
    &.MuiButton-root{
        text-transform: none;
        font-weight: bold;
    }
`
const LinkForgot = styled(Link)`
    
`
const LinkRegister = styled(Link)`
    
`


const Login = () =>{
    const [dataEmail, setDataEmail] = useState("");
    const [dataPassword, setDataPassword] = useState("");

    return(
        <LoginSection>
            <LoginContent>
                <LoginSectionTitle>Iniciar sesion</LoginSectionTitle>
                <FormLogin>
                    <Field>
                        <LabelTextfield>Correo electronico:</LabelTextfield>
                        <TextField 
                            label="Ingrese su correo electronico" 
                            fullWidth 
                            size="small"
                            value={dataEmail}
                            onChange={(e) => setDataEmail(e.target.value)}
                        />
                    </Field>
                    <Field>
                        <LabelTextfield>Contraseña:</LabelTextfield>
                        <TextField 
                            label="Ingrese su contraseña" 
                            fullWidth 
                            size="small"
                            value={dataPassword}
                            onChange={(e) => setDataPassword(e.target.value)}
                        />
                    </Field>
                </FormLogin>
                <LinkGroup>
                    <ButtonForm variant='contained' component={Link} to="/" >Iniciar sesion</ButtonForm>
                    <LinkForgot>Olvidaste tu contraseña?</LinkForgot>
                    <LinkRegister to={'/register'}>No tienes cuenta?</LinkRegister>
                </LinkGroup>




            </LoginContent>
        </LoginSection>
    );


}

export default Login;