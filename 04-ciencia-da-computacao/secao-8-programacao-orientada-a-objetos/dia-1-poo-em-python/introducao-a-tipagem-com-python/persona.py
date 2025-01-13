from typing import Optional


class Person:
    def __init__(
        self,
        name: str,
        age: Optional[int] = None,
        account_balance: Optional[int] = None,
    ) -> None:
        self.age = age
        self.name = name
        self.account_balance = account_balance

person_1 = Person("Marcelo", 22, 700)
person_2 = Person("Matheus")
person_3 = Person("Maria", 33)
person_4 = Person("Márcia", account_balance=100)
