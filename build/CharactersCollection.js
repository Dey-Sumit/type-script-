"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    CharactersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var temp = this.data[leftIndex];
        // this.data[leftIndex] = this.data[rightIndex]
        // this.data[rightIndex] = temp
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
