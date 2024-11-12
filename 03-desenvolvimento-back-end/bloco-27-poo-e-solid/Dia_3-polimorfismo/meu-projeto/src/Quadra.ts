import { IAgenda } from './interfaces/IAgenda';

abstract class Quadra<T> {
    abstract reservar(horaReserva: Date): IAgenda<T>;
}

export default Quadra;
