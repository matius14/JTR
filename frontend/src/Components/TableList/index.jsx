import styled from "styled-components";



const TableListSection = styled.div`
    display: flex;
`
const TableListSectionTitle = styled.h2`
    
`
const TableContainer = styled.div`
    display: flex;
`
const Table = styled.div`
    
`
const TableImg = styled.img`
    width: 100px;
`
const TableInfo = styled.div`
    display: flex;
`
const TableTitle = styled.h5`
    
`
const TableCapacity = styled.h5`
    
`
const TableAvaility = styled.h5`
    
`


const TableList = () =>{
    return(
        <TableListSection>
            <TableListSectionTitle>Reservacion de la mesa</TableListSectionTitle>
            <TableContainer>
                <Table>
                    <TableImg src="taco.jpg"/>
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