var React = require( 'react' );

var Result = module.exports = React.createClass({

	propTypes: {
		result: React.PropTypes.object.isRequired
	},

	render: function() {

		if ( this.props.result.media.credit || this.props.result.media.via ) {
			var source = (
				<span className="source">
					<span className="credit">{ this.props.result.media.credit }</span>
					<span className="via"> { this.props.result.media.via }</span>
				</span>
			);
		}

		return (
			<div className="clearfix quizResult">
				<h1 className="quizTitle">Quiz Title Here</h1>
				<h2 className="resultTitle">{ this.props.result.title }</h2>
				<img className="resultImage" src={ this.props.result.media.image } />
				{ source }
				<p className="resultText">{ this.props.result.text }</p>
				<div className="clearfix shareResult">
					<p>شارك نتيجتك مع اصدقاءك</p>
					<button type="button" className="facebookQuizShare facebook"><i className="icon-facebook-2"></i></button>
					<button type="button" className="twitterQuizShare twitter"><i className="icon-twitter-2"></i></button>
				</div>
			</div>
		);
	}
});
