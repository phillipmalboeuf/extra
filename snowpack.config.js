// Consult https://www.snowpack.dev to learn about these options
module.exports = {
	extends: '@sveltejs/snowpack-config',
	mount: {
		'src/components': '/_components',
		'src/clients': '/_clients'
	},
	alias: {
		$components: './src/components',
		$clients: './src/clients'
	}
};
