import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const locale = l => async (req, res, next) => {
	req.locale = l
	next()
}

polka()
	.use(
		'/en',
		locale('en'),
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({
			session: (req, res) => ({
				locale: req.locale
			})
		})
	)
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({
			session: (req, res) => ({
				locale: req.locale
			})
		})
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
