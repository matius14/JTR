import styled from "styled-components";
import { Link } from "react-router-dom";


const TableListSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 3rem;
`
const TableListSectionTitle = styled.h3`
    
`
const TableContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`
const Table = styled(Link)`
    display: flex;
    gap: 1rem;
`
const TableImg = styled.img`
    width: 180px;
`
const TableInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`
const TableTitle = styled.h4`
    
    color: #000000;
    
`
const TableCapacity = styled.h4`
    
    color: #000000;
`
const TableAvaility = styled.h4`
    
    color: #000000;
`


const TableList = () =>{
    return(
        <TableListSection>
            <TableListSectionTitle>Reservacion de la mesa</TableListSectionTitle>
            <TableContainer>
                <Table>
                    <TableImg src="mesa.png"/>
                    <TableInfo>
                        <TableTitle>Mesa 6</TableTitle>
                        <TableCapacity>Capacidad 5 personas</TableCapacity>
                        <TableAvaility>Disponibilidad</TableAvaility>
                    </TableInfo>
                </Table>
                <Table>
                    <TableImg src="mesa.png"/>
                    <TableInfo>
                        <TableTitle>Mesa 6</TableTitle>
                        <TableCapacity>Capacidad 5 personas</TableCapacity>
                        <TableAvaility>Disponibilidad</TableAvaility>
                    </TableInfo>
                </Table>
                <Table>
                    <TableImg src="mesa.png"/>
                    <TableInfo>
                        <TableTitle>Mesa 6</TableTitle>
                        <TableCapacity>Capacidad 5 personas</TableCapacity>
                        <TableAvaility>Disponibilidad</TableAvaility>
                    </TableInfo>
                </Table>
                <Table>
                    <TableImg src="mesa.png"/>
                    <TableInfo>
                        <TableTitle>Mesa 6</TableTitle>
                        <TableCapacity>Capacidad 5 personas</TableCapacity>
                        <TableAvaility>Disponibilidad</TableAvaility>
                    </TableInfo>
                </Table>
                <Table>
                    <TableImg src="mesa.png"/>
                    <TableInfo>
                        <TableTitle>Mesa 6</TableTitle>
                        <TableCapacity>Capacidad 5 personas</TableCapacity>
                        <TableAvaility>Disponibilidad</TableAvaility>
                    </TableInfo>
                </Table>
                <Table>
                    <TableImg src="mesa.png"/>
                    <TableInfo>
                        <TableTitle>Mesa 6</TableTitle>
                        <TableCapacity>Capacidad 5 personas</TableCapacity>
                        <TableAvaility>Disponibilidad</TableAvaility>
                    </TableInfo>
                </Table>
                <Table>
                    <TableImg src="mesa.png"/>
                    <TableInfo>
                        <TableTitle>Mesa 6</TableTitle>
                        <TableCapacity>Capacidad 5 personas</TableCapacity>
                        <TableAvaility>Disponibilidad</TableAvaility>
                    </TableInfo>
                </Table>
            </TableContainer>
        </TableListSection>
    );
}

export default TableList;