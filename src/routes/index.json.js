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
  const page = await entry('page', '2ZqXhnyr1p8XcClBDO3Lss', req.locale)
	const hero = await asset(heroes[parseInt(Math.floor(Math.random() * 7))])

	res.writeHead(200, {
		'Content-Type': 'application/json'
	})

	res.end(JSON.stringify({ page, hero }))
}