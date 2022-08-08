const {Router} = require('express')
const router = Router()
const auth = require('./middleware/auth')

const userRouter = require('./router/user')
const categoryRouter = require('./router/category')

router.get('/', auth, async(req,res)=>{
    res.render('index',{
        title: 'Boshqaruv sahifasi'
    })
})

router.use('/user', userRouter)
router.use('/category', categoryRouter)                 

module.exports = router