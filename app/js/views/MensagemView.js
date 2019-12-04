System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var View_1, MensagemView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            MensagemView = class MensagemView extends View_1.View {
                update(text) {
                    this._elemento.html(this.template(text));
                    this._elemento.show();
                    setTimeout(this.hide.bind(this), 2000);
                }
                template(text) {
                    return `<p class="alert alert-info">${text}</p>`;
                }
                hide() {
                    this._elemento.hide();
                }
            };
            exports_1("MensagemView", MensagemView);
        }
    };
});
