import InstitutionCollection from './InstitutionCollection'
import InstitutionObject from './InstitutionObject'

export default interface InstitutionDetail {
  id: number
  isil: string
  name: string
  phone: string
  fax: string
  image: string
  url: string
  email: string
  description: string
  street: string
  zipCode: string
  place: string
  longitude: number
  latitude: number
  objectsCount: number
  subsetId: string
  collections: InstitutionCollection[]
  top5Objects: InstitutionObject[]
}
