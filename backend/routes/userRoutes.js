const express = require('express')
const router = express.Router()
const {
  registerUser,
  loginUser,
  getUser,
  updateUser,
} = require('../controllers/userController')

const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/', getUser)
router.put('/update-user-info/:userId', protect, updateUser)

module.exports = router
