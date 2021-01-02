const lib = require('./index.js');
const join2 = lib.join2
      add2 = lib.add2,
      splitThis = lib.splitThis;

let a = "a", b = "b", c = "c", d = "d", f = "f", g = "g", h = "h";

/*      join2        */
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
  'joining b and "-10" makes "b10"!',
  () => expect( join2(b,-10) ).toStrictEqual( "b10" )
);

test(
  'joining "b" and 12 makes "b12"!',
  () => expect( join2(b,12) ).toStrictEqual( "b12" )
);

/*      add2        */

test(
  'adding 1 and 2 makes three',
  () => expect(add2(1,2)).toStrictEqual( 3 )
);

test(
  'adding a and b is not going to work',
  () => expect(add2("a","b")).toThrowError( add2 )
);

/*   splitThis     */

test(
  'splitting "ab" makes an array: [a,b]',
  () => expect( splitThis("ab") ).toStrictEqual( ['a','b'] )
);

test(
  'splitting "abc" makes an array: [a,b,c]',
  () => expect( splitThis("abc") ).toStrictEqual( ['a','b','c'] )
);