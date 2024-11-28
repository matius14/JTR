import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";



const RegisterSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url('login.png');
    background-size: cover;
`
const RegisterContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    border: 1px solid rgba(0,0,0,0.4);
    border-radius: 10px;
    background-color: #FBFBFB;
    padding: 2rem;
    width: 500px;
`
const RegisterSectionTitle = styled.h4`
    font-weight: bold;
`
const RegisterSectionSubtitle = styled.h5`
    font-weight: bold;
    
`
const RegisterForm = styled.div`
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
const ButtonNext = styled(Button)`
    &.MuiButton-root{
        text-transform: none;
        padding-left: 2rem;
        padding-right: 2rem;
        font-weight: bold;
        align-self: flex-start;
    }
`






const Register = () =>{
    const [dataName, setDataName] = useState("")
    const [dataLastName, setDataLastName] = useState("")
    const [dataBirthdate, setDataBirthdate] = useState("")
    const [dataAddress, setDataAddress] = useState("")
    const [dataPhone, setDataPhone] = useState("")

    return(
        <RegisterSection>
            <RegisterContent>
                <RegisterSectionTitle>Crear cuenta</RegisterSectionTitle>
                <RegisterSectionSubtitle>Informacion persona</RegisterSectionSubtitle>
                <RegisterForm>
                    <Field>
                        <LabelTextfield>Nombre:</LabelTextfield>
                        <TextField 
                            label="Ingrese su correo electronico" 
                            fullWidth 
                            size="small"
                            value={dataName}
                            onChange={(e) => setDataName(e.target.value)}
                        />
                    </Field>
                    <Field>
                        <LabelTextfield>Apellido:</LabelTextfield>
                        <TextField 
                            label="Ingrese su correo electronico" 
                            fullWidth 
                            size="small"
                            value={dataLastName}
                            onChange={(e) => setDataLastName(e.target.value)}
                        />
                    </Field>
                    <Field>
                        <LabelTextfield>Fecha de nacimiento:</LabelTextfield>
                        <TextField 
                            label="Ingrese su correo electronico" 
                            fullWidth 
                            size="small"
                            value={dataBirthdate}
                            onChange={(e) => setDataBirthdate(e.target.value)}
                        />
                    </Field>
                    <Field>
                        <LabelTextfield>Direccion:</LabelTextfield>
                        <TextField 
                            label="Ingrese su correo electronico" 
                            fullWidth 
                            size="small"
                            value={dataAddress}
                            onChange={(e) => setDataAddress(e.target.value)}
                        />
                    </Field>
                    <Field>
                        <LabelTextfield>Celular:</LabelTextfield>
                        <TextField 
                            label="Ingrese su correo electronico" 
                            fullWidth 
                            size="small"
                            value={dataPhone}
                            onChange={(e) => setDataPhone(e.target.value)}
                        />
                    </Field>
                    <ButtonNext variant='contained' component={Link} to='/next-register'>Siguiente</ButtonNext>
                </RegisterForm>



            </RegisterContent>
        </RegisterSection>



    );



}


export default Register;