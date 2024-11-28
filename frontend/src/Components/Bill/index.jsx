import { Button, Divider } from "@mui/material";
import styled from "styled-components";


const BillSection = styled.div`
    display: flex;
    padding-left: 2rem;
    justify-content: space-around;
    
`
const BillContent = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0,0,0,0.4);
    border-radius: 10px;
    padding: 3rem 1rem 2rem 1rem;
    gap: 1rem;
`
const BillInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
`
const BillLogo = styled.img`
    width: 75px;
`
const BillInfoCompany = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const BillName = styled.h4`
    font-weight: bold;
`
const BillAddress = styled.h4`
    
`
const BillNit = styled.h4`
    
`
const BillInfoManager = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const BillNameManager = styled.h4`
    
`
const BillPhone = styled.h4`
    
    
`
const BillDateExpedition = styled.h4`
    
    
`
const BillValue = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`
const BillValueTitleCategory = styled.div`
    display: flex;
    font-weight: bold;
    justify-content: space-between;
`
const BillValueTitleProduct = styled.h4`
    
`
const BillValueTitleUnit = styled.h4`
    
`
const BillValueTitleCant = styled.h4`
    
`
const BillValueTitleTotal = styled.h4`
    
`
const BillProduct = styled.div`
    display: flex;
    flex-direction: column;
`
const BillProductValue = styled.div`
    display: flex;
    flex-direction: column;
`
const BillValueName = styled.h4`
    
    
`
const BillValuePrice = styled.div`
    display: flex;
    gap: 2.75rem;
    justify-content: flex-end;
    
`
const BillValueUnit = styled.h4`
    
`
const BillValueCant = styled.h4`

`
const BillValueTotal = styled.h4`
    
`
const BillProductTotal = styled.div`
    display: flex;
    justify-content: space-between;
    
`
const BillProductTotalTitle = styled.h4`
    
`
const BillProductTotalValue = styled.h4`
    
`
const BillTax = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`
const BillTaxitle = styled.h4`
    font-weight: bold;
    align-self: center;
    
`
const BillTaxitleCategory = styled.div`
    display: flex;
    font-weight: bold;
    justify-content: space-between;
`
const BillTaxTitleType = styled.h4`
    
`
const BillTaxTitleBuy = styled.h4`
    
`
const BillTaxTitleBase = styled.h4`
    
`
const BillTaxTitleImp = styled.h4`
    
`
const BillTaxRate = styled.div`
    display: flex;
    justify-content: space-between;
`
const BillTaxTypeValue = styled.h4`
    
`
const BillTaxBuyValue = styled.h4`
    
`
const BillTaxBaseValue = styled.h4`
    
`
const BillTaxImpValue = styled.h4`
    
`

const BillTaxTotal = styled.div`
    display: flex;
    justify-content: space-between;
    

`
const BillTaxTotalTitle = styled.h4`
    font-weight: bold;
`
const BillTaxTotalBuy = styled.h4`
    
`
const BillTaxTotalBase = styled.h4`
    
`
const BillTaxTotalImp = styled.h4`
    
`


const BillData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

`
const BillDataTitle = styled.h4`
    
    
`
const BillDataNumber = styled.h4`
    
    
`
const BillDataDate = styled.h4`
    
    
`
const BillPrint = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid rgba(0,0,0,0.4);
    border-radius: 10px;
    padding: 2rem 3rem;
`
const ButtonPrint = styled(Button)`
    &.MuiButton-root{
        text-transform: none;
        padding-left: 4rem;
        padding-right: 4rem;
        font-weight: bold;
    }
`
const ButtonCancel = styled(Button)`
    &.MuiButton-root{
        text-transform: none;
        padding-left: 4rem;
        padding-right: 4rem;
        font-weight: bold;
    }
`


const Bill = () =>{
    return(
        <BillSection>
            <BillContent>
                <BillInfo>
                    <BillLogo src='Logo.png'/>
                    <BillInfoCompany>
                        <BillName>JTR</BillName>
                        <BillAddress>JTR LA CALI, Cra 4 #11-39</BillAddress>
                        <BillNit>Nit. 849.324.244</BillNit>
                    </BillInfoCompany>
                    <BillInfoManager>
                        <BillNameManager>Gerente: CARLOS AGUDELO</BillNameManager>
                        <BillPhone>Telefonos: 234555</BillPhone>
                        <BillDateExpedition>Fecha de expedicion: 12/04/2003</BillDateExpedition>
                    </BillInfoManager>
                </BillInfo>
                <Divider/>
                <BillValue>
                    <BillValueTitleCategory>
                        <BillValueTitleProduct>Producto</BillValueTitleProduct>
                        <BillValueTitleUnit>Vr.Unit</BillValueTitleUnit>
                        <BillValueTitleCant>Cant</BillValueTitleCant>
                        <BillValueTitleTotal>Vr.Total</BillValueTitleTotal>
                    </BillValueTitleCategory>
                    <BillProduct>
                        <BillProductValue>
                            <BillValueName>Tacos al pastor</BillValueName>
                            <BillValuePrice>
                                <BillValueUnit>2600</BillValueUnit>
                                <BillValueCant>2</BillValueCant>
                                <BillValueTotal>5200</BillValueTotal>
                            </BillValuePrice>
                        </BillProductValue>
                        <BillProductValue>
                            <BillValueName>Tacos al pastor</BillValueName>
                            <BillValuePrice>
                                <BillValueUnit>2600</BillValueUnit>
                                <BillValueCant>1</BillValueCant>
                                <BillValueTotal>5200</BillValueTotal>
                            </BillValuePrice>
                        </BillProductValue>
                        <BillProductValue>
                            <BillValueName>Tacos al pastor</BillValueName>
                            <BillValuePrice>
                                <BillValueUnit>2600</BillValueUnit>
                                <BillValueCant>1</BillValueCant>
                                <BillValueTotal>5200</BillValueTotal>
                            </BillValuePrice>
                        </BillProductValue>
                    </BillProduct>
                    <BillProductTotal>
                        <BillProductTotalTitle>TOTAL</BillProductTotalTitle>
                        <BillProductTotalValue>24800</BillProductTotalValue>
                    </BillProductTotal>
                </BillValue>
                <Divider/>
                <BillTax>
                    <BillTaxitle>Impuestos</BillTaxitle>
                    <BillTaxitleCategory>
                        <BillTaxTitleType>Tipo</BillTaxTitleType>
                        <BillTaxTitleBuy>Compra</BillTaxTitleBuy>
                        <BillTaxTitleBase>Base/Imp</BillTaxTitleBase>
                        <BillTaxTitleImp>Impst</BillTaxTitleImp>
                    </BillTaxitleCategory>
                    <BillTaxRate>
                        <BillTaxTypeValue>D-19%</BillTaxTypeValue>
                        <BillTaxBuyValue>24800</BillTaxBuyValue>
                        <BillTaxBaseValue>23288</BillTaxBaseValue>
                        <BillTaxImpValue>4712</BillTaxImpValue>
                    </BillTaxRate>
                    <BillTaxTotal>
                        <BillTaxTotalTitle>TOTAL</BillTaxTotalTitle>
                        <BillTaxTotalBuy>24800</BillTaxTotalBuy>
                        <BillTaxTotalBase>23288</BillTaxTotalBase>
                        <BillTaxTotalImp>4712</BillTaxTotalImp>
                    </BillTaxTotal>
                </BillTax>
                <Divider/>
                <BillData>
                    <BillDataTitle>FACTURA ELECTRONICA DE VENTA</BillDataTitle>
                    <BillDataNumber>1N43-000002430</BillDataNumber>
                    <BillDataDate>10/11/2024 2:54pm</BillDataDate>
                </BillData>
            </BillContent>
            <BillPrint>
                <ButtonPrint variant="contained">Imprimir</ButtonPrint>
                <ButtonCancel variant="contained">Cancelar</ButtonCancel>
            </BillPrint>
        </BillSection>
    );

}

export default Bill;