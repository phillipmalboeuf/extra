import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import cookie from 'cookie'
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const locale = l => async (req, res, next) => {
	req.locale = l
	next()
}

function session(req, res) {
	const { visits } = cookie.parse(req.headers.cookie || '')
	res.setHeader('Set-Cookie', cookie.serialize('visits', String(visits ? parseInt(visits) + 1 : 0), { httpOnly: true }))
	return {
		locale: req.locale
	}
}

polka()
	.use(
		'/en',
		locale('en'),
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({ session })
	)
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({ session })
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
