import { DiasDaSemana } from '../enums/DiasDaSemana';
export class Negociacao {

    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) { }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    /**
     * ehFinalDeSemana
     */
    public ehFinalDeSemana(): boolean {
        return this.data.getDay() === DiasDaSemana.Domingo || this.data.getDay() === DiasDaSemana.Sabado;
    }
}