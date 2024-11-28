import { Button, TextField } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";


const RecoveryPasswordSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 3rem;
    gap: 1.5rem;
`
const RecoveryPasswordTitle = styled.h2`
    

`
const RecoveryPasswordForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
`
const Field = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

`
const LabelTextfield = styled.h4`
    
    
`
const ButtonForm = styled(Button)`
    &.MuiButton-root{
        text-transform: none;
        align-self: flex-start;
        padding-left: 3rem;
        padding-right: 3rem;
        font-weight: bold;
    }

`

const RecoveryPassword = () =>{
    const [dataEmail, setDataEmail] = useState("");
    const [dataNumber, setDataNumber] = useState("");

    return(
        <RecoveryPasswordSection>
            <RecoveryPasswordTitle>Recuperacion de contraseña</RecoveryPasswordTitle>
            <RecoveryPasswordForm>
                    <Field>
                        <LabelTextfield>Correo de recuperacion:</LabelTextfield>
                        <TextField 
                            label="Ingrese su correo" 
                            fullWidth 
                            size="small"
                            value={dataEmail}
                            onChange={(e) => setDataEmail(e.target.value)}
                        />
                    </Field>
                    <Field>
                        <LabelTextfield>Numero celular de recuperacion:</LabelTextfield>
                        <TextField 
                            label="Ingrese su celular" 
                            fullWidth 
                            size="small"
                            value={dataNumber}
                            onChange={(e) => setDataNumber(e.target.value)}
                        />
                    </Field>
                    <ButtonForm variant="contained">Guardar</ButtonForm>
            </RecoveryPasswordForm>



        </RecoveryPasswordSection>

    );

}

export default RecoveryPassword;