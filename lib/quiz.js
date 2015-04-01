var React = require('react');
var QuestionList = require('./question-list');
var Result = require('./result');
var _ = require('lodash');

var Quiz = module.exports =  React.createClass({

	propTypes: {
		quiz: React.PropTypes.object.isRequired,
		shortUrlSlug: React.PropTypes.string.isRequired,
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
		this.setState({
			answers: answers
		});
	},

	getResult: function () {
		if (this.state.answers.length < this.props.quiz.questions.length) {
			return;
		}
		var incomplete = _.some(this.state.answers, function( answer ) {
			return this.state.answers == null;
		}.bind(this));
		if (incomplete) {
			return;
		}
		var stats = this.state.answers.reduce( function ( stats, answer ) {
			stats[ answer ] = stats[ answer ] == null? 0 : stats[ answer ];
			stats[ answer ] += 1;
			return stats;
		},{});
		var counts = _.invert(stats);
		var topCount = _.max( Object.keys( counts ));
		return this.props.quiz.results[ counts[ topCount ]];
	},

	render: function() {
		var result = this.getResult();
		return (
			<div id="quiz">
				<QuestionList selectOption={ this.selectOption } questions={ this.props.quiz.questions } />
				{ result != null? <Result getResult={ this.getResult } result={ result } shortUrlSlug="F8xPy" siteUrl="http://kasra.co/" /> : null }
			</div>
		);
	}

});
