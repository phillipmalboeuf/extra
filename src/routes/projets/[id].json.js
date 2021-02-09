import { entries, findAsset } from '../../clients/contentful.js'

export async function get(req, res) {
  const projects = await entries('projet', '-fields.date', req.locale)

	res.writeHead(200, {
		'Content-Type': 'application/json'
	})

  let i
	res.end(JSON.stringify({ project: projects.items.filter((item, index) => {
    if (item.fields.id === req.params.id) {
      i = index
      return true
    }
    return false
  })
    .map(item => ({
      ...item,
      thumbnail: findAsset(projects, item.fields.thumbnail.sys.id),
      hero: item.fields.hero && findAsset(projects, item.fields.hero.sys.id),
      next: i < projects.items.length && projects.items[i + 1],
      previous: i > 0 && projects.items[i - 1]
    }))[0],
  includes: projects.includes }))
}