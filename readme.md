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
