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
		buttonLogin.addEventListener('click', loginUser);
		setLucideStroke(buttonLogin, '#888', 1);

	}
	if (buttonMail) {
		setLucideStroke(buttonMail, 'transparent', 1);
		buttonMail.addEventListener('click', sendMail2);
		setLucideStroke(buttonMail, '#888', 1);

	}

//	displayMain();
  // intervalTimer(true);  --> wird nur in "tim.njk" gestartet
});


function loginUser() {
	const stateColor = [ '#888', '#0C0'];
	const stateStroke = [1,2];
	if (++statusLogin > 1) statusLogin = 0;
	setLucideStroke(buttonLogin, stateColor[statusLogin], stateStroke[statusLogin]);
}

function sendMail2() {
	const stateColor = [ '#888', '#F00'];
	const stateStroke = [1,2];
	if (++statusMail > 1) statusMail = 0;
	setLucideStroke(buttonMail, stateColor[statusMail], stateStroke[statusMail]);
}

