var React = require( 'react' );

// Require index.js from the root of the project. That is where our module's interface is specified.
var Quiz = require( '../..' );

var demoQuiz = require('./config/quiz');


var quiz = (
	<Quiz shortUrl={window.context.shortUrl} siteUrl={window.context.siteUrl} quiz={ demoQuiz } quizTitle={window.context.title} />
);

React.render( quiz, document.getElementById( "horoscopeContainer" ));
