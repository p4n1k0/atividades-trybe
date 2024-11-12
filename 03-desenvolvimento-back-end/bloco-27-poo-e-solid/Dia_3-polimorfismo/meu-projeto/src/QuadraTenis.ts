import normas from './normas/normasDeUso';
import { IAgenda } from './interfaces/IAgenda';
import Quadra from './Quadra';
import { ITenis } from './interfaces/ITenis';

class QuadraTenis extends Quadra<ITenis> {
    // busca os dados da quadra referenciada
    public tenisData: ITenis = normas.tenis;

    public reservar(horaReserva: Date): IAgenda<ITenis> {
        // gerando protocolo de agendamento
        const protocolo = (Math.random() + 1).toString(30).substring(3);
        return {
            protocolo,
            data: horaReserva,
            regras: this.tenisData,
        };
    }
}

export default QuadraTenis;
