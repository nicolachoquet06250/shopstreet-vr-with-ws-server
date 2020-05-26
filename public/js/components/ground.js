AFRAME.registerComponent('ground', {
	init() {
		this.el.setAttribute('color', '#47BF92');
	}
});

AFRAME.registerPrimitive('a-ground', {
	defaultComponents: {
		ground: {},
		'static-body': {},
		geometry: { primitive: 'plane' },
		position: { x: 0, y: 0, z: 0 },
		rotation: { x: -90, y: 0, z: 0 }
	},
	mappings: {
		width: 'geometry.width',
		height: 'geometry.height',
		color: 'material.color'
	}
})
