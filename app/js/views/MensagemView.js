class MensagemView extends View {
    update(text) {
        this._elemento.innerHTML = this.template(text);
        this._elemento.setAttribute("style", 'display: block');
        setTimeout(this.hide.bind(this), 2000);
    }
    template(text) {
        return `<p class="alert alert-info">${text}</p>`;
    }
    hide() {
        this._elemento.setAttribute("style", 'display: none');
    }
}
