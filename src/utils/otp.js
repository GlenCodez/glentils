"use strict";
exports.__esModule = true;
// import * as totp from 'totp-generator'
var base32_encode_1 = require("base32-encode");
var buff = Buffer.from("GlenGlen");
var base32Str = (0, base32_encode_1["default"])(buff, 'RFC3548');
console.log(buff, base32Str);
