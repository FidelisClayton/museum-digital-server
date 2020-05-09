import Institution from '../models/Institution'

const mapInstitutions = (subsetId: string, institutions: any[]): Institution[] => {
  return institutions.map((institution) => {
    const image =
      institution.institution_image !== ''
        ? `https://${subsetId}.museum-digital.de/data/${subsetId}/${institution.institution_image}`
        : null

    return {
      id: institution.institution_id,
      name: institution.institution_name,
      place: institution.institution_place,
      url: institution.institution_url,
      collectionsCount: institution.institution_collections,
      objectsCount: institution.institution_objects,
      image,
    }
  })
}

export default mapInstitutions
