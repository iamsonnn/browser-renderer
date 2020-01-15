const express = require('express')
const puppeteer = require('puppeteer')
const router = express.Router()
let browser = null
puppeteer.launch().then(async (result) => {
    browser = result
})

/* GET home page. */
router.get('/', async (req, res, next) => {
    try {
        const page = await browser.newPage()
        await page.goto(req.query.link)
        res.send(await page.content())
    } catch (e) {
        res.status(400).send("")
    }

})

module.exports = router
