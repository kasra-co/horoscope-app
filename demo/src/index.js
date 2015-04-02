var React = require( 'react' );

// Require index.js from the root of the project. That is where our module's interface is specified.
var Quiz = require( '../..' );

var demoQuiz = require('./config/quiz');


var quiz = (
	<Quiz shortUrlSlug="F8xPy" siteUrl="http://kasra.co/" quiz={ demoQuiz } quizTitle="test quiz title" />
);

React.render( quiz, document.body );
