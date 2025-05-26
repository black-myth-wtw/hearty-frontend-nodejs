const {buildSchema} = require('graphql');

const data = require('../data');

const schema = buildSchema(`
    type Comment {
        id: ID!
        name: String!
        avatar: String
        content: String
        isTop: Boolean
        publishDate: String
        commentNum: Int
        praiseNum: Int
    }
    type Query {
        comments: [Comment!]!
    }
`);

schema.getQueryType().getFields().comments.resolve = () => {
    return data.comments;
};

module.exports = schema;
