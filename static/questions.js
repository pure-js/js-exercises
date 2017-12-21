const questions = [
  {
    "name": "10",
    "category": "unclassified",
    "value": "console.log(4 - \"5\" + 0xf - \"1e1\");\n"
  },
  {
    "name": "11",
    "category": "unclassified",
    "value": "function F() {}\n\nconsole.log(F.prototyope);\n"
  },
  {
    "name": "12",
    "category": "unclassified",
    "value": "function F() {}\n\nconsole.log(F instanceof Function);\n"
  },
  {
    "name": "13",
    "category": "unclassified",
    "value": "var a = [1, 2, 3];\nvar b = [1, 2, 3];\n\nconsole.log(a == b);\n"
  },
  {
    "name": "4",
    "category": "unclassified",
    "value": "var y = 1;\n\nif (function f(){}) {\n  y += typeof f;\n}\n\nconsole.log(y);\n"
  },
  {
    "name": "7",
    "category": "unclassified",
    "value": "var a = new Array(1,2),\n    b = new Array(3);\n\nconsole.log(a[0] + b[0]);\n"
  },
  {
    "name": "6",
    "category": "unclassified",
    "value": "console.log( +\"something\" );\n"
  },
  {
    "name": "8",
    "category": "unclassified",
    "value": "var a = (1,5 - 1) * 2;\n\nconsole.log(a);\n"
  },
  {
    "name": "9",
    "category": "unclassified",
    "value": "for (var key in {1:1, 0:0}) {\n  console.log(key);\n}\n"
  },
  {
    "name": "hoisting\\1",
    "category": "hoisting",
    "value": "var foo = 1;\n\nfunction bar() {\n  if ( !foo ) {\n    var foo = 10;\n  }\n\n  console.log(foo);\n}\n\nbar();\n"
  },
  {
    "name": "hoisting\\2",
    "category": "hoisting",
    "value": "function test() {\n  a = 1;\n\n  console.log(a);\n\n  console.log(b);\n\n  console.log(c());\n\n  var a;\n\n  var b = 2;\n\n  function c() {\n    return 3;\n  }\n}\n\ntest();\n"
  },
  {
    "name": "hoisting\\3",
    "category": "hoisting",
    "value": "var a = 1;\n\nfunction test() {\n  a = 10;\n\n  return;\n\n  function a() {}\n}\n\ntest();\n\nconsole.log(a);\n"
  },
  {
    "name": "hoisting\\4",
    "category": "hoisting",
    "value": "console.log(str);\nvar str = \"Hello\";\n"
  },
  {
    "name": "hoisting\\two-for-loops",
    "category": "hoisting",
    "value": "var a = [];\n\nfor (var i = 0; i < 10; i++)\n  a.push(function () {\n    console.log(i);\n  })\n\nfor (var j = 0; j < 10; ++j)\n  a[j]()\n"
  }
];
export default questions;
