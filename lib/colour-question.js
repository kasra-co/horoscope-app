var React = require( 'react' );

var ColourQuestion = module.exports = React.createClass({

	propTypes: {
		result: React.PropTypes.number.isRequired,
		question: React.PropTypes.object.isRequired,
		selectAnswer: React.PropTypes.func.isRequired
	},

	selectAnswer: function(answerIndex){
		if (this.props.result) {
			return;
		}
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

	render: function() {
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

		var answers = this.props.question.answers.map(function (answer, index) {
			var backgroundColor = {
				backgroundColor: "#" + this.props.question.answers[index]
			}
			return (
				<li
					key={index}
					onClick={ this.selectAnswer.bind(null, index) }
					className={ this.state.checked === index? "selected " + quizColumns : ( quizColumns + "")  } >
						<p style={ backgroundColor }></p>
						<input type="checkbox" className="questionAnswer" checked={ this.state.checked === index } /></li>
			)
		}.bind(this));
		if ( this.props.question.media.caption ) {
			var source = (
				<span className="source">
					<span className="credit">{ this.props.question.media.caption }</span>
				</span>
			);
		}
		return (
			<div className="quizQuestion colors">
				<h2 className="questionTitle">{ this.props.question.prompt }</h2>
				<img className="questionImage" src={ this.props.question.media.image } title={ this.props.question.media.title } alt={ this.props.question.media.altText } />
				{source}
				<ul className={ "clearfix questionAnswers " + ( typeof this.state.checked === "number"? "answered " : "") }>
					{ answers }
				</ul>
			</div>
		);
	}
});
