import Institution from '../models/Institution'

const mapInstitutions = (institutions: any[]): Institution[] => {
  return institutions.map((institution) => ({
    id: institution.institution_id,
    name: institution.institution_name,
    place: institution.institution_place,
    url: institution.institution_url,
    image: institution.institution_image,
    collectionsCount: institution.institution_collections,
    objectsCount: institution.institution_objects,
  }))
}

export default mapInstitutions
