import { Box, Button, TextField } from "@mui/material"
import styled from "styled-components"
import { useState } from 'react';




const CartSection = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2rem 3rem;
`

const CartProduct = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 70%;

`
const CartProductTitle = styled.h4`
    
`

const Product = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`

const ProductImg = styled.img`
    width: 125px;

`
const ContentProduct = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
`

const ProductTitle = styled.h4`
    
`

const ButtonProduct = styled.div`
    display: flex;
    justify-content: space-between;

`
const ButtonDelete = styled(Button)`
    &.MuiButton-root {
        text-transform: none; 
        font-weight: bold;
        padding: 0;
    }
`

const StyledBox = styled(Box)`
    align-items: center;
    

`

const StyledField = styled(TextField)`
    text-align: center;
    width: 50px;
    height: 20px;
    & .MuiInputBase-input {
        text-align: center;
    }

`


const CartPayment = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.4);;
    border-radius: 0.5rem;
    padding: 3rem 3rem;
    background-color: #FBFBFB;
    height: max-content;


`

const TitlePayment = styled.h3`
    


`

const CantProduct = styled.h4`
    

`
const CartButton = styled(Button)`
    &.MuiButton-root {
        text-transform: none; 
        font-weight: bold;
        padding-left: 2rem;
        padding-right: 2rem;
    }
`

const Total = styled.h4``


const Cart = () => {
    const [count, setCount] = useState(1);

    const handleIncrement = () => setCount((prev) => prev + 1);
    const handleDecrement = () => setCount((prev) => Math.max(1, prev - 1));



    return(
        <CartSection>
            <CartProduct>
                <CartProductTitle>Productos</CartProductTitle>
                <Product>
                    <ProductImg src="taco.jpg" alt="imagen del producto"></ProductImg>
                    <ContentProduct>
                        <ProductTitle>Tacos al pastor</ProductTitle>
                        <ButtonProduct>
                            <ButtonDelete>Eliminar</ButtonDelete>
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
                <Product>
                    <ProductImg src="taco.jpg" alt="imagen del producto"></ProductImg>
                    <ContentProduct>
                        <ProductTitle>Tacos al pastor</ProductTitle>
                        <ButtonProduct>
                            <ButtonDelete>Eliminar</ButtonDelete>
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
                <Product>
                    <ProductImg src="taco.jpg" alt="imagen del producto"></ProductImg>
                    <ContentProduct>
                        <ProductTitle>Tacos al pastor</ProductTitle>
                        <ButtonProduct>
                            <ButtonDelete>Eliminar</ButtonDelete>
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
                <Product>
                    <ProductImg src="taco.jpg" alt="imagen del producto"></ProductImg>
                    <ContentProduct>
                        <ProductTitle>Tacos al pastor</ProductTitle>
                        <ButtonProduct>
                            <ButtonDelete>Eliminar</ButtonDelete>
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
                <Product>
                    <ProductImg src="taco.jpg" alt="imagen del producto"></ProductImg>
                    <ContentProduct>
                        <ProductTitle>Tacos al pastor</ProductTitle>
                        <ButtonProduct>
                            <ButtonDelete>Eliminar</ButtonDelete>
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
                <CartButton variant="contained">Pagar</CartButton>
            </CartPayment>

        </CartSection>
    )

}

export default Cart;