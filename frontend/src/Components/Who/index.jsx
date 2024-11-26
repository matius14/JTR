import styled from "styled-components";

const WhoSection = styled.div`

`
const WhoSectionTitle = styled.h2`
    
`
const WhoSectionDescription = styled.h2`
    
`
const WhoMission = styled.div`
    display: flex;
`
const WhoMissionTitle = styled.h2`
    
`
const WhoMissionDescription = styled.h2`
    
`
const WhoVision = styled.div`
    display: flex;
`
const WhoVisionTitle = styled.h2`
    
`
const WhoVisionDescription = styled.h2`
    
`

const Who = () =>{
    return(
        <WhoSection>
            <WhoSectionTitle>Quienes somos</WhoSectionTitle>
            <WhoSectionDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequaA </WhoSectionDescription>
            <WhoMission>
                <WhoMissionTitle>Mision</WhoMissionTitle>
                <WhoMissionDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequaA </WhoMissionDescription>
            </WhoMission>
            <WhoVision>
                <WhoVisionTitle>Vision</WhoVisionTitle>
                <WhoVisionDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequaA </WhoVisionDescription>
            </WhoVision>
        </WhoSection>
    );




}


export default Who;