class poupanca extends Conta {
    constructor(numero, saldo,dataaniversario) {
        super(numero,saldo);
        this.dataaniversario = dataaniversario

    }

    incrementarpoupanca(dataaniversario){
        this.creditar(valor*1.20)
    }
}