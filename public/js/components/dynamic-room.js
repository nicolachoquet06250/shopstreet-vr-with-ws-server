AFRAME.registerComponent('dynamic-room', {
	schema: {
		room: {default: 'default'},
		debug: {default: false}
	},
	init: function () {
		var el = this.el;
		var params = this.getUrlParams();

		// Set local user's name
		var player = document.getElementById('player');
		var myNametag = player.querySelector('.nametag');
		// myNametag.setAttribute('text', 'value', params.username);

		// Setup networked-scene
		var networkedComp = {
			app: 'shop-street',
			room: this.data.room,
			adapter: 'webrtc',
			audio: true,
			debug: this.data.debug
		};
		console.info('Init networked-aframe with settings:', networkedComp);
		el.setAttribute('networked-scene', networkedComp);
	},

	getUrlParams: function () {
		var match;
		var pl = /\+/g;  // Regex for replacing addition symbol with a space
		var search = /([^&=]+)=?([^&]*)/g;
		var decode = function (s) { return decodeURIComponent(s.replace(pl, ' ')); };
		var query = window.location.search.substring(1);
		var urlParams = {};

		match = search.exec(query);
		while (match) {
			urlParams[decode(match[1])] = decode(match[2]);
			match = search.exec(query);
		}
		return urlParams;
	}
});
