var React = require( 'react' );

var Question = module.exports = React.createClass({

	propTypes: {
		question: React.PropTypes.object.isRequired,
		selectAnswer: React.PropTypes.func.isRequired
	},

	selectAnswer: function(answerIndex){
		this.props.selectAnswer(answerIndex);
		this.setState ({
			checked: answerIndex
		});
	},

	getInitialState: function(){
		return {
			checked: null
		};
	},

	answerLengthTooLong: function(element, index, array) {
		return element.length > 32;
	},

	render: function() {
		var tileBackgroundColor = {
				backgroundColor: "#" + this.props.color
		};
		var quizColumns;
		if ( this.props.question.answers.length % 3 === 0) {
			quizColumns = "threeUp";
		}
		else if ( this.props.question.answers.length % 2 === 0) {
			quizColumns = "twoUp";
		}
		else {
			quizColumns = "oneUp";
		}
		var quizAnswerTooLong = this.props.question.answers.some(this.answerLengthTooLong);

		var answers = this.props.question.answers.map(function (answer, index) {
			return (
				<li
					key={index}
					onClick={ this.selectAnswer.bind(null, index) }
					className={ this.state.checked === index? "selected " + quizColumns : ( quizColumns + "")  } >
						<p style={ tileBackgroundColor }>{ this.props.question.answers[index] }</p>
						<input type="checkbox" className="questionAnswer" checked={ this.state.checked === index } /></li>
			)
		}.bind(this));
		if ( this.props.question.media.credit ) {
			var source = (
				<span className="source">
					<span className="credit">{ this.props.question.media.credit }</span>
				</span>
			);
		}
		return (
			<div className="quizQuestion">
				<h1 className="questionTitle">{ this.props.question.prompt }</h1>
				<img className="questionImage" src={ this.props.question.media.image } />
				{source}
				<ul className={ "clearfix questionAnswers " + ( typeof this.state.checked === "number"? "answered " : "") + (quizAnswerTooLong? "mobileStack " : "")  }>
					{answers}
				</ul>
			</div>
		);
	}
});
