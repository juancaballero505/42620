import fs from 'fs';
import antlr4 from 'antlr4';
import gramaticaLexer from './.antlr/gramaticaLexer.js';
import gramaticaParser from './.antlr/gramaticaParser.js';

async function main() {
    let input;
    try {
        // Criterio: Lee los enunciados desde un archivo input.txt
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        console.error("Error: No se pudo encontrar o leer el archivo 'input.txt'. Asegurate de crearlo en la raíz del proyecto.");
        return; // Este return es válido porque está ADENTRO de la función main()
    }

    const chars = new antlr4.CharStreams.fromString(input);
    const lexer = new gramaticaLexer(chars);
   // --- CRITERIO: TABLA DE LEXEMAS - TOKENS ---
    const listaTokens = [];
    let t = lexer.nextToken();
    while (t.type !== antlr4.Token.EOF) {
        let nombreToken = "TOKEN_DESCONOCIDO";
        
        // Intentamos sacar el nombre nativo
        if (lexer.vocabulary) {
            nombreToken = lexer.vocabulary.getSymbolicName(t.type);
        }

        // Si da null o TOKEN_DESCONOCIDO, lo mapeamos por su lexema 
        if (!nombreToken || nombreToken === "TOKEN_DESCONOCIDO") {
            const lex = t.text;
            if (lex === 'variable') nombreToken = 'KEYWORD_VARIABLE';
            else if (lex === 'funcion') nombreToken = 'KEYWORD_FUNCION';
            else if (lex === 'imprimir') nombreToken = 'KEYWORD_IMPRIMIR';
            else if (lex === 'devolver') nombreToken = 'KEYWORD_DEVOLVER';
            else if (['mayusculas', 'minusculas', 'longitud', 'invertir', 'reemplazar'].includes(lex)) nombreToken = 'TRANSFORMACION';
            else if (lex === '=') nombreToken = 'OP_ASIGNACION';
            else if (lex === '+') nombreToken = 'OP_CONCATENAR';
            else if (lex === ';') nombreToken = 'PUNTO_Y_COMA';
            else if (lex === '(') nombreToken = 'PARENTESIS_ABRE';
            else if (lex === ')') nombreToken = 'PARENTESIS_CIERRA';
            else if (lex === '{') nombreToken = 'LLAVE_ABRE';
            else if (lex === '}') nombreToken = 'LLAVE_CIERRA';
            else if (lex === ',') nombreToken = 'COMA';
            else if (lex.startsWith('"')) nombreToken = 'TEXTO';
            else if (/^\d+$/.test(lex)) nombreToken = 'NUMERO';
            else nombreToken = 'NOMBRE';
        }

        listaTokens.push({
            Lexema: t.text,
            Token: nombreToken,
            Linea: t.line,
            Columna: t.column
        });
        t = lexer.nextToken();
    } 
    console.log("\n=============================================");
    console.log("       CRITERIO 2: TABLA DE LEXEMAS Y TOKENS ");
    console.log("=============================================");
    console.table(listaTokens);
    
    // Reseteamos el lexer para alimentar el Parser
    lexer.reset();
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new gramaticaParser(tokens);
    
    // Ejecutamos el análisis desde el axioma principal
    const tree = parser.programa();
    
    // --- CRITERIO: ÁRBOL DE ANÁLISIS SINTÁCTICO CONCRETO ---
    console.log("\n=============================================");
    console.log("       CRITERIO 3: ÁRBOL DE DERIVACIÓN (TEXTO)");
    console.log("=============================================");
    console.log(tree.toStringTree(parser.ruleNames));

    // Si el parser reportó errores sintácticos, frenamos la ejecución semántica
    if (parser._syntaxErrors > 0) {
        console.log(`\n[SINTAXIS] Se detectaron ${parser._syntaxErrors} errores. No se ejecutará el código.`);
        return; // Válido, frena la función main si el input está roto
    }

    // --- CRITERIO: TRADUCCIÓN E INTERPRETACIÓN SEMÁNTICA ---
    console.log("\n=============================================");
    console.log("       CRITERIO 4: EJECUCIÓN SEMÁNTICA (JS)   ");
    console.log("=============================================");
    try {
        interpretarCodigo(input);
    } catch (err) {
        console.error("[ERROR SEMÁNTICO]:", err.message);
    }
}

function interpretarCodigo(codigoOriginal) {
    let jsCodigo = codigoOriginal;
    
    // 1. Traducimos las palabras clave básicas
    jsCodigo = jsCodigo.replace(/variable\s+/g, 'let ');
    jsCodigo = jsCodigo.replace(/funcion\s+/g, 'function ');
    jsCodigo = jsCodigo.replace(/imprimir\((.*?)\);/g, 'console.log($1);');
    jsCodigo = jsCodigo.replace(/devolver\s+/g, 'return ');
    
    // 2. Traducimos las operaciones de texto
    jsCodigo = jsCodigo.replace(/mayusculas\((.*?)\)/g, '($1).toUpperCase()');
    jsCodigo = jsCodigo.replace(/minusculas\((.*?)\)/g, '($1).toLowerCase()');
    jsCodigo = jsCodigo.replace(/longitud\((.*?)\)/g, '($1).length');
    jsCodigo = jsCodigo.replace(/invertir\((.*?)\)/g, '($1).split("").reverse().join("")');
    
    // 3. Ejecutamos el bloque completo en JavaScript
    eval(jsCodigo);
}
// Llamada inicial al hilo principal
main().catch(err => console.error("Error crítico en el hilo principal:", err));



