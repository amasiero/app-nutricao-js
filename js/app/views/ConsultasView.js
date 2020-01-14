class ConsultasView {
    constructor(elemento) {
        this._elemento = elemento;
    }

    update(model) {
        this._elemento.innerHTML = this._template(model);
    }

    _template(model) {
        return `
            <table class="table table-bordered">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Data da Consulta</th>
                    <th scope="col">Peso (kg)</th>
                    <th scope="col">Altura (m)</th>
                    <th scope="col">IMC</th>
                </tr>
            </thead>
            <tbody>
                ${model.consultas.map(c => `
                    <tr>
                        <td>${c.nome}</td>
                        <td>${DateHelper.dataParaTexto(c.data)}</td>
                        <td>${c.peso}</td>
                        <td>${c.altura}</td>
                        <td>${c.imc.toFixed(2)}</td>
                    </tr>
                `).join('')}
            </tbody>
            </table>
        `;
    }
}


