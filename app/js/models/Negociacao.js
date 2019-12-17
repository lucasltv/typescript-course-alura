System.register(["../enums/DiasDaSemana"], function (exports_1, context_1) {
    "use strict";
    var DiasDaSemana_1, Negociacao;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (DiasDaSemana_1_1) {
                DiasDaSemana_1 = DiasDaSemana_1_1;
            }
        ],
        execute: function () {
            Negociacao = class Negociacao {
                constructor(data, quantidade, valor) {
                    this.data = data;
                    this.quantidade = quantidade;
                    this.valor = valor;
                }
                get volume() {
                    return this.quantidade * this.valor;
                }
                ehFinalDeSemana() {
                    return this.data.getDay() === DiasDaSemana_1.DiasDaSemana.Domingo || this.data.getDay() === DiasDaSemana_1.DiasDaSemana.Sabado;
                }
            };
            exports_1("Negociacao", Negociacao);
        }
    };
});
