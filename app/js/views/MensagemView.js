class MensagemView extends View {
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
