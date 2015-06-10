var React = require( 'react' );
var QuestionList = require( './question-list' );
var _ = require( 'lodash' );
var Result = require('./result');
var results = require( '../demo/src/config/result-text' );



var HoroscopeQuiz = module.exports =  React.createClass({

	propTypes: {
		shortUrlSlug: React.PropTypes.string.isRequired,
		quizTitle: React.PropTypes.string.isRequired,
		siteUrl: React.PropTypes.string.isRequired
	},

	getInitialState: function() {
		return {
			answers: []
		}
	},

	selectOption: function (questionIndex, optionIndex) {
		var answers = _.clone( this.state.answers );
		answers[questionIndex] = optionIndex;
		if ( questionIndex === 1 ) {
			this.setState({
				resultImageIndex: optionIndex
			});
		}
		this.setState({
			answers: answers
		});
	},

	getResultIndex: function () {
		if (this.state.answers.length < this.props.quiz.questions.length) {
			return;
		}
		var incomplete = _.some(this.state.answers, function( answer ) {
			return answer == null;
		}.bind(this));
		if (incomplete) {
			return;
		}
		var gender = this.state.answers[0];
		var sign = this.state.answers[1];
		var color = this.state.answers[2];
		var resultIndex = gender + ( sign * 2 ) + ( color * 24 );

		var date = new Date();
		var daysSinceEpoch = date.getTime() / 86400000;
		var uniqueIndex = Math.round( resultIndex + daysSinceEpoch % results.length );
		return uniqueIndex;

	},


	render: function() {
		var result = this.getResultIndex();

		return (
			<div id="quiz" className={ "horoscopeQuiz " + ( result != null? "completed" : "" ) }>
				<QuestionList selectOption={ this.selectOption } result={ result } questions={ this.props.quiz.questions } />
				{ result != null? <Result resultImageIndex={ this.state.resultImageIndex } result={ result } shortUrl={ this.props.shortUrl } siteUrl={ this.props.siteUrl } quizTitle={ this.props.quizTitle } /> : null }
			</div>
		);
	}

});
