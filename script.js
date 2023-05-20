let main = document.querySelector('main')

const options = {

	method: 'GET',

	headers: {

		'X-RapidAPI-Key': '388afd08a9mshaae2b587bc79db3p1f532ejsnfa6dcc07fb0d',

		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'

	}

};

//api keys

// d06e57d0dbmsh5c752ba56050157p1fc35ejsne1760d40ce86

// jb 9ba9e80273mshf5a683d7907af13p17e0f8jsn3f366585ddeb

//

async function getAnime() {

	main.innerHTML = ''

	const url = `https://anime-db.p.rapidapi.com/anime?page=1&size=10&sortBy=ranking&sortOrder=asc`;

	const response = await fetch(url, options);

	const data = await response.json()

	console.log(data)

	data.data.forEach((Anime) => {

		const yo = document.createElement("div")
    yo.classList.add('box')

		main.appendChild(yo)

		yo.innerHTML = `

    <img src="${Anime.image}">

    <span>${Anime.title}</span>

`

	})

}

async function searchAnime(query) {

	main.innerHTML = ''

	const url = `https://anime-db.p.rapidapi.com/anime?page=1&size=20&search=${query}&sortBy=ranking&sortOrder=asc`;

	const response = await fetch(url, options);

	const data = await response.json()

	data.data.forEach((Anime) => {

		const yo = document.createElement("div")
    yo.classList.add('box')

		main.appendChild(yo)

		yo.innerHTML = `

    <img src="${Anime.image}">

    <span>${Anime.title}</span>

`

	})

}

// getAnime('naruto')

let form = document.querySelector('form')

let search = document.getElementById('search')

form.addEventListener('submit', (e) => {

	let a = search.value
	
search.value = ''
	searchAnime(a);

	e.preventDefault();

})
