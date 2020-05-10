import InstitutionCollection from '../models/InstitutionCollection'
import getAssetUrl from '../helpers/getAssetUrl'

const mapCollection = (subsetId: string, collection: any): InstitutionCollection => ({
  id: collection.collection_id,
  name: collection.collection_name,
  description: collection.collection_description,
  objectsCount: collection.collection_number_of_objects,
  subCollections: collection.collection_subcollections
    ? Object.values(collection.collection_subcollections).map((collection) => mapCollection(subsetId, collection))
    : [],
  image: getAssetUrl(subsetId, collection.collection_image),
})

export default mapCollection
