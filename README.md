# GraphQL wrapper for omdb API


Example query using GraphQLi at http://localhost:4000

```js
{
	Search(title: "Batman") {
	  Title
	  Year
	  Rated
	  Released
	  Runtime
	  Genre
	  Director
	  Writer
	  Actors
	  Ratings
	  Metascore
	  imdbRating
	  imdbVotes
	  imdbId
	  Type
	  DVD
	  BoxOffice
	  Production
	  Website
	  Response
	}
}
```

Which returns 

```js
{
  "data": {
    "Search": {
      "Title": "Batman",
      "Year": "1989",
      "Rated": "PG-13",
      "Released": "23 Jun 1989",
      "Runtime": "126 min",
      "Genre": "Action, Adventure",
      "Director": "Tim Burton",
      "Writer": "Bob Kane (Batman characters), Sam Hamm (story), Sam Hamm (screenplay), Warren Skaaren (screenplay)",
      "Actors": "Michael Keaton, Jack Nicholson, Kim Basinger, Robert Wuhl",
      "Ratings": "[object Object],[object Object],[object Object]",
      "Metascore": "69",
      "imdbRating": "7.6",
      "imdbVotes": "282,168",
      "imdbId": null,
      "Type": "movie",
      "DVD": "25 Mar 1997",
      "BoxOffice": "N/A",
      "Production": "Warner Bros. Pictures",
      "Website": "N/A",
      "Response": "True"
    }
  }
}
```

#### Available Fields in API Response

* Title
* Year
* Rated
* Released
* Runtime
* Genre
* Director
* Writer
* Actors
* Plot
* Language
* Country
* Awards
* Poster
* Ratings
* Metascore
* imdbRating
* imdbVotes
* imdbId
* Type
* DVD
* BoxOffice
* Production
* Website
* Response