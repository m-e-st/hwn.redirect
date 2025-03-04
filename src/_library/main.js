/***
 * main.js für friends sprachcafe
 * 
 *
 */
 /* das sind die beiden Buttons oben links im Header */
const buttonLogin = document.getElementById('layoutLogin');
const buttonMail = document.getElementById('layoutMail');
let statusLogin = 0;
let statusMail = 0;

/*** initialization on document ready ***/

document.addEventListener("DOMContentLoaded", function(event) {

	if (buttonLogin) {
		setLucideStroke(buttonLogin, 'transparent', 1);
		buttonLogin.addEventListener('click', actionLogin);
		setLucideStroke(buttonLogin, '#888', 1);

	}
	if (buttonMail) {
		setLucideStroke(buttonMail, 'transparent', 1);
		buttonMail.addEventListener('click', actionMail);
		setLucideStroke(buttonMail, '#888', 1);
	signIn( user.status());
	console.log ("user status:", user.name(), user.status() );
	}

//	displayMain();
  // intervalTimer(true);  --> wird nur in "tim.njk" gestartet
});

function signIn(state=false) {
	const stateColor = [ '#888', '#0C0'];
	const stateStroke = [1,2];
	displayTag("ms-login", ! state);
	displayMain(state);
	setLucideStroke(buttonLogin, stateColor[state?1:0], stateStroke[state?1:0]);
}

function actionLogin() {
	//~ signIn( false );
	if ( user.status() ) user.logoff();
	signIn( user.status());
}

function actionMail() {
	sendMail("507rydbp@anonaddy.com", "Anfrage zum Blog", "Hallo!\n\nIch hätte zum Blog mal eine Frage\n\n\nBeste Grüße\n", true);
	return;
	//~ const stateColor = [ '#888', '#F00'];
	//~ const stateStroke = [1,2];
	//~ if (++statusMail > 1) statusMail = 0;
	//~ setLucideStroke(buttonMail, stateColor[statusMail], stateStroke[statusMail]);
	//~ openModal('popupMail');
}

function setUserStatus() {
	status.userState = user.status();
	status.userName = user.name();
	setLucideStroke(buttonLogin, status.userState?'#6F9':'#888', status?2:1);  // was '#6F9':'#C44'
}
