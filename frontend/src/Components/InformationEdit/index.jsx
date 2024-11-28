import { Button, TextField } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";


const InformationEditSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 3rem;
`
const InformationEditSectionTitle = styled.h2`
    
`
const FormInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`
const Field = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 0.5rem;
`
const LabelTextfield = styled.h5`
    
    

`
const ButtonForm = styled(Button)`
    &.MuiButton-root {
        text-transform: none; 
        font-size: 1rem;
        font-weight: bold;
        padding-right: 4rem;
        padding-left: 4rem;
        align-self: flex-start;
    }
`


const InformationEdit = () =>{

    const [dataName, setDataName] = useState("");
    const [dataLastName, setDataLastName] = useState("");
    const [dataPhone, setDataPhone] = useState("");
    const [dataEmail, setDataEmail] = useState("");
    const [dataAddress, setDataAddress] = useState("");

    return(
        <InformationEditSection>
            <InformationEditSectionTitle>Editar informacion personal</InformationEditSectionTitle>
            <FormInfo>
                <Field>
                    <LabelTextfield>Nombre:</LabelTextfield>
                    <TextField 
                        label="Ingrese su nombres" 
                        fullWidth 
                        size="small"
                        value={dataName}
                        onChange={(e) => setDataName(e.target.value)}
                    />
                </Field>
                <Field>
                    <LabelTextfield>Apellido:</LabelTextfield>
                    <TextField 
                        label="Ingrese su apellidos" 
                        fullWidth 
                        size="small"
                        value={dataLastName}
                        onChange={(e) => setDataLastName(e.target.value)}
                    />
                </Field>
                <Field>
                    <LabelTextfield>Celular:</LabelTextfield>
                    <TextField 
                        label="Ingrese su celular" 
                        fullWidth 
                        size="small"
                        value={dataPhone}
                        onChange={(e) => setDataPhone(e.target.value)}
                    />
                </Field>
                <Field>
                    <LabelTextfield>Correo electronico:</LabelTextfield>
                    <TextField 
                        label="Ingrese su correo" 
                        fullWidth 
                        size="small"
                        value={dataEmail}
                        onChange={(e) => setDataEmail(e.target.value)}
                    />
                </Field>
                <Field>
                    <LabelTextfield>Direccion:</LabelTextfield>
                    <TextField 
                        label="Ingrese su direccion" 
                        fullWidth 
                        size="small"
                        value={dataAddress}
                        onChange={(e) => setDataAddress(e.target.value)}
                    />
                </Field>
                <ButtonForm variant="contained">Editar</ButtonForm>
            </FormInfo>
        </InformationEditSection>


    );





}

export default InformationEdit;