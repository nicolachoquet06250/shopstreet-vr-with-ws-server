AFRAME.registerComponent('meteo', {
	schema: {
		active: { default: true }
	},
	createCloud(position) {
		let cloud = document.createElement('a-cloud');
		cloud.setAttribute('position', position);
		cloud.setAttribute('type', 'raining');
		cloud.interval = setInterval(() => {
			let new_position = cloud.getAttribute('position');
			new_position.x += 0.1;
			cloud.setAttribute('position', new_position);
		}, 50);
		return cloud;
	},
	addCloud(cloud) {
		this.el.appendChild(cloud);
	},
	removeCloud(cloud) {
		// clearInterval(cloud.interval);
		// this.el.removeChild(cloud);
	},

	init: function () {
		this.openstreetmap_url = 'https://nominatim.openstreetmap.org/reverse?format=json';
		this.longParam = 'lon';
		this.latParam = 'lat';
		this.addressdetails = '1';
		this.meteo_url = 'https://www.prevision-meteo.ch/services/json/';

		let defaultLocation = {
			coords: {
				accuracy: 31,
				altitude: null,
				altitudeAccuracy: null,
				heading: null,
				latitude: 43.6238698,
				longitude: 7.001978599999999,
				speed: null
			}
		};

		if (this.data.active) {
			let getPosition = new Promise((resolve, reject) => {
				let valid = false;
				navigator.geolocation.getCurrentPosition(position => {
					valid = true;
					resolve(position);
				}, e => reject(e));
				if (!valid) resolve(defaultLocation);
			});

			getPosition
				.then(position => fetch(`${this.openstreetmap_url}&${this.latParam}=${position.coords.latitude}&${this.longParam}=${position.coords.longitude}&addressdetails=${this.addressdetails}`))
				.then(r => r.json())
				.then(json => json.address.town)
				.then(city => fetch(`${this.meteo_url}${city}`))
				.then(r => r.json())
				.then(json => {
					console.log(json);

					// let cloud = this.createCloud({ x: 5, y: 100, z: 50 });
					// this.addCloud(cloud);

					for (let i = 0; i <= 20; i++) {
						new Promise(resolve => {
							resolve({
								x: Math.floor(Math.random() * (20 - (-20) + 1)) + (-20),
								y: 100,
								z: Math.floor(Math.random() * (20 - (-20) + 1)) + (-20)
							});
						}).then(position => {
							let cloud = this.createCloud(position);
							this.addCloud(cloud);
							setTimeout(() => this.removeCloud(cloud), 15000);
						})

					}
				}).catch(e => {
					document.querySelector('a-text').setAttribute('value', 'ERROR: ' + e);
				});
		}
	}
});

/*AFRAME.registerComponent('position-reader', {
	schema: {
		oldPosition: {
			type: 'vec3',
			default: {x: 0, y: 0, z: 0}
		}
	},
	tick: function () {
		var position = this.el.getAttribute('position');
		if (position.x !== this.data.oldPosition.x || position.y !== this.data.oldPosition.y || position.z !== this.data.oldPosition.z) {
			this.data.oldPosition = {
				x: position.x,
				y: position.y,
				z: position.z
			};
			this.el.dispatchEvent(
				new CustomEvent("position-change", {
					detail: {
						newPosition: {
							x: position.x,
							y: position.y,
							z: position.z
						},
						oldPosition: this.data.oldPosition
					},
					bubbles: true,
					cancelable: true
				})
			);
			this.el.addEventListener('position-change', e => {
				console.log(e);
			})
			// this.el.setAttribute('position', `${position.x} ${position.y} ${position.z}`);
		}
	}
});*/
