import requests

def consultar_marcas():
    url = "https://veiculos.fipe.org.br/api/veiculos/ConsultarMarcas"
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
    data = {
        "codigoTipoVeiculo": "1",
        "codigoTabelaReferencia": "315",
    }
    response = requests.post(url, headers=headers, data=data)
    return response.json()

def consultar_modelos_ano():
    url = "https://veiculos.fipe.org.br/api/veiculos/ConsultarModelosAtravesDoAno"
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
    data = {
        "codigoTipoVeiculo": "1",
        "codigoTabelaReferencia": "315",
        "codigoModelo": "1",
        "codigoMarca": "1",
        "ano": "1992-1",
        "codigoTipoCombustivel": "1",
        "anoModelo": "1992",
        "modeloCodigoExterno": "",
    }
    response = requests.post(url, headers=headers, data=data)
    return response.json()

def consultar_ano_modelo():
    url = "https://veiculos.fipe.org.br/api/veiculos/ConsultarAnoModelo"
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
    data = {
        "codigoTipoVeiculo": "1",
        "codigoTabelaReferencia": "315",
        "codigoModelo": "1",
        "codigoMarca": "1",
        "ano": "",
        "codigoTipoCombustivel": "",
        "anoModelo": "",
        "modeloCodigoExterno": "",
    }
    response = requests.post(url, headers=headers, data=data)
    return response.json()

def main():
    # Consulta as marcas
    marcas = consultar_marcas()
    print("Marcas:", marcas)

    # Consulta os modelos baseados no ano
    modelos_ano = consultar_modelos_ano()
    print("Modelos por Ano:", modelos_ano)

    # Consulta o ano do modelo
    ano_modelo = consultar_ano_modelo()
    print("Ano do Modelo:", ano_modelo)

if __name__ == "__main__":
    main()

# Marcas
# ['1', '2', '3', '4', '5', '189', '6', '207', '7', '8', '123', '238', '236', '10', '245', '161', '11', '136', '182', '12', '13', '14', '241', '15', '16', '246', '17', '147', '18', '19', '20', '249', '21', '149', '22', '190', '170', '199', '23', '153', '24', '240', '152', '214', '25', '26', '27', '208', '177', '28', '29', '154', '30', '31', '32', '171', '33', '34', '168', '127', '35', '140', '36', '37', '38', '211', '39', '40', '167', '156', '41', '42', '43', '44', '45', '46', '47', '185', '186', '48', '195', '49', '50', '51', '52', '247', '183', '157', '125', '54', '55', '165', '56', '57', '58', '59', '163', '120']

