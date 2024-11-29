import styled from "styled-components";
import StatusBadge from "./StatusBadge";
import Actions from "./Actions"; // Vamos ver esse componente abaixo

const TableWrapper = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;

    thead {
        background-color: #043d6c;
        color: white;

        th {
            padding: 10px;
            text-align: left;
            font-weight: bold;
        }
    }

    tbody {
        tr {
            &:nth-child(even) {
                background-color: #f9f9f9;
            }

            &:hover {
                background-color: #f1f1f1;
            }
        }

        td {
            padding: 10px;
            font-size: 14px;
            text-align: left;
        }
    }
`;

const Table = ({ veiculos, onEdit, onDelete }) => {
    return (
        <TableWrapper>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tipo</th>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Ano</th>
                    <th>Placa</th>
                    <th>Cor</th>
                    <th>Proprietário</th>
                    <th>Matrícula</th>
                    <th>Status</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {veiculos.map((veiculo) => (
                    <tr key={veiculo.id}>
                        <td>{veiculo.id}</td>
                        <td>{veiculo.tipo}</td>
                        <td>{veiculo.marca}</td>
                        <td>{veiculo.modelo}</td>
                        <td>{veiculo.ano}</td>
                        <td>{veiculo.placa}</td>
                        <td>{veiculo.cor}</td>
                        <td>{veiculo.proprietario}</td>
                        <td>{veiculo.matricula}</td>
                        <td>
                            <StatusBadge
                                status={
                                    veiculo.status
                                        ? veiculo.status.toLowerCase()
                                        : "indefinido"
                                }
                            >
                                {veiculo.status
                                    ? veiculo.status.toUpperCase()
                                    : "INDEFINIDO"}
                            </StatusBadge>
                        </td>
                        <td>
                            <Actions
                                veiculo={veiculo}
                                onEdit={onEdit}
                                onDelete={onDelete}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </TableWrapper>
    );
};

export default Table;
