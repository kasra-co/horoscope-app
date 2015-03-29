var React = require('react');
var Question = require('./question');

var QuestionList = module.exports = React.createClass({

	propTypes: {
		questions: React.PropTypes.array.isRequired
	},

	render: function() {
		var questions = this.props.questions.map( function (question, index) {
			return (
				<Question key={index} question={question} />
			);
		});
		return (
			<div
				id="questionList">
					{questions}
			</div>
		)
	}

});

