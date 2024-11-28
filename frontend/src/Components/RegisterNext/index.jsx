import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const RegisterNextSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url('login.png');
    background-size: cover;
`
const RegisterNextContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    border: 1px solid rgba(0,0,0,0.4);
    border-radius: 10px;
    background-color: #FBFBFB;
    padding: 2rem;
    width: 500px;
`
const RegisterNextSectionTitle = styled.h4`
    font-weight: bold;
`
const RegisterNextSectionSubtitle = styled.h5`
    font-weight: bold;
    
`
const RegisterNextForm = styled.form`
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
const ButtonForm = styled(Button)`
    &.MuiButton-root{
        text-transform: none;
        padding-left: 2rem;
        padding-right: 2rem;
        font-weight: bold;
        align-self: flex-start;
    }
`


const RegisterNext = () =>{
    const [dataEmail, setDataEmail] = useState("");
    const [dataPassword, setDataPassword] = useState("");
    const [dataEmailConfirm, setDataEmailConfirm] = useState("");

    return(
        <RegisterNextSection>
            <RegisterNextContent>
                <RegisterNextSectionTitle>Crear cuenta</RegisterNextSectionTitle>
                <RegisterNextSectionSubtitle>Informacion de la cuenta</RegisterNextSectionSubtitle>
                <RegisterNextForm>
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
                    <Field>
                        <LabelTextfield>Confirmar contraseña:</LabelTextfield>
                        <TextField 
                            label="Ingrese su contraseña" 
                            fullWidth 
                            size="small"
                            value={dataEmailConfirm}
                            onChange={(e) => setDataEmailConfirm(e.target.value)}
                        />
                    </Field>
                    <ButtonForm variant="contained" component={Link} to="/login">Crear cuenta</ButtonForm>
                </RegisterNextForm>
            </RegisterNextContent>
        </RegisterNextSection>



    );


}

export default RegisterNext;