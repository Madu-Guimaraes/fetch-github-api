const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                             <img src="${user.avatarUrl}" alt="Foto de perfil do usuário" />
                             <div class="data">
                                 <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                                 <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>
                                 <div class="connections">
                                        <i class="fa-solid fa-user-plus"></i>
                                        <h3>Followers: ${user.followersUrl ?? 'Não possui seguidores 😢'}</h3>
                                        <i class="fa-solid fa-user-plus"></i> 
                                        <h3>Following: ${user.followingUrl ?? 'Não segue nenhum perfil 😢'}</h3>
                                 </div>
                             </div>
                         </div>`;

        let repositoriesItens = '';
        user.repositories.forEach(repo => {
            repositoriesItens += `
                <li>
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    <div class="repository-insights">
                        <ul>
                            <li>🍴 ${repo.forks_count}</li>
                            <li>⭐ ${repo.stargazers_count}</li>
                            <li>👀 ${repo.watchers_count}</li>
                            <li>👩‍💻 ${repo.language || 'Não especificada'}</li>
                        </ul>
                    </div>
                </li>`;
        });
        
        if(user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                    <ul>${repositoriesItens}</ul>
                                                </div>
                                            </div>`
        };

        let eventList = '';

        user.pushEvent.forEach(event => {
            if (event.type === "PushEvent") {
                const repoName = event.repo.name;
                const commitMessage = event.payload.commits[0]?.message;

                eventList += `<li><span class="repo-name">${repoName}</span> - ${commitMessage}</li>`;
            } else if (event.type === "CreateEvent") {
                eventList += `<li>Sem mensagem de commit</li>`;
            }
        });

        if (eventList) {
            this.userProfile.innerHTML += `<div class="events section">
                                                <h2>Eventos</h2>
                                                <ul>${eventList}</ul>
                                            </div>`;
        } else {
            this.userProfile.innerHTML += `<div class="events section">
                                                <h2>Eventos</h2>
                                                <p>Nenhum evento encontrado.</p>
                                            </div>`;
        };

    },

    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }