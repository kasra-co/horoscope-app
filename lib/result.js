var React = require( 'react' );

var Result = module.exports = React.createClass({

	propTypes: {
		result: React.PropTypes.object.isRequired,
		getResult: React.PropTypes.func
	},

	componentDidMount: function () {
		function animate(elem,style,unit,from,to,time,prop) {
			if( !elem) return;
			var start = new Date().getTime(),
			timer = setInterval(function() {
				var step = Math.min(1,(new Date().getTime()-start)/time);
				if (prop) {
					elem[style] = (from+step*(to-from))+unit;
				} else {
					elem.style[style] = (from+step*(to-from))+unit;
				}
				if( step == 1) clearInterval(timer);
			},25);
			elem.style[style] = from+unit;
		}
		var target = React.findDOMNode(this.refs.quizResult);
		animate(document.body, "scrollTop", "", document.body.scrollTop, target.offsetTop, 600, true);
	},

	facebookShare: function () {
		FB.ui(
			{
				method: 'feed',
				link: window.location.origin,
				name: this.props.result.title,
				description: this.props.result.text,
				picture: this.props.result.media.image
			}, function(response){});
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
					<button type="button" className="facebookQuizShare facebook" onClick={ this.facebookShare }><i className="icon-facebook-2"></i></button>
					<button type="button" className="twitterQuizShare twitter"><i className="icon-twitter-2"></i></button>
				</div>
			</div>
		);
	}
});