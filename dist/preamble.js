(() => { let ados = JSON.parse('[{"name":"flair.app","file":"./flair.app{.min}.js","mainAssembly":"flair","desc":"True Object Oriented JavaScript","title":"Flair.js","version":"0.30.11","lupdate":"Mon, 01 Apr 2019 02:52:34 GMT","builder":{"name":"<<name>>","version":"<<version>>","format":"fasm","formatVersion":"1","contains":["initializer","types","enclosureVars","enclosedTypes","resources","assets","routes","selfreg"]},"copyright":"(c) 2017-2019 Vikas Burman","license":"MIT","types":["flair.app.Bootware","flair.app.App","flair.app.Host","flair.app.BootEngine","flair.boot.ClientHost","flair.boot.ServerHost","flair.bw.DIContainer","flair.bw.Middlewares","flair.bw.NodeEnv","flair.bw.ResHeaders","flair.bw.Router"],"resources":[],"assets":[],"routes":[]}]');
const flair = (typeof global !== 'undefined' ? require('flairjs') : (typeof WorkerGlobalScope !== 'undefined' ? WorkerGlobalScope.flair : window.flair));
flair.AppDomain.registerAdo(...ados);}
)();
