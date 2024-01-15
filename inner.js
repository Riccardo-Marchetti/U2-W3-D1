class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  verificaeta(x) {
    if (x.age > this.age) {
      console.log("x è piu vecchio di y");
    } else if (this.age > x.age) {
      console.log("y è più vecchio di x");
    } else if (x.age === this.age) {
      console.log("x e y hanno la stessa età");
    }
  }
  verificaeta1(x, y) {
    if (x.age > y.age) {
      console.log("x è piu vecchio di y");
    } else if (y.age > x.age) {
      console.log("y è più vecchio di x");
    } else if (x.age === y.age) {
      console.log("x e y hanno la stessa età");
    }
  }
}
const x = new User("Mario", "Rossi", 30, "Milano");
const y = new User("Giovanni", "Bianchi", 25, "Roma");
y.verificaeta(x);
y.verificaeta1(x, y);

const nameInput = document.getElementById("Name");
const ownernameInput = document.getElementById("Owner");
const speciesInput = document.getElementById("Species");
const breedInput = document.getElementById("Breed");
const saveButton = document.querySelector("form button");

const animali = [];
class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  padrone(x) {
    if (this.ownerName == x.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}

const lista = function (e) {
  const newlist = document.getElementById("list");
  const newCol = document.createElement("div");
  newCol.innerHTML = `
    <div col d-flex flex-columns >
    <ul class="list-group mb-3">
        <li class="list-group-item">${e.petName}</li>
        <li class="list-group-item">${e.ownerName}</li>
        <li class="list-group-item">${e.species}</li>
        <li class="list-group-item">${e.breed}</li>
        
      </ul >
    </div>`;
  newlist.appendChild(newCol);
};

const formreference = document.getElementsByTagName("form")[0];
formreference.addEventListener("submit", function (e) {
  e.preventDefault();
  const dati = new Pet(
    nameInput.value,
    ownernameInput.value,
    speciesInput.value,
    breedInput.value
  );
  animali.forEach((x) => {
    console.log(x.padrone(dati));
  });
  animali.push(dati);
  lista(dati);
});
