export class ciudad{
provincias:String;
barrios:String;
calles:String;
avenidas:String;

constructor(provincias="", barrios="", calles="", avenidas=""){
    this.provincias=provincias;
    this.barrios=barrios;
    this.calles=calles;
    this.avenidas=avenidas;
}
set Provincias(value:String){
    this.provincias=value
}
get Provincias(){
    return this.provincias
}
set Barrios(value:String){
    this.barrios=value
}
get Barrios(){
    return this.barrios
}
set Calles(value:String){
    this.Calles=value
}
get Calles(){
    return this.calles
}
set Avenidas(value:String){
    this.avenidas=value
}
get Avenidas(){
    return this.avenidas
}
SalidaDatosPersona(){
    return ("Los datos son: "+this.Provincias+"," +this.Barrios+"," +this.Calles );
}

}
