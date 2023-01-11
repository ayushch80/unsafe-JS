//implementation of "unsafe" package of GOLANG in JS


class ArbitraryType {
    constructor(val) {
        this.val = val;
    }
}

class IntegerType {
    constructor(val) {
        this.val = val;
    }
}

class Pointer {
    constructor(arbitraryType) {
        this.arbitraryType = arbitraryType;
    }
}

function Sizeof(x) {
    // returns the size of the object in bytes
    return new ObjectSizeof(x).size;
}

function Offsetof(x) {
    // not applicable in javascript
    throw "Offsetof function is not applicable in javascript"
}

function Alignof(x) {
    // not applicable in javascript
    throw "Alignof function is not applicable in javascript"
}

function Add(ptr, len) {
    return new Pointer(ptr.arbitraryType.slice(0, len.val))
}

function Slice(ptr, len) {
    return ptr.arbitraryType.slice(0, len.val)
}
