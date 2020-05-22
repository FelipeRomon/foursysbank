class Negociacao {

    //objeto que vai receber os atributos
    constructor(
        private _data: Date, 
        private _quantidade: number, 
        private _valor: number) { }

    //padrao get JS ES
    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }


}