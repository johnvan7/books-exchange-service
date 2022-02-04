const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type Order {
    _id: ID!
    book: Book!
    user_left: User!
    user_taken: User!
    method: Int!
    status: Int!
    reviewed: Boolean!
    createdAt: String!
    updatedAt: String!
}

type Book {
  _id: ID!
  title: String!
  description: String!
  isbn: String
  pages: Int
  images: [String!]
  authors: [Author!]
  category_id: Int!
  release_date: String
  tags: [String]
  createdAt: String!
  updatedAt: String!
}

type User {
  _id: ID!
  email: String!
  password: String
  balance: Int!
  name: String!
  surname: String!
  image: String!
  rating: Float!
  position: GeoPosition!
  saved: [Book!]
  reviews: [Review!]
  library: [Book!]
  createdAt: String!
  updatedAt: String!
}

type GeoPosition {
  state: String!
  city: String!
  address: String!
  number: Int!
}

type Review {
  _id: ID!
  comment: String!
  date: String!
  order: Order!
  stars: Int!
}

type Author {
  _id: ID!
  name: String!
  image: String
}

type AuthData {
  userId: ID!
  token: String!
  tokenExpiration: Int!
}

input BookInput {
  title: String!
  description: String!
  isbn: String
  pages: Int
  images: [String!]
  authors: [String!]
  category_id: Int!
  release_date: String
  tags: [String]
}

input UserInput {
  email: String!
  password: String!
  name: String!
  surname: String!
  image: String
  state: String!
  city: String!
  address: String!
  number: Int!
}

type RootQuery {
    books: [Book!]!
    orders: [Order!]! 
    login(email: String!, password: String!): AuthData!
}

type RootMutation {
    createBook(bookInput: BookInput): Book
    createUser(userInput: UserInput): User
    createOrder(bookId: ID!, userId: ID!): Order!
    createAuthor(title: String!, image: String): Author
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);
