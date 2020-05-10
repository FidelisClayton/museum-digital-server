import InstitutionObject from '../models/InstitutionObject'
import mapImage from './mapImage'
import InstitutionObjectImage from '../models/InstitutionObjectImage'
import getAssetUrl from '../helpers/getAssetUrl'

const mapInstitutionObject = (institutionObject: any): InstitutionObject => {
  const subsetId = institutionObject.md_subset
  const images: InstitutionObjectImage[] = (institutionObject.object_images || []).map(mapImage)
  const mainImage = images.find((image) => image.isMain)
  const cover = mainImage ? getAssetUrl(subsetId, `${mainImage.folder}/${mainImage.preview}`) : null

  return {
    id: institutionObject.object_id,
    name: institutionObject.object_name,
    description: institutionObject.object_description,
    materialTechnique: institutionObject.object_material_technique,
    dimensions: institutionObject.object_dimensions,
    lastUpdated: institutionObject.object_last_updated,
    type: institutionObject.object_type,
    institution: institutionObject.object_institution,
    images: institutionObject.object_images ? institutionObject.object_images.map(mapImage) : [],
    cover,
    subsetId,
  }
}

export default mapInstitutionObject
