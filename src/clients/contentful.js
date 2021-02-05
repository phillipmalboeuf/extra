import axios from 'axios'

const contentful = {
  space: 'vb8d8nqavgo6',
  accessToken: 'j__74MmkL9qeR_oaiPoFVj5MmXsu0H8QbH6WI_I9S00'
}

export const entries = async (type, order='-sys.createdAt', locale='fr-CA') => {
  const response = await axios.get(`https://cdn.contentful.com/spaces/${contentful.space}/entries?access_token=${contentful.accessToken}&content_type=${type}&locale=${locale}&order=${order}&include=2`)
  return response.data
}

export const entry = async (type, id, locale='fr-CA') => {
  const response = await axios.get(`https://cdn.contentful.com/spaces/${contentful.space}/entries?access_token=${contentful.accessToken}&content_type=${type}&sys.id=${id}&locale=${locale}&include=2`)
  const json = response.data
  return {
    ...json,
    item: json.items[0]
  }
}

export const asset = async (id) => {
  const response = await axios.get(`https://cdn.contentful.com/spaces/${contentful.space}/assets/${id}?access_token=${contentful.accessToken}`)
  const json = response.data
  return json
}

export function findEntry(content, id) {
  return content.includes.Entry.find(entry => entry.sys.id === id)
}

export function findAsset(content, id) {
  return content.includes.Asset.find(asset => asset.sys.id === id)
}
