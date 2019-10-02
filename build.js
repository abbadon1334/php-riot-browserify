const browserify = require('browserify');
const tsify = require('tsify');
const esmify = require('esmify')
const riotify = require('riotify')
const watchify = require("watchify");
const recursive = require("recursive-readdir");

const fs = require('fs')
const path = require('path')

var isFirstInit = true;

var sourceDir = "bundles/js/source";
var bundleOutputFile = "public/assets/bundle.js";

recursive( path.resolve(__dirname, sourceDir)).then(function (entries) {

    entries = entries.filter(function (file) {
        let ext = path.extname(file);
        return (ext === '.ts' || ext === '.riot')
    });

    console.log('\x1b[1;31m === Monitored files ========== \x1b[0m');

    for(var x in entries)
    {
        console.log(entries[x].replace(__dirname,''));
    }

    console.log("\x1b[33m == INIT == \x1b[0m");

    function triggerBundle() {

        if (false===isFirstInit) {
            console.log("\x1b[31m == File change detected == \x1b[0m");
        } else {
            console.log("\x1b[31m == Start build == \x1b[0m");
        }

        var bundleFile = fs.createWriteStream(path.resolve(__dirname, bundleOutputFile));

        b.bundle()
            .on('error', (error) => process.stdout.write("\x1b[31m" + error.toString() + "\x1b[0m"))
            .pipe(bundleFile);

        isFirstInit = false;
    }

    var b = browserify({
        entries: entries,
        cache: {},
        packageCache: {},
        plugin: [watchify]
    })
        .add('bundles/js/source/index.ts')
        .transform(riotify)
        .plugin([tsify, esmify]);

    b.on('update', triggerBundle);

    b.on('bytes', function(bytes) {

        console.log(' ' + (new Date()).toLocaleString());

        var kb = bytes / 1024;
        console.log("\x1b[32m Bundle size : " + kb.toFixed(1) + "kb == \x1b[0m");
    });

    b.on('log', function(msg) {
        console.log("\x1b[32m == Build done #ripubblica == \x1b[0m");
    });

    triggerBundle();
});
