const express = require('express')
const router = express.Router()
const {
  registerUser,
  loginUser,
  getUser,
  getSingleUser,
  getUsersInventory,
  updateUser,
  updateUserInventory,
  deleteUser,
} = require('../controllers/userController')

const { protect } = require('../middleware/authMiddleware')

// Route prefix '/api/users'

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/', getUser)
router.get('/user-info/:userId', protect, getSingleUser)
router.get('/inventory/:userId', getUsersInventory)
router.put('/update-user-info/:userId', protect, updateUser)
router.put('/update-user-inventory/:userId', protect, updateUserInventory)
router.delete('/update-user-info/:userId', protect, deleteUser)

module.exports = router
