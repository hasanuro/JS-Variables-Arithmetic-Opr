//1-var 
var a = 12;
document.write(a + "<br>");
 a = 35; //rewrite
document.write(a + "<br>");
 var a = 70; //decalare and ini
 document.write(a + "<br>");

//2-let
let num = 100;
document.write(num + "<br>");
num =800; //rewrite new value num
document.write(num + "<br>");
// let num = 300; //error (decalre and ini)

//3-const
const value = 12;
document.write(value + "<br>");
// value = 47;//(error)rewrite
// document.write(value + "<br>")
// const value = 32;//error (ini and delare)

//JS OPERATORS
//1-AIRTHMETIC OPERATOR
//+
//-
//*
///
//** 
//%
//++
//--

let  x =10; //decalre init
let y =4;//decalre init
document.write("AIRTHMETIC OPERATORS <BR>" )
document.write("x+y :" , x+y ,"<br>" );
document.write("x-y :" , x-y ,"<br>");
document.write("x*y :" , x*y ,"<br>");
document.write("x/y :" , x/y ,"<br>");
document.write("x**y :" , x**y ,"<br>"); //** means exponenetial 10^4 */
// document.write(" POST INCREMENT x++ :" , x++ ,"<br>");
// document.write(x);
document.write(" ++x :" , ++x ,"<br>");  // Pre-Inc means first add 1 then print the value-> means it will show : 11 
document.write(" x++ :" , x++ ,"<br>");  // Post-Inc means first print the value then add 1-> means it will show : 11 but on backend in x 12 is store
document.write(" ++x :" , ++x ,"<br>");  // Pre-Inc means first add 1 then print the value-> means it will show : 13 
document.write(" --x :" , --x ,"<br>");  // Pre-Dec means first sub 1 then print the value-> means it will show : 12
document.write(" x-- :" , x-- ,"<br>");  // Post-Inc means first print the value then sub 1-> means it will show : 12 but on backend in x 11 is store
document.write(" x :" , x ,"<br>");      // print the value which stor in x-> means it will show : 11 which store in backend

// document.write("x+y :" , x+y );