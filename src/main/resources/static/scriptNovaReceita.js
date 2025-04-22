document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formDeCadastro");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const nomeReceita = document.getElementById("nomeReceita");
        const modoDePreparo = document.getElementById("modoDePreparo");
        const ingredientes = document.getElementById("ingredientes");

        let errorReceita = false;

        const validateField = (field, message) => {
            if (!field.value.trim()) {
                field.value = "";
                field.placeholder = message;
                field.style.border = "2px solid red";
                errorReceita = true;
            } else {
                field.style.border = "";
                field.placeholder = "";
            }
        };
        validateField(nomeReceita, "O nome da receita não pode estar em branco");
        validateField(modoDePreparo, "Os ingredientes da receita não podem ficar em branco");
        validateField(ingredientes, "O modo de preparo precisa ser preenchido");

        if (errorReceita) return;

        try {
            const response = await fetch("/projeto/receitas", {
                method: "post",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    nomeReceita: nomeReceita.value,
                    modoDePreparo: modoDePreparo.value,
                    ingredientes: ingredientes.value,
                }),
            });

            if (response.ok) {
                alert("Receita salva com sucesso!!");
                window.location.href = "receitalista.html";
            } else if (response.status === 400) {
                const errors = await response.json();
                alert("Erro ao salvar receita: " + JSON.stringify(errors));
            }
        } catch (error) {
            alert("Erro inesperado: " + error.message);
        }
    });
});
