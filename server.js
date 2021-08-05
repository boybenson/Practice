let genFunction = function* () {
  console.log("hey");
  yield { name: "Yeboah Benson", role: "intern" };
  yield 2;
  yield { name: "Mahali Asmah", role: "Snr Engineer" };
  yield 3;
};

let genObj = genFunction();

console.log(genObj.next());
