class NegociacoesView {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    template(negociacoes) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>ITEM</th>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
            ${negociacoes.toArray().map((negociacao, index) => `
                <tr>
                    <td>${index + 1}</td>
                    <td>${negociacao.data}</td>
                    <td>${negociacao.quantidade}</td>
                    <td>${negociacao.valor}</td>
                    <td>${negociacao.volume}</td>
                </tr>
            `).join("")}
            </tbody>

            <tfoot>
            </tfoot>
        </table>
        `;
    }
    update(negociacoes) {
        this._elemento.innerHTML = this.template(negociacoes);
    }
}
