import styled from "styled-components";

const CustomBackground = styled.div`
    position: relative;
    width: 671px;
    background: #d9d9d9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
`;

const BoxTitulo = styled.div`
    width: 100%;
    height: 8vh;
    background: #021d34;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    color: #ffffff;
`;

const Titulo = styled.h3`
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
`;

const BoxConteudo = styled.div`
    flex: 1;
    background: rgba(51, 183, 119, 0.2);
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 10px;
    border-radius: 10px;
`;

const Tabela = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr; /* Primeira coluna maior */
    grid-gap: 10px;
    width: 100%;
`;
const Linha = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #021d34;
    text-align: left;
    word-wrap: break-word; /* Quebra texto longo */
    word-break: break-word;
    padding: 5px; /* Espaçamento interno */
    border: 1px solid transparent; /* Auxilia na organização visual */

    /* Formatação para o rótulo em negrito */
    & strong {
        font-weight: 700;
    }
`;

const BoxStatus = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`;

const StatusLabel = styled.h3`
    font-weight: 700;
    font-size: 22.75px;
    line-height: 27px;
    color: #021d34;
`;

const StatusValue = styled.h1`
    font-weight: 700;
    font-size: 33.33px;
    line-height: 39px;
    color: #33b777;
    margin: 0;
`;

const InfoVeiculo = () => {
    return (
        <CustomBackground>
            <BoxTitulo>
                <Titulo>BRA0S17</Titulo>
                <Titulo>Icone</Titulo>
            </BoxTitulo>
            <BoxConteudo>
                <Tabela>
                    <Linha>
                        <strong>Tipo de veículo:</strong> Carro
                    </Linha>
                    <Linha>
                        <strong>Marca:</strong> FIAT
                    </Linha>
                    <Linha>
                        <strong>Modelo:</strong> PALIO ATTRA. BEST SELLER 1.0
                        EVO FLEX 5P
                    </Linha>
                    <Linha>
                        <strong>Ano:</strong> 2016 GASOLINA
                    </Linha>
                    <Linha>
                        <strong>Proprietário:</strong> José Francisco Pereira
                        dos Reis
                    </Linha>
                    <Linha>
                        <strong>Cor:</strong> Vermelho
                    </Linha>
                </Tabela>
                <BoxStatus>
                    <StatusLabel>Status</StatusLabel>
                    <StatusValue>PERMITIDO</StatusValue>
                </BoxStatus>
            </BoxConteudo>
        </CustomBackground>
    );
};

export default InfoVeiculo;
