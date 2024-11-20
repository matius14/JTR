import { Box, Button, TextField } from "@mui/material"
import styled from "styled-components"
import { useState } from 'react';




const CartSection = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 7rem;
`

const CartProduct = styled.div`
    

`

const Product = styled.div`
    display: flex;
    flex-direction: row;
`

const ProductImg = styled.img`
    width: 100px;

`
const ContentProduct = styled.div`
    
`

const ProductTitle = styled.h4`
    
`

const ButtonProduct = styled.div`
    display: flex;
    justify-content: space-around;

`

const StyledBox = styled(Box)`
    display: flex;
    align-items: center;

`

const StyledField = styled(TextField)`
    text-align: center;
    width: 50px;
    height: 20px;

`


const CartPayment = styled.div`
    


`

const TitlePayment = styled.h3`
    


`

const CantProduct = styled.h4`
    

`

const Total = styled.h4``


const Cart = () => {
    const [count, setCount] = useState(1);

    const handleIncrement = () => setCount((prev) => prev + 1);
    const handleDecrement = () => setCount((prev) => Math.max(0, prev - 1));



    return(
        <CartSection>
            <CartProduct>
                <Product>
                    <ProductImg src="taco.jpg" alt="imagen del producto"></ProductImg>
                    <ContentProduct>
                        <ProductTitle>Tacos al pastor</ProductTitle>
                        <ButtonProduct>
                            <Button>Eliminar</Button>
                            <StyledBox>
                                <Button onClick={handleDecrement}>-</Button>
                                <StyledField 
                                    value={count} 
                                    size="small" 
                                    disabled 
                                />
                                <Button onClick={handleIncrement}>+</Button>
                            </StyledBox>
                        </ButtonProduct>
                    </ContentProduct>
                </Product>
            </CartProduct>

            <CartPayment>
                <TitlePayment>Resumen</TitlePayment>
                <CantProduct>Producto(4)</CantProduct>
                <Total>Total: $323.212</Total> 
                <Button variant="contained">Pagar</Button>
            </CartPayment>

        </CartSection>
    )

}

export default Cart;