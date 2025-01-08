import pandas as pd


df = pd.read_csv("fifa_audience.csv")

# Aqui armazenamos a condicional com os países que possuem uma porcentagem de compartilhamento global maior que 2
global_share_greater_2 = df["population_share"] > 2
# Se você fizer um print aqui, verá que as linhas na coluna "population_share" estarão marcadas como True ou False, que são referentes à comparação entre a porcentagem do país e o valor "> 2"

# Se aplicarmos essa série de Booleanos como índice do DataFrame, apenas as linhas marcadas como True serão selecionadas e mostradas.
result = df[global_share_greater_2]

print(result)

# Para contar os países por confederação usamos o método count() e reset_index() para dar um nome à coluna que mostra a contagem.
count_countries_by_confederation = df.groupby("confederation")["country"].count().reset_index(name="count")

print(count_countries_by_confederation)


conmebol_countries = df.loc[df["confederation"] == "CONMEBOL"]

print(conmebol_countries)


uefa_countries = df[df["confederation"] == "UEFA"]

audience_average = uefa_countries["tv_audience_share"].mean()

print(audience_average)
