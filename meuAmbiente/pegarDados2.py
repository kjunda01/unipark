import requests

def consultar_valor_veiculo(codigo_tipo_veiculo, codigo_tabela_referencia, codigo_modelo, codigo_marca, ano_modelo, tipo_veiculo, tipo_combustivel):
    url = "https://veiculos.fipe.org.br/api/veiculos/ConsultarValorComTodosParametros"

    headers = {
        "Host": "veiculos.fipe.org.br",
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:132.0) Gecko/20100101 Firefox/132.0",
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "Accept-Language": "pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Requested-With": "XMLHttpRequest",
        "DNT": "1",
        "Connection": "keep-alive",
        "Referer": "https://veiculos.fipe.org.br/",
        "Cookie": "ROUTEID=.5",
    }

    # Parâmetros extraídos do HAR
    data = {
        "codigoTipoVeiculo": codigo_tipo_veiculo,
        "codigoTabelaReferencia": codigo_tabela_referencia,
        "codigoMarca": codigo_marca,
        "codigoModelo": codigo_modelo,
        "anoModelo": ano_modelo,
        "codigoTipoCombustivel": tipo_combustivel,  # Exemplo: 1 para Gasolina
        "tipoVeiculo": tipo_veiculo,  # Exemplo: 'carro'
        "modeloCodigoExterno": "",
        "tipoConsulta": "tradicional",
    }

    response = requests.post(url, headers=headers, data=data)

    if response.status_code == 200:
        # Se a resposta for bem-sucedida, imprime o resultado
        return response.json()
    else:
        print(f"Erro na requisição: {response.status_code}")
        return None

# Exemplo de chamada da função com parâmetros extraídos do HAR
codigo_tipo_veiculo = 1  # Tipo de veículo (1 para carro)
codigo_tabela_referencia = 315
codigo_modelo = 1  # Código do modelo
codigo_marca = 1   # Código da marca
ano_modelo = 1992  # Ano do modelo
tipo_veiculo = "carro"  # Tipo do veículo
tipo_combustivel = 1  # Tipo de combustível (1 para Gasolina)

# Realiza a consulta com os parâmetros fornecidos
resultado = consultar_valor_veiculo(codigo_tipo_veiculo, codigo_tabela_referencia, codigo_modelo, codigo_marca, ano_modelo, tipo_veiculo, tipo_combustivel)

if resultado:
    print("Resultado da consulta:", resultado)
