const test = require("ava");
const fetch = require("cross-fetch");

const launch= require("../src/index.js");

test("a test that times out", async t => {
  launch();

  await fetch("http://localhost:8080");
  t.pass();
});

test("another test that is simply passing", t => t.pass());
