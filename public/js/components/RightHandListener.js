AFRAME.registerComponent('right-hand-listener', {
	init: function () {
		this.el.addEventListener('pointingstart', e => pointing(e, 'start', 'right'))
		this.el.addEventListener('pointingend', e => pointing(e, 'end', 'right'))

		this.el.addEventListener('pointup', e => point(e, 'up', 'right'))
		this.el.addEventListener('pointdown', e => point(e, 'down', 'right'))

		this.el.addEventListener('gripup', e => grip(e, 'up', 'right'))
		this.el.addEventListener('gripdown', e => grip(e, 'down', 'right'))
	}
});
