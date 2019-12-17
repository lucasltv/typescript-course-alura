System.register(["../enums/DaysOfWeek"], function (exports_1, context_1) {
    "use strict";
    var DaysOfWeek_1, Negociacao;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (DaysOfWeek_1_1) {
                DaysOfWeek_1 = DaysOfWeek_1_1;
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
                    return this.data.getDay() === DaysOfWeek_1.DaysOfWeek.Domingo || this.data.getDay() === DaysOfWeek_1.DaysOfWeek.Sabado;
                }
            };
            exports_1("Negociacao", Negociacao);
        }
    };
});
