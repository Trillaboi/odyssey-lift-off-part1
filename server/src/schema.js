const { gql } = require("apollo-server");

const typeDefs = gql`
    "A Track is a group of Modules that etaches about a specific topic"
    type Track{
        id:ID!
        title: String!
        authour: Author!
        
    }
`

module.exports=typeDefs;