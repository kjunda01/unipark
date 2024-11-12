import requests

headers_padrao = {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Requested-With": "XMLHttpRequest",
        "Origin": "https://veiculos.fipe.org.br",
    }

# Função para consultar as marcas de veículos
def obter_marcas(codigo_tabela_referencia, codigo_tipo_veiculo):
    url = "https://veiculos.fipe.org.br/api/veiculos/ConsultarMarcas"
    payload = {
        "codigoTabelaReferencia": codigo_tabela_referencia,
        "codigoTipoVeiculo": codigo_tipo_veiculo,
        "codigoMarca": codigo_marca
    }

    headers = headers_padrao

    # Realiza a requisição POST
    response = requests.post(url, data=payload, headers=headers)

    if response.status_code == 200:
        return response.json()  # Retorna o JSON da resposta
    else:
        print("Erro ao consultar marcas.")
        return None

# Defina os parâmetros
codigo_tabela_referencia = 315  # Tabela de referência padrão
codigo_tipo_veiculo = 3  # Caminhões
codigo_marca = 102  # Código da marca
codigo_modelo = 3120  # Código do modelo
ano = "2002-3"  # Ano do modelo e tipo de combustível
codigo_tipo_combustivel = 3  # Tipo de combustível
ano_modelo = "2002"  # Ano do modelo

# Consultando as marcas
marcas = obter_marcas(codigo_tabela_referencia, codigo_tipo_veiculo)

# Retorna o JSON da resposta
if marcas:
    print(marcas)  # Exibe o JSON completo
else:
    print("Nenhuma marca encontrada.")



