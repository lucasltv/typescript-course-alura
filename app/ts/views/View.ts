export abstract class View<T> {

    protected _elemento: JQuery;
    protected _escapar: boolean;

    constructor(seletor: string, escapar: boolean = false) { //Valor default = false
        this._elemento = $(seletor);
        this._escapar = escapar;
    }

    update(model: T): void {
        let template = this.template(model);
        if (this._escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/g, "");
        }
        this._elemento.html(template);
    }

    abstract template(model: T): string; //Método abstrato: filhas são obrigadas a implementar

}