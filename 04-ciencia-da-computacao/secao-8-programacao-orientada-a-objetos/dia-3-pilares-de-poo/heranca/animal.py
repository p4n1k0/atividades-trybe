class Animal:
    def __init__(self, name: str) -> None:
        self.name = name

    def make_sound(self) -> None:
        print(f"{self.name} fazendo som")


class Mammal(Animal):
    def breastfeed(self) -> None:
        print(f"{self.name} amamentando")


class Dog(Mammal):
    def bark(self) -> None:
        print(f"{self.name} faz au au!")


class RunMixin:
    def run(self, speed: int) -> None:
        print(f"Correndo a {speed} km/h")


class RunningDog(Dog, RunMixin):
    pass


dog = RunningDog("Rex")
dog.make_sound() # Rex fazendo som
dog.breastfeed() # Rex amamentando
dog.bark() # Rex faz au au!
dog.run(10) # Correndo a 10 km/h
