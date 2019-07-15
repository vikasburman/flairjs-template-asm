/**
 * @preserve
 * Preamble for assemblies at: ./
 * Created: Mon, 15 Jul 2019 02:26:50 GMT
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
        root['flair.preamble'] = loader; // always overwrites
    }
})(this, async function(flair) {
    'use strict';

    await flair(JSON.parse('{"name":"ns.asm","file":"./ns.asm{.min}.js","mainAssembly":"","desc":"Boilerplate project structure for creating a flairjs assembly","title":"FlairJS Assembly Project Template","version":"0.9.5","lupdate":"Mon, 15 Jul 2019 02:26:49 GMT","builder":{"name":"flairBuild","version":"1","format":"fasm","formatVersion":"1","contains":["init","func","type","vars","reso","asst","rout","sreg"]},"copyright":"(c) 2017-2019 Vikas Burman","license":"MIT","types":["ns.asm.ClassName1","ns.asm.something.ClassName2"],"resources":[],"assets":[],"routes":[]}'));

});