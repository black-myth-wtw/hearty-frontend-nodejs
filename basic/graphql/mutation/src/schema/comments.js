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
    type Mutation {
        praise(id: ID!): Int! 
    }
`);

schema.getQueryType().getFields().comments.resolve = () => {
    return data.comments;
};

schema.getMutationType().getFields().praise.resolve = (source, args) => {
    const {id} = args;
    const current_comment = data.comments.find(comment => comment.id === Number(id));
    return ++current_comment.praiseNum;
}

module.exports = schema;
