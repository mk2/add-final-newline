// @flow

"use strict";

module.exports = (input: string): string => {
  return ensureFinalNewlineFromString(input);
};

function ensureFinalNewlineFromString(input: string): string {
  return ensureFinalNewline(Buffer.from(input)).toString();
}

function ensureFinalNewline(input: Buffer): Buffer {
  const LF = "\n".charCodeAt(0);
  const CR = "\r".charCodeAt(0);

  const SEP = input.includes(CR) ? CR : LF;

  if (input[input.length - 1] !== SEP) {
    return Buffer.concat([input, Buffer.from([SEP])]);
  } else {
    return input;
  }
}
