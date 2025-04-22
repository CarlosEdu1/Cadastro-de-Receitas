document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("/projeto/receitas", {
            headers: {
                "Content-type": "application/json"
            }

        });
        const rct = await response.json();
        console.log(rct)
        const tbody = document.querySelector("tbody");
        tbody.innerHTML = "";
        const body = document.querySelector("body");
        if (rct.length === 0) {

            const vazio= document.createElement("tr");
            vazio.textContent = "Nenhuma Receita ainda foi cadastrada."

            body.insertBefore(vazio, tbody.parentElement);
            return;
        }
        for (let i = 0; i < rct.length; i++) {
            const receita = rct[i];
            const tr = document.createElement("tr");

            const tdId = document.createElement("td");
            tdId.textContent = receita.id;

            const tdNome = document.createElement("td");
            tdNome.textContent = receita.nomeReceita;

            tr.appendChild(tdId);
            tr.appendChild(tdNome);

            tbody.appendChild(tr);

        }
    } catch (error) {

    }

})