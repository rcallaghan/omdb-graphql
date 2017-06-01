# GraphQL wrapper for omdb API


Example queries using GraphiQL at http://localhost:4000

#### By Title

```js
{
	ByTitle(title: "Die Hard") {
	  Title
	  Year
	  imdbId
	  Type
	  Poster
	} 
}
```

#### By specific imdbID

```js
{
	ById(id: "tt0451279") {
	  Title
	  Year
	  imdbId
	  Type
	  Poster
	} 
}
```

#### Search for mutliple results
```js
{
	Search(title: "Batman") {
	  Title
	  Year
	  Rated
	  Released
	  Runtime
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