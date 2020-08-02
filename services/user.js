const MongoDB = require('../lib/mongo');

class UserService {
  constructor() {
    this.collection = 'users';
    this.mongoDB = new MongoDB();
  }

  getAll() {
    return this.mongoDB.getAll(this.collection);
  }

  getById(userId) {
    return this.mongoDB.get(this.collection, userId);
  }

  create(user) {
    return this.mongoDB.create(this.collection, user);
  }

  update(userId, userData) {
    return this.mongoDB.update(this.collection, userId, userData);
  }

  delete(userId) {
    return this.mongoDB.delete(this.collection, userId);
  }
}

module.exports = UserService;