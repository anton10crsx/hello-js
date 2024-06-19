console.log("{;}");

function sayHello(nname) {
  console.log(`Ciao, ${nname}!`);
  document.body.innerHTML = `<h1>Ciao, ${nname}!</h1>`;
}

const myNname = "Anton";

sayHello("Pippo");
sayHello("Pippa");
sayHello(myNname);
sayHello("Chiara");

// - - -

function infoPerson(nname, surname = "Foo", age) {
  console.log(`Info: \nNome: ${nname}, Cognome: ${surname}, Età: ${age}.`);
}

infoPerson("Jim", "Morrison", 27);
infoPerson("Pippo", undefined, 99);
