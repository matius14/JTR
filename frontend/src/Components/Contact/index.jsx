import { Button, TextField } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";


const ContactSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TitleContact = styled.h3`
    
`
const ContactGroup = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 50px

`
const FormContact = styled.form`
    display: flex;
    flex-direction: column;
`
const InstructionContact = styled.h5`
    
`
const Field = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
`
const LabelTextfield = styled.h5`
    
`

const FormImg = styled.img`
    width: 250px;
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
            <Button variant="contained">Enviar</Button>
        </ContactSection>
    )

}

export default Contact;