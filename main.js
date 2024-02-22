const display = document.querySelector("#display") // seleciona um elemento 



const buttons = document.querySelectorAll("button") // seleciona todos do mesmo elemento 


buttons.forEach((btn) => { // define um apelido para todos os elemntos iguais 
    btn.addEventListener("click", () => {// faz um evento acontecer . "Click , reproduz o botão clicado"
        if (btn.id === "=") { // se o botão for "=" mostra o resultado de um calculo 
            display.value = eval(display.value);

        } else if (btn.id === "ac") { // se o botao " ac" esvazia o display com ""
            display.value = "";
        } else if (btn.id === "de") { // se p botao for " de" deleta um dos numeros digitados na direita 
            display.value = display.value.slice(0, -1);
        } else { // se clicar nos outros botoes , eles aparecerão no display e se incrementação 
            display.value += btn.id;
        }
    })
})