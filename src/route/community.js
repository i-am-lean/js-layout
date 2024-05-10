// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
const Test = require('../class/test')
// Підключіть інші файли роутів, якщо є

// Об'єднайте файли роутів за потреби
router.get('/', function (req,res) {
    res.render('community', {
        name: 'community',
        component: [],

        title: 'Комʼюніті',

        data: {
            test: new Test().test,
        },
                
    })
    
})
// Використовуйте інші файли роутів, якщо є

// Експортуємо глобальний роутер
module.exports = router
