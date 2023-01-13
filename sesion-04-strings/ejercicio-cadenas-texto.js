let miNombre = "Norman";
console.log(miNombre);

let miApellido = "Leyva";
console.log(miApellido);

let estudiante = miNombre.concat(" ", miApellido);
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let numeroDeLetras = estudiante.length;
console.log(numeroDeLetras);

let primeraLetraNombre = miNombre[0];
console.log(primeraLetraNombre);

let ultimaLetraApellido = miApellido[4];
console.log(ultimaLetraApellido);

let incluyeContenido = estudiante.includes(miNombre);
console.log(incluyeContenido);
