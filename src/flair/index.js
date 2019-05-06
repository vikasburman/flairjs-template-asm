/**
 * @preserve
 * <<title>>
 * <<desc>>
 * 
 * Assembly: <<asm>>
 *     File: <<file>>
 *  Version: <<version>>
 *  <<lupdate>>
 * 
 * <<copyright>>
 * <<license>>
 */
 (function(root, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) { // AMD support
        define(factory);
    } else if (typeof exports === 'object') { // CommonJS and Node.js module support
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = factory(); // Node.js specific `module.exports`
        }
        module.exports = exports = factory(); // CommonJS        
    } else { // expose as global on window
        root.flair = factory();
    }
})(this, function() {
    'use strict';

    // locals
    let isServer = new Function("try {return this===global;}catch(e){return false;}")(),
        isWorker = isServer ? (!require('worker_threads').isMainThread) : (typeof WorkerGlobalScope !== 'undefined' ? true : false),
        currentFile = (isServer ? __filename : window.document.currentScript.src),
        sym = [],
        meta = Symbol('[meta]'),
        modulesRootFolder = 'modules',
        disposers = [],
        options = {},
        flairTypes = ['class', 'enum', 'interface', 'mixin', 'struct'],
        flairInstances = ['instance', 'sinstance'],
        argsString = '',
        isAppStarted = false;

    // flairapp bootstrapper
    let flair = async (configFile, entryPoint) => {
        if (!isAppStarted) {
            isAppStarted = true;

            // settings
            const { AppDomain, include, env } = flair;
            let __currentScript = (env.isServer ? '' : window.document.scripts[window.document.scripts.length - 1].src),
                __entryPoint = (env.isServer ? (env.isWorker ? '' : entryPoint) : (env.isWorker ? '' : __currentScript)),
                __rootPath = (env.isServer ? (__entryPoint.substr(0, __entryPoint.lastIndexOf('/') + 1)) : './'),
                __preamble = '<<package>>/preamble.js',
                __config = configFile,
                __BootEngine = 'flair.app.BootEngine',
                be = null;

            // initialize
            AppDomain.root(__rootPath);
            AppDomain.entryPoint(__entryPoint);
            await AppDomain.config(__config);
            await include(__preamble);
            be = await include(__BootEngine);

            // start boot engine
            be.start();
        }
    };

    // read symbols from environment
    if (isServer) {
        let argv = process.argv;
        if (isWorker) {
            argv = require('worker_threads').workerData.argv;
        }
        let idx = argv.findIndex((item) => { return (item.startsWith('--flairSymbols') ? true : false); });
        if (idx !== -1) { argsString = argv[idx].substr(2).split('=')[1]; }
    } else {
        if (isWorker) {
            argsString = WorkerGlobalScope.flairSymbols || '';
        } else {
            argsString = window.flairSymbols || '';
        }
    }
    if (argsString) { sym = argsString.split(',').map(item => item.trim()); }

    options.symbols = Object.freeze(sym);
    options.env = Object.freeze({
        type: (isServer ? 'server' : 'client'),
        isTesting: (sym.indexOf('TEST') !== -1),
        isServer: isServer,
        isClient: !isServer,
        isWorker : isWorker,
        isMain: !isWorker,
        cores: ((isServer ? (require('os').cpus().length) : window.navigator.hardwareConcurrency) || 4),
        isCordova: (!isServer && !!window.cordova),
        isNodeWebkit: (isServer && process.versions['node-webkit']),
        isProd: (sym.indexOf('DEBUG') === -1 && sym.indexOf('PROD') !== -1),
        isDebug: (sym.indexOf('DEBUG') !== -1)
    });

    // flair
    flair.info = Object.freeze({
        name: '<<name>>',
        title: '<<title>>',
        file: currentFile,
        version: '<<version>>',
        copyright: '<<copyright>>',
        license: '<<license>>',
        lupdate: new Date('<<lupdate>>')
    });  
    
    flair.members = [];
    flair.options = Object.freeze(options);
    flair.env = flair.options.env; // direct env access as well
    const a2f = (name, obj, disposer) => {
        flair[name] = Object.freeze(obj);
        flair.members.push(name);
        if (typeof disposer === 'function') { disposers.push(disposer); }
    };

    // members
    <!-- inject: ./(bundle)/types/support/noop.js -->   
    <!-- inject: ./(bundle)/types/support/nip.js -->   
    <!-- inject: ./(bundle)/types/support/nim.js -->   
    <!-- inject: ./(bundle)/types/support/Exception.js -->  
    <!-- inject: ./(bundle)/types/support/general.js -->  
    <!-- inject: ./(bundle)/types/get/typeOf.js -->   
    <!-- inject: ./(bundle)/types/check/is.js --> 
    <!-- inject: ./(bundle)/types/support/args.js -->   
    <!-- inject: ./(bundle)/types/support/event.js -->   
    <!-- inject: ./(bundle)/types/support/nie.js -->   
    <!-- inject: ./(bundle)/types/support/Dispatcher.js -->
    <!-- inject: ./(bundle)/port/port.js -->

    <!-- inject: ./(bundle)/assembly/AssemblyLoadContext.js -->  
    <!-- inject: ./(bundle)/assembly/Assembly.js -->  
    <!-- inject: ./(bundle)/assembly/Resource.js -->  
    <!-- inject: ./(bundle)/assembly/Route.js -->  
    <!-- inject: ./(bundle)/assembly/SharedChannel.js -->  
    <!-- inject: ./(bundle)/assembly/AppDomainProxy.js -->  
    <!-- inject: ./(bundle)/assembly/AssemblyLoadContextProxy.js -->  
    <!-- inject: ./(bundle)/assembly/AppDomain.js -->  

    <!-- inject: ./(bundle)/types/get/getAttr.js -->
    <!-- inject: ./(bundle)/types/get/getAssembly.js -->   
    <!-- inject: ./(bundle)/types/get/getAssemblyOf.js -->   
    <!-- inject: ./(bundle)/types/get/getContext.js -->   
    <!-- inject: ./(bundle)/types/get/getResource.js -->  
    <!-- inject: ./(bundle)/types/get/getRoute.js -->
    <!-- inject: ./(bundle)/types/get/getType.js -->   
    <!-- inject: ./(bundle)/types/get/getTypeOf.js -->    
    <!-- inject: ./(bundle)/types/get/getTypeName.js -->    
    <!-- inject: ./(bundle)/types/get/ns.js -->    
    <!-- inject: ./(bundle)/types/check/isDerivedFrom.js --> 
    <!-- inject: ./(bundle)/types/check/isAbstract.js --> 
    <!-- inject: ./(bundle)/types/check/isSealed.js --> 
    <!-- inject: ./(bundle)/types/check/isStatic.js --> 
    <!-- inject: ./(bundle)/types/check/isSingleton.js --> 
    <!-- inject: ./(bundle)/types/check/isDeprecated.js --> 
    <!-- inject: ./(bundle)/types/check/isInstanceOf.js -->  
    <!-- inject: ./(bundle)/types/check/as.js --> 
    <!-- inject: ./(bundle)/types/check/isComplies.js -->  
    <!-- inject: ./(bundle)/types/check/isImplements.js -->   
    <!-- inject: ./(bundle)/types/check/isMixed.js --> 

    <!-- inject: ./(bundle)/di/bring.js -->  
    <!-- inject: ./(bundle)/di/include.js -->  
    <!-- inject: ./(bundle)/types/lifecycle/dispose.js -->  
    <!-- inject: ./(bundle)/types/lifecycle/using.js -->   
    <!-- inject: ./(bundle)/attributes/attr.js -->  

    <!-- inject: ./(bundle)/types/support/builder.js -->  
    <!-- inject: ./(bundle)/types/class.js -->  
    <!-- inject: ./(bundle)/types/interface.js -->  
    <!-- inject: ./(bundle)/types/struct.js -->  
    <!-- inject: ./(bundle)/types/enum.js --> 
    <!-- inject: ./(bundle)/types/mixin.js -->

    <!-- inject: ./(bundle)/pubsub/on.js --> 
    <!-- inject: ./(bundle)/pubsub/post.js --> 
    <!-- inject: ./(bundle)/di/container.js -->  
    <!-- inject: ./(bundle)/pubsub/telemetry.js -->    
    <!-- inject: ./(bundle)/aop/aspects.js -->   
    <!-- inject: ./(bundle)/serialization/serializer.js --> 
    <!-- inject: ./(bundle)/tasks/tasks.js --> 
    <!-- inject: ./(bundle)/port/ports.js --> 
    <!-- inject: ./(bundle)/reflection/reflector.js -->    
    <!-- inject: ./(bundle)/types/support/utils.js -->    

    // freeze members
    flair.members = Object.freeze(flair.members);

    // builtin types
    (()=>{
        // NOTES: 
        // 1. Any relevant change in flair.cli/(bundle)/asm.js may require to bring here
        // 2. These build-in types do not support await include() type syntax on top, as these are not wrapped inside an async wrapper

        // assembly closure init (start)
        /* eslint-disable no-unused-vars */
        
        // flair object (already defined)

        // flair types, variables and functions
        const { Class, Struct, Enum, Interface, Mixin, Aspects, AppDomain, $$, attr, bring, Container, include, Port, on, post, telemetry,
                Reflector, Serializer, Tasks, as, is, isComplies, isDerivedFrom, isAbstract, isSealed, isStatic, isSingleton, isDeprecated,
                isImplements, isInstanceOf, isMixed, getAssembly, getAttr, getContext, getResource, getRoute, getType, ns, getTypeOf,
                getTypeName, typeOf, dispose, using, Args, Exception, noop, nip, nim, nie, event } = flair;
        const { TaskInfo } = flair.Tasks;
        const { env } = flair.options;
        const { forEachAsync, replaceAll, splitAndTrim, findIndexByProp, findItemByProp, which, guid, isArrowFunc, isASyncFunc, sieve,
                b64EncodeUnicode, b64DecodeUnicode } = flair.utils;
        
        // inbuilt modifiers and attributes compile-time-safe support
        const { $$static, $$abstract, $$virtual, $$override, $$sealed, $$private, $$privateSet, $$protected, $$protectedSet, $$readonly, $$async,
                $$overload, $$enumerate, $$dispose, $$post, $$on, $$timer, $$type, $$args, $$inject, $$resource, $$asset, $$singleton, $$serialize,
                $$deprecate, $$session, $$state, $$conditional, $$noserialize, $$ns } = $$;
    
        // access to DOC
        const DOC = ((env.isServer || env.isWorker) ? null : window.document);

        // current for this assembly
        const __currentContextName = AppDomain.context.current().name;
        const __currentFile = (env.isServer ? __filename : window.document.currentScript.src.replace(window.document.location.href, './'));
        const __currentPath = __currentFile.substr(0, __currentFile.lastIndexOf('/') + 1);
        AppDomain.loadPathOf('<<asm>>', __currentPath);

        // settings of this assembly (not supported)
        let settings = JSON.parse('{}');
        settings = Object.freeze(settings);

        // config of this assembly
        let config = JSON.parse('{}');
        config = Object.freeze(config);

        /* eslint-enable no-unused-vars */
        // assembly closure init (end)

        // assembly global functions (not supported)

        // set assembly being loaded
        AppDomain.context.current().currentAssemblyBeingLoaded('<<which_file>>');

        // assembly builtin-types (start)
        <!-- inject: ./(bundle)/builtin-types/(root)/IDisposable.js -->
        <!-- inject: ./(bundle)/builtin-types/(root)/IProgressReporter.js -->
        <!-- inject: ./(bundle)/builtin-types/(root)/Aspect.js -->
        <!-- inject: ./(bundle)/builtin-types/(root)/Attribute.js -->
        <!-- inject: ./(bundle)/builtin-types/(root)/Task.js -->        
        // assembly builtin-types (end)

        // assembly embedded resources (not supported)

        // clear assembly being loaded
        AppDomain.context.current().currentAssemblyBeingLoaded('');

        // register assembly definition object (not-supported)

        // assembly load complete (not-supported)
    })();

    // return
    return Object.freeze(flair);
});    
