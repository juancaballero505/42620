==============================DOCUMENTACIÓN DEL PROYECTO: ANALIZADOR SINTÁCTICO EBNF 2026===========================
ALUMNO: JUAN CABALLERO
LEGAJO:42620
COMISION: 2K13

Este proyecto consiste en un analizador léxico, sintáctico y semántico desarrollado con **ANTLR4** y **Node.js**. El sistema lee un archivo de texto con código fuente de un lenguaje simulado, genera la tabla de tokens, construye el árbol de derivación sintáctica y ejecuta la traducción semántica en JavaScript.

## Requisitos Previos

Asegúrate de tener instalado en tu sistema:
* [Node.js](https://nodejs.org/) (Versión 18 o superior recomendada)
* Java Runtime Environment (JRE) 21 (la mas estable) (Necesario para compilar la gramática con el `.jar` de ANTLR)

## Instalación y Configuración

1. Clona el siguiente repositorio en tu máquina local: https://github.com/juancaballero505/42620

2. Abre una terminal en la raíz del proyecto e instala las dependencias de ANTLR4 para JavaScript:
   
   npm install

Configura el código fuente que deseas analizar dentro del archivo input.txt en la raíz del proyecto.

Ejecuta el analizador con el siguiente comando:npm start 
=====================================================================================================================

