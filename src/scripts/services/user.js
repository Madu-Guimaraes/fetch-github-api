import { baseUrl} from "../variables.js"

//comece fazendo as coisas simples, depois refatore
async function getUser(userName) {
    const response = await fetch(`${baseUrl}/${userName}`)
        return await response.json ()
}

export { getUser }