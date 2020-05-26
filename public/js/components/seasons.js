AFRAME.registerComponent('seasons', {
	schema: {
		active: { default: true }
	},
	init() {
		if (this.data.active) {
			// let currentYear =  (new Date()).getFullYear();
			// fetch(`https://kalendrier.ouest-france.fr/dates-changements-saisons-${currentYear}.html`,
			// 	{
			// 			headers: {
			// 				Host: 'kalendrier.ouest-france.fr',
			// 				Referer: `https://kalendrier.ouest-france.fr/dates-changements-saisons-${currentYear}.html`,
			// 				Origin: `https://kalendrier.ouest-france.fr/dates-changements-saisons-${currentYear}.html`,
			// 				'Access-Control-Allow-Origin': '*'
			// 			}
			// 		}).then(r => r.text())
			// 	.then(html => {
			// 		let parser = new DOMParser();
			// 		let dom = parser.parseFromString(html, 'text/html');
			// 		console.log(dom.querySelector('table#saisons'));
			// 	});

			fetch('https://en.wikipedia.org/w/api.php?action=parse&page=Saison&format=json').then(r => r.json()).then(json => {
				let text = json.parse.text;
				let parser = new DOMParser();
				let dom = parser.parseFromString(text, 'text/html');
				console.log(dom.querySelector('.wikitable.right'));
			});
		}
	}
});
