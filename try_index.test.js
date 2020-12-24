const lib = require('./index.js');
const add2num = lib.add2num;

let a = "a", b = "b", c = "c", d = "d", f = "f", g = "g", h = "h";

test(
  'adding a plus a does make aa',
  () => expect( add2num(a,a) ).toStrictEqual( "aa" )
);

test(
  'adding a plus b does make ab',
  () => expect( add2num(a,b) ).toStrictEqual( "ab" )
);

test(
  'adding a plus c does make ac',
  () => expect( add2num(a,c) ).toStrictEqual( "ac" )
);

test(
  'adding a plus d does make ad',
  () => expect( add2num(a,d) ).toStrictEqual( "ad" )
);

test(
  'adding a plus f does make af',
  () => expect( add2num(a,f) ).toStrictEqual( "af" )
);

test(
  'adding a plus g does make ag',
  () => expect( add2num(a,g) ).toStrictEqual( "ag" )
);

test(
  'adding a plus h does make ah',
  () => expect( add2num(a,h) ).toStrictEqual( "ah" )
);

test(
  'adding b plus b does make bb',
  () => expect( add2num(b,b) ).toStrictEqual( "bb" )
);

test(
  'adding b plus c does make bc',
  () => expect( add2num(b,c) ).toStrictEqual( "bc" )
);

test(
  'adding b plus d does make bd',
  () => expect( add2num(b,d) ).toStrictEqual( "bd" )
);

test(
  'adding b plus f does make bf',
  () => expect( add2num(b,f) ).toStrictEqual( "bf" )
);

test(
  'adding b plus h does make bh',
  () => expect( add2num(b,h) ).toStrictEqual( "bh" )
);

test(
  'adding c plus c does make bh',
  () => expect( add2num(c,c) ).toStrictEqual( "cc" )
);