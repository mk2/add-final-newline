// @flow

"use strict";

module.exports = (input: string): string => {
  return ensureFinalNewline(input);
};

function ensureFinalNewline(input: string): string {
  const LF = "\n";
  const CR = "\r";

  const crLastIndex = input.lastIndexOf(CR);
  const lfLastIndex = input.lastIndexOf(LF);

  // SEP might be CRLF / CR / LF(default)
  const SEP =
    crLastIndex !== -1 && lfLastIndex - crLastIndex === 1
      ? CR + LF
      : crLastIndex > lfLastIndex
      ? CR
      : LF;

  if (!input.endsWith(SEP)) {
    return input + SEP;
  } else {
    return input;
  }
}
