//deixa vazio pois vamos buscar os valores na api
const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    repositories: [],
    followersUrl: '',
    followingUrl: '',
    forks: '',
    stars: '',
    watchers: '',
    language: '',
    setInfo(githubUser){
        this.avatarUrl = githubUser.avatar_url
        this.name = githubUser.name
        this.bio = githubUser.bio
        this.userName = githubUser.login
        this.followersUrl = githubUser.followers
        this.followingUrl = githubUser.following
    },
    setRepositories(repositories){
        this.repositories = repositories
        this.forks = 0;
        this.stars = 0;
        this.watchers = 0;  
        this.language = {};
    
        repositories.forEach(repo => {
            this.forks += repo.forks_count;
            this.stars += repo.stargazers_count;
            this.watchers += repo.watchers_count;
    
            if (repo.language) {
                if (this.language[repo.language]) {
                    this.language[repo.language]++;
                } else {
                    this.language[repo.language] = 1;
                }
            }
        });
    },
    setCreateEvent(creatEvent){
        this.creatEvent = creatEvent
    },
    setPushEvent(pushEvent){
        this.pushEvent = pushEvent
    }
}

export { user }