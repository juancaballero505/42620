grammar gramatica;

// REGLAS SINTÁCTICAS (Fieles a la EBNF de la imagen)
programa      : (declaracion | funcion | ejecucion)* EOF ;

declaracion   : 'variable' NOMBRE ('=' valor)? ';' ;

funcion       : 'funcion' NOMBRE '(' argumentos? ')' '{' instrucciones '}' ;

argumentos    : NOMBRE (',' argumentos)? ;

// Agregamos concatenar acá por si el ejemplo que pruebe usted lo use directamente

// Agregamos la llamada a función al final con el símbolo '|'
instrucciones : (operacion_texto | concatenar | impresion | retorno | NOMBRE '(' argumentos? ')' ';')+ ;

ejecucion     : operacion_texto | concatenar | impresion | NOMBRE '(' ')' ';' ;

operacion_texto : NOMBRE '=' transformacion '(' cadena ')' ';' ;

concatenar    : NOMBRE '=' cadena '+' cadena ';' ;

transformacion  : 'mayusculas' | 'minusculas' | 'longitud' | 'invertir' | 'reemplazar' ;

impresion     : 'imprimir' '(' valor ')' ';' ;

retorno       : 'devolver' valor ';' ;

// Según la imagen: valor puede ser texto, numero o variable (nombre)
valor         : TEXTO | NUMERO | NOMBRE ;

cadena        : TEXTO | NOMBRE ;


// REGLAS LÉXICAS
TEXTO         : '"' (~['"']* ) '"' ;
NUMERO        : [0-9]+ ;
NOMBRE        : [a-zA-Z_][a-zA-Z0-9_]* ;

WS            : [ \t\r\n]+ -> skip ;

