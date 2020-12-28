const lib = require('./index.js');
const join2 = lib.join2;

let a = "a", b = "b", c = "c", d = "d", f = "f", g = "g", h = "h";

test(
  'joining "a" and "a" makes "aa"!',
  () => expect( join2(a,a) ).toStrictEqual( "aa" )
);

test(
  'joining "a" and 3 makes "a3"!',
  () => expect( join2(a,3) ).toStrictEqual( "a3" )
);

test(
  'joining -7 and "c" makes "7c"!',
  () => expect( join2(-7,c) ).toStrictEqual( "7c" )
);

test(
  'joining "b" and 12 makes "b12"!',
  () => expect( join2(b,12) ).toStrictEqual( "b12" )
);