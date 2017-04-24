**Prerequisites**

1. Node - 7.5.0
2. Protractor - 5.1
3. Bower - 1.8
4. Grunt - 1.0.1

Steps to run the app:-

1. ``npm install``
2. ``bower install``
2. ``grunt``

Assuming you've Python installed in your system. So you can fire up a HTTP server using this command

``python -m SimpleHTTPServer 8000``


Steps to run the e2e tests:-

1. ``webdriver-manager update``
2. ``webdriver-manager start``
1. ``protractor e2e/conf.js``


You can see the project in action over here - https://tinker20.github.io/spotify-music-search/#!/music-search