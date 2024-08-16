import { baseUrl, createEventQuantity } from "../variables.js"

//buscando os eventos
async function getCretatEvent(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${createEventQuantity}`)
        return await response.json ()
}

export { getCretatEvent }
