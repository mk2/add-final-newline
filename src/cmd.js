// @flow

"use strict";

const assert = require("assert");
const path = require("path");
const _fs = require("fs");
const fs = _fs.promises;

const mod = require("..");

assert(process.argv[2], "*** need to specify target file.");

async function main(filePath: string) {
  const absolutePath = path.resolve(process.cwd(), filePath);
  try {
    await fs.access(
      absolutePath,
      _fs.constants.F_OK | _fs.constants.R_OK | _fs.constants.W_OK
    );
  } catch (err) {
    console.error(`*** not found file: ${absolutePath}\n` + err);
  }

  const contents = await fs.readFile(absolutePath).catch(() => "");

  try {
    await fs.writeFile(absolutePath, mod(contents));
  } catch (err) {
    console.error(`*** failed to write file: ${absolutePath}\n` + err);
  }
}

main(process.argv[2]);
