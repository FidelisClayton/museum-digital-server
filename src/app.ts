import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import { getSubsets, getInstitutions, getInstitution, getObject, getCollection, getObjects } from './services/api'

dotenv.load()

const app = express()
const port = Number(process.env.PORT) || 3000

app.use(cors())

app.get('/api/v1/subsets', async (_, res) => {
  const subsets = await getSubsets()

  return res.json(subsets).send()
})

app.get('/api/v1/subsets/:subsetId/institutions', async (req, res) => {
  const subsetId = req.params.subsetId

  try {
    const institutions = await getInstitutions(subsetId)
    return res.json(institutions).send()
  } catch (e) {
    console.log(e)

    return res.sendStatus(500)
  }
})

app.get('/api/v1/subsets/:subsetId/institutions/:institutionId', async (req, res) => {
  const { subsetId, institutionId } = req.params

  try {
    const institution = await getInstitution(subsetId, parseInt(institutionId))

    return res.json(institution).send()
  } catch (e) {
    console.log(e)

    return res.sendStatus(500)
  }
})

app.get('/api/v1/subsets/:subsetId/object/:objectId', async (req, res) => {
  const { subsetId, objectId } = req.params

  try {
    const institutionObject = await getObject(subsetId, parseInt(objectId))

    return res.json(institutionObject).send()
  } catch (e) {
    console.log(e)

    return res.sendStatus(500)
  }
})

app.get('/api/v1/subsets/:subsetId/institutions/:institutionId/collections', async (req, res) => {
  const { subsetId, institutionId } = req.params

  try {
    const institution = await getInstitution(subsetId, Number(institutionId))

    return res.json(institution.collections).send()
  } catch (e) {
    console.log(e)

    return res.sendStatus(500)
  }
})

app.get('/api/v1/subsets/:subsetId/institutions/:institutionId/collections/:collectionId', async (req, res) => {
  const { subsetId, institutionId, collectionId } = req.params

  try {
    const institutionCollection = await getCollection(subsetId, Number(institutionId), Number(collectionId))

    return res.json(institutionCollection).send()
  } catch (e) {
    console.log(e)

    return res.sendStatus(500)
  }
})

app.get('/api/v1/subsets/:subsetId/institutions/:institutionId/collections/:collectionId/objects', async (req, res) => {
  const { subsetId, institutionId, collectionId } = req.params

  try {
    const collectionObjects = await getObjects({
      subsetId,
      institutionId: Number(institutionId),
      collectionId: Number(collectionId),
    })

    return res.json(collectionObjects).send()
  } catch (e) {
    console.log(e)

    return res.sendStatus(500)
  }
})

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is listening at port ${port}`)
  } else {
    console.log(error)
  }
})
