var Views;
(function (Views) {
    class MensagemView extends Views.View {
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
    }
    Views.MensagemView = MensagemView;
})(Views || (Views = {}));
