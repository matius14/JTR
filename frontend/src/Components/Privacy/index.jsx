import styled from "styled-components";


const PrivacySection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2rem 3rem;
`
const PrivacySectionTitle = styled.h3`
    
`
const PrivacySectionDescription = styled.h5`
    
    
`


const Privacy = () =>{
    return(
        <PrivacySection>
            <PrivacySectionTitle>Politica de privacidad</PrivacySectionTitle>
                <PrivacySectionDescription>1. Compromiso con la SeguridadJTR se compromete a garantizar la seguridad de los datos personales de sus usuarios y a proteger su información contra el acceso no autorizado, pérdida, alteración o divulgación indebida. Implementamos medidas y prácticas de seguridad conformes a las normas y mejores prácticas de la industria.
                    2. Protección de Datos PersonalesJTR recopila y gestiona datos personales de manera responsable y de acuerdo con la normativa aplicable sobre protección de datos. Todos los datos de los usuarios serán tratados con la máxima confidencialidad y utilizados únicamente para los fines expresamente autorizados.
                    3. Seguridad en las Transacciones en LíneaPara proteger las transacciones en línea, JTR utiliza cifrado SSL (Secure Socket Layer), lo que garantiza que todos los datos transmitidos entre el usuario y el sitio web estén protegidos. Esto incluye los datos de pago y cualquier otra información confidencial que el usuario proporcione durante el proceso de pedido o reserva.
                    4. Control de Acceso y AutenticaciónEl acceso a la información sensible dentro de nuestros sistemas está limitado a personal autorizado y debidamente capacitado. Cada miembro del equipo cuenta con credenciales únicas, y el acceso a los sistemas está restringido por niveles de privilegios, según las responsabilidades y necesidades de cada rol.
                    5. Almacenamiento y Retención de DatosJTR almacena la información del usuario en sistemas seguros, y solo la retiene por el tiempo necesario para cumplir con los fines para los que fue recopilada o según lo exija la ley. Pasado este tiempo, los datos son eliminados de manera segura.
                    6. Monitoreo y Detección de AmenazasContamos con sistemas de monitoreo de seguridad que identifican y previenen posibles amenazas en tiempo real. Las actividades en nuestra infraestructura se supervisan continuamente, y cualquier actividad sospechosa es investigada y resuelta de acuerdo con nuestros protocolos de seguridad.
                    7. Gestión de Incidentes de SeguridadEn caso de detectar un incidente de seguridad que pueda comprometer la información de los usuarios, JTR actuará de inmediato para contener y remediar la situación. Nos comprometemos a notificar a los usuarios afectados y a las autoridades correspondientes cuando sea necesario, proporcionando detalles sobre las medidas tomadas para mitigar cualquier riesgo.
                    8. Actualizaciones de SeguridadJTR mantiene actualizados sus sistemas y herramientas para protegerse contra vulnerabilidades emergentes. Realizamos auditorías de seguridad periódicas y aplicamos parches y mejoras en cuanto se detectan riesgos potenciales.
                    9. Concienciación y Capacitación del PersonalTodo el personal de JTR recibe capacitación regular en temas de seguridad y protección de datos. Esto asegura que cada miembro del equipo comprenda su rol y responsabilidad en la protección de la información de los usuarios y en el mantenimiento de un entorno seguro.
                    10. Contacto para Incidencias de SeguridadSi algún usuario detecta una posible vulnerabilidad o tiene preguntas sobre nuestras políticas de seguridad, puede ponerse en contacto con nuestro equipo de seguridad en [correo electrónico o teléfono de contacto].
                </PrivacySectionDescription>
        </PrivacySection>
    );

}


export default Privacy;