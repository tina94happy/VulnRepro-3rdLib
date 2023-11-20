var merge = function (target, source) {
    for (var attr in source) {
        if (typeof(target[attr]) === "object" && typeof(source[attr]) === "object") {
            merge(target[attr], source[attr]);
        } else {
            target[attr] = source[attr];
        }
    }
    return target;
};

source = {"name":"Alex","age":"27","State":"Ohio"}

craft_data = {"__proto__":{"isAdmin":true}}


console.log(merge(source, craft_data))
console.log(source.isAdmin);
