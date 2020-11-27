var express = require('express');
var router = express.Router();

var db = require('../queries');

/**
 * @swagger
 * definitions:
 *   Puppy:
 *     properties:
 *       name:
 *         type: string
 *       breed:
 *         type: string
 *       age:
 *         type: integer
 *       sex:
 *         type: string
 */

/**
 * @swagger
 * /api/tokenTypes:
 *   get:
 *     tags:
 *       - tokenTypes
 *     description: Returns all tokenTypes
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of tokenTypes
 *         schema:
 *           $ref: '#/definitions/tokenType'
 */
router.get('/api/tokenTypes', db.getAlltokenTypes);

/**
 * @swagger
 * /api/puppies/{id}:
 *   get:
 *     tags:
 *       - Puppies
 *     description: Returns a single puppy
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Puppy's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single puppy
 *         schema:
 *           $ref: '#/definitions/Puppy'
 */
router.get('/api/tokenTypes/:id', db.getSinglePuppy);

/**
 * @swagger
 * /api/tokenTypes:
 *   post:
 *     tags:
 *       - tokenTypes
 *     description: Creates a new puppy
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: puppy
 *         description: Puppy object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Puppy'
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/api/tokenTypes', db.createPuppy);

/**
 * @swagger
 * /api/puppies/{id}:
 *   put:
 *     tags:
 *       - Puppies
 *     description: Updates a single puppy
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Puppy's id
 *         in: path
 *         required: true
 *         type: integer
 *       - name: puppy
 *         description: Puppy object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Puppy'
 *     responses:
 *       200:
 *         description: Successfully updated
 */
router.put('/api/tokenTypes/:id', db.updatePuppy);

/**
 * @swagger
 * /api/puppies/{id}:
 *   delete:
 *     tags:
 *       - Puppies
 *     description: Deletes a single puppy
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Puppy's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
router.delete('/api/tokenTypes/:id', db.removePuppy);


module.exports = router;
