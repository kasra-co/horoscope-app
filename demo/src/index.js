var React = require( 'react' );

// Require index.js from the root of the project. That is where our module's interface is specified.
var HoroscopeQuiz = require( '../..' );

var horoscope = require('./config/quiz');


var horoscopeQuiz = (
	<HoroscopeQuiz shortUrl={window.context? window.context.shortUrl : "skdafds"} siteUrl={ window.context? window.context.siteUrl : "http://kasra.co"} quiz={ horoscope } imagePath={ window.context? window.context.pluginUrl + "node_modules/horoscopeQuiz" : "" } />
);

React.render( horoscopeQuiz, document.getElementById( "horoscopeContainer" ) || document.body );
