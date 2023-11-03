// archivo de crear tabla de multiplicar
export interface CreateTableuseCase {
    execute: (options: ParamsOptions) => string;
}

export interface ParamsOptions {
    base: number;
    limit?: number;
}


export class CreateTable implements CreateTableuseCase {
    constructor() {

    }

    execute({ base, limit = 10 }: ParamsOptions) {
        let outputMessage = '';
        for (let i = 1; i <= limit; i++) {
            outputMessage += `${base} x ${i} = ${base * i}\n`;
        }
        return outputMessage;
    }
}
