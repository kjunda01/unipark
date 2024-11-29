import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import {
    Label,
    Input,
    FormGroup,
    Button,
    Select,
    ErrorMessage,
} from "../components/FormElements";

import APIFIPE from "../service/ApiFIPE";
import MOCKAPI from "../service/ApiMockApi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PaginaNovoVeiculo = () => {
    const [veiculo, setVeiculo] = useState({
        tipo: "",
        marca: "",
        modelo: "",
        ano: "",
        placa: "",
        cor: "",
        proprietario: "",
        matricula: "",
        status: "",
    });

    const [marcas, setMarcas] = useState([]); // Marcas disponíveis
    const [modelos, setModelos] = useState([]); // Modelos disponíveis
    const [anos, setAnos] = useState([]); // Anos disponíveis
    const [loading, setLoading] = useState(false); // Estado de carregamento
    const [error, setError] = useState(null); // Para erros de API
    const [veiculoJSON, setVeiculoJSON] = useState({});

    const navigate = useNavigate(); // Hook para redirecionamento após sucesso

    // Função para atualizar os dados do formulário
    const handleChange = (e) => {
        const { name, value } = e.target;
        setVeiculo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Função para buscar marcas, modelos e anos com base no tipo de veículo
    const fetchDadosDinamicos = async (tipo) => {
        setLoading(true);
        setError(null);

        try {
            // Buscar as marcas para o tipo de veículo
            const marcasData = await APIFIPE.getMarcas(tipo);
            setMarcas(marcasData);

            // Limpa modelos e anos ao alterar o tipo de veículo
            setModelos([]);
            setAnos([]);

            // Se já houver uma marca selecionada, busca os modelos e anos
            if (veiculo.marca) {
                const modelosData = await APIFIPE.getModelos(
                    tipo,
                    veiculo.marca
                );
                const anosData = await APIFIPE.getAnos(
                    tipo,
                    veiculo.marca,
                    veiculo.modelo
                );
                setModelos(modelosData);
                setAnos(anosData);
            }
        } catch (err) {
            setError(`Erro ao carregar os dados: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    // UseEffect para carregar dados dinâmicos assim que o tipo ou marca for selecionado
    useEffect(() => {
        if (veiculo.tipo) {
            fetchDadosDinamicos(veiculo.tipo);
        }
    }, [veiculo.tipo, veiculo.marca, veiculo.modelo]);

    // Função para enviar os dados do veículo
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // Verifica se todos os campos estão preenchidos
        if (
            veiculoJSON.tipo &&
            veiculoJSON.marca &&
            veiculoJSON.modelo &&
            veiculoJSON.ano &&
            veiculoJSON.placa &&
            veiculoJSON.cor &&
            veiculoJSON.proprietario &&
            veiculoJSON.matricula &&
            veiculoJSON.status
        ) {
            try {
                let resultado = [];
                try {
                    resultado = await MOCKAPI.getVeiculoPorPlaca(
                        veiculoJSON.placa
                    );
                } catch (err) {
                    if (err.response) {
                        // Se o erro for um 404 (placa não encontrada), não faz log no console
                        if (err.response.status === 404) {
                            // Pode ser deixado em branco ou opcionalmente um log customizado
                        } else {
                            // Para outros erros, pode ser interessante mostrar no console
                            console.error(
                                "Erro inesperado ao buscar placa:",
                                err
                            );
                            setLoading(false);
                            toast.error(`Erro ao buscar placa: ${err.message}`);
                            return; // Interrompe o fluxo
                        }
                    } else {
                        // Se o erro for de outro tipo (ex: rede), loga normalmente
                        console.error(
                            "Erro ao tentar buscar veículo por placa:",
                            err
                        );
                        setLoading(false);
                        toast.error(`Erro ao buscar placa: ${err.message}`);
                        return; // Interrompe o fluxo
                    }
                }

                // Se a placa já estiver cadastrada
                if (resultado.length > 0) {
                    toast.error("Placa já cadastrada no sistema.");
                    setLoading(false);
                    return; // Interrompe o envio
                }

                // Se a placa não existir, realiza o cadastro
                const response = await MOCKAPI.postVeiculo(veiculoJSON);

                toast.success(
                    `Veículo "${veiculoJSON.placa}" adicionado com sucesso.`
                );
                navigate("/buscarveiculo");
            } catch (err) {
                console.error("Erro ao enviar os dados:", err);
                toast.error(`Erro ao enviar os dados: ${err.message}`);
                setLoading(false); // Desativa o loading
            }
        } else {
            toast.error("Por favor, preencha todos os campos.");
            setLoading(false); // Desativa o loading em caso de falha na validação
        }
    };

    // PEGA O TEXTO DO VALOR SELECIONADO PARA MANDAR PRO CADASTRO
    const atualizarVeiculo = (chave, event) => {
        const textoSelecionado =
            event.target.options[event.target.selectedIndex].text;

        setVeiculoJSON((valorAnterior) => ({
            ...valorAnterior,
            [chave]: textoSelecionado,
        }));
    };

    return (
        <Layout>
            <h1>Adicionar Novo Veículo</h1>

            <form onSubmit={handleSubmit}>
                {/* Tipo de veículo */}
                <FormGroup>
                    <Label htmlFor="tipo">Tipo</Label>
                    <Select
                        id="tipo"
                        name="tipo"
                        value={veiculo.tipo}
                        onChange={(event) => {
                            handleChange(event);
                            atualizarVeiculo("tipo", event);
                        }}
                    >
                        <option value="">Selecione o tipo...</option>
                        <option value="1">Carro</option>
                        <option value="2">Moto</option>
                        <option value="3">Caminhão</option>
                    </Select>
                </FormGroup>

                {/* Marca */}
                <FormGroup>
                    <Label htmlFor="marca">Marca</Label>
                    <Select
                        id="marca"
                        name="marca"
                        value={veiculo.marca}
                        onChange={(event) => {
                            handleChange(event);
                            atualizarVeiculo("marca", event);
                        }}
                        disabled={!marcas.length || loading}
                    >
                        <option value="">Selecione a marca...</option>
                        {loading ? (
                            <option>Carregando...</option>
                        ) : marcas.length > 0 ? (
                            marcas.map((marca) => (
                                <option key={marca.Value} value={marca.Value}>
                                    {marca.Label.toUpperCase()}
                                </option>
                            ))
                        ) : (
                            <option>Indisponível</option>
                        )}
                    </Select>
                </FormGroup>

                {/* Modelo */}
                <FormGroup>
                    <Label htmlFor="modelo">Modelo</Label>
                    <Select
                        id="modelo"
                        name="modelo"
                        value={veiculo.modelo}
                        onChange={(event) => {
                            handleChange(event);
                            atualizarVeiculo("modelo", event);
                        }}
                        disabled={!modelos.length || loading}
                    >
                        <option value="">Selecione o modelo...</option>
                        {loading ? (
                            <option>Carregando...</option>
                        ) : modelos.length > 0 ? (
                            modelos.map((modelo) => (
                                <option key={modelo.Value} value={modelo.Value}>
                                    {modelo.Label.toUpperCase()}
                                </option>
                            ))
                        ) : (
                            <option>Indisponível</option>
                        )}
                    </Select>
                </FormGroup>

                {/* Ano */}
                <FormGroup>
                    <Label htmlFor="ano">Ano</Label>
                    <Select
                        id="ano"
                        name="ano"
                        value={veiculo.ano}
                        onChange={(event) => {
                            handleChange(event);
                            atualizarVeiculo("ano", event);
                        }}
                        disabled={!anos.length || loading}
                    >
                        <option value="">Selecione o ano...</option>
                        {loading ? (
                            <option>Carregando...</option>
                        ) : anos.length > 0 ? (
                            anos.map((ano) => (
                                <option key={ano.Value} value={ano.Value}>
                                    {ano.Label.toUpperCase()}
                                </option>
                            ))
                        ) : (
                            <option>Indisponível</option>
                        )}
                    </Select>
                </FormGroup>

                {/* Placa */}
                <FormGroup>
                    <Label htmlFor="placa">Placa</Label>
                    <Input
                        type="text"
                        id="placa"
                        name="placa"
                        value={veiculo.placa}
                        onChange={(event) => {
                            handleChange(event);
                            setVeiculoJSON((valorAnterior) => ({
                                ...valorAnterior,
                                ["placa"]: event.target.value,
                            }));
                        }}
                    />
                </FormGroup>

                {/* Cor */}
                <FormGroup>
                    <Label htmlFor="cor">Cor</Label>
                    <Input
                        type="text"
                        id="cor"
                        name="cor"
                        value={veiculo.cor}
                        onChange={(event) => {
                            handleChange(event);
                            setVeiculoJSON((valorAnterior) => ({
                                ...valorAnterior,
                                ["cor"]: event.target.value,
                            }));
                        }}
                    />
                </FormGroup>

                {/* Proprietário */}
                <FormGroup>
                    <Label htmlFor="proprietario">Proprietário</Label>
                    <Input
                        type="text"
                        id="proprietario"
                        name="proprietario"
                        value={veiculo.proprietario}
                        onChange={(event) => {
                            handleChange(event);
                            setVeiculoJSON((valorAnterior) => ({
                                ...valorAnterior,
                                ["proprietario"]: event.target.value,
                            }));
                        }}
                    />
                </FormGroup>

                {/* Matrícula */}
                <FormGroup>
                    <Label htmlFor="matricula">Matrícula</Label>
                    <Input
                        type="text"
                        id="matricula"
                        name="matricula"
                        value={veiculo.matricula}
                        onChange={(event) => {
                            handleChange(event);
                            setVeiculoJSON((valorAnterior) => ({
                                ...valorAnterior,
                                ["matricula"]: event.target.value,
                            }));
                        }}
                    />
                </FormGroup>

                {/* Status */}
                <FormGroup>
                    <Label htmlFor="status">Status</Label>
                    <Select
                        id="status"
                        name="status"
                        value={veiculo.status}
                        onChange={(event) => {
                            handleChange(event);
                            setVeiculoJSON((valorAnterior) => ({
                                ...valorAnterior,
                                ["status"]: event.target.value,
                            }));
                        }}
                    >
                        <option value="">Selecione o status...</option>
                        <option value="Permitido">Permitido</option>
                        <option value="Proibido">Proibido</option>
                    </Select>
                </FormGroup>

                <Button type="submit" disabled={loading}>
                    {loading ? "Adicionando..." : "Adicionar Veículo"}
                </Button>
            </form>
            <ToastContainer autoClose={3000} position="bottom-left" />
        </Layout>
    );
};

export default PaginaNovoVeiculo;
