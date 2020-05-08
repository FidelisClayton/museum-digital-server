import InstitutionObjectImage from './InstitutionObjectImage'

export default interface InstitutionObject {
  id: number
  subsetId: string
  type: string
  name: string
  description: string
  materialTechnique?: string
  dimensions: string
  lastUpdated: string
  institution: InstitutionObject
  images: InstitutionObjectImage[]
}
