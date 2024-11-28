import { Button, TextField,  } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";


const ChangePasswordSection =  styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 3rem;
    gap: 1.5rem;
`
const ChangePasswordTitle = styled.h2`
    
`
const ChangePasswordForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
`
const Field = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 50%;
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



const ChangePassword = () =>{

    const [dataPassCurrent, setDataPassCurrent] = useState("");
    const [dataPassNew, setDataPassNew] = useState("")
    const [dataPassConfirm, setDataPassConfirm] = useState("")

    return(
        <ChangePasswordSection>
            <ChangePasswordTitle>Cambiar contraseña</ChangePasswordTitle>
            <ChangePasswordForm>
                    <Field>
                        <LabelTextfield>Contraseña actual:</LabelTextfield>
                        <TextField 
                            label="Ingrese su contraseña actual" 
                            fullWidth 
                            size="small"
                            value={dataPassCurrent}
                            onChange={(e) => setDataPassCurrent(e.target.value)}
                        />
                    </Field>
                    <Field>
                        <LabelTextfield>Contraseña nueva:</LabelTextfield>
                        <TextField 
                            label="Ingrese su contraseña nueva" 
                            fullWidth 
                            size="small"
                            value={dataPassNew}
                            onChange={(e) => setDataPassNew(e.target.value)}
                        />
                    </Field>
                    <Field>
                        <LabelTextfield>Confirmar contraseña:</LabelTextfield>
                        <TextField 
                            label="Ingrese su contraseña nueva" 
                            fullWidth 
                            size="small"
                            value={dataPassConfirm}
                            onChange={(e) => setDataPassConfirm(e.target.value)}
                        />
                    </Field>
                    <ButtonForm variant="contained">Cambiar</ButtonForm>
            </ChangePasswordForm>


        </ChangePasswordSection>

    );

}

export default ChangePassword;