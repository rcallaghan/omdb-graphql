import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLNonNull
} from 'graphql'
import requestManager from './services/request-manager'


const responseObject = {
    Title: {
      type: GraphQLString,
      description: "Title of the movie or tv show"
    },
    Year: {
      type: GraphQLString,
      description: "Year the title was released"
    },
    Rated: {
      type: GraphQLString,
      description: "Rating"
    },
    Released: {
      type: GraphQLString,
      description: "Year of release"
    },
    Runtime: {
      type: GraphQLString,
      description: "Runtime of the program"
    },
    Genre: {
      type: GraphQLString,
      description: "Genre of the program"
    },
    Director: {
      type: GraphQLString,
      description: "Director"
    },
    Writer: {
      type: GraphQLString,
      description: "Writer(s)"
    },
    Actors: {
      type: GraphQLString,
      description: "Actors"
    },
    Plot: {
      type: GraphQLString,
      description: "Plot"
    },
    Language: {
      type: GraphQLString,
      description: "Language"
    },
    Country: {
      type: GraphQLString,
      description: "Country"
    },
    Awards: {
      type: GraphQLString,
      description: "Awards"
    },
    Poster: {
      type: GraphQLString,
      description: "Image link"
    },
    Ratings: {
      type: GraphQLString,
      description: "Ratings object"
    },
    Metascore: {
      type: GraphQLString,
      description: "Metascore"
    },
    imdbRating: {
      type: GraphQLString,
      description: "imdbRating"
    },
    imdbVotes: {
      type: GraphQLString,
      description: "imdbVotes"
    },
    imdbId: {
      type: GraphQLString,
      description: "Id of title on imdb"
    },
    Type: {
      type: GraphQLString,
      description: "Type of program movie/tv"
    },
    DVD: {
      type: GraphQLString,
      description: "DVD Release date"
    },
    BoxOffice: {
      type: GraphQLString,
      description: ""
    },
    Production: {
      type: GraphQLString,
      description: "Production company"
    },
    Website: {
      type: GraphQLString,
      description: "Website of title"
    },
    Response: {
      type: GraphQLString,
      description: "Was there a response"
    }
}

const TitleType = new GraphQLObjectType({
  name: 'Title',
  description: 'Title of IMDB API for data',
  fields: () => (
      responseObject
  )
})

const SpecificType = new GraphQLObjectType({
  name: 'Specific',
  description: 'Find specific title with IMDB id',
  fields: () => (
      responseObject
  )
})

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all... queries',
  fields: () => ({
    Title: {
      type: TitleType,
      args: {
        title: {
            type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve: (root, {title}) => requestManager(title, '&t=').then(payload => {
        console.log(payload)
        return payload
      })
    },
    SpecificTitle: {
      type: SpecificType,
      args: {
        id: {
            type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve: (root, {id}) => requestManager(id).then(payload => {
        return payload
      })     
    }
  })
})

export default new GraphQLSchema({
  query: QueryType,
})