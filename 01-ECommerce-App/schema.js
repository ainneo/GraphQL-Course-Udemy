const { gql } = require("apollo-server");

//Scalar Types, Int, Float, Boolean...

exports.typeDefs = gql`
  type Query {
    #hello, products, product, categories, category are all feilds we can query...
    #hello retubs a string
    hello: String  #Scalar Type
    # query by ProductFilterInput from the list of Products
    # we can filter through any list of input items in the array of products
    products(filter: ProductsFilterInput): [Product!]!
    # query by id in Product
    product(id: ID!): Product
    # query a list of categories
    categories: [Category!]!
    # query by id in Category
    category(id: ID!): Category
  }

  #muating data
  #UPDATE, DELETE, CREATE!!!!!!
  #you CRUD in the GQL PG
  #run and add new name "ainne"
  #mutation{
  #addCategory(input:{name: "ainne"} ) {
  #  name
  # }
  #}
  type Mutation {
    addCategory(input: AddCategoryInput!): Category! #should return a name
    addProduct(input: AddProductInput!): Product!
    addReview(input: AddReviewInput!): Review!
    deleteCategory(id: ID!): Boolean!
    deleteProduct(id: ID!): Boolean!
    deleteReview(id: ID!): Boolean!
    updateCategory(id: ID!, input: UpdateCategoryInput!): Category
    updateProduct(id: ID!, input: UpdateProductInput!): Product
    updateReview(id: ID!, input: UpdateReviewInput!): Review
  }

# TYPES: object properties and values
  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
    category: Category
    reviews: [Review!]!
  }

  type Category {
    id: ID!
    name: String!
    products(filter: ProductsFilterInput): [Product!]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }

# INPUTS:
  input ProductsFilterInput {
    onSale: Boolean
    avgRating: Int
  }
  #passing this in our first mutation
  input AddCategoryInput {
    name: String!
  }

  input UpdateCategoryInput {
    name: String!
  }

  input AddProductInput {
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
    categoryId: String
  }

  input UpdateProductInput {
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
    categoryId: String
  }

  input AddReviewInput {
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: ID!
  }

  input UpdateReviewInput {
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: ID!
  }
`;

//we can QUERY  different fields in QUERY type
//each field has a object type with properties and values
//so basically we can... 
//***query the product field via the Product object properties***

//we can query a field by filtering, by ids, list etc...
// examples:
//  products(filter: ProductsFilterInput): [Product!]!
//  categories: [Category!]!
//  query by id in Category
//  category(id: ID!): Category

//Mutations allow us to do CRUD actions
