AFRAME.registerComponent('cloud', {
	schema: {
		color: { type: 'color', default: 'white' },
		type: { type: 'string', default: 'normal' }
	},
	createCloudSphere(position) {
		switch (this.data.type) {
			case 'normal':
				this.data.color = 'white';
				break;
			case 'gray':
				this.data.color = 'lightgray';
				break;
			case 'raining':
				this.data.color = 'darkgray';
				break;
		}
		let sphere = document.createElement('a-sphere');
		sphere.setAttribute('radius', 3);
		sphere.setAttribute('color', this.data.color);
		sphere.setAttribute('position', position);

		return sphere;
	},
	createRain() {
		/*let cloudPositionY = this.el.getAttribute('position').y;

		let rain = document.createElement('a-entity');
		rain.setAttribute('rain', {
			width: 3,
			height: cloudPositionY,
			count: 1000,
			splashBounce: 2.00,
			depthDensity: 1
		});
		rain.setAttribute('position', { x: 0, y: -cloudPositionY, z: 0 });
		console.log(rain);
		this.el.appendChild(rain);*/
		let cloudPositionY = this.el.getAttribute('position').y;

		let goutte = document.createElement('a-box');
		let x = Math.floor(Math.random() * (3 - (-3) + 1)) + (-3);
		let z = Math.floor(Math.random() * (4 - (-4) + 1)) + (-4);

		// x = 0;
		// z = 0;

		goutte.setAttribute('width', 1);
		goutte.setAttribute('height', 1);
		goutte.setAttribute('depth', 1);
		goutte.setAttribute('color', 'blue');
		goutte.setAttribute('static-body', '');
		goutte.classList.add('goutte-de-pluie');
		goutte.setAttribute('position', { x, y: -1, z });

		goutte.addEventListener('collide', e => {
			// console.log(e.detail);
			clearInterval(goutte.interval);
			this.el.removeChild(goutte);

			/*let position1 = e.detail.collider.getAttribute('position');
			let position2 = e.detail.collider.getAttribute('position');
			let position3 = e.detail.collider.getAttribute('position');
			let position4 = e.detail.collider.getAttribute('position');

			let eclaboussure1 = document.createElement('a-box');
			eclaboussure1.setAttribute('width', 1);
			eclaboussure1.setAttribute('height', 1);
			eclaboussure1.setAttribute('depth', 1);
			eclaboussure1.setAttribute('color', 'blue');
			eclaboussure1.setAttribute('position', position1);

			this.el.appendChild(eclaboussure1);*/

			// eclaboussure1.interval = setInterval(() => {
			// 	position1.x -= 0.1;
			// 	position1.y = -70;
			// 	console.log(position1);
			//
			// 	eclaboussure1.setAttribute('position', position1);
			// }, 50);

			/*eclaboussure1.cmp = 0;
			eclaboussure1.interval = setInterval(() => {
				console.log('avant', position1);
				position1.x -= 0.1;
				if (eclaboussure1.cmp <= 10) {
					position1.y += 0.1;
				} else {
					position1.y -= 0.1;
				}
				position1.z += 0.1;
				console.log('apres', position1);

				eclaboussure1.setAttribute('position', position1);

				if (eclaboussure1.cmp === 20) {
					clearInterval(eclaboussure1.interval);
					this.el.removeChild(eclaboussure1);
				}
				eclaboussure1.cmp++;
			}, 50);*/

		})

		goutte.interval = setInterval(() => {
			let new_position = goutte.getAttribute('position');
			new_position.y -= 0.2;
			new_position.x -= 0.1;
			if (new_position.y <= -(cloudPositionY - 1)) {
				goutte.emit('collide', {
					collided: document.querySelector('a-ground'),
					collider: goutte
				});
				// let eclaboussure2 = document.createElement('a-box');
				// eclaboussure2.setAttribute('width', 1);
				// eclaboussure2.setAttribute('height', 1);
				// eclaboussure2.setAttribute('depth', 1);
				// eclaboussure2.setAttribute('position', position2);
				// this.el.appendChild(eclaboussure2);
				// eclaboussure2.cmp = 0;
				// eclaboussure2.interval = setInterval(() => {
				// 	eclaboussure2.cmp++;
				// 	position2.x -= 0.1;
				// 	if (eclaboussure3.cmp <= 4) {
				// 		position2.y += 0.1;
				// 	} else {
				// 		position2.y -= 0.1;
				// 	}
				// 	position2.z += 0.1;
				//
				// 	eclaboussure2.setAttribute('position', position2);
				//
				// 	if (eclaboussure3.cmp === 8) {
				// 		clearInterval(eclaboussure3.interval);
				// 		this.el.removeChild(eclaboussure3);
				// 	}
				// }, 50);
				//
				// let eclaboussure3 = document.createElement('a-box');
				// eclaboussure3.setAttribute('width', 1);
				// eclaboussure3.setAttribute('height', 1);
				// eclaboussure3.setAttribute('depth', 1);
				// eclaboussure3.setAttribute('position', position3);
				// this.el.appendChild(eclaboussure3);
				// eclaboussure3.cmp = 0;
				// eclaboussure3.interval = setInterval(() => {
				// 	eclaboussure3.cmp++;
				// 	position3.x -= 0.1;
				// 	if (eclaboussure3.cmp <= 4) {
				// 		position3.y += 0.1;
				// 	} else {
				// 		position3.y -= 0.1;
				// 	}
				// 	position3.z += 0.1;
				//
				// 	eclaboussure3.setAttribute('position', position3);
				//
				// 	if (eclaboussure3.cmp === 8) {
				// 		clearInterval(eclaboussure3.interval);
				// 		this.el.removeChild(eclaboussure3);
				// 	}
				// }, 50);
				//
				// let eclaboussure4 = document.createElement('a-box');
				// eclaboussure4.setAttribute('width', 1);
				// eclaboussure4.setAttribute('height', 1);
				// eclaboussure4.setAttribute('depth', 1);
				// eclaboussure4.setAttribute('position', new_position);
				// this.el.appendChild(eclaboussure4);
				// eclaboussure4.cmp = 0;
				// eclaboussure4.interval = setInterval(() => {
				// 	eclaboussure4.cmp++;
				// 	position4.x -= 0.1;
				// 	if (eclaboussure4.cmp <= 4) {
				// 		position4.y += 0.1;
				// 	} else {
				// 		position4.y -= 0.1;
				// 	}
				// 	position4.z += 0.1;
				//
				// 	eclaboussure4.setAttribute('position', position4);
				//
				// 	if (eclaboussure3.cmp === 8) {
				// 		clearInterval(eclaboussure3.interval);
				// 		this.el.removeChild(eclaboussure3);
				// 	}
				// }, 50);
			}
			goutte.setAttribute('position', new_position);
		}, 50);

		this.el.appendChild(goutte);
	},

	init() {
		this.el.appendChild(this.createCloudSphere({ x: 0, y: 0, z: 0 }));
		this.el.appendChild(this.createCloudSphere({ x: 1.5, y: 0, z: 0 }));
		this.el.appendChild(this.createCloudSphere({ x: 0, y: 0, z: 1.5 }));
		this.el.appendChild(this.createCloudSphere({ x: 1.5, y: 0, z: 1.5 }));
		this.el.appendChild(this.createCloudSphere({ x: 1.5, y: 0, z: 3 }));
		this.el.appendChild(this.createCloudSphere({ x: 3, y: 0, z: 1.5 }));
		this.el.appendChild(this.createCloudSphere({ x: 3, y: 0, z: 3 }));
		this.el.appendChild(this.createCloudSphere({ x: 3, y: 0, z: 4.5 }));
		this.el.appendChild(this.createCloudSphere({ x: 4.5, y: 0, z: 3 }));
		this.el.appendChild(this.createCloudSphere({ x: 4.5, y: 0, z: 4.5 }));

		switch (this.data.type) {
			case 'raining':
				this.createRain();
				setInterval(() => this.createRain(), 100);
				break;
		}
	}
});

AFRAME.registerPrimitive('a-cloud', {
	defaultComponents: {
		cloud: {}
	},
	mappings: {
		color: 'cloud.color',
		type: 'cloud.type'
	}
})
