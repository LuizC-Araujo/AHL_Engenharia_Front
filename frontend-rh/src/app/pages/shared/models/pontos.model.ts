export class Pontos {

    constructor(
        public id: number,
        public colaboradorID: number,
        public dataTrabalho: string,
        public inicioExpediente: string,
        public inicioIntervalo: string,
        public fimExpediente: string,
        public fimIntervalo: string,
        public bancoDia: string,
        public extraHora: string,
        public falta: boolean,
        public observacao: string
    ) {

    }
}