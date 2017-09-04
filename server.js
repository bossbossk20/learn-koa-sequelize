import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import router from './routes'
import test101Model from './models/test101.model'

const app = new Koa()

app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

const port = 4000

app.listen(port, () => {
  console.log(`running on port : ${port}`)
})
