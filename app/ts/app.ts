//teste da instancia de nogociacao

//criacao de variavel recebendo uma instancia de negociacao
//let negociacao = new Negociacao(new Date(), 2, 100);
//para exibir no console 
//console.log(negociacao.quantidade);

const controller = new NegociacaoController();
$('.form').submit(controller.adiciona.bind(controller));