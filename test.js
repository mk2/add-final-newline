// @flow

"use strict";

const assert = require("assert");
const afn = require("./lib");

assert(afn("ok") === "ok\n");
assert(afn("日本語") === "日本語\n");
assert(afn("string\n") === "string\n");
assert(afn("string\n\n") === "string\n\n");
