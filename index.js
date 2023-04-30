const Router = require("./framework/Router");
const PORT = process.env.PORT || 5000;
const Application = require("./framework/Application")

const app = new Application()

const router = new Router()

router.get('/users', (req, res) => {
    res.end("You send request to /users")
})

router.get('/posts', (req, res) => {
    res.end("You send request to /posts")
})

app.addRouter(router)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))