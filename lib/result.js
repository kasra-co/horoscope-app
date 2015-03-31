var React = require( 'react' );

var Result = module.exports = React.createClass({

	propTypes: {
		result: React.PropTypes.object.isRequired,
		getResult: React.PropTypes.func
	},

	componentDidMount: function () {
		var quizResult = Reac.findDOMNode(this.refs.quizResult);
		var top = quizResult.offsetTop;
		var left = quizResult.offsetLeft;
		function smoothScrollTo () {
			var timer, start, factor;
			return function (target, duration) {
				var offset = window.pageYOffset,
					delta  = target - window.pageYOffset; /* Y-offset difference*/
				duration = duration || 1000;              /* default 1 sec animation*/
				start = Date.now();                      /* get start time*/
				factor = 0;

				if( timer ) {
					clearInterval(timer); // stop any running animations
				}

				function step() {
					var y;
					factor = (Date.now() - start) / duration; // get interpolation factor
					if( factor >= 1 ) {
					clearInterval(timer); // stop animation
					factor = 1;           // clip to max 1.0
					}
					y = factor * delta + offset;
					window.scrollBy(0, y - window.pageYOffset);
				}

				timer = setInterval(step, 10);
				return timer;
			};
		}
		quizResult.smoothScrollTo(0, 400);
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
			<div ref="quizResult" id="quizResult" className="clearfix">
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
