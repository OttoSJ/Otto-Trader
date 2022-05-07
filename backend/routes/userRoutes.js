const express = require('express')
const router = express.Router()
const {
  registerUser,
  loginUser,
  getUser,
  getSingleUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController')

const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/', getUser)
router.get('/user-info/:userId', protect, getSingleUser)
router.put('/update-user-info/:userId', protect, updateUser)
router.delete('/update-user-info/:userId', deleteUser)

module.exports = router
