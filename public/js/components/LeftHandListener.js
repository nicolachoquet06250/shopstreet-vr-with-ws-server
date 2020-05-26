AFRAME.registerComponent('left-hand-listener', {
	init: function () {
		this.el.addEventListener('pointingstart', e => pointing(e, 'start', 'left'))
		this.el.addEventListener('pointingend', e => pointing(e, 'end', 'left'))

		this.el.addEventListener('pointup', e => point(e, 'up', 'left'))
		this.el.addEventListener('pointdown', e => point(e, 'down', 'left'))

		this.el.addEventListener('gripup', e => grip(e, 'up', 'left'))
		this.el.addEventListener('gripdown', e => grip(e, 'down', 'left'))
	}
});
