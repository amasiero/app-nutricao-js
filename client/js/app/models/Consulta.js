class Consulta {
    constructor(nome, data, peso, altura) {
        this._nome = nome;
        this._data = new Date(data.getTime());
        this._peso = peso;
        this._altura = altura;
        Object.freeze(this);
    }

    get imc() {
        return this._peso / (this._altura * this._altura);
    }

    get nome() {
        return this._nome;
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get peso() {
        return this._peso;
    }

    get altura() {
        return this._altura;
    }
}