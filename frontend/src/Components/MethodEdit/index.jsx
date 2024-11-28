import styled from "styled-components";
import { FormControl, MenuItem, Select,TextField, InputLabel, Button } from "@mui/material";
import { useState } from "react";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";


countries.registerLocale(enLocale);
const countryList = countries.getNames("en");


const MethodEditSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 3rem;
    gap: 1rem;
    align-items: start;
`
const MethodEditSectionTitle = styled.h2`

`
const MethodEditContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
const MethodEditCategory = styled.h4`
    
`
const MethodEditForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 70%;

`
const MethodEditType = styled.h4`
    
    border: 1px solid rgba(0,0,0,0.4);
    border-radius: 10px;
    background-color: #FBFBFB;
    padding: 0.5rem;
    text-align: center;
    
`
const MethodEditGroup = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: space-between;
`
const Field = styled.div`
    display: flex;
`
const ButtonEdit = styled(Button)`
    &.MuiButton-root {
        text-transform: none; 
        font-size: 1rem;
        font-weight: bold;
        padding-right: 4rem;
        padding-left: 4rem;
    }
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
            <MethodEditSectionTitle>Editar informacion de la tarjeta de credito</MethodEditSectionTitle>
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
                                sx={{width:'250px'}}

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
                                sx={{width:'225px'}}

                            />
                        </Field>
                        <Field>
                            <TextField 
                                label="Ingrese sus apellidos" 
                                fullWidth 
                                size="small"
                                value={dataLastName}
                                onChange={(e) => setDataLastName(e.target.value)}
                                sx={{width:'225px'}}

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
                                sx={{width:'225px'}}
                            />
                        </Field>
                        <FormControl fullWidth size="small" sx={{width:'225px'}}>
                            <InputLabel id="region-label">Region</InputLabel>
                            <Select
                                labelId="region-label"
                                id="demo-select-small"
                                value={dataCountry}
                                label='Region'
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
            <ButtonEdit variant="contained">Editar</ButtonEdit>





        </MethodEditSection>

    );

}


export default MethodEdit;