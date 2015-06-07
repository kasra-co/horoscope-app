var React = require('react');
var Question = require('./question');
var ColourQuestion = require('./colour-question');

var QuestionList = module.exports = React.createClass({

	propTypes: {
		result: React.PropTypes.number.isRequired,
		questions: React.PropTypes.array.isRequired,
		selectOption: React.PropTypes.func.isRequired
	},

	render: function() {
		var questions = this.props.questions.map( function (question, index) {
			var selectAnswer = function (optionIndex) {
				this.props.selectOption(index, optionIndex);
			}.bind(this);

			if ( index === 2 ) {
				return ( <ColourQuestion result={ this.props.result } selectAnswer={ selectAnswer } key={index} question={question} /> );
			}
			return ( <Question result={ this.props.result } selectAnswer={ selectAnswer } key={index} question={question} /> );

		}.bind(this));
		return (
			<div
				id="questionList">
					{questions}
			</div>
		)
	}
});

