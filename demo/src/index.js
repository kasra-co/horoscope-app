var React = require( 'react' );

// Require index.js from the root of the project. That is where our module's interface is specified.
var Quiz = require( '../..' ).Quiz;

var demoQuiz = {
	results: [{
		title: 'نتيجة اجاباتك :شخصية مرنة',
		text: 'أنت شخصية مرنة، بسيطة، علاقاتك الاجتماعية ممتازة، فأنت صديق الكل والموظف المفضل عند مديرك، أو الطالب المثالي لدى أستاذك.',
		media: {
			image: '/images/result.png',
			credit: 'Getty Images',
			via: 'Bob'
		}
	}, {
		title: 'Two',
		text: 'You are number two.',
		media: {
			image: '/images/result.png',
			credit: 'Getty Images',
			via: 'Bob'
		}
	}, {
		title: 'Three',
		text: 'You are number three.',
		media: {
			image: '/images/result.png',
			credit: 'Getty Images',
			via: 'Bob'
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
			'عندما تقابلهم مرة أخرى تقول لهم المعلو',
			'عندما تقابلهم مرة أخرى تقول لهم المعلو',
			'أن تجد شخصاً يقودك إلى التصرفات الصحي'

		]
	}, {
		title: 'Question Two?',
		color: '#00ff00',
		media: {
			image: '/images/thief.jpg',
		},
		options: [
			'عندما مرة أخرى تقول لهم المعلومة',
			'عندما مرة أخرى تقول لهم المعلومة',
			'أن تجد شخصاًإلى التصرفات الصحيحة'
		]
	}, {
		title: 'Question Three?',
		color: 'blue',
		media: {
			image: '/images/thief.jpg',
		},
		options: [
			'اسأل: كم دقيقة لا أقضيها أمام شبكة الإنترنت!',
			'عندما تقابلهم مرة أخرى تقول لهم المعلومة الصحيحة',
			'عندما تقابلهم مرة أخرى تقول لهم المعلومة الصحيحة'
		]
	}],
};

var quiz = (
	<Quiz quiz={ demoQuiz } />
);

React.render( quiz, document.body );
