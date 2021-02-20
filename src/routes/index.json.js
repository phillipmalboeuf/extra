import cookie from 'cookie'
import { entry, asset } from '../clients/contentful.js'

const heroes = [
  '2jBoCTNlJn92VihclDOSlw',
  '4as6R4rcnE5iLVTXsarPwV',
  '4w9bzCRAGxu97BIhuwwnM4',
	'1MSVmJUDJ1miEudr5njcld',
	'6TWihwMfZdHYG9j4vjrfvB',
	'2sixu7OIviJgql9I92czeu'
]

export async function get(req, res) {
	const { visits } = cookie.parse(req.headers.cookie || '')

  const page = await entry('page', '2ZqXhnyr1p8XcClBDO3Lss', req.locale)
	const hero = await asset(heroes[visits ? parseInt(visits) % heroes.length : 0])

	res.writeHead(200, {
		'Content-Type': 'application/json'
	})

	res.end(JSON.stringify({ page, hero }))
}