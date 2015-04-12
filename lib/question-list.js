var React = require('react');
var Question = require('./question');

var QuestionList = module.exports = React.createClass({

	propTypes: {
		questions: React.PropTypes.array.isRequired,
		selectOption: React.PropTypes.func.isRequired
	},

	render: function() {
		var bgColors = ["ee3a38","64a8dc","02cccc","ffd215","835da7","b23671","74bf43","ed358e","ff9100","2848a0"];
		var questions = this.props.questions.map( function (question, index) {
			var selectAnswer = function (optionIndex) {
				this.props.selectOption(index, optionIndex);
			}.bind(this);

			return (
				<Question color={bgColors[index]} selectAnswer={ selectAnswer } key={index} question={question} />
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

