import pandas as pd


gostos_das_amizades = {
    "nome": ["Alex", "Fred", "Julia"],
    "prato_preferido": ["macarronada", "feijoada", "panqueca"],
    "sobremesa_preferida": ["bolo de chocolate", "pudim", "mousse de maracujá"]
}


meu_dataframe = pd.DataFrame(gostos_das_amizades)

print(meu_dataframe)
