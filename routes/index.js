import Router from 'koa-router'
import test101Model from './../models/test101.model'

const router = Router()

router.get('/test101', async(ctx) => {
  let data = await test101Model.findAll()
  ctx.body = data
})

router.post('/test101', async(ctx) => {
  const { name, surname } = ctx.request.body
  let data = await test101Model.create({ name, surname })
  ctx.body = data
})

module.exports = router