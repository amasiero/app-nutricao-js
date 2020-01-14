class ConsultaController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputNome = $('#nome');
        this._inputData = $('#data');
        this._inputPeso = $('#peso');
        this._inputAltura = $('#altura');
        this._listaConsultas = new ListaConsultas();

        this._consultasView = new ConsultasView($('#consultasView'));
        this._consultasView.update(this._listaConsultas);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
    }

    adiciona(evento) {
        evento.preventDefault();

        this._listaConsultas.adiciona(this._criaConsulta());

        this._mensagem.texto = 'Consulta adicionada com sucesso.'
        this._mensagemView.update(this._mensagem);
        this._consultasView.update(this._listaConsultas);

        this._limpaFormulario();
    }

    _criaConsulta() {
        return new Consulta(
            this._inputNome.value,
            DateHelper.textoParaData(this._inputData.value),
            this._inputPeso.value,
            this._inputAltura.value
        );
    }

    _limpaFormulario() {
        this._inputNome.value = "";
        this._inputData.value = "";
        this._inputPeso.value = "";
        this._inputAltura.value = "";

        this._inputNome.focus();
    }
}
