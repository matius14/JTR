import styled from "styled-components";
import { FormControl, MenuItem, Select,TextField, InputLabel, Button } from "@mui/material";
import { useState } from "react";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";


countries.registerLocale(enLocale);
const countryList = countries.getNames("en");


const MethodEditSection = styled.div`
    display: flex;
`
const MethodEditSectionTitle = styled.h2`

`
const MethodEditContainer = styled.div`
    display: flex;
`
const MethodEditCategory = styled.h5`
    
`
const MethodEditForm = styled.div`
    display: flex;
`
const MethodEditType = styled.h2`
    
`
const MethodEditGroup = styled.div`
    display: flex;
`
const Field = styled.div`
    display: flex;
`


const MethodEdit = () =>{
    
    const [dataNumber, setDataNumber] = useState("");
    const [dataDate, setDataDate] = useState("");
    const [dataCVV, setDataCVV] = useState("");
    const [dataName, setDataName] = useState("");
    const [dataLastName, setDataLastName] = useState("");
    const [dataZipCode, setDataZipCode] = useState("");
    const [dataCountry, setDataCountry] = useState("");


    return(
        <MethodEditSection>
            <MethodEditSectionTitle>Agregar una nueva tarjeta de credito</MethodEditSectionTitle>
            <MethodEditContainer>
                <MethodEditCategory>Metodo de pago: visa</MethodEditCategory>
                <MethodEditForm>
                    <MethodEditType>Credito/Debito</MethodEditType>
                    <MethodEditGroup>
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
                    </MethodEditGroup>
                    <MethodEditGroup>
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
                    </MethodEditGroup>
                    <MethodEditGroup>
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
                    </MethodEditGroup>
                </MethodEditForm>
            </MethodEditContainer>
            <Button variant="contained">Agregar</Button>





        </MethodEditSection>

    );

}


export default MethodEdit;