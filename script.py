import requests
import json
import os
import time

def carregar_dados_existentes(arquivo):
    if os.path.exists(arquivo):
        with open(arquivo, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {"marcas": []}

def salvar_dados(arquivo, dados):
    with open(arquivo, 'w', encoding='utf-8') as f:
        json.dump(dados, f, ensure_ascii=False, indent=4)

def obter_marcas(tipo_veiculo, token=None):
    url = f"https://parallelum.com.br/fipe/api/v1/{tipo_veiculo}/marcas"
    headers = {}
    
    if token:
        headers['Authorization'] = f'Bearer {token}'

    print(f"Obtendo marcas para {tipo_veiculo}...")
    response = requests.get(url, headers=headers)
    
    if response.status_code != 200:
        print(f"Erro ao obter marcas: {response.status_code}")
        return []
    
    return response.json()

def obter_modelos(tipo_veiculo, codigo_marca, token=None):
    url = f"https://parallelum.com.br/fipe/api/v1/{tipo_veiculo}/marcas/{codigo_marca}/modelos"
    headers = {}

    if token:
        headers['Authorization'] = f'Bearer {token}'

    print(f"Obtendo modelos para a marca código {codigo_marca}...")
    response = requests.get(url, headers=headers)

    if response.status_code != 200:
        print(f"Erro ao obter modelos: {response.status_code}")
        return {}
    
    return response.json()

def obter_anos(tipo_veiculo, codigo_marca, codigo_modelo, token=None):
    url = f"https://parallelum.com.br/fipe/api/v1/{tipo_veiculo}/marcas/{codigo_marca}/modelos/{codigo_modelo}/anos"
    headers = {}

    if token:
        headers['Authorization'] = f'Bearer {token}'

    print(f"Obtendo anos para o modelo código {codigo_modelo} da marca código {codigo_marca}...")
    response = requests.get(url, headers=headers)

    if response.status_code != 200:
        print(f"Erro ao obter anos: {response.status_code}")
        return {}
    
    return response.json()

def obter_valor(tipo_veiculo, codigo_marca, codigo_modelo, ano_codigo, token=None):
    url = f"https://parallelum.com.br/fipe/api/v1/{tipo_veiculo}/marcas/{codigo_marca}/modelos/{codigo_modelo}/anos/{ano_codigo}"
    headers = {}

    if token:
        headers['Authorization'] = f'Bearer {token}'

    print(f"Obtendo valor para o modelo código {codigo_modelo}, ano código {ano_codigo}...")
    response = requests.get(url, headers=headers)

    if response.status_code != 200:
        print(f"Erro ao obter valor: {response.status_code}")
        return {}
    
    return response.json()

def main():
    tipo_veiculo = "carros"  # Altere para "motos" ou "caminhoes" conforme necessário
    arquivo_resultado = 'resultado_fipe_completo.json'
    token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1NmM1YTY5NC1iODA4LTRhMzktOTllZC0wZjgyYjczNDI3ZDciLCJlbWFpbCI6InNpbnZhbGp1bmlvcmxtc0BnbWFpbC5jb20iLCJpYXQiOjE3MzA3NjgzMzJ9.5OTeQkvvWinEAaZwuOiE7wvX4souucNBsT2qnf91U0I"  # Substitua pelo seu token real

    # Carregar dados existentes
    dados_existentes = carregar_dados_existentes(arquivo_resultado)
    marcas_existentes = {marca['marca']['codigo']: marca for marca in dados_existentes['marcas']}
    print(f"Dados já existentes carregados: {len(marcas_existentes)} marcas.")

    # Montar o JSON
    resultado = dados_existentes

    # Obter todas as marcas
    marcas = obter_marcas(tipo_veiculo, token)
    
    if isinstance(marcas, list):
        print(f"Total de marcas obtidas: {len(marcas)}\n")
    else:
        print(f"Formato inesperado ao obter marcas: {marcas}")
        return

    # Iterar por cada marca
    for marca in marcas:
        if isinstance(marca, dict):
            codigo_marca = marca['codigo']
        else:
            print(f"Formato inesperado de marca: {marca}")
            continue

        # Verificar se a marca já foi processada
        if codigo_marca in marcas_existentes:
            print(f"  Marca {marca['nome']} (Código: {codigo_marca}) já processada.")

        modelos = obter_modelos(tipo_veiculo, codigo_marca, token)

        # Armazenar modelos da marca
        modelos_da_marca = {
            "marca": marca,
            "modelos": []
        }

        if 'modelos' in modelos and modelos['modelos']:
            print(f"  Marca: {marca['nome']} (Código: {codigo_marca})")
            # Iterar por cada modelo
            for modelo in modelos['modelos']:
                if isinstance(modelo, dict):
                    codigo_modelo = modelo['codigo']
                else:
                    print(f"Formato inesperado de modelo: {modelo}")
                    continue

                anos = obter_anos(tipo_veiculo, codigo_marca, codigo_modelo, token)

                # Armazenar anos do modelo
                anos_do_modelo = {
                    "modelo": modelo,
                    "anos": []
                }

            # Se anos estiver vazio, tente obter novamente
            tentativas = 0
            while (not anos or isinstance(anos, list) and not anos) and tentativas < 3:
                print(f"    Nenhum ano disponível para o modelo {modelo['nome']}. Tentando novamente...")
                time.sleep(2)  # Esperar um pouco antes de tentar novamente
                anos = obter_anos(tipo_veiculo, codigo_marca, codigo_modelo, token)
                tentativas += 1

            # Verifique se a resposta é uma lista e contém anos
            if isinstance(anos, dict) and 'anos' in anos and anos['anos']:
                print(f"    Modelo: {modelo['nome']} (Código: {codigo_modelo})")
                # Iterar por cada ano
                for ano in anos['anos']:
                    if isinstance(ano, dict):
                        ano_codigo = ano['codigo']
                    else:
                        print(f"Formato inesperado de ano: {ano}")
                        continue

                    valor = obter_valor(tipo_veiculo, codigo_marca, codigo_modelo, ano_codigo, token)

                    # Adicionar ano e valor ao JSON
                    anos_do_modelo["anos"].append({
                        "ano": ano,
                        "valor": valor
                    })
            else:
                print(f"    Após tentativas, nenhum ano disponível para o modelo {modelo['nome']}.")


                modelos_da_marca["modelos"].append(anos_do_modelo)

        else:
            print(f"  A marca {marca['nome']} não possui modelos disponíveis.")

        resultado["marcas"].append(modelos_da_marca)

        # Salvar dados a cada iteração
        salvar_dados(arquivo_resultado, resultado)
        print(f"Dados salvos para a marca: {marca['nome']}")

        # Delay para evitar limites de requisição
        time.sleep(1)

    print("\nColeta de dados finalizada. Resultados salvos em 'resultado_fipe_completo.json'.")

if __name__ == "__main__":
    main()
