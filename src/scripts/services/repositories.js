import { baseUrl, repositoriesQuantity } from "../variables.js"

//buscando os repositorios
async function getRepositories(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`);
    const data = await response.json();
    console.log(data);
    return data;
}



export { getRepositories}