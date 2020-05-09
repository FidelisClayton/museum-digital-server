import axios from 'axios'

import Subset from '../models/Subset'
import mapSubsets from '../mappers/mapSubsets'
import Institution from '../models/Institution'
import mapInstitutions from '../mappers/mapInstitutions'
import mapInstitutionDetail from '../mappers/mapInstitutionDetail'
import InstitutionDetail from '../models/InstitutionDetail'
import InstitutionObject from '../models/InstitutionObject'
import mapInstitutionObject from '../mappers/mapObject'
import InstitutionCollection from '../models/InstitutionCollection'
import mapCollection from '../mappers/mapCollection'

const instance = axios.create({
  baseURL: '',
})

instance.interceptors.request.use((config) => {
  const currentParams = config.params || {}
  const subsetId = config.url.replace('/', '')

  return {
    ...config,
    url: `https://${subsetId}.museum-digital.de`,
    params: {
      ...currentParams,
      output: 'json',
    },
  }
})

export const getSubsets = (): Promise<Subset[]> => {
  return axios.get('https://www.museum-digital.de?output=json').then((response) => mapSubsets(response.data))
}

export const getInstitutions = (subsetId: string): Promise<Institution[]> => {
  return instance
    .get(subsetId, {
      params: {
        t: 'museum',
      },
    })
    .then((response) => mapInstitutions(subsetId, response.data))
}

export const getObject = (subsetId: string, objectId: number): Promise<InstitutionObject> => {
  return instance
    .get(subsetId, {
      params: {
        t: 'objekt',
        oges: objectId,
      },
    })
    .then((response) => mapInstitutionObject(response.data))
}

export const getObjects = async ({
  subsetId,
  institutionId,
  collectionId,
}: {
  subsetId: string
  institutionId: number
  collectionId?: number
}): Promise<InstitutionObject[]> => {
  const objectsList = await instance.get(`/${subsetId}`, {
    params: {
      t: 'listen',
      instnr: institutionId,
      gesusa: collectionId,
    },
  })

  const objectsIds: number[] = objectsList.data.map(({ objekt_id }) => objekt_id)

  return Promise.all(objectsIds.map((objectId) => getObject(subsetId, objectId)))
}

export const getCollection = async (
  subsetId: string,
  institutionId: number,
  collectionId: number
): Promise<InstitutionCollection> => {
  return instance
    .get(subsetId, { params: { t: 'sammlung', instnr: institutionId, gesusa: collectionId } })
    .then((response) => mapCollection(response.data))
}

export const getCollections = async (subsetId: string): Promise<InstitutionCollection[]> => {
  return instance.get(subsetId, { params: { t: 'collection' } }).then((response) => response.data)
}

export const getInstitution = async (subsetId: string, institutionId: number): Promise<InstitutionDetail> => {
  const objects = await getObjects({ subsetId, institutionId })
  const top5Objects = objects.slice(0, 5)

  return instance
    .get(subsetId, {
      params: {
        t: 'institution',
        instnr: institutionId,
      },
    })
    .then((response) => ({ ...mapInstitutionDetail(response.data), top5Objects }))
}
