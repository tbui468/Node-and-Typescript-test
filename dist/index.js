"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = require("./App");
var lodash_1 = __importDefault(require("lodash"));
var out = "the sum of 5 and 5 is " + App_1.add(5, 5);
console.log(out);
var arr = [1, 2, 3];
lodash_1.default.fill(arr, 10);
var i = 0;
for (i = 0; i < 3; i++) {
    console.log(arr[i]);
}
