import InstitutionObjectImage from '../models/InstitutionObjectImage'

const mapImage = (image: any): InstitutionObjectImage => ({
  id: image.quell_id,
  name: image.name,
  isMain: image.is_main === 'j',
  type: image.type,
  owner: image.owner,
  folder: image.folder,
  rights: image.rights,
  creator: image.creator,
  description: image.beschreibung,
  filenameLocation: image.filename_loc,
  preview: image.preview,
})

export default mapImage
