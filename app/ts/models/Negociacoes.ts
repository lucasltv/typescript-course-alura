class Negociacoes {
    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    toArray(): Negociacao[] {
        //Programação defensiva: retorna uma referencia diferente para this._negociacoes (para evitar alterar)
        return [].concat(this._negociacoes);
    }
}