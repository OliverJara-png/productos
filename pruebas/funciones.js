function saludar(nombre) {
    console.log("Hola.. "+nombre);
}
//saludar("Juan");

var saludo=nombre=>{
    console.log("Hola "+nombre);
}
saludo("Pancho");

var saludo2=(nombre1, nombre2)=>{
    console.log("Hola "+nombre1+" y "+nombre2);
}
saludo2("Juan","Luis");

var saludo3=(nombre1, nombre2)=>{
    return "Hola "+nombre1+" y "+nombre2;
}
console.log(saludo3("Pedro","Pablo"));

var saludo4=nombre1=>"Hola "+nombre1;
console.log(saludo4("Bethoveen"));

var saludo5=function(){
    console.log("Hola con función anónima");
}
saludo5();

var saludo6=()=>{
    console.log("Estas en saludo6")
}

var saludo7=(nombre="anónimo", s)=>{
    console.log("Hola "+nombre);
    s();
}
saludo7("Vivaldi", saludo6);

