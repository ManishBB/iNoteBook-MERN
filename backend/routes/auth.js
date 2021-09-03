
const express = require('express')

const router = express.Router()

router.get('/', (req,res)=>{
    
    obj = {
        name : 'Manish',
        number : 7224
    }

    res.json(obj)
})

module.exports = router