var React = require( 'react' );

// Require index.js from the root of the project. That is where our module's interface is specified.
var QuestionList = require( '../..' ).QuestionList;

var demoQuiz = {
	results: [{
		title: 'American',
		text: 'Have a Bud Light',
		media: {
			image: '/images/lightweight.png',
			credit: 'Budweiser',
			via: 'http://budweiser.com'
		}
	}, {
		title: 'Canadian',
		text: 'A Colt and two zigzags for you!',
		media: {
			image: '/images/colt45.jpg',
			credit: 'Pabst Brewing Co',
			via: 'http://colt45.com'
		}
	}, {
		title: 'True Scotsman',
		text: 'You dont\'t have to go home, but you can\'t sleep here',
		media: {
			image: '/images/macallan.gif',
			credit: 'Macallan Distillery',
			via: 'themacallan.com'
		}
	}],


	questions: [{
		title: 'Question One?',
		color: '#ff0000', // The option row is rendered with a unique solid color background
		media: {
			image: 'images/thief.jpg',
			credit: 'Getty Images',
			via: 'Bob'
		},
		options: [
			'اسأل: كم دقيقة لا أقضيها أمام شبكة الإنترنت!',
			'عندما تقابلهم مرة أخرى تقول لهم المعلومة الصحيحة',
			'اسأل: كم دقيقة لا أقضيها أمام شبكة الإنترنت!',
			'عندما تقابلهم مرة أخرى تقول لهم المعلومة الصحيحة',
			'عندما تقابلهم مرة أخرى تقول لهم المعلومة الصحيحة',
			'أن تجد شخصاً يقودك إلى التصرفات الصحيحة دائماً ولا يمل من هفواتك'

		]
	}, {
		title: 'Question Two?',
		color: '#00ff00',
		media: {
			image: '/images/thief.jpg',
		},
		options: [
			'عندما تقابلهم مرة أخرى تقول لهم المعلومة',
			'أن تجد شخصاً يقودك إلى التصرفات الصحيحة'
		]
	}, {
		title: 'Question Three?',
		color: 'blue',
		media: {
			image: '/images/thief.jpg',
		},
		options: [
			'عندما تقابلهم مرة أخرى تقول لهم المعلومة الصحيحة',
			'أن تجد شخصاً يقودك إلى التصرفات الصحيحة دائماً ولا يمل من هفواتك',
			'اسأل: كم دقيقة لا أقضيها أمام شبكة الإنترنت!',
			'عندما تقابلهم مرة أخرى تقول لهم المعلومة الصحيحة',
			'عندما تقابلهم مرة أخرى تقول لهم المعلومة الصحيحة'
		]
	}],
};


React.render( <QuestionList questions={ demoQuiz.questions } />, document.body );
