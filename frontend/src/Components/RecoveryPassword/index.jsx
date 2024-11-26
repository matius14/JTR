import { Button, TextField } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";


const RecoveryPasswordSection = styled.div`
    display: flex;
`
const RecoveryPasswordTitle = styled.h2`
    
`
const RecoveryPasswordForm = styled.form`

`
const Field = styled.div`
    display: flex;
`
const LabelTextfield = styled.h5`
    
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
                    <Button variant="contained">Guardar</Button>
            </RecoveryPasswordForm>



        </RecoveryPasswordSection>

    );

}

export default RecoveryPassword;