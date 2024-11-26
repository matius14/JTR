import styled from "styled-components";
import { FormControl, MenuItem, Select,TextField, InputLabel, Button } from "@mui/material";
import { useState } from "react";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";


countries.registerLocale(enLocale);
const countryList = countries.getNames("en");


const MethodAddSection = styled.div`
    display: flex;
`
const MethodAddSectionTitle = styled.h2`

`
const MethodAddContainer = styled.div`
    display: flex;
`
const MethodAddCategory = styled.h5`
    
`
const MethodAddForm = styled.div`
    display: flex;
`
const MethodAddType = styled.h2`
    
`
const MethodAddGroup = styled.div`
    display: flex;
`
const Field = styled.div`
    display: flex;
`


const MethodAdd = () =>{
    
    const [dataNumber, setDataNumber] = useState("");
    const [dataDate, setDataDate] = useState("");
    const [dataCVV, setDataCVV] = useState("");
    const [dataName, setDataName] = useState("");
    const [dataLastName, setDataLastName] = useState("");
    const [dataZipCode, setDataZipCode] = useState("");
    const [dataCountry, setDataCountry] = useState("");


    return(
        <MethodAddSection>
            <MethodAddSectionTitle>Agregar una nueva tarjeta de credito</MethodAddSectionTitle>
            <MethodAddContainer>
                <MethodAddCategory>Metodo de pago: visa</MethodAddCategory>
                <MethodAddForm>
                    <MethodAddType>Credito/Debito</MethodAddType>
                    <MethodAddGroup>
                        <Field>
                            <TextField 
                                label="Ingrese su numero de tarjeta" 
                                fullWidth 
                                size="small"
                                value={dataNumber}
                                onChange={(e) => setDataNumber(e.target.value)}
                            />
                        </Field>
                        <Field>
                            <TextField 
                                label="MM/AA" 
                                fullWidth 
                                size="small"
                                value={dataDate}
                                onChange={(e) => setDataDate(e.target.value)}
                            />
                        </Field>
                        <Field>
                            <TextField 
                                label="CVV" 
                                fullWidth 
                                size="small"
                                value={dataCVV}
                                onChange={(e) => setDataCVV(e.target.value)}
                            />
                        </Field>
                    </MethodAddGroup>
                    <MethodAddGroup>
                        <Field>
                            <TextField 
                                label="Ingrese sus nombres" 
                                fullWidth 
                                size="small"
                                value={dataName}
                                onChange={(e) => setDataName(e.target.value)}
                            />
                        </Field>
                        <Field>
                            <TextField 
                                label="Ingrese sus apellidos" 
                                fullWidth 
                                size="small"
                                value={dataLastName}
                                onChange={(e) => setDataLastName(e.target.value)}
                            />
                        </Field>
                    </MethodAddGroup>
                    <MethodAddGroup>
                        <Field>
                            <TextField 
                                label="Codigo postal" 
                                fullWidth 
                                size="small"
                                value={dataZipCode}
                                onChange={(e) => setDataZipCode(e.target.value)}
                            />
                        </Field>
                        <FormControl fullWidth>
                            <InputLabel id="country-select-label">Región</InputLabel>
                            <Select
                                labelId="country-select-label"
                                id="country-select"
                                value={dataCountry}
                                label="País o región"
                                onChange={(e) => setDataCountry(e.target.value)}
                            >
                                {Object.entries(countryList).map(([code, name]) => (
                                <MenuItem key={code} value={name}>
                                    {name}
                                </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </MethodAddGroup>
                </MethodAddForm>
            </MethodAddContainer>
            <Button variant="contained">Agregar</Button>





        </MethodAddSection>

    );

}


export default MethodAdd;