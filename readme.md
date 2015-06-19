# Horoscope Quiz

Standalone component. Uses local JSON to populate the quiz content and results.

## Dependencies

### Scripts

This module requires the uses of scripts from Facebook and Twitter for result sharing. These scripts are included in demo/src/index.html for the demo to work correctly.

### Props

Quiz:
 - shortUrlSlug - is the short url slug used for the Twitter share dialog to avoid percent encoding the arabic url.
 - siteUrl - is the root url for the site - ie. http://kasra.co
 - quiz - the quiz prop is a JSON file containing all the necessary data to render a single quiz

 ## Current Implementation

 This module is currently deployed at kasra.co as a Wordpress Plugin. To add a horoscope quiz to any post in Wordpress you just need to add a shortcode: ```[horoscope]```.

## Demo

Clone repository.

From command line navigate to local repository folder, demo directory.

```
~/new-repository/demo
```

```
npm install && gulp watch
```

Gulp watch will continuously check for changes to your files and process them for you.

Open another terminal window. Navigate to the dist directory.

```
~/new-repository/demo/dist
```

Then run:

```
python -m SimpleHTTPServer
```

Demo files will now be serving at localhost:8000.

## Usage

To use this component you must install it into your package.json.


```
cd ~/new-repository/demo/
npm install --save git+ssh://git@kasra-deploy:menapost/horoscope-quiz.git
```

or add the following to your package file, and run ```npm install```:

```
"horoscope-quiz": "git+ssh://git@kasra-deploy:menapost/horoscope-quiz.git"
```

Then to use one of the components:

```
var HoroscopeQuiz = require( 'horoscope-quiz' ).HoroscopeQuiz;
<HoroscopeQuiz />
```

## Styling

To access the component styling, currently you need import the index.scss file from the node module itself, from ~/new-repository/style/index.scss.

```
@import '../node_modules/horoscope-quiz/style/index.scss';
```
