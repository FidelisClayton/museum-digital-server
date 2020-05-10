import Subset from '../models/Subset'
import { SPECIAL_SUBSETS } from '../constants'

type SubsetFromAPI = [number, number, string, string]

const getSubsetImage = (subsetId: string): string => {
  return `${process.env.FIREBASE_ASSETS_BASE_PATH}/${subsetId}-cover.jpg?alt=media`
}

const getSlug = (address: string): string => {
  return address.split('.')[0].split('/').reverse()[0]
}

const mapSubsets = (subsetFromApi: { [key: string]: SubsetFromAPI }): Subset[] => {
  return Object.entries(subsetFromApi).reduce<Subset[]>((subsets, [objectsCount, subset]) => {
    const subsetId = getSlug(subset[2])

    return [
      ...subsets,
      {
        id: subsetId,
        collectionsCount: subset[1],
        museumsCount: subset[0],
        name: subset[3],
        objectsCount: parseInt(objectsCount, 10),
        image: getSubsetImage(subsetId),
        type: SPECIAL_SUBSETS.includes(subsetId) ? 'special' : 'state',
      },
    ]
  }, [])
}

export default mapSubsets
