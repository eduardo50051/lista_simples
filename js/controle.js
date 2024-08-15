let contador = 0;
let input = document.getElementById('txt_Tarefa');
let btnAdd = document.getElementById('btn_add');
let main = document.getElementById('areaLista');

function adicionarTarefa(){
    //pegar o valor do input
     let valorInput = input.value;
    
     // se nao for vazio ou null
    if (valorInput !== "") {
        ++contador;
        let novoItem = ` <div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="item_icon">
                <i id="icone_${contador}" class="bi bi-circle"></i>
            </div>
            <div onclick="marcarTarefa(${contador})" class="item_nome">
               ${valorInput}
            </div>
            <div class="item_button">
                <button onclick="deletar(${contador})" class="delete">
                    <i class="bi bi-trash"></i>
                    Delete
                </button>
            </div>
        </div>` ;

        // adiciona novo item
        main.innerHTML += novoItem;

        // zera o valor do input
        input.value = "";
        input.focus();



    }

}

function deletar(id){

    var tarefa = document.getElementById(id);
    tarefa.remove();

}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    console.log(classe);

    if (classe == "item"){
        item.classList.add('selecionado');

        var icone = document.getElementById('icone_' + id);

        icone.classList.remove('bi-circle');
        icone.classList.add('bi-check-circle');


        //esse codigo joga o item para o final da lista
        item.parentNode.appendChild(item);

    }else{

        item.classList.remove('selecionado');

        var icone = document.getElementById('icone_' + id);

        icone.classList.remove('bi-check-circle');
        icone.classList.add('bi-circle');

    }


}


input.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
});



