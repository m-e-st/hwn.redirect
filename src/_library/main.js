

/***
 * main.js für stumpp blog
 *  
 *
 */
 
 /* das sind die beiden Buttons oben links im Header */
const buttonLogin = document.getElementById('layoutLogin');
const buttonMail = document.getElementById('layoutMail');
const buttonOpen = document.getElementById('layoutOpen');

/*** initialization on document ready ***/

document.addEventListener("DOMContentLoaded", function(event) {
	if (buttonLogin) {
//~ console.log("Button LOGIN", buttonLogin);
		setLucideStroke(buttonLogin, 'transparent', 1);
		buttonLogin.addEventListener('click', actionLogin);
		setLucideStroke(buttonLogin, '#888', 1);
	}
	if (buttonMail) {
//~ console.log("Button MAIL", buttonMail);
		setLucideStroke(buttonMail, 'transparent', 1);
		buttonMail.addEventListener('click', actionMail);
		setLucideStroke(buttonMail, '#888', 1);
	}
	if (buttonOpen) {
//~ console.log("Button OPEN", buttonOpen);
		setLucideStroke(buttonOpen, 'transparent', 1);
		buttonOpen.addEventListener('click', actionOpen);
		setLucideStroke(buttonOpen, '#888', 1);
	}
	signIn( user.status());
});

function signIn(state=false) {
	const stateColor = [ '#888', '#0C0'];
	const stateStroke = [1,2];
	//~ displayTag("ms-login", ! state);
	//~ displayMain(state);
	displayClass("unlogged", ! state);
	displayClass("loggedin", state);
	setLucideStroke(buttonLogin, stateColor[state?1:0], stateStroke[state?1:0]);
	contentDecryption(user.code());
	//~ console.log ("sigIn state=", state, " user=", user.name(), user.status() );
}

function actionLogin() {
	//~ signIn( false );
	if ( user.status() ) user.logoff();
	else openModal('popupLogin'); // document.getElementById('loginUser').focus();
	signIn( user.status());
}

function actionMail() {
	setTimeout(function() {	setLucideStroke(buttonMail, '#F00', 2); }, 500 );		// give mail some time to react
	sendMail(	"{{ site.send.receiver | d('507rydbp@anonaddy.com') }}",
				"{{ site.send.subject  | d('Anfrage') }}", 
				"Hallo!\n\nIch habe zu diesem Blog mal eine Frage\n\n\nBeste Grüße\n",
				true );
	setTimeout(function() {	setLucideStroke(buttonMail, '#888', 1); }, 5000 );		// give user some time to find
}

function actionOpen() {
	const iframe = document.querySelector('iframe');
	if (iframe && iframe.src) {
		//~ top.location.href = iframe.src;
		window.top.open(iframe.src, '{{ site.caption | d('_blank')}}');
	} else {
		buttonOpen.style.display="none";
	}
}

function setUserStatus() {
	status.userState = user.status();
	status.userName = user.name();
	setLucideStroke(buttonLogin, status.userState?'#6F9':'#888', status?2:1);  // was '#6F9':'#C44'
}
