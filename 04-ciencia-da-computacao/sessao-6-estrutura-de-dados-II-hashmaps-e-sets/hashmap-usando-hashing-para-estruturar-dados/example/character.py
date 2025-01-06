count_chars = {}

string = "coxinha"

for char in string:
	if char not in count_chars:
		count_chars[char] = 1
	else:
		count_chars[char] += 1

print(count_chars)
