// @flow

"use strict";

const assert = require("assert");
const afn = require("./lib");

assert(afn("ok") === "ok\n");
assert(afn("日本語") === "日本語\n");

assert(afn("string\n") === "string\n");
assert(afn("string\r") === "string\r");
assert(afn("string\n\n") === "string\n\n");
assert(afn("string\r\n") === "string\r\n");
assert(afn("string\n\r\n") === "string\n\r\n");

assert(afn("string\nstring") === "string\nstring\n");
assert(afn("string\rstring") === "string\rstring\r");
assert(afn("string\r\nstring") === "string\r\nstring\r\n");
assert(afn("string\n\r\nstring") === "string\n\r\nstring\r\n");

assert(afn("\nstring") === "\nstring\n");
assert(afn("\rstring") === "\rstring\r");
assert(afn("\r\nstring") === "\r\nstring\r\n");
assert(afn("\n\r\nstring") === "\n\r\nstring\r\n");

assert(afn("\rstr\ning") === "\rstr\ning\n");
assert(afn("\nstr\ring") === "\nstr\ring\r");
assert(afn("\nstr\r\ning") === "\nstr\r\ning\r\n");
assert(afn("\rstr\r\ning") === "\rstr\r\ning\r\n");
