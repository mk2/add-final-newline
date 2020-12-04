// @flow

"use strict";

const assert = require("assert");
const mod = require("./lib");

assert(mod("ok") === "ok\n");
assert(mod("日本語") === "日本語\n");
assert(mod("string\n") === "string\n");
assert(mod("string\n\n") === "string\n\n");
