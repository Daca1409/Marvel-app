const api = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=3eec03e68cfb3b6f845fd2e32f2a66d2&hash=2ac7be16fabde41da28d7b8f07843306';

export const fetchData = (setData) => {
    fetch(`${api}`)
        .then(response => response.json())
        .then((data) => {
            setData(data.data.results)
        });
}


export const searchPattern = (string, search) => {
    if (string.toLowerCase().indexOf(search.toLowerCase()) === 0) {
        return true
    }
}

export const showresults = (result, search) => {
    if (search === "") {
        return result

    } else
        if (searchPattern(result.name, search)) {
            return true
        }
}

export const filteredHeroes = (result, search) => {
    return result.filter((result) => showresults(result, search))



}


export const addToMyTeam = (data, team, setTeam, result) => {
    const myHero = data.find(e => e.id === result.id);
    team.includes(myHero) ? setTeam([...team]) : setTeam([...team, myHero])

}


export const remove = (setTeam, team, result) => {
    setTeam(team.filter((e) => e.id !== result.id))
}





