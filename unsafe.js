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

function sizeof(x) {
    // JavaScript does not have a size of a value
    return;
}

function offsetof(x) {
    // JavaScript does not have a offset of a value
    return;
}

function alignof(x) {
    // JavaScript does not have a align of a value
    return;
}

function add(ptr, len) {
    return new Pointer(ptr.arbitraryType + len.val);
}

function slice(ptr, len) {
    return new Array(len.val).fill(ptr.arbitraryType)
}
