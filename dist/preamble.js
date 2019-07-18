/**
 * @preserve
 * Preamble for assemblies at: ./
 * Created: Thu, 18 Jul 2019 04:08:04 GMT
 */
(function(root, loader) {
    'use strict';

    if (typeof define === 'function' && define.amd) { // AMD support
        define(loader);
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

    await flair(JSON.parse('{"name":"ns.asm","file":"./ns.asm{.min}.js","package":"yourasm","desc":"yourasm description","title":"yourasm name","version":"0.9.7","lupdate":"Thu, 18 Jul 2019 04:08:03 GMT","builder":{"name":"flairBuild","version":"1","format":"fasm","formatVersion":"1","contains":["init","func","type","vars","reso","asst","rout","sreg"]},"copyright":"yourasm copyright","license":"MIT","types":["ns.asm.ClassName1","ns.asm.something.ClassName2"],"resources":[],"assets":[],"routes":[]}'));

});