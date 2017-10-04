(function() {
    // initialize with required symbols
    oojs({ symbols: ['DEBUG'] });

    


    var Mix1 = Mixin('Mix1', function() {
        this.func('mixed1', () => {
            console.log(this);
        });
    });
    var Mix2 = Mixin('Mix2', function() {
        this.func('mixed2', () => {
            console.log(this);
        });
    });

    var ITest = Interface('ITest', function() {
        this.func('check');
        this.prop('prop1');
        this.event('event1');
    });

    var Days = Enum('Days', {
        Mon: 0,
        Tue: 1,
        Wed: 2,
        Thu: 3,
        Fri: 4,
        Sat: 5,
        Sun: 6
    });

    // define classes
    var Vehicle1 = Class('Vehicle', [Mix1, Mix2, ITest], function(attr) {
        //attr('abstract');
        this.func('constructor', (cc) => {
            console.log('in constructor of Vehicle');
            this.cc = cc;
            this.capacity = cc;
            this.prop3 = 201; // readonly can be defined in constructor
        });

        attr('deprecate', 'Use capacity instead.');
        this.prop('cc', 0);
        this.prop('capacity', 0);

        attr('readonly');
        this.prop('prop3', 200);

        this.prop('aaaBBBB', 10);

        attr('async');
        this.func('func1', (resolve, reject, p1, p2) => {
            console.log('oops type is:' + typeof oops);
            console.log('abc type is:' + typeof abc);
            console.log('prop1 = ' + this.prop1);
            console.log(p1);
            console.log(p2);
            resolve(true);
        });

        //attr('private');
        attr('async');
        this.func('getAuth', (resolve, reject, callName) => {
            // Authoriation: 'Bearer ' + '...'
            if (callName === 'getAllItems') {
                resolve({});
            }
            reject();
        });

        // attr('fetch', 'http://services.groupkt.com/country/get/all', {
        //     method: 'get',
        //     headers: {
        //     },
        //     auth: this.getAuth,
        //     requestDataType: '',
        //     responseDataType: 'json'
        // });
        // this.func('getAllItems', (resolve, reject, response) => {
        //     if (response.isError) { reject(response.error); return; }
        //     console.log(response);
        //     resolve(response.data);
        // });

        let _prop1 = 20;
        attr('deprecate', 'this is test');
        //attr('sealed');
        this.prop('prop1', () => {
            console.log('event1 = ' + typeof this.event1);
            return _prop1;
        }, (value) => {
            console.log('event1 = ' + typeof this.event1);
            _prop1 = value;
        });

        attr('private');
        this.prop('myprivate', 10);

        // this.func('check', ['', 'string', 'string, number'], 
        //     () => {
        //         console.log('private property value =' + this.myprivate);
        //         console.log('protected property value =' + this.myprotected);
        //     }, 
        //     (a, b) => {

        //     },
        //     (a, b) => {

        //     });

        this.func('check', () => {
            console.log('private property value =' + this.myprivate);
            console.log('protected property value =' + this.myprotected);
        });

        // attr('overload', ['string']);
        // this.func('check', (a) => {
        //     console.log('private property value =' + this.myprivate);
        //     console.log('protected property value =' + this.myprotected);
        // });

        // attr('overload', ['string', 'number']);
        // this.func('check', (a, b) => {
        //     console.log('private property value =' + this.myprivate);
        //     console.log('protected property value =' + this.myprotected);
        // });

        attr('protected');
        this.prop('myprotected', 10);

        //attr('seal');
        this.func('func2', (a1) => {
            console.log(this.prop1);
            console.log('in base func:' + a1);
            this.event1(a1);
        });

        this.event('event1');

        attr('enumerate', false);
        this.prop('xyz', 1);

        attr('static');
        this.prop('staticProp1', 'static');

        attr('serialize', 'prop1');
        this.prop('p1', 10);

        this.func('dispose', () => {
            console.log('disposed Vehicle');
        });                    
    });
    
    var Car = Class('Car', Vehicle, function(attr) {
        //attr('singleton');       
        attr('override');
        this.func('constructor', (base, val) => {
            base(val);
            console.log('in constructor of Car w prop1 = ' + this.prop1);
            this.prop1 = this.prop1 * val;
            this.aaaBBBB = 200; // available internally but hidden externally
            //this.prop3 = 20000; // cannot be defined, only where it is defined as readonly
        });

        attr('override');
        this.func('func2', (base, a1) => {
            console.log('prop1 = ' + this.prop1);
            console.log('in derived func:' + a1);
            base(a1);
        });

        attr('override');
        attr('hide');
        this.prop('aaaBBBB');

        this.func('check2', () => {
            console.log('private property value =' + this.myprivate);
            console.log('protected property value =' + this.myprotected);
        });

        attr('inject', Object, 'vikas')
        this.func('func3', (i1, p1) => {
            console.log('injected: ' + i1);
            console.log(p1);
        });

        attr('inject', 'ILogger', 1)
        this.prop('logger', null);

        attr('multiinject', 'ILogger', 1)
        this.func('func4', (i1, p1) => {
            console.log('multi injected 1:' + i1);
            console.log(p1);
        });

        attr('multiinject', 'ILogger', 1)
        this.prop('logger2');

        attr('conditional', 'node');
        this.prop('mycond1', 10);

        attr('conditional', 'browser');
        this.prop('mycond1', 20);

        attr('conditional', 'DEBUG');
        this.prop('mycond2', 300);

        let fn = (e) => {
            console.log('Event ' + e.name + ' handled with: ' + e.args[0]);
            this.event1.unsubscribe(fn);
        };
        this.event1.subscribe(fn);

        attr('serialize', 'prop2');
        this.prop('p2', 20);

        attr('state');
        this.prop('storeTest', 10);

        // a readonly property is redefined via override
        //attr('override');
        //this.prop('prop3', 100);

        //attr('override');
        // this.prop('prop1', 4000);

        attr('override');
        this.func('dispose', () => {
            console.log('disposed Car');
        });
    });

    var BMW = Class('BMW', Car, function() {
        this.func('dispose', () => {
            console.log('disposed BMW');
        });

        this.func('func5', (x) => {
            console.log('I am func 5 with: ' + x);
            return x;
        });
    });

    Aspects.register('*.*', Class('ElapsedTime', Aspect, function() { 
        this.before((ctx) => {
            ctx.data.start = new Date().getMilliseconds();
            console.log('started executing: ' + ctx.className() + '.' + ctx.funcName());
        });
        this.after((ctx) => {
            console.log('done executing: ' + ctx.className() + '.' + ctx.funcName());
            ctx.data.end = new Date().getMilliseconds();
            ctx.data.elapsed = (ctx.data.end = ctx.data.start) / 1000;
            console.info(`${ctx.data.elapsed} seconds elapsed in execution of ${ctx.className()}.${ctx.funcName()}.`);
        });
        this.around((ctx, fn) => {
            return function(...args) {
                console.log('start executing wrapped: ' + ctx.className() + '.' + ctx.funcName());
                try {
                    ctx.result(fn(...args));
                } catch(err) {
                    ctx.error(err);
                }
                console.log('end executing wrapped: ' + ctx.className() + '.' + ctx.funcName());
                return ctx.result();
            }.bind(ctx.obj());
        });
    })); 

    Container.register('ILogger', Class('ConsoleLogger', function() {
        this.func('log', (msg) => {
            console.log(msg);
        });
    }));
    Container.register('ILogger', Class('ConsoleLogger2', function() {
        this.func('log', (msg) => {
            console.log('2: ' + msg);
        });
    }));

    using(new Car(2), (car) => {
        window.car = car;
        window.cls = Car;
    });

    using(new Vehicle(), (v1) => {
        window.v1 = v1;
        window.cls2 = Vehicle;
    });  

    var Level0Class = Class('Level0', function(attr) {
        // this.func('constructor', (arg1) => {
        //     console.log('In Level0: ' + arg1);
        // });
        // this.func('dispose', () => {
        //     console.log('In Level0');
        // });
        attr('async');
        this.func('test', (a1, a2, a3, a4) => {
            console.log('i am base');
        });
    });
    var Level1Class = Class('Level1', Level0Class, function(attr) {
        //attr('override');
        this.func('constructor', (arg1) => {
            //base(arg1);
            console.log('In Level1');
        });

        attr('override');
        attr('async');
        this.func('test', (a1, a2, a3, a4) => {
            debugger;
            console.log(a1);
            console.log(a2);
            console.log(a3);
            console.log(a4);
        });

        // attr('override');
        // this.func('dispose', (base) => {
        //     base();
        //     console.log('In Level1');
        // });                
    });
    var Level2Class = Class('Level2', Level1Class, function(attr) {
        // attr('override');
        // this.func('constructor', (base, arg1) => {
        //     base(arg1);
        //     console.log('In Level2');
        // });
        // attr('override');
        // this.func('dispose', (base) => {
        //     base();
        //     console.log('In Level2');
        // });         

        attr('readonly');
        attr('once');
        this.prop('vikas', null);       

        let v2 = null;
        attr('readonly');
        attr('once');
        this.prop('vikas2', () => {
            return v2;
        }, (value) => {
            v2 = value;
        });       

    });

    window.Level2Class = Level2Class;

    var system = Assembly('system', {
        Vehicle: Vehicle,
        BMW: BMW,
        Core: {
            Mix1: Mix1,
            More: {
                Mix2: Mix2
            }
        }
    });

    window.asm = system;
})();