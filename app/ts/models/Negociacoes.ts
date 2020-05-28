class Negociacoes {

    private _negoriacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao){
        this._negoriacoes.push(negociacao);
    }

    retornaArray(): Negociacao[] {
        return [].concat(this._negoriacoes);
    }
}