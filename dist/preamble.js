/**
 * @preserve
 * Preamble for assemblies at: ./
 * Created: Fri, 30 Aug 2019 05:16:22 GMT
 */
(function(root, loader) {
    'use strict';

    if (typeof define === 'function' && define.amd) { // AMD support
        define(() => { return loader; });
    } else if (typeof exports === 'object') { // CommonJS and Node.js module support
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = loader; // Node.js specific module.exports
        }
        module.exports = exports = loader; // CommonJS        
    } else { // expose as global on window
        root.preamble = loader;
    }
})((this || globalThis), async function(flair) {
    'use strict';

    await flair(JSON.parse('{"name":"tld.myasm","file":"./tld.myasm{.min}.js","package":"yourasm","desc":"yourasm description","title":"yourasm name","version":"0.9.19","lupdate":"Fri, 30 Aug 2019 05:16:22 GMT","builder":{"name":"flairBuild","version":"1","format":"fasm","formatVersion":"1","contains":["init","func","type","vars","reso","asst","rout","sreg"]},"copyright":"yourasm copyright","license":"MIT","types":["tld.myasm.feature1.Class1","tld.myasm.feature2.Class2"],"resources":[],"assets":[],"routes":[]}'));

});