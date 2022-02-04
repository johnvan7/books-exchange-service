const Book = require('../../models/book');
const User = require('../../models/user');

const { transformBook } = require('./merge');

module.exports = {
  books: async () => {
    try {
      const books = await Book.find();
      return books.map(book => {
        return transformBook(book);
      });
    } catch (err) {
      throw err;
    }
  },
  createBook: async (args, req) => {
    if (!req.isAuth) {
      throw new Error('Unauthenticated!');
    }
    const book = new Book({
      title: args.bookInput.title,
      description: args.bookInput.description,
      isbn: args.bookInput.isbn,
      pages: +args.bookInput.pages,
      images: args.bookInput.images,
      //authors: args.bookInput.authors,
      category_id: +args.bookInput.category_id,
      //release_date: new Date(args.bookInput.release_date),
      tags: args.bookInput.tags
    });
    try {

    } catch (err) {
      console.log(err);
      throw err;
    }
    let createdBook;
    try {
      const result = await book.save();
      createdBook = transformBook(result);
      /*const creator = await User.findById(req.userId);

      if (!creator) {
        throw new Error('User not found.');
      }
      creator.createdEvents.push(event);
      await creator.save();*/

      return createdBook;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};