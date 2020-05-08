export default interface InstitutionObjectImage {
  id: number
  name: string
  isMain: boolean
  type: string
  folder: string
  filenameLocation: string
  preview?: string
  description: string
  owner: string
  creator: string
  rights: string
}
