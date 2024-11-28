import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const PaySection = styled.div`
    display: flex;
    flex-direction: row;
    gap: 3rem;
    padding: 0 1.25rem 0 3rem;
    justify-content: space-between;
`
const PaySelect = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1.5rem;
    max-width: 700px;
`
const PaySelectTitle = styled.h3`
    margin-top: 3rem;
`
const PaySelectOption = styled.div`
    display: flex;
`
const FormControlOption = styled(FormControlLabel)`
    border: 1px solid #000000;
    border-radius: 10px;
    padding: 0.5rem;
    &.MuiFormControlLabel-root{
        margin: 0;
        margin-bottom: 1rem;

    }
`
const PaySummary = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0,0,0,0.4);
    border-radius: 10px;
    padding: 2rem 4rem 0 2rem;
    gap: 2rem;
    background-color: #FBFBFB;

`
const PaySummaryTitle = styled.h3`
    
`
const PayProductCant = styled.h4`
    
    

`
const PayTotalTitle = styled.h4`
    
    

`
const PayTotal = styled.h4`
    

`
const ButtonForm = styled(Button)`
    &.MuiButton-root {
        text-transform: none; 
        font-size: 1rem;
        font-weight: bold;
        padding-right: 4rem;
        padding-left: 4rem;
        align-self: flex-start;
        margin-bottom: 3rem;
    }
`

const Pay = () =>{
    const [dataPay, setDataPay] = useState("");


    return(
        <PaySection>
            <PaySelect>
                <PaySelectTitle>Eliga el metodo de pago</PaySelectTitle>
                <PaySelectOption>
                    <FormControl fullWidth>
                        <RadioGroup
                            defaultValue="females"
                        >
                            <FormControlOption value="females" control={<Radio />} label={<><FontAwesomeIcon icon={faCreditCard} style={{ marginRight: "10px" }} />4000 1234 5678 9010</>} />
                            <FormControlOption value="female" control={<Radio />} label={<><FontAwesomeIcon icon={faCreditCard} style={{ marginRight: "10px" }} />4000 1234 5678 9010</>} />
                            <FormControlOption value="femalez" control={<Radio />} label={<><FontAwesomeIcon icon={faCreditCard} style={{ marginRight: "10px" }} />4000 1234 5678 9010</>} />
                        </RadioGroup>
                    </FormControl>
                </PaySelectOption>
                <ButtonForm variant="contained">confirmar pago</ButtonForm>
            </PaySelect>
            <PaySummary>
                <PaySummaryTitle>Compras realizadas</PaySummaryTitle>
                <Divider sx={{width:'250px'}}/>
                <PayProductCant>Producto(5)</PayProductCant>
                <PayTotalTitle>A pagar:</PayTotalTitle>
                <PayTotal>$120000</PayTotal>
            </PaySummary>


        </PaySection>


    );

}

export default Pay;