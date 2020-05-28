class Negociacoes {
    constructor() {
        this._negoriacoes = [];
    }
    adiciona(negociacao) {
        this._negoriacoes.push(negociacao);
    }
    retornaArray() {
        return [].concat(this._negoriacoes);
    }
}
