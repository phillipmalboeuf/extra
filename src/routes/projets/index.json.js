import { entries } from '../../clients/contentful.js'

export async function get(req, res) {
  const projects = await entries('projet', '-fields.date', req.locale)

	res.writeHead(200, {
		'Content-Type': 'application/json'
	})

	res.end(JSON.stringify({ projects }))
}