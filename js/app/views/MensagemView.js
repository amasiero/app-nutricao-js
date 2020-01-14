class MensagemView extends View {
    constructor(elemento) {
        super(elemento);
    }
    _template(model) {
        return `<p class="alert alert-info">${model.texto}</p>`;
    }
}