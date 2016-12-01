Array.prototype.isArray =function (obj){
    return Array.prototype.isArray?Array.prototype.isArray(obj):Object.prototype.toString.call(obj)==="object array"
}