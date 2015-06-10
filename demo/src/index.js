var React = require( 'react' );

// Require index.js from the root of the project. That is where our module's interface is specified.
var HoroscopeQuiz = require( '../..' );

var horoscope = require('./config/quiz');


var horoscopeQuiz = (
	<HoroscopeQuiz shortUrl={window.context.shortUrl} siteUrl={window.context.siteUrl} quiz={ horoscope } quizTitle={window.context.title} />
);

React.render( horoscopeQuiz, document.getElementById( "horoscopeContainer" ));
