import { Button, TextField } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";


const ContactSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 3rem;
    gap: 1rem
`

const TitleContact = styled.h2`
    
    font-weight: bold;
    
`
const ContactGroup = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 50px;

`
const FormContact = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`
const InstructionContact = styled.h4`
    
`
const Field = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    gap: 0.25rem;
`
const LabelTextfield = styled.h5`
    font-family:'Inter';
    
`

const FormImg = styled.img`
    width: 250px;
`

const ButtonContact = styled(Button)`
    &.MuiButton-root {
        text-transform: none; 
        padding-left: 4rem;
        padding-right: 4rem;
        align-items: center;
    }
`


const Contact = () =>{
    const [dataName, setDataName] = useState("");
    const [dataPhone, setDataPhone] = useState("");
    const [dataEmail, setDataEmail] = useState("");
    const [dataAffair, setDataAffair] = useState("");


    return(
        <ContactSection>
            <TitleContact>Contactanos</TitleContact>
            <ContactGroup>
                <FormContact>
                    <InstructionContact>Por favor, ingrese sus datos para que podamos ponernos en contacto con usted lo antes posible.</InstructionContact>
                    <Field>
                        <LabelTextfield>Nombre:</LabelTextfield>
                        <TextField 
                            label="Ingrese su nombre" 
                            fullWidth 
                            size="small"
                            value={dataName}
                            onChange={(e) => setDataName(e.target.value)}
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
                            label="Ingrese su correo electronico" 
                            fullWidth 
                            size="small"
                            value={dataEmail}
                            onChange={(e) => setDataEmail(e.target.value)}
                        />
                    </Field>
                    <Field>
                        <LabelTextfield>Asunto:</LabelTextfield>
                        <TextField 
                            label="Ingrese el asunto" fullWidth size="small"
                            multiline 
                            value={dataAffair}
                            onChange={(e) => setDataAffair(e.target.value)}
                        />
                    </Field>
                </FormContact>
                <FormImg src="contact_image.png" alt="imagen del telefono"/>
            </ContactGroup>
            <ButtonContact variant="contained">Enviar</ButtonContact>
        </ContactSection>
    )

}

export default Contact;