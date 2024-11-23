// import styled from "styled-components";

// const ModalBackground = styled.div`
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background-color: rgba(0, 0, 0, 0.5);
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;

// const ModalContainer = styled.div`
//     background-color: white;
//     padding: 20px;
//     border-radius: 8px;
//     width: 300px;
//     text-align: center;
// `;

// const Title = styled.h1`
//     display: inline-block;
//     text-align: center;
//     margin-top: 10px;
// `;

// const TextoBotaoFechar = styled.p`
//     display: flex;
//     justify-content: flex-end;
// `;

// const BotaoFechar = styled.button`
//     background-color: transparent;
//     border: none;
//     font-size: 25px;
//     cursor: pointer;
// `;

// const Body = styled.div`
//     flex: 50%;
//     display: flex;
//     justify-content: center;
//     font-size: 1.7rem;
//     text-align: center;
// `;

// const Footer = styled.div`
//     flex: 20%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;

// const BotaoEnviar = styled.button`
//     padding: 10px;
//     margin: 10px;
//     background-color: ${({ theme }) => theme.colors.azulClaro};
//     color: white;
//     border: none;
//     border-radius: 10px;
//     cursor: pointer;

//     &:hover {
//         background-color: #0056b3;
//     }
// `;

// const BotaoCancelar = styled.button`
//     width: 150px;
//     height: 45px;
//     margin: 10px;
//     border: none;
//     background-color: red;
//     color: white;
//     border-radius: 8px;
//     font-size: 20px;
//     cursor: pointer;
//     z-index: 1000;
// `;

// const Modal = ({
//     setIsOpen,
//     title = "Título",
//     body,
//     BtnEnviar = "Enviar",
//     BtnCancel = "Cancelar",
// }) => {
//     return (
//         <ModalBackground onClick={() => setIsOpen(false)}>
//             <ModalContainer>
//                 <BotaoFechar onClick={() => setIsOpen(false)}>
//                     <TextoBotaoFechar>X</TextoBotaoFechar>
//                 </BotaoFechar>
//                 <Title>{title}</Title>
//                 <Body>{body}</Body>
//                 <Footer>
//                     <BotaoCancelar onClick={() => setIsOpen(false)}>
//                         {BtnCancel}
//                     </BotaoCancelar>
//                     <BotaoEnviar>{BtnEnviar}</BotaoEnviar>
//                 </Footer>
//             </ModalContainer>
//         </ModalBackground>
//     );
// };

// export default Modal;
import styled from "styled-components";

export const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Modal = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    text-align: center;
`;

export const ModalSendButton = styled.button`
    padding: 10px;
    margin: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

export const ModalCancelButton = styled(ModalSendButton)`
    background-color: #dc3545;
    &:hover {
        background-color: #c82333;
    }
`;

export const ModalSair = styled.div`
    text-align: right;
    cursor: pointer;
    color: red;
`;
