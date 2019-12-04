class MensagemView extends View<string> {

    update(text: string): void {
        this._elemento.innerHTML = this.template(text);
        this._elemento.setAttribute("style", 'display: block');
        setTimeout(this.hide.bind(this), 2000);
    }

    template(text: string): string {
        return `<p class="alert alert-info">${text}</p>`;
    }

    hide(): void {
        this._elemento.setAttribute("style", 'display: none');
    }
}