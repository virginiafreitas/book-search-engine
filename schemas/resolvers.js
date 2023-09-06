// file created from scratch

// Define the query and mutation functionality to work with the Mongoose models. 
// Use the functionality in the user-controller.js as a guide.

const { User } = require('../models');
const { signToken, AuthenticationError } = require('..utils/auth');

const resolvers = {
    Query: {
        me: async(parent, args, context) => {
            const foundUser = await User.findOne({
                _id: context.user._id
            });
            if (!foundUser) {
                throw AuthenticationError;
            }
            return (foundUser);
        },
    },
    Mutation: {
        addUser: async(parent, {username, email, password}) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async(parent, {email, password}) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw AuthenticationError;
            }
            const correctPw = await user.isCorrectPassword(password);
            if(!correctPw) {
                throw AuthenticationError;
            }
            const token signToken (user);
            return {token, user};
        },
        saveBook: async(parent, args, context) => {
            if(context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id },
                    { $addToSet: { savedBooks: args.bookData }}
                );
                return updatedUser;
            }
            throw AuthenticationError;
        },
        removebook: async(parent, args, context) => {
            if(context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: {
                        bookId: args.bookId
                    } }}
                );
                return updatedUser;
            }
            throw AuthenticationError;
        },
    },
};

module.exports = resolvers;