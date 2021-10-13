var btn = document.querySelector("#btn")
var sidebar = document.querySelector(".sidebar")
var Texto = document.querySelector(".text")
var searchbtn = document.querySelector(".bx-search")
var InputSearch = document.querySelector("#SearchInput")

// Função de link que vai para o linkedin:
function CallLinkedin(){
    window.open("https://www.linkedin.com/in/breno-bernardo-da-silva-cardoso-4087b0205")
}

function btnClick(){
    sidebar.classList.toggle("active")
    // alert(sidebar.className)
    if (sidebar.className == "sidebar"){
        InputSearch.blur()
        InputSearch.value = ""
    }
}

function searchClick(){
    // alert(sidebar.className)
    if (sidebar.className != "sidebar"){
        if (InputSearch.value.length != 0){
            InputSearch.blur()
            Texto.innerHTML = `Dado pesquisado: ${InputSearch.value}`
        }else{
            Texto.innerHTML = `Tela de Pesquisa`
            InputSearch.focus()
        }
    }else{
        Texto.innerHTML = `Tela de Pesquisa`
        InputSearch.focus()
        sidebar.classList.toggle("active")
    }
}

function searchTextChanged(){
    Texto.innerHTML = `Tela de Pesquisa`
}

function HomeClick(){
    Texto.innerHTML = "Tela Inicial"
    InputSearch.value = ""
}

function UserClick(){
    Texto.innerHTML = "Tela do Usuário"
    InputSearch.value = ""
}

function MessagesClick(){
    Texto.innerHTML = "Tela de Mensagens"
    InputSearch.value = ""
}

function AnalyticsClick(){
    Texto.innerHTML = "Tela de Analytics"
    InputSearch.value = ""
}

function FileManagerClick(){
    Texto.innerHTML = "Tela de Arquivos"
    InputSearch.value = ""
}

function FavoritosClick(){
    Texto.innerHTML = "Tela de Favoritos"
    InputSearch.value = ""
}

function SettingsClick(){
    Texto.innerHTML = "Tela de Configurações"
    InputSearch.value = ""
}

function OrderClick(){
    Texto.innerHTML = "Tela do Carrinho"
    InputSearch.value = ""
}

function LogoutClick(){
    if (sidebar.className != "sidebar"){
        sidebar.classList.toggle("active")
    }
    Texto.innerHTML = "Tela Inicial"
}

InputSearch.addEventListener("keyup", function(event) {
    if (event.keyCode == 13){
        event.preventDefault()
        searchbtn.click()
    }
})