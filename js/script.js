import { Router } from'./router.js'

const router = new Router()
router.add('/', "/pages/home.html",)
router.add("/TheUniverse", "/pages/Universo.html",)
router.add("/Explorer", "/pages/Exploração.html",)

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()