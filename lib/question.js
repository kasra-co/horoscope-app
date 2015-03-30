var React = require( 'react' );

var Question = module.exports = React.createClass({

	propTypes: {
		question: React.PropTypes.object.isRequired
	},

	selectAnswer: function(optionIndex){
		this.setState ({
			checked: optionIndex
		});
	},

	getInitialState: function(){
		return {
			checked: null
		};
	},

	answerLengthTooLong: function(element, index, array) {
		return element.length > 44;
	}, /* counts the length of the options in each question. if one is too long the whole set of answers is rendered as a block list for mobile to avoid text wrapping */

	render: function() {
		var tileBackgroundColor = {
			backgroundColor: this.props.question.color
		}
		var quizColumns;
		if ( this.props.question.options.length % 3 === 0) {
			quizColumns = "threeUp";
		}
		else if ( this.props.question.options.length % 2 === 0) {
			quizColumns = "twoUp";
		}
		else {
			quizColumns = "oneUp";
		}
		var quizOptionTooLong = this.props.question.options.some(this.answerLengthTooLong);

		var options = this.props.question.options.map(function (option, index) {
			return (
				<li
					key={index}
					onClick={ this.selectAnswer.bind(null, index) }
					className={ this.state.checked === index? "selected " + quizColumns : ( quizColumns + "")  } >
						<p style={ tileBackgroundColor }>{ this.props.question.options[index] }</p>
						<input type="checkbox" className="questionOption" checked={ this.state.checked === index } />
				</li>
			)
		}.bind(this));
		if ( this.props.question.media.credit || this.props.question.media.via ) {
			var source = (
				<span className="source">
					<span className="credit">{ this.props.question.media.credit }</span>
					<span className="via"> { this.props.question.media.via }</span>
				</span>
			);
		}
		return (
			<div className="quizQuestion">
				<img className="questionImage" src={ this.props.question.media.image } />
				<h1 className="questionTitle">{ this.props.question.title }</h1>
				{source}
				<ul className={ "questionOptions " + ( typeof this.state.checked === "number"? "answered " : "") + (quizOptionTooLong? "mobileStack " : "")  }>
					{options}
				</ul>
			</div>
		);
	}
});
