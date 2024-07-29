const express = require ('express');
const router = express.Router();
const controller = require('../controllers/controllers');
const authController = require('../controllers/authController');



/**
 * @openapi 
 * /api/users:
 *  get:
 *      summary: Retrieve a list of users response:
 *      200:
 *          description: A list of Users
 */

/**
 * @openapi
 * /api/posts:
 *  post:
 *     summary: Create a new post requestBody:
 *     Content:
 *        application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                         user:
 *                             type: string
 *  response:
 *      200:
 *          description: Post created
 */





//Here are the routes

router.post('/posts',controllers.createpost);
router.get('/users', async(req,res) =>{
    await res.send('List of Users')
})

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;