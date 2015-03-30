var React = require('react');
var Question = require('./question');

var QuestionList = module.exports = React.createClass({

	propTypes: {
		questions: React.PropTypes.array.isRequired,
		selectOption: React.PropTypes.func.isRequired
	},

	render: function() {
		var questions = this.props.questions.map( function (question, index) {
			var selectAnswer = function (optionIndex) {
				this.props.selectOption(index, optionIndex);
			}.bind(this);

			return (
				<Question selectAnswer={ selectAnswer } key={index} question={question} />
			);
		}.bind(this));
		return (
			<div
				id="questionList">
					{questions}
			</div>
		)
	}

});

