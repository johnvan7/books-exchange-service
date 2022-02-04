const Book = require('../../models/book');
const User = require('../../models/user');
const { dateToString } = require('../../helpers/date');

const books = async bookIds => {
  try {
    const books = await Book.find({ _id: { $in: bookIds } });
    return books.map(book => {
      return transformBook(book);
    });
  } catch (err) {
    throw err;
  }
};

const singleBook = async bookId => {
  try {
    const book = await Book.findById(bookId);
    return transformBook(book);
  } catch (err) {
    throw err;
  }
};

const user = async userId => {
  try {
    const user = await User.findById(userId);
    return {
      ...user._doc,
      _id: user.id,
      saved: books.bind(this, user._doc.saved),
      library: books.bind(this, user._doc.library),
      createdAt: dateToString(user._doc.createdAt),
      updatedAt: dateToString(user._doc.updatedAt)
    };
  } catch (err) {
    throw err;
  }
};

const transformBook = book => {
  return {
    ...book._doc,
    _id: book.id,
    //authors: author.bind(this, event.creator),
    createdAt: dateToString(book._doc.createdAt),
    updatedAt: dateToString(book._doc.updatedAt)
  };
};

const transformOrder = order => {
  return {
    ...order._doc,
    _id: order.id,
    user_left: user.bind(this, booking._doc.user_left),
    user_taken: user.bind(this, booking._doc.user_taken),
    book: singleBook.bind(this, order._doc.book),
    createdAt: dateToString(order._doc.createdAt),
    updatedAt: dateToString(order._doc.updatedAt)
  };
};

exports.transformBook = transformBook;
exports.transformOrder = transformOrder;

// exports.user = user;
// exports.events = events;
// exports.singleEvent = singleEvent;