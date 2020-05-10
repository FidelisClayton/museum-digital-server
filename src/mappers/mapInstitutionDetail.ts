import InstitutionDetail from '../models/InstitutionDetail'
import mapCollection from './mapCollection'
import getAssetUrl from '../helpers/getAssetUrl'

const mapInstitutionDetail = (institution: any): InstitutionDetail => {
  const subsetId = institution.subset

  return {
    id: institution.institution_id,
    isil: institution.institution_isil,
    name: institution.institution_name,
    phone: institution.institution_telnr,
    fax: institution.institution_fax,
    image: institution.institution_image ? getAssetUrl(subsetId, institution.institution_image) : null,
    url: institution.institution_url,
    email: institution.institution_mail,
    description: institution.institution_description,
    street: institution.institution_street,
    zipCode: institution.institution_zipcode,
    place: institution.institution_place,
    longitude: institution.institution_longitude,
    latitude: institution.institution_latitude,
    objectsCount: institution.institution_number_of_objects,
    collections: institution.collections
      ? Object.values(institution.collections).map((collection) => mapCollection(subsetId, collection))
      : [],
    top5Objects: [],
    subsetId,
  }
}

export default mapInstitutionDetail
