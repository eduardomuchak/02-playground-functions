// Desafio 10
function techList(technology, name) {
  if (technology.length === 0) {
    return 'Vazio!';
  }

  let technologyInOrder = technology.sort();
  let list = [];

  for (let item of technologyInOrder) {
    list.push({tech: item, name: name});
  }
  return list;
}


// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
