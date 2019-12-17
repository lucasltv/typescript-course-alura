import { DaysOfWeek } from '../enums/DaysOfWeek';
export class Negociacao {

    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) { }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    /**
     * ehFinalDeSemana
     */
    public ehFinalDeSemana(): boolean {
        return this.data.getDay() === DaysOfWeek.Domingo || this.data.getDay() == DaysOfWeek.Sabado;
    }
}