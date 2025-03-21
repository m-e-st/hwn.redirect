/**
 * login.js - Login Seite für statische Seiten
 *
 * 11.08.2023 created 
 * 07.01.2024 stumpp.name 
 * 13.01.2024 lgom returns true on success, false on failure 
 * 21.03.2025 user_data is now included from -/_data/user.js (see javascript.njk)
 */

 
const user =(function () {
	
	function _search(username='') {
		let name = username.toLocaleLowerCase();
		let hash = ''
		for (let i = 0; i < user_data.length; i++)
			if (name.localeCompare(user_data[i].name) == 0) {
				hash = user_data[i].hash;
				break;
			}
		return hash;
	}
	
	function _stash(cmd, username='',password='') {
		const genAuth = new jsSHA("SHA-512", "TEXT", { encoding: "UTF8"} );
		genAuth.update('Familie Stumpp 2024');
		const _user_="user.name";
		const _hash_="user.hash";
		switch(cmd) {
			case 'set':
				const found = _search(username);
				if (found) {
					const hashObj = new jsSHA("SHA-512", "TEXT", { encoding: "UTF8"} );
					hashObj.update(password);
					if (found == (hashObj.getHash("B64"))) {
						sessionStorage.setItem(_hash_, genAuth.getHash('B64'));
						sessionStorage.setItem(_user_, username);
						return true;
					}
				}
				return false;
			case 'get':
				if (! sessionStorage.getItem(_hash_)) return '';
				if (sessionStorage.getItem(_hash_) != genAuth.getHash('B64')) return '';
				return sessionStorage.getItem(_user_);
			case 'del':
				sessionStorage.removeItem(_hash_);
				sessionStorage.removeItem(_user_);
				return true;
			}
		return 'error: ' + cmd;
	}
	
	return {
		logon: function(username, password) {
				return _stash('set', username, password);
			},
		logoff: function() {
				return _stash('del');
			},
		name: function() {
				return _stash("get");	
			},
		status: function() {
				return (_stash("get").length > 0);
			}
    }
}());
 
 
