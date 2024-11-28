import { Button } from "@mui/material";
import styled from "styled-components";

const TableSection = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
`
const TableInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: min-content;
    gap: 1rem;
`
const TableImg = styled.img`
    width: 400px;
`
const TableTitleDescription = styled.h2`
    
`
const TableDescription = styled.h4`
    
`
const TableCart = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0,0,0,0.4);
    border-radius: 10px;
    background-color: #FBFBFB;
    padding: 1rem 2rem 3rem;
    gap: 2rem;
    height: max-content;

`
const TableCartTitle = styled.h3`
    

`
const TableCartPrice = styled.h4`
    

`
const TableCartAvaility = styled.h4`
    
   
`
const TableCartCapacity = styled.h4`
    
  
`
const ButtonCart = styled(Button)`
    &.MuiButton-root{
        text-transform: none;
        font-weight: bold;
    }
`

const Table = () =>{

    return(
        <TableSection>
            <TableInfo>
                <TableImg src="mesa.png"/>
                <TableTitleDescription>Descripcion</TableTitleDescription>
                <TableDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequaA </TableDescription>
            </TableInfo>
            <TableCart>
                <TableCartTitle>Mesa 6</TableCartTitle>
                <TableCartPrice>$14000</TableCartPrice>
                <TableCartAvaility>Disponibilidad</TableCartAvaility>
                <TableCartCapacity>Capacidad: 6 personas</TableCartCapacity>
                <ButtonCart variant="contained">Agregar al carrito</ButtonCart>
            </TableCart>
        </TableSection>

    );



}

export default Table;