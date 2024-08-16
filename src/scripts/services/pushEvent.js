import { baseUrl, pushEventQuantity } from "../variables.js"

//buscando os pushevents
async function getPushEvent(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${pushEventQuantity}`)
        return await response.json ()
}

export { getPushEvent }