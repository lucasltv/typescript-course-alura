class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    toArray() {
        return [].concat(this._negociacoes); //Programação defensiva: retorna uma referencia diferente para this._negociacoes (para evitar alterar)
    }
}
