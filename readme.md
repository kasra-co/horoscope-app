# Quiz User Facing Components

This module has one top level, Quiz, component, and three child components: QuestionList, Question, and Result.

The Quiz component calls the QuestionList component, and the Result component. The Question component is called by QuestionList.

## Dependencies

### Scripts

This module requires the uses of scripts from Facebook and Twitter for result sharing. These scripts are included in demo/src/index.html for the demo to work correctly.

### Props

Quiz:
 - shortUrlSlug - is the short url slug used for the Twitter share dialog to avoid percent encoding the arabic url.
 - siteUrl - is the root url for the site - ie. http://kasra.co
 - quiz - the quiz prop is a JSON file containing all the necessary data to render a single quiz
 - result - the result calculated from the quiz
