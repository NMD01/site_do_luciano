let items= JSON.parse(localStorage.getItem("items")) ||  []   
let container_card = document.getElementById("container_card")

let cadastrar = function(){
    let nome = document.getElementById("nome_produto").value
    let preco = document.getElementById("preco_produto").value
    let descricao = document.getElementById("descricao_produto").value
        
    let novo_item = {
        nome_produto : nome,
        preco_produto : preco,
        descricao_produto : descricao
    }

    items.push(novo_item)

    localStorage.setItem("items",JSON.stringify(items))
    window.location.reload()
        
   } 


 
   


   for(let i = 0; i < items.length; i++){
    let objetos = items[i]

    //cria um card(div)
    let card = document.createElement("div")
    

    //cria e acrescenta nome(h1)
    let nome = document.createElement("h1")
    nome.textContent = objetos.nome_produto
    card.appendChild(nome)

    //cria e acrescenta preço(p)
    let preco = document.createElement("p")
    preco.textContent = "R$ " + objetos.preco_produto
    card.appendChild(preco)

    //cria e acrescenta descrição(p)
    let descricao = document.createElement("p")
    descricao.textContent = objetos.descricao_produto
    card.appendChild(descricao)


    //cria e acrescenta um botão para apagar(button)
    let botao_apagar = document.createElement("button")
    botao_apagar.textContent = "apagar"
    card.appendChild(botao_apagar)

        //faz o botão funcionar
        botao_apagar.addEventListener("click", function(){
            console.log(items)
            items.splice(i,1)

            localStorage.setItem("items",JSON.stringify(items))
            window.location.reload()
        })

    //acrescenta o card do começo(div)
    container_card.appendChild(card)
   }
    




    
    
    

