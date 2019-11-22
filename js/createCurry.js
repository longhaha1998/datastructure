function createCurry(func, args) {
    
    let tempLen = func.length;
    let initArgs = args || [];

    return function(...rest) {
        // let tempArgs = Array.from(arguments);
        // [].push.apply(tempArgs, initArgs);
        // let tempArgs = [...Array.from(arguments), ...initArgs];
        let tempArgs = [...rest, ...initArgs];

        if (tempArgs.length<tempLen) {
            return createCurry.call(this, func, tempArgs);
        }

        return func.apply(this, tempArgs);
    }
}

// 无限参数的柯里化

function curryAdd(...addRest) {
    let args = addRest;

    var adder = function (...adderRest) {
        args.push(...adderRest);
        return adder;
    }

    adder.toString = function(){
        return args.reduce(function(a,b){
            return a+b;
        },0);
    }

    return adder;
}

// 柯里化通式

function currying(func, ...rest) {
    // let initArgs = [].slice.call(arguments,1);
    let initArgs = rest;

    return function(...tempRest){
        [].push.apply(initArgs, tempRest);
        return func.apply(null, initArgs);
    }
}

// 利用柯里化实现bind

Function.prototype.curryingBind = function(context, ...rest) {
    let _this = this;
    let initArgs = rest;
    
    return function(...tempRest){
        return _this.apply(context, [...initArgs, ...tempRest]);
    }
}

// 实现一个apply

Function.prototype.objectApply =function(context, ...rest) {
    context['_tempThis'] = this;
    let result = context['_tempThis'](...rest);
    delete context['_tempThis'];
    return result();
}




