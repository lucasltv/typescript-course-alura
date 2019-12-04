class MensagemView extends View {
    // update(text: string): void {
    //     this._elemento.innerHTML = `<p class="alert alert-info">${text}</p>`;
    //     this._elemento.setAttribute("style", 'display: block');
    //     setTimeout(this.hide.bind(this), 2000);
    // }
    template(text) {
        return `<p class="alert alert-info">${text}</p>`;
    }
}
