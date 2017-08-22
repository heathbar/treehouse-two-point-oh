'use strict';
var GulpConfig = (function () {
    function gulpConfig() {
        this.source = './src/';
        this.tsOutputPath = './dist';
        this.allTypeScript = this.source + '/**/*.ts';
        this.libraryTypeScriptDefinitions = './typings/**/*.d.ts';
    }
    return gulpConfig;
})();
module.exports = new GulpConfig();