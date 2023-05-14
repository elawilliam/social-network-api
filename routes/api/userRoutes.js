const router = require('express').Router();

const {
    getUser,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// GET all & POST //
router.route('/').get(getUser).post(createUser);

// GET one user, PUT & DELETE by user's ID //
router.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

// POST & DELETE a friend by ID //
router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(deleteFriend);

module.exports = router;