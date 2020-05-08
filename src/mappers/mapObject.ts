import InstitutionObject from '../models/InstitutionObject'
import mapImage from './mapImage'

const mapInstitutionObject = (institutionObject: any): InstitutionObject => ({
  id: institutionObject.object_id,
  subsetId: institutionObject.object_md_subset,
  name: institutionObject.object_name,
  description: institutionObject.object_description,
  materialTechnique: institutionObject.object_material_technique,
  dimensions: institutionObject.object_dimensions,
  lastUpdated: institutionObject.object_last_updated,
  type: institutionObject.object_type,
  institution: institutionObject.object_institution,
  images: institutionObject.object_images ? institutionObject.object_images.map(mapImage) : [],
})

export default mapInstitutionObject
