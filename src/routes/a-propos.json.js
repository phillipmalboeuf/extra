import { entry, asset } from '../clients/contentful.js'

export async function get(req, res) {
  const page = await entry('page', 'LmCTtqL9YXrY9sNtl6E4p', req.locale)

	res.writeHead(200, {
		'Content-Type': 'application/json'
	})

	res.end(JSON.stringify({ page }))
}