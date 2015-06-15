var React = require( 'react' );
var labels = require( './labels' );
var resultImages = require( '../demo/src/config/result-images' );
var resultText = require( '../demo/src/config/result-text' );


var Result = module.exports = React.createClass({

	propTypes: {
		result: React.PropTypes.number.isRequired,
		shortUrl: React.PropTypes.string.isRequired,
		quizTitle: React.PropTypes.string.isRequired,
		siteUrl: React.PropTypes.string.isRequired,
		resultImageIndex: React.PropTypes.number.isRequired
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
		var Firefox = /Firefox/i.test(navigator.userAgent);
		if (Firefox) {
			animate(document.documentElement, "scrollTop", "", document.documentElement.scrollTop, target.offsetTop, 600, true);
		}
		else {
			animate(document.body, "scrollTop", "", document.body.scrollTop, target.offsetTop, 600, true);
		}
	},

	facebookShare: function () {
		var image = window.context.pluginUrl + "node_modules/horoscopeQuiz" + resultImages[ this.props.resultImageIndex ].image;
		console.log( image );
		FB.ui(
			{
				method: 'feed',
				link: window.location.origin,
				name: labels.myResultIs,
				description: resultText[ this.props.result ],
				picture: image
			}, function(response){});
	},

	render: function() {


		var twitterUrl = "https://twitter.com/intent/tweet?";
		var encodedUrl = encodeURIComponent( labels.horoscopeResultTitle );
		var encodedShortUrl = encodeURIComponent(this.props.shortUrl);
		var quizUrl = "url=" + encodedShortUrl;
		var tweetText = "&text=" + labels.myResultIs;
		var via = "&via=kasra";
		var twitterShareUrl = twitterUrl + quizUrl + tweetText + via;

		if ( resultImages[ this.props.resultImageIndex ].credit ) {
			var source = (
				<span className="source">
					<span className="credit">{ resultImages[ this.props.resultImageIndex ].credit }</span>
				</span>
			);
		}
		return (
			<div id="quizResult" className="clearfix">
				<h2 className="resultTitle">{ labels.horoscopeResultTitle }</h2>
				<img className="resultImage" src={ this.props.imagePath + resultImages[ this.props.resultImageIndex ].image } />
				{ source }
				<p className="resultText">{ resultText[ this.props.result ] }</p>
				<div ref="quizResult" className="clearfix shareResult">
					<p>{ labels.shareWithYourFriends }</p>
					<a className="facebookQuizShare facebook" onClick={ this.facebookShare }><i className="icon-facebook-2"></i></a>
					<a href={ twitterShareUrl } target="_blank" className="twitter twitterQuizShare"><i className="icon-twitter-2"></i></a>
				</div>
			</div>
		);
	}
});
