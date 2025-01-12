class Motorcycle:
    def __init__(self, max_speed: str) -> None:
        self.max_speed = max_speed


class Truck:
    def __init__(self, max_speed: str) -> None:
        self.max_speed = max_speed


cg_150 = Motorcycle("120 km/h")
yamaha_R1 = Motorcycle("300 km/h")
ford_C_2042 = Truck("140 km/h")



def print_max_speed(vehicle: Motorcycle) -> None:
    if isinstance(vehicle, Motorcycle):
        print(f"A velocidade máxima do veículo é de {vehicle.max_speed}")
    else:
        raise TypeError("O objeto precisa ser uma motocicleta")


print_max_speed(cg_150)  # 120 km/h
print_max_speed(yamaha_R1)  # 300 km/h
print_max_speed(ford_C_2042)  # TypeError
