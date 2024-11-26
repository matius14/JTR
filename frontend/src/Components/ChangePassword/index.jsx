import { Button, TextField,  } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";


const ChangePasswordSection =  styled.div`
    display: flex;
`
const ChangePasswordTitle = styled.h5`
    
`
const ChangePasswordForm = styled.form`
    
`
const Field = styled.div`
    display: flex;
`
const LabelTextfield = styled.h2`
    
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
                    <Button variant="contained">Cambiar</Button>
            </ChangePasswordForm>


        </ChangePasswordSection>

    );

}

export default ChangePassword;