class ConsultaController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputNome = $('#nome');
        this._inputData = $('#data');
        this._inputPeso = $('#peso');
        this._inputAltura = $('#altura');
    }

    adiciona(evento) {
        evento.preventDefault();
        let consulta = new Consulta(
            this._inputNome.value,
            DateHelper.textoParaData(this._inputData.value),
            this._inputPeso.value,
            this._inputAltura.value
        );
        console.log(consulta);
        console.log(DateHelper.dataParaTexto(consulta.data));
    }
}
