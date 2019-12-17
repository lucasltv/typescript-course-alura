System.register(["../views/index", "../models/index", "../enums/DaysOfWeek"], function (exports_1, context_1) {
    "use strict";
    var index_1, index_2, DaysOfWeek_1, NegociacaoController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (DaysOfWeek_1_1) {
                DaysOfWeek_1 = DaysOfWeek_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_2.Negociacoes();
                    this._negociacoesView = new index_1.NegociacoesView("#negociacoesView");
                    this._mensagemView = new index_1.MensagemView("#mensagemView");
                    this._inputData = $('#data');
                    this._inputQuantidade = $('#quantidade');
                    this._inputValor = $('#valor');
                }
                adiciona(event) {
                    event.preventDefault();
                    let date = new Date(this._inputData.val().replace(/-/g, ','));
                    if (date.getDay() == DaysOfWeek_1.DaysOfWeek.Domingo || date.getDay() == DaysOfWeek_1.DaysOfWeek.Sabado) {
                        this._mensagemView.update("Somente dias úteis!");
                        return;
                    }
                    const negociacao = new index_2.Negociacao(date, parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update("Negociação adicionada com sucesso!");
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
