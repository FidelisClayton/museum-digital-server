import Subset from '../models/Subset'

type SubsetFromAPI = [number, number, string, string]

const getSlug = (address: string): string => {
  return address.split('.')[0].split('/').reverse()[0]
}

const mapSubsets = (subsetFromApi: { [key: string]: SubsetFromAPI }): Subset[] => {
  return Object.entries(subsetFromApi).reduce<Subset[]>((subsets, [objectsCount, subset]) => {
    return [
      ...subsets,
      {
        id: getSlug(subset[2]),
        collectionsCount: subset[1],
        museumsCount: subset[0],
        name: subset[3],
        objectsCount: parseInt(objectsCount, 10),
        image: '',
      },
    ]
  }, [])
}

export default mapSubsets
