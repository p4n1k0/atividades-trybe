import sys
from array import array


# define um array de inteiros sem sinal
myarray = array("I")

# podemos adicionar alguns valores
myarray.insert(0, 5) # na posição 0 o valor 5
myarray.insert(1, 3)
myarray.insert(2, 5)
print("Após adicionar alguns valores: ", myarray)

# adicionar em uma posição intermediária
myarray.insert(1, 4)
print("Após inserção em índice intermediário: ", myarray)

# compare o tamanho entre uma lista e um array
elements = list(range(100)) # definimos uma lista de 100 números
print("Tamanho da lista:", sys.getsizeof(elements))
array_from_list = array("I", elements) # criamos um array a partir da lista
print("Tamanho do array", sys.getsizeof(array_from_list))
