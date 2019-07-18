/**
 * @preserve
 * yourasm name
 * yourasm description
 * 
 * Assembly: ns.asm
 *     File: ./ns.asm.js
 *  Version: 0.9.7
 *  Thu, 18 Jul 2019 04:08:03 GMT
 * 
 * yourasm copyright
 * MIT
 */
(function(root, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) { // AMD support
        define(factory);
    } else if (typeof exports === 'object') { // CommonJS and Node.js module support
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = factory; // Node.js specific module.exports
        }
        module.exports = exports = factory; // CommonJS        
    } else { // expose as global on root
        root['ns.asm'] = factory;
    }
})(this, async function(flair, __asmFile) {
    'use strict';

    // assembly closure init (start)
    /* eslint-disable no-unused-vars */
    
    // flair types, variables and functions
    const { Class, Struct, Enum, Interface, Mixin, Aspects, AppDomain, $$, attr, bring, Container, include, Port, on, post, telemetry,
            Reflector, Serializer, Tasks, as, is, isDefined, isComplies, isDerivedFrom, isAbstract, isSealed, isStatic, isSingleton, isDeprecated,
            isImplements, isInstanceOf, isMixed, getAssembly, getAttr, getContext, getResource, getRoute, getType, ns, getTypeOf,
            getTypeName, typeOf, dispose, using, Args, Exception, noop, nip, nim, nie, event } = flair;
    const { TaskInfo } = flair.Tasks;
    const { env } = flair.options;
    const { guid, forEachAsync, replaceAll, splitAndTrim, findIndexByProp, findItemByProp, which, isArrowFunc, isASyncFunc, sieve,
            deepMerge, getLoadedScript, b64EncodeUnicode, b64DecodeUnicode } = flair.utils;
    
    // inbuilt modifiers and attributes compile-time-safe support
    const { $$static, $$abstract, $$virtual, $$override, $$sealed, $$private, $$privateSet, $$protected, $$protectedSet, $$readonly, $$async,
            $$overload, $$enumerate, $$dispose, $$post, $$on, $$timer, $$type, $$args, $$inject, $$resource, $$asset, $$singleton, $$serialize,
            $$deprecate, $$session, $$state, $$conditional, $$noserialize, $$ns } = $$;
    
    // access to DOC
    const DOC = ((env.isServer || env.isWorker) ? null : window.document);
    
    // current for this assembly
    const __currentContextName = AppDomain.context.current().name;
    const __currentFile = __asmFile;
    const __currentPath = __currentFile.substr(0, __currentFile.lastIndexOf('/') + 1);
    AppDomain.loadPathOf('ns.asm', __currentPath);
    
    // settings of this assembly
    let settings = JSON.parse('{"settingName":"defaultSettingValue"}');
    let settingsReader = flair.Port('settingsReader');
    if (typeof settingsReader === 'function') {
        let externalSettings = settingsReader('ns.asm');
        if (externalSettings) { settings = deepMerge([settings, externalSettings], false); }
    }
    settings = Object.freeze(settings);
    
    // config of this assembly
    let config = JSON.parse('{}');
    config = Object.freeze(config);
    
    /* eslint-enable no-unused-vars */
    // assembly closure init (end)
    
    // assembly global functions (start)
    // global handler
    let onLoadComplete = () => {
    }; 
    // assembly global functions (end)
    
    // set assembly being loaded
    AppDomain.context.current().currentAssemblyBeingLoaded('./ns.asm{.min}.js');
    
    // assembly types (start)
        
    await (async () => { // type: ./src/ns.asm/ns.asm/ClassName1.js
        /**
         * @name ClassName
         * @description Class Description
         */
        $$('ns', 'ns.asm');
        Class('ClassName1', function() {
            // class implementation
        });
        
    })();    
    await (async () => { // type: ./src/ns.asm/ns.asm.something/ClassName2.js
        /**
         * @name ClassName
         * @description Class Description
         */
        $$('ns', 'ns.asm.something');
        Class('ClassName2', function() {
            // class implementation
        });
        
    })();
    // assembly types (end)
    
    // assembly embedded resources (start)
    // (not defined)
    // assembly embedded resources (end)        
    
    // clear assembly being loaded
    AppDomain.context.current().currentAssemblyBeingLoaded('');
    
    // register assembly definition object
    AppDomain.registerAdo('{"name":"ns.asm","file":"./ns.asm{.min}.js","package":"yourasm","desc":"yourasm description","title":"yourasm name","version":"0.9.7","lupdate":"Thu, 18 Jul 2019 04:08:03 GMT","builder":{"name":"flairBuild","version":"1","format":"fasm","formatVersion":"1","contains":["init","func","type","vars","reso","asst","rout","sreg"]},"copyright":"yourasm copyright","license":"MIT","types":["ns.asm.ClassName1","ns.asm.something.ClassName2"],"resources":[],"assets":[],"routes":[]}');
    
    // assembly load complete
    if (typeof onLoadComplete === 'function') { 
        onLoadComplete();   // eslint-disable-line no-undef
    }
    
    // return settings and config
    return Object.freeze({
        name: 'ns.asm',
        settings: settings,
        config: config
    });
});