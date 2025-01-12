class Person:
    def print_name_and_age(self, age: int) -> None:
        print(f"{self.name} tem {age} anos.")

alice = Person()
alice.name = "Alice"
alice.print_name_and_age(20) # saída: Alice tem 20 anos.

john = Person()
john.name = "John"
john.print_name_and_age(28) # saída: John tem 28 anos.
