import { Button } from "@mui/material";
import styled from "styled-components";

const TableSection = styled.div`
    display: flex;
`
const TableInfo = styled.div`
    display: flex;
`
const TableImg = styled.img`
    width: 100px;
`
const TableTitleDescription = styled.h3`
    
`
const TableDescription = styled.h4`
    
`
const TableCart = styled.div`
    display: flex;
`
const TableCartTitle = styled.h3`
    
`
const TableCartPrice = styled.h4`
    
`
const TableCartAvaility = styled.h4`
    
`
const TableCartCapacity = styled.h4`
    
`

const Table = () =>{

    return(
        <TableSection>
            <TableInfo>
                <TableImg src="taco.jpg"/>
                <TableTitleDescription>Descripcion</TableTitleDescription>
                <TableDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequaA </TableDescription>
            </TableInfo>
            <TableCart>
                <TableCartTitle>Mesa 6</TableCartTitle>
                <TableCartPrice>$14000</TableCartPrice>
                <TableCartAvaility>Disponibilidad</TableCartAvaility>
                <TableCartCapacity>Capacidad: 6 personas</TableCartCapacity>
                <Button variant="contained">Agregar al carrito</Button>
            </TableCart>
        </TableSection>

    );



}

export default Table;