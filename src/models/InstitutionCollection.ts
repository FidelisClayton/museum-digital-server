export default interface InstitutionCollection {
  id: number
  name: string
  description: string
  objectsCount: number
  image: string
  subCollections?: InstitutionCollection[]
}
