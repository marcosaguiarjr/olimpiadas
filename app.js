
let section = document.getElementById("resultados-pesquisa");

function clicou() {

    let resultado = ""
    let titulo = "";
    let descricao = "";
    let tags = "";
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    campoPesquisa = campoPesquisa.toLowerCase();

    if (campoPesquisa != "") {

        for (let dado of dados) {

            titulo = dado.titulo.toLowerCase();
            descricao = dado.descricao.toLowerCase();
            tags = dado.tags.toLowerCase()

            if (titulo.includes(campoPesquisa) ||
                descricao.includes(campoPesquisa) ||
                tags.includes(campoPesquisa)) {
                resultado += `
                        <div class="item-resultado">
                        <h2>
                            <a href="#" target="_blank">${dado.titulo}</a>
                        </h2>
                        <p class="descricao-meta">${dado.descricao}</p>
                        <a href="${dado.link}" target="_blank">Mais informações</a>
                    </div>`
            }
        }

        if (resultado == "")
            resultado = "<p>Nada foi encontrado!</p>"
    }
    else {
        resultado = "<p>Atleta não encontrado!</p>"
    }

    section.innerHTML = resultado;
}