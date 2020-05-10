const getAssetUrl = (subsetId: string, assetPath: string) => {
  return `https://${subsetId}.museum-digital.de/data/${subsetId}/${assetPath}`
}

export default getAssetUrl
