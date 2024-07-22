var c = [
  {
    id: 1,
    name: "Chuyên mục 1"
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    children: [
      {
        id: 4,
        name: "Chuyên mục 2.1"
      },
      {
        id: 5,
        name: "Chuyên mục 2.2",
        children: [
          {
            id: 10,
            name: "Chuyên mục 2.2.1"
          },
          {
            id: 11,
            name: "Chuyên mục 2.2.2"
          },
          {
            id: 12,
            name: "Chuyên mục 2.2.3"
          }
        ]
      },
      {
        id: 6,
        name: "Chuyên mục 2.3"
      }
    ]
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    children: [
      {
        id: 7,
        name: "Chuyên mục 3.1"
      },
      {
        id: 8,
        name: "Chuyên mục 3.2"
      },
      {
        id: 9,
        name: "Chuyên mục 3.3"
      }
    ]
  }
];
var b = "";
function inMucCon(a) {
  if (a.children) {
    var i = a.children;
    document.write(`<option>${b + a.name}</option>`);
    b += "--|";
    for (var j of i) {
      inMucCon(j);
    }
    b = b.slice(0, -3);
  } else {
    document.write(`<option>${b + a.name}</option>`);
  }
}
for (var i of c) {
  inMucCon(i);
}
