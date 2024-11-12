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
        "codigoTipoVeiculo": codigo_tipo_veiculo
    }

    headers = headers_padrao

    # Realiza a requisição POST
    response = requests.post(url, data=payload, headers=headers)

    if response.status_code == 200:
        return response.json()  # Retorna o JSON da resposta
    else:
        print("Erro ao consultar marcas.")
        return None

# Função para consultar os modelos de veículos
def obter_modelos(codigo_tabela_referencia, codigo_tipo_veiculo, codigo_marca):
    url = "https://veiculos.fipe.org.br/api/veiculos/ConsultarModelos"
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
        print("Erro ao consultar modelos.")
        return None

# Função para consultar o ano e modelo do veículo
def obter_ano_modelo(codigo_tabela_referencia, codigo_tipo_veiculo, codigo_marca, codigo_modelo):
    url = "https://veiculos.fipe.org.br/api/veiculos/ConsultarAnoModelo"
    payload = {
        "codigoTabelaReferencia": codigo_tabela_referencia,
        "codigoTipoVeiculo": codigo_tipo_veiculo,
        "codigoMarca": codigo_marca,
        "codigoModelo": codigo_modelo
    }
    headers = headers_padrao

    # Realiza a requisição POST
    response = requests.post(url, data=payload, headers=headers)

    if response.status_code == 200:
        return response.json()  # Retorna o JSON da resposta
    else:
        print("Erro ao consultar ano e modelo.")
        return None

# Função para consultar modelos através do ano
def obter_modelos_ano(codigo_tabela_referencia, codigo_tipo_veiculo, codigo_marca, codigo_modelo, ano, codigo_tipo_combustivel, ano_modelo):
    url = "https://veiculos.fipe.org.br/api/veiculos/ConsultarModelosAtravesDoAno"
    payload = {
        "codigoTabelaReferencia": codigo_tabela_referencia,
        "codigoTipoVeiculo": codigo_tipo_veiculo,
        "codigoMarca": codigo_marca,
        "codigoModelo": codigo_modelo,
        "ano": ano,
        "codigoTipoCombustivel": codigo_tipo_combustivel,
        "anoModelo": ano_modelo
    }
    headers = headers_padrao

    # Realiza a requisição POST
    response = requests.post(url, data=payload, headers=headers)

    if response.status_code == 200:
        return response.json()  # Retorna o JSON da resposta
    else:
        print("Erro ao consultar modelos através do ano.")
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

# Consultando os modelos
modelos = obter_modelos(codigo_tabela_referencia, codigo_tipo_veiculo, codigo_marca)

# Consultando o ano e modelo
ano_modelo = obter_ano_modelo(codigo_tabela_referencia, codigo_tipo_veiculo, codigo_marca, codigo_modelo)

# Consultando os modelos através do ano
modelos_ano = obter_modelos_ano(codigo_tabela_referencia, codigo_tipo_veiculo, codigo_marca, codigo_modelo, ano, codigo_tipo_combustivel, ano_modelo)


# Retorna o JSON da resposta
if marcas:
    print(marcas)  # Exibe o JSON completo
    print()
    print()
    print()
    print(modelos)  # Exibe o JSON completo
    print()
    print()
    print()
    print(ano_modelo)  # Exibe o JSON completo
    print()
    print()
    print()
    print(modelos_ano)  # Exibe o JSON completo
else:
    print("Nenhuma marca encontrada.")
