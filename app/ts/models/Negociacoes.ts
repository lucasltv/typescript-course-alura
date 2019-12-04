class Negociacoes {
    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    toArray(): Negociacao[] {
        return [].concat(this._negociacoes); //Programação defensiva: retorna uma referencia diferente para this._negociacoes (para evitar alterar)
    }
}