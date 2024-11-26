import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const PaySection = styled.div`
    display: flex;
`
const PaySelect = styled.div`
    display: flex;
`
const PaySelectTitle = styled.h4`

`
const PaySelectOption = styled.div`
    display: flex;
`
const PaySelectContent = styled.div`
    display: flex;
`

const Pay = () =>{
    const [dataPay, setDataPay] = useState("");


    return(
        <PaySection>
            <PaySelect>
                <PaySelectTitle>Eliga el metodo de pago</PaySelectTitle>
                <PaySelectOption>
                    <PaySelectContent>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="females"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="females" control={<Radio />} label={<><FontAwesomeIcon icon={faCreditCard} style={{ marginRight: "10px" }} /> Visa</>} />
                                <FormControlLabel value="female" control={<Radio />} label={<><FontAwesomeIcon icon={faCreditCard} style={{ marginRight: "10px" }} /> Visa</>} />
                                <FormControlLabel value="femalez" control={<Radio />} label={<><FontAwesomeIcon icon={faCreditCard} style={{ marginRight: "10px" }} /> Visa</>} />
                            </RadioGroup>
                        </FormControl>
                    </PaySelectContent>
                </PaySelectOption>
                <Button variant="contained">confirmar pago</Button>


            </PaySelect>



        </PaySection>


    );

}

export default Pay;