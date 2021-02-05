import { entry, asset } from '../clients/contentful.js'

export async function get(req, res) {
  const contact = await entry('contact', '6xck0ECuEVYO6N1UAGCp5D')

	res.writeHead(200, {
		'Content-Type': 'application/json'
	})

	res.end(JSON.stringify({ contact }))
}