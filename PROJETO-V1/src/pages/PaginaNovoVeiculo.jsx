import { useState } from "react";
import MOCKAPI from "../service/ApiMockApi"; // Importa a API mockada
import { useNavigate } from "react-router-dom"; // Para redirecionamento
import Layout from "../components/Layout"; // Layout geral da página
import {
    Label,
    Input,
    FormGroup,
    Button,
    Select,
    ErrorMessage,
} from "../components/FormElements"; // Importando os componentes de estilo

const PaginaNovoVeiculo = () => {
    // Estado para armazenar os dados do veículo
    const [veiculo, setVeiculo] = useState({
        tipo: "",
        marca: "",
        modelo: "",
        ano: "",
        placa: "",
        cor: "",
        proprietario: "",
        matricula: "",
        status: "Permitido", // Inicializando com o status "Permitido"
    });

    const [loading, setLoading] = useState(false); // Estado para controlar o carregamento
    const [error, setError] = useState(null); // Estado para armazenar erros




    
    const navigate = useNavigate(); // Hook para redirecionamento após o sucesso

    // Função para lidar com mudanças nos campos do formulário
    const handleChange = (e) => {
        const { name, value } = e.target;
        setVeiculo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Função para enviar o formulário
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // Faz o POST do novo veículo
            await MOCKAPI.postVeiculo(veiculo);
            // Redireciona para a página de consulta após o sucesso
            navigate("/buscarveiculo");
        } catch (err) {
            setError("Erro ao adicionar o veículo. Tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <h1>Adicionar Novo Veículo</h1>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="tipo">Tipo</Label>
                    <Select
                        id="tipo"
                        name="tipo"
                        value={veiculo.tipo}
                        onChange={handleChange}
                    >
                        <option value="">Selecione o tipo...</option>
                        <option value="1">Carro</option>
                        <option value="2">Moto</option>
                        <option value="3">Caminhão</option>
                    </Select>
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="marca">Marca:</Label>
                    <Input
                        type="text"
                        id="marca"
                        name="marca"
                        value={veiculo.marca}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="modelo">Modelo:</Label>
                    <Input
                        type="text"
                        id="modelo"
                        name="modelo"
                        value={veiculo.modelo}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="ano">Ano:</Label>
                    <Input
                        type="text" // Tipo string
                        id="ano"
                        name="ano"
                        value={veiculo.ano}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="placa">Placa:</Label>
                    <Input
                        type="text"
                        id="placa"
                        name="placa"
                        value={veiculo.placa}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="cor">Cor:</Label>
                    <Input
                        type="text"
                        id="cor"
                        name="cor"
                        value={veiculo.cor}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="proprietario">Proprietário:</Label>
                    <Input
                        type="text"
                        id="proprietario"
                        name="proprietario"
                        value={veiculo.proprietario}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="matricula">Matrícula:</Label>
                    <Input
                        type="text"
                        id="matricula"
                        name="matricula"
                        value={veiculo.matricula}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="status">Status:</Label>
                    <Select
                        id="status"
                        name="status"
                        value={veiculo.status}
                        onChange={handleChange}
                        required
                    >
                        <option value="Permitido">Permitido</option>
                        <option value="Proibido">Proibido</option>
                    </Select>
                </FormGroup>
                <Button type="submit" disabled={loading}>
                    {loading ? "Adicionando..." : "Adicionar Veículo"}
                </Button>
            </form>
        </Layout>
    );
};

export default PaginaNovoVeiculo;
