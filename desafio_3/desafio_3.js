class prersona {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
    saludar() {
        console.log(`Hola, me llamo ${this.name} y tengo ${this.age} años`);
    } 
}

  const personas = [];
    personas.push(new prersona(prompt("Ingrese su nombre"), prompt("Ingrese su edad")));  
    personas.push(new prersona(prompt("Ingrese su nombre"), prompt("Ingrese su edad")));
    personas.push(new prersona(prompt("Ingrese su nombre"), prompt("Ingrese su edad")));


for (const persona of personas)
  persona.saludar();
