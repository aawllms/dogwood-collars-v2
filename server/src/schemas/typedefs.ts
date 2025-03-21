const typeDefs = `
type User {
 _id: ID!
 username: String!
 email: String!
}

type Product {
 productId: ID!
 name: String!
 color: String!
 size: String!
 description: String!
}

type Auth {
 token: String!
 user: User
}

type Query {
 getSingleUser: User
 getAllUsers: [User]
 getUserByUserName(username: String!): User

 getProduct(productId: ID!): Product
 getAllProduct: [Product]
 searchProduct(searchTerm: String!): Product
}


type Mutation {
createUser(username: String!, email: String!, password: String!): Auth
login(email: String!, password: String!): Auth
deleteUser: Auth
updateUser(username: String, email: String, password: String): User

deleteProduct(productId: ID!): Product
createProduct(name: String!, color: String!, size: String!, description: String!): Product
updateProduct(productId: ID!, name: String, color: String, size: String, desription: String): Product
saveProduct(productId: ID!, name: String!, color: String!, size: String!, description: String!): Product


}
`;

export default typeDefs;
