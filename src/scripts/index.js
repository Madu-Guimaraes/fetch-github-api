import { getUser } from "./services/user.js"
import { getRepositories } from "./services/repositories.js"
import { getCretatEvent } from "./services/creatEvent.js"
import { getPushEvent } from "./services/pushEvent.js"

import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"

document.getElementById('btn-search').addEventListener('click', () => {
    //precisa pegar o que estiver escrito no input e enviar para a api do github
    const userName = document.getElementById('input-search').value
    if(validateEmptyInput(userName)) return
    getUserData(userName)
})

//fazer o formulario funcionar quando apertar a tecla(keyup) enter 
document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    //verificando se a tecla enter foi precionada
    const isEnterKeyPressed = key === 13 //teclado do enter é o 13

    if(isEnterKeyPressed){
        if(validateEmptyInput(userName)) return
        getUserData(userName)
    }
})

function validateEmptyInput(userName){
    if(userName.length === 0){
        alert('Preencha o campo com o nome do usuário do Github')
        return true
    }
}

async function getUserData(userName) {

    const userResponse = await getUser(userName)

    if(userResponse.message === "Not Found"){
        screen.renderNotFound()
        return
    } 

    const repositoriesResponse = await getRepositories(userName)
    const creatEventResponse = await getCretatEvent(userName)
    const pushEventResponse = await getPushEvent(userName)
    
    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    user.setCreateEvent(creatEventResponse)
    user.setPushEvent(pushEventResponse)

    screen.renderUser(user)
}