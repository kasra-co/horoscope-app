var React = require( 'react' );
var labels = require( './labels' );

var Result = module.exports = React.createClass({

	propTypes: {
		result: React.PropTypes.object.isRequired,
		shortUrlSlug: React.PropTypes.string.isRequired,
		quizTitle: React.PropTypes.string.isRequired,
		siteUrl: React.PropTypes.string.isRequired
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

		var twitterUrl = "https://twitter.com/intent/tweet?";
		var encodedUrl = encodeURIComponent(this.props.result.title);
		var encodedSiteUrl = encodeURIComponent(this.props.siteUrl);
		var baseUrl = "url=" + encodedSiteUrl;
		var shortUrlSlug = this.props.shortUrlSlug;
		var quizUrl = baseUrl + "/" + shortUrlSlug;
		var tweetText = "&text=" + encodedUrl + " :" + this.props.quizTitle;
		var via = "&via=kasra";
		var twitterShareUrl = twitterUrl + quizUrl + tweetText + via;

		if ( this.props.result.media.caption ) {
			var source = (
				<span className="source">
					<span className="credit">{ this.props.result.media.caption }</span>
				</span>
			);
		}
		return (
			<div ref="quizResult" id="quizResult" className="clearfix">
				<h1 className="quizTitle">Quiz Title Here</h1>
				<h2 className="resultTitle">{ labels.yourResultIs }: { this.props.result.title }</h2>
				<img className="resultImage" src={ this.props.result.media.image } title={ this.props.result.media.title } alt={ this.props.result.media.alt } />
				{ source }
				<p className="resultText">{ this.props.result.text }</p>
				<div className="clearfix shareResult">
					<p>{ labels.shareWithYourFriends }</p>
					<a className="facebookQuizShare facebook" onClick={ this.facebookShare }><i className="icon-facebook-2"></i></a>
					<a href={ twitterShareUrl } className="twitter twitterQuizShare"><i className="icon-twitter-2"></i></a>
				</div>
			</div>
		);
	}
});
