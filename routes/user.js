const express = require('express');
const UserService = require('../services/user');

const userApi = app => {
  const router = express.Router();
  app.use('/users', router);
  const userService = new UserService();

  /**
   * Get all users
   */
  router.get('/', async (req, res) => {
    const users = await userService.getAll();
    res.status(200).json(users);
  });

  /**
  * Get user by id
  */
  router.get('/:id', async (req, res) => {
    const userId = req.params.id;
    const userUpdateId = await userService.getById(userId);
    res.status(200).json({ userUpdateId });
  });

  /**
  * Create an user
  */
  router.post('/', async (req, res) => {
    const userData = req.body;
    const userCreatedId = await userService.create(userData);
    res.status(200).json({ userCreatedId });
  });

  /**
  * Update an user
  */
  router.put('/:id', async (req, res) => {
    const userId = req.params.id;
    const userData = req.body;
    const userUpdatedId = await userService.update(userId, userData);
    res.status(200).json({ userUpdatedId });
  });

  /**
  * Delete an user
  */
  router.delete('/:id', async (req, res) => {
    const userId = req.params.id;

    const userDeletedId = await userService.delete(userId);
    res.status(200).json({ userDeletedId });
  });
}

module.exports = userApi;