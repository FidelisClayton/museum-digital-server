import InstitutionDetail from '../models/InstitutionDetail'
import mapCollection from './mapCollection'

const mapInstitutionDetail = (institution: any): InstitutionDetail => {
  return {
    id: institution.institution_id,
    isil: institution.institution_isil,
    name: institution.institution_name,
    phone: institution.institution_telnr,
    fax: institution.institution_fax,
    image: institution.insitution_image,
    url: institution.institution_url,
    email: institution.institution_mail,
    description: institution.institution_description,
    street: institution.institution_street,
    zipCode: institution.institution_zipcode,
    place: institution.institution_place,
    longitude: institution.institution_longitude,
    latitude: institution.institution_latitude,
    objectsCount: institution.institution_number_of_objects,
    subsetId: institution.institution_subset,
    collections: institution.collections ? Object.values(institution.collections).map(mapCollection) : [],
    top5Objects: [],
  }
}

export default mapInstitutionDetail
