import pandas as pd



gostos_das_amizades = {
    "nome": ["Alex", "Fred", "Julia"],
    "prato_preferido": ["macarronada", "feijoada", "panqueca"],
    "sobremesa_preferida": ["bolo de chocolate", "pudim", "mousse de maracujá"]
}


meu_dataframe = pd.DataFrame(gostos_das_amizades)

nome_amizade = meu_dataframe["nome"]
prato_preferido_amizade = meu_dataframe["prato_preferido"]
sobremesa_preferida_amizade = meu_dataframe["sobremesa_preferida"]

print(nome_amizade)
print(prato_preferido_amizade)
print(sobremesa_preferida_amizade)
