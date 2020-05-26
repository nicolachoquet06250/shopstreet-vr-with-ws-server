AFRAME.registerComponent('tree', {
	schema: {
		// taille du feuillage
		leafing: { default: 2 }
	},
	init() {
		let trunkHeight = parseInt(this.el.getAttribute('trunkHeight'));

		this.el.setAttribute('geometry', { height: trunkHeight });

		let sphere = document.createElement('a-sphere');
		sphere.setAttribute('material', { color: 'green' });
		sphere.setAttribute('position', {
			x: 0,
			y: trunkHeight,
			z: 0
		});
		sphere.setAttribute('radius', this.data.leafing);

		let box = document.createElement('a-box');
		box.setAttribute('visible', 'false');
		box.setAttribute('width', '1');
		box.setAttribute('height', trunkHeight);
		box.setAttribute('depth', '1');
		box.setAttribute('static-body', '');

		this.el.setAttribute('position', {
			x: this.el.getAttribute('position').x,
			y: trunkHeight / 2,
			z: this.el.getAttribute('position').z
		})
		this.el.appendChild(sphere);
		this.el.appendChild(box);
	}
});

AFRAME.registerPrimitive('a-tree', {
	defaultComponents: {
		geometry: { primitive: 'cylinder', radius: 0.5, height: 7 },
		material: { src: 'assets/images/ecorse_arbre.jpg' },
		tree: {}
	},
	mappings: {
		leafing: 'three.leafing',
		trunkHeight: 'geometry.height',
		trunkRadius: 'geometry.radius'
	}
});
