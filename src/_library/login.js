/**
 * login.js - Login Seite für statische Seiten
 *
 * 11.08.2023 created 
 * 07.01.2024 stumpp.name 
 * 13.01.2024 lgom returns true on success, false on failure 
 */

const user_data = [
	//~ { name: "micha",	hash: "YClrdl0eB4YEq9FOrNjunwfqAwhYpsmt8AAFIuYZNMz9Dd5x6QUr9SwzkEZvWHcDQ3qhZFNEZX55Uv9Vl/7ZZA==" },
	//~ { name: "tobias",	hash: "hcmWu0qN/xUO6ci2MQNyzWDTSedD/g2NHTyTVjFkITHgCds94a3JuiS7vvFIVBektAjI6kiJtL9NdYbRsfxChA==" },
	{ name: "japan",	hash: "Z6NFPIx9jDaeTS+IYmi2BaNL0Bq4UvNs4PkswT56/vfsUcaI7sUBLeTbWs8+CtzVAAoreAADc4yJDnWyO+eRdQ==" },
	{ name: "aiko",		hash: "rdnR1C/HTKL9vXo3gLfg3/vLdLvNQMxboD82K7OEqOkQ7Rasvjx7zM1kXSxLeh8pwtyR+1i/3Yy8ngVWUNVi1w==" },
/** backdoor **/
	{ name: "admin",	hash: "x61Ey612Kl2gpFL56FT9weDnpSo4AV8j8+qx2AuTHdRyY036xxzTTrw10Wq3+4qQyB+XURPWx1ONxp3Y3pB37A==" }
];
 
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
 
 
