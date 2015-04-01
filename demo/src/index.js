var React = require( 'react' );

// Require index.js from the root of the project. That is where our module's interface is specified.
var Quiz = require( '../..' ).Quiz;

var demoQuiz = require('./config/quiz');


var quiz = (
	<Quiz shortUrlSlug="F8xPy" siteUrl="http://kasra.co/" quiz={ demoQuiz } />
);

React.render( quiz, document.body );
