import Clube from './Clube';
import { IFutebol } from './interfaces/IFutebol';
import { ITenis } from './interfaces/ITenis';
import QuadraFutebol from './QuadraFutebol';
import QuadraTenis from './QuadraTenis';

const trybeClube = new Clube<IFutebol | ITenis>();
const quadraFutebol = new QuadraFutebol();
trybeClube.adicionarQuadra(quadraFutebol);

const dataReserva = new Date('2022-12-28');

const reservarQuadraFuebol = trybeClube
    .buscarQuadra(0)
    .reservar(dataReserva);
console.log(reservarQuadraFuebol);

const quadraTenis = new QuadraTenis();

trybeClube.adicionarQuadra(quadraTenis);

const reservarQuadraTenis = trybeClube
    .buscarQuadra(1)
    .reservar(dataReserva);

console.log(reservarQuadraTenis);

