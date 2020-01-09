//DECORATOR
export function logarTempoDeExecucao() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const metodoOriginal = descriptor.value; //Mantém método original
        descriptor.value = function (...args: any[]) {
            console.log(`Parâmetros passados para o método ${propertyKey}: ${JSON.stringify(args)}`);
            const retorno = metodoOriginal.apply(this, args);
            return retorno;
        }

        return descriptor;
    }
}