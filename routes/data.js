const express = require('express');
const router = express.Router();

const {getAll, getData, createData, deleteData, updateData} = require('../controllers/data')

router.get('/', getAll)
router.get('/:id', getData)
router.post('/', createData)
router.delete('/:id', deleteData)
router.patch('/:id', updateData)

module.exports = router;