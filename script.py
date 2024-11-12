# #piyox75675@gianes.com
# #eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmMDJlZDQxOS00MGU5LTRkYTYtOGI2Mi1hZDU1OWEyODllMWYiLCJlbWFpbCI6InBpeW94NzU2NzVAZ2lhbmVzLmNvbSIsImlhdCI6MTczMDgyNTE2MH0.KVxC2D0kl2roVNKEMxs3uklrzoHOIJCtT7KGCiQdUVA

# #kifex19416@cironex.com
# #eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiMmI0NWEyNy1jNzE3LTQwYmUtOTY5Yy1iYmFjZTMwOWE0YzgiLCJlbWFpbCI6ImtpZmV4MTk0MTZAY2lyb25leC5jb20iLCJpYXQiOjE3MzA4MjU4OTh9.23uudaDssomggflvsVFcWPZBKrMH9rO8LJb0SKe1OAQ

# #naxidav328@edectus.com
# #eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiMjYxNWM0NS0yZWJlLTQ2ZDEtODZiZC04MzBlZTU1ZGJhNTAiLCJlbWFpbCI6Im5heGlkYXYzMjhAZWRlY3R1cy5jb20iLCJpYXQiOjE3MzA4Mjk4MzB9.pQN-JA_M46hptGwxRUM7RaCYcSxmGG3BHQnBrTVRxbQ

# #nasan40841@cironex.com
# #

# #matiji3549@inikale.com
# #eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5ZTIyZmNkNC1iYTNjLTQ1YjEtODBiNC1jYjhmNWYzYzc0ZjIiLCJlbWFpbCI6Im1hdGlqaTM1NDlAaW5pa2FsZS5jb20iLCJpYXQiOjE3MzA4NTIyNDN9.j_UDPxC37z0WobggOPnIE5R04egGy6xaEkutR3VfiuU


import json
import requests
import os

# Função para salvar dados incrementalmente no arquivo JSON
def save_partial_data(data, cache_file='fipe_data.json'):
    if os.path.exists(cache_file):
        with open(cache_file, 'r') as file:
            existing_data = json.load(file)
    else:
        existing_data = {"marcas": []}

    # Atualiza o cache com os novos dados
    marca_existente = next((marca for marca in existing_data["marcas"] if marca["codigo"] == data["codigo"]), None)
    if marca_existente:
        existing_data["marcas"].remove(marca_existente)

    existing_data["marcas"].append(data)
    
    with open(cache_file, 'w') as file:
        json.dump(existing_data, file, indent=4)

# Carrega cache previamente salvo
def load_cache(cache_file='fipe_data.json'):
    if os.path.exists(cache_file):
        with open(cache_file, 'r') as file:
            return json.load(file)
    return {"marcas": []}

# Função para verificar se uma marca já está no cache
def is_cached(codigo_marca, codigo_modelo=None, ano_codigo=None, cache=None):
    if cache is None:
        cache = load_cache()
    
    for marca in cache["marcas"]:
        if marca["codigo"] == codigo_marca:
            if codigo_modelo is None:
                return True  # Marca já processada
            for modelo in marca["modelos"]:
                if modelo["codigo"] == codigo_modelo:
                    if ano_codigo is None:
                        return True  # Modelo já processado
                    if any(ano["codigo"] == ano_codigo for ano in modelo["anos"]):
                        return True  # Ano já processado
    return False

# Função principal para captura com verificação de cache
def fetch_and_cache_all_data(tipo_veiculo, api_key, cache_file='fipe_data.json'):
    cache = load_cache(cache_file)

    headers = {
        'Authorization': f'Bearer {api_key}',  # Inclui a chave de API no cabeçalho
    }
    
    # Passo 1: Consulta marcas
    url_brands = f"https://parallelum.com.br/fipe/api/v1/{tipo_veiculo}/marcas"
    response = requests.get(url_brands, headers=headers)

    if response.status_code == 200:
        brands_data = response.json()
        num_brands = len(brands_data)
        print(f"Total de códigos de marcas encontrados: {num_brands}")

        # Itera sobre as marcas e busca modelos e detalhes
        for idx, brand in enumerate(brands_data):
            codigo_marca = brand['codigo']
            if is_cached(codigo_marca, cache=cache):
                print(f"Capturando código {codigo_marca}.. ({idx + 1}/{num_brands}) - Dados do cache.")
                continue

            print(f"Capturando código {codigo_marca}.. ({idx + 1}/{num_brands}) - Consultando API.")
            brand_info = {
                "codigo": codigo_marca,
                "nome": brand['nome'],
                "modelos": []
            }

            url_models = f"https://parallelum.com.br/fipe/api/v1/{tipo_veiculo}/marcas/{codigo_marca}/modelos"
            response_models = requests.get(url_models, headers=headers)
            
            if response_models.status_code == 200:
                models_data = response_models.json().get('modelos', [])
                if not models_data:  # Verifica se a resposta é vazia
                    print(f"  Não foram encontrados modelos para a marca {brand['nome']} ou limite de requisições atingido. Ignorando marca.")
                    continue  # Ignora a marca com dados vazios

                num_models = len(models_data)
                print(f"  Total de modelos encontrados para a marca {brand['nome']}: {num_models}")

                # Itera sobre os modelos para obter anos e detalhes
                for model_idx, model in enumerate(models_data):
                    codigo_modelo = model['codigo']
                    if is_cached(codigo_marca, codigo_modelo, cache=cache):
                        print(f"    Modelo {model['nome']} ({model_idx + 1}/{num_models}) - Dados do cache.")
                        continue

                    print(f"    Modelo {model['nome']} ({model_idx + 1}/{num_models}) - Consultando API.")
                    model_info = {
                        "codigo": codigo_modelo,
                        "nome": model['nome'],
                        "anos": []
                    }

                    url_years = f"https://parallelum.com.br/fipe/api/v1/{tipo_veiculo}/marcas/{codigo_marca}/modelos/{codigo_modelo}/anos"
                    response_years = requests.get(url_years, headers=headers)
                    
                    if response_years.status_code == 200:
                        years_data = response_years.json()
                        if not years_data:  # Verifica se a resposta é vazia
                            print(f"    Não foram encontrados anos para o modelo {model['nome']} ou limite de requisições atingido. Ignorando modelo.")
                            continue  # Ignora o modelo com dados vazios

                        num_years = len(years_data)
                        print(f"      Modelo {model['nome']} ({model_idx + 1}/{num_models}): Total de anos: {num_years}")

                        # Itera sobre os anos para obter detalhes finais
                        for year_idx, year in enumerate(years_data):
                            ano_codigo = year['codigo']
                            if is_cached(codigo_marca, codigo_modelo, ano_codigo, cache=cache):
                                print(f"        Ano {year['nome']} ({year_idx + 1}/{num_years}) - Dados do cache.")
                                continue

                            print(f"        Ano {year['nome']} ({year_idx + 1}/{num_years}) - Consultando API.")
                            year_info = {"codigo": ano_codigo, "nome": year['nome']}

                            url_details = f"https://parallelum.com.br/fipe/api/v1/{tipo_veiculo}/marcas/{codigo_marca}/modelos/{codigo_modelo}/anos/{ano_codigo}"
                            response_details = requests.get(url_details, headers=headers)
                            
                            if response_details.status_code == 200:
                                details_data = response_details.json()
                                year_info['detalhes'] = details_data
                                print(f"          Ano {year['nome']} capturado com sucesso da API.")

                            model_info["anos"].append(year_info)
                    
                    brand_info["modelos"].append(model_info)
            
            # Salva a marca no JSON após captura completa
            if brand_info["modelos"]:  # Só salva se houver dados de modelos
                save_partial_data(brand_info, cache_file)
                cache["marcas"].append(brand_info)  # Atualiza o cache local
                print(f"Dados da marca '{brand['nome']}' salvos no cache.\n")
            else:
                print(f"  Marca {brand['nome']} não foi salva - sem dados.")
    else:
        print("Erro ao consultar marcas:", response.status_code)

# Exemplo de uso
api_key = input("Digite a chave da API: ")  # Solicita a chave da API ao usuário
tipo_veiculo = "carros"  # Pode ser "carros", "motos" ou "caminhoes"
fetch_and_cache_all_data(tipo_veiculo, api_key)
