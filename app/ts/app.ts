import { NegociacaoController } from './controllers/NegociacaoController';
const controller = new NegociacaoController();

//Comentário oculto no js compilado
$(".form").submit(controller.adiciona.bind(controller));