
##### Prepare

`composer install`

`npm install`

`npm run build` or `node build.js` <-- this will start watchify (leave it running)

in `src-js/lib` there is a library in develop
in `src-js/components` there are riot components in dev (*)

##### Start the server
run : `composer run serve`
open `http://127.0.0.1:5000/index.html`

click on the box it will show server time from php (just an example)

look in timer.riot to see how it works

##### Dev

you can edit riot files in src-ts/components or in src-ts/lib and reload browser.
