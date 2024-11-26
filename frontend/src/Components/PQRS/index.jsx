import { FormControl, MenuItem, Select,TextField, InputLabel, Button } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";



const PQRSSection = styled.div`
    display: flex;
`
const PQRSTitle = styled.h2`
    
`
const PQRSGroup = styled.div`
    
`
const FormPQRS = styled.form`
    
`
const PQRSInstruction = styled.h2`
    
` 
const Field = styled.div`
    display: flex;
`
const LabelTextfield = styled.h5`
    
`


const PQRS = () =>{

    const [dataName, setDataName] = useState("");
    const [dataPhone, setDataPhone] = useState("");
    const [dataEmail, setDataEmail] = useState("");
    const [dataType, setDataType] = useState("");
    const [dataNumber, setDataNumber] = useState("");
    const [dataExperience, setDataExperience] = useState("");
    const [dataFollow, setDataFollow] = useState("");




    return(
        <PQRSSection>
            <PQRSTitle>PQRS</PQRSTitle>
            <PQRSGroup>
                <FormPQRS>
                    <PQRSInstruction>Por favor, ingrese sus datos para registrar su PQRS</PQRSInstruction>
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
                            type="number"
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
                        <LabelTextfield>Tipo de peticion:</LabelTextfield>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Tipo de peticion</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={dataType}
                                label="Escoga una opcion"
                                onChange={(e) => setDataType(e.target.value)}
                            >
                                <MenuItem value="Petición">Peticion</MenuItem>
                                <MenuItem value="Reclamo">Reclamo</MenuItem>
                                <MenuItem value="Queja">Queja</MenuItem>
                                <MenuItem value="Sugerencia">Sugerencia</MenuItem>
                            </Select>
                        </FormControl>
                    </Field>
                    <Field>
                        <LabelTextfield>Numero de pedido o de reserva:</LabelTextfield>
                        <TextField 
                            label="Ingrese el numero" 
                            fullWidth 
                            size="small"
                            value={dataNumber}
                            onChange={(e) => setDataNumber(e.target.value)}
                        />
                    </Field>
                    <Field>
                        <LabelTextfield>Describa su experiencia y detalles relacionados con su solicitud:</LabelTextfield>
                        <TextField 
                            label="Ingrese su experiencia" 
                            fullWidth 
                            size="small"
                            value={dataExperience}
                            onChange={(e) => setDataExperience(e.target.value)}
                        />
                    </Field>
                    <Field>
                        <LabelTextfield>¿Desea que un representante se comunique con usted para dar seguimiento a su solicitud?</LabelTextfield>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={dataFollow}
                                label="Escoga una opcion"
                                onChange={(e) => setDataFollow(e.target.value)}
                            >
                                <MenuItem value="si">si</MenuItem>
                                <MenuItem value="no">no</MenuItem>
                            </Select>
                        </FormControl>
                    </Field>
                            
                    
                </FormPQRS>
            </PQRSGroup>
            <Button variant="contained">Enviar</Button>

        </PQRSSection>

    );



}

export default PQRS;