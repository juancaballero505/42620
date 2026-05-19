// Generated from gramatica.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import gramaticaListener from './gramaticaListener.js';
const serializedATN = [4,1,21,116,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
1,0,1,0,1,0,5,0,30,8,0,10,0,12,0,33,9,0,1,0,1,0,1,1,1,1,1,1,1,1,3,1,41,8,
1,1,1,1,1,1,2,1,2,1,2,1,2,3,2,49,8,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,3,3,
59,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,68,8,4,1,4,1,4,4,4,72,8,4,11,4,12,
4,73,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,83,8,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,
1,10,1,10,1,11,1,11,1,12,1,12,1,12,0,0,13,0,2,4,6,8,10,12,14,16,18,20,22,
24,0,3,1,0,11,15,1,0,18,20,2,0,18,18,20,20,117,0,31,1,0,0,0,2,36,1,0,0,0,
4,44,1,0,0,0,6,55,1,0,0,0,8,71,1,0,0,0,10,82,1,0,0,0,12,84,1,0,0,0,14,92,
1,0,0,0,16,99,1,0,0,0,18,101,1,0,0,0,20,107,1,0,0,0,22,111,1,0,0,0,24,113,
1,0,0,0,26,30,3,2,1,0,27,30,3,4,2,0,28,30,3,10,5,0,29,26,1,0,0,0,29,27,1,
0,0,0,29,28,1,0,0,0,30,33,1,0,0,0,31,29,1,0,0,0,31,32,1,0,0,0,32,34,1,0,
0,0,33,31,1,0,0,0,34,35,5,0,0,1,35,1,1,0,0,0,36,37,5,1,0,0,37,40,5,20,0,
0,38,39,5,2,0,0,39,41,3,22,11,0,40,38,1,0,0,0,40,41,1,0,0,0,41,42,1,0,0,
0,42,43,5,3,0,0,43,3,1,0,0,0,44,45,5,4,0,0,45,46,5,20,0,0,46,48,5,5,0,0,
47,49,3,6,3,0,48,47,1,0,0,0,48,49,1,0,0,0,49,50,1,0,0,0,50,51,5,6,0,0,51,
52,5,7,0,0,52,53,3,8,4,0,53,54,5,8,0,0,54,5,1,0,0,0,55,58,5,20,0,0,56,57,
5,9,0,0,57,59,3,6,3,0,58,56,1,0,0,0,58,59,1,0,0,0,59,7,1,0,0,0,60,72,3,12,
6,0,61,72,3,14,7,0,62,72,3,18,9,0,63,72,3,20,10,0,64,65,5,20,0,0,65,67,5,
5,0,0,66,68,3,6,3,0,67,66,1,0,0,0,67,68,1,0,0,0,68,69,1,0,0,0,69,70,5,6,
0,0,70,72,5,3,0,0,71,60,1,0,0,0,71,61,1,0,0,0,71,62,1,0,0,0,71,63,1,0,0,
0,71,64,1,0,0,0,72,73,1,0,0,0,73,71,1,0,0,0,73,74,1,0,0,0,74,9,1,0,0,0,75,
83,3,12,6,0,76,83,3,14,7,0,77,83,3,18,9,0,78,79,5,20,0,0,79,80,5,5,0,0,80,
81,5,6,0,0,81,83,5,3,0,0,82,75,1,0,0,0,82,76,1,0,0,0,82,77,1,0,0,0,82,78,
1,0,0,0,83,11,1,0,0,0,84,85,5,20,0,0,85,86,5,2,0,0,86,87,3,16,8,0,87,88,
5,5,0,0,88,89,3,24,12,0,89,90,5,6,0,0,90,91,5,3,0,0,91,13,1,0,0,0,92,93,
5,20,0,0,93,94,5,2,0,0,94,95,3,24,12,0,95,96,5,10,0,0,96,97,3,24,12,0,97,
98,5,3,0,0,98,15,1,0,0,0,99,100,7,0,0,0,100,17,1,0,0,0,101,102,5,16,0,0,
102,103,5,5,0,0,103,104,3,22,11,0,104,105,5,6,0,0,105,106,5,3,0,0,106,19,
1,0,0,0,107,108,5,17,0,0,108,109,3,22,11,0,109,110,5,3,0,0,110,21,1,0,0,
0,111,112,7,1,0,0,112,23,1,0,0,0,113,114,7,2,0,0,114,25,1,0,0,0,9,29,31,
40,48,58,67,71,73,82];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class gramaticaParser extends antlr4.Parser {

    static grammarFileName = "gramatica.g4";
    static literalNames = [ null, "'variable'", "'='", "';'", "'funcion'", 
                            "'('", "')'", "'{'", "'}'", "','", "'+'", "'mayusculas'", 
                            "'minusculas'", "'longitud'", "'invertir'", 
                            "'reemplazar'", "'imprimir'", "'devolver'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "TEXTO", "NUMERO", "NOMBRE", "WS" ];
    static ruleNames = [ "programa", "declaracion", "funcion", "argumentos", 
                         "instrucciones", "ejecucion", "operacion_texto", 
                         "concatenar", "transformacion", "impresion", "retorno", 
                         "valor", "cadena" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = gramaticaParser.ruleNames;
        this.literalNames = gramaticaParser.literalNames;
        this.symbolicNames = gramaticaParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, gramaticaParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1114130) !== 0)) {
	            this.state = 29;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 1:
	                this.state = 26;
	                this.declaracion();
	                break;
	            case 4:
	                this.state = 27;
	                this.funcion();
	                break;
	            case 16:
	            case 20:
	                this.state = 28;
	                this.ejecucion();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 33;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 34;
	        this.match(gramaticaParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaracion() {
	    let localctx = new DeclaracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, gramaticaParser.RULE_declaracion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.match(gramaticaParser.T__0);
	        this.state = 37;
	        this.match(gramaticaParser.NOMBRE);
	        this.state = 40;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 38;
	            this.match(gramaticaParser.T__1);
	            this.state = 39;
	            this.valor();
	        }

	        this.state = 42;
	        this.match(gramaticaParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcion() {
	    let localctx = new FuncionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, gramaticaParser.RULE_funcion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(gramaticaParser.T__3);
	        this.state = 45;
	        this.match(gramaticaParser.NOMBRE);
	        this.state = 46;
	        this.match(gramaticaParser.T__4);
	        this.state = 48;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 47;
	            this.argumentos();
	        }

	        this.state = 50;
	        this.match(gramaticaParser.T__5);
	        this.state = 51;
	        this.match(gramaticaParser.T__6);
	        this.state = 52;
	        this.instrucciones();
	        this.state = 53;
	        this.match(gramaticaParser.T__7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentos() {
	    let localctx = new ArgumentosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, gramaticaParser.RULE_argumentos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(gramaticaParser.NOMBRE);
	        this.state = 58;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 56;
	            this.match(gramaticaParser.T__8);
	            this.state = 57;
	            this.argumentos();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, gramaticaParser.RULE_instrucciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 71;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 60;
	                this.operacion_texto();
	                break;

	            case 2:
	                this.state = 61;
	                this.concatenar();
	                break;

	            case 3:
	                this.state = 62;
	                this.impresion();
	                break;

	            case 4:
	                this.state = 63;
	                this.retorno();
	                break;

	            case 5:
	                this.state = 64;
	                this.match(gramaticaParser.NOMBRE);
	                this.state = 65;
	                this.match(gramaticaParser.T__4);
	                this.state = 67;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===20) {
	                    this.state = 66;
	                    this.argumentos();
	                }

	                this.state = 69;
	                this.match(gramaticaParser.T__5);
	                this.state = 70;
	                this.match(gramaticaParser.T__2);
	                break;

	            }
	            this.state = 73; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1245184) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ejecucion() {
	    let localctx = new EjecucionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, gramaticaParser.RULE_ejecucion);
	    try {
	        this.state = 82;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 75;
	            this.operacion_texto();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 76;
	            this.concatenar();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 77;
	            this.impresion();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 78;
	            this.match(gramaticaParser.NOMBRE);
	            this.state = 79;
	            this.match(gramaticaParser.T__4);
	            this.state = 80;
	            this.match(gramaticaParser.T__5);
	            this.state = 81;
	            this.match(gramaticaParser.T__2);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operacion_texto() {
	    let localctx = new Operacion_textoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, gramaticaParser.RULE_operacion_texto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.match(gramaticaParser.NOMBRE);
	        this.state = 85;
	        this.match(gramaticaParser.T__1);
	        this.state = 86;
	        this.transformacion();
	        this.state = 87;
	        this.match(gramaticaParser.T__4);
	        this.state = 88;
	        this.cadena();
	        this.state = 89;
	        this.match(gramaticaParser.T__5);
	        this.state = 90;
	        this.match(gramaticaParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	concatenar() {
	    let localctx = new ConcatenarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, gramaticaParser.RULE_concatenar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this.match(gramaticaParser.NOMBRE);
	        this.state = 93;
	        this.match(gramaticaParser.T__1);
	        this.state = 94;
	        this.cadena();
	        this.state = 95;
	        this.match(gramaticaParser.T__9);
	        this.state = 96;
	        this.cadena();
	        this.state = 97;
	        this.match(gramaticaParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	transformacion() {
	    let localctx = new TransformacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, gramaticaParser.RULE_transformacion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 63488) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	impresion() {
	    let localctx = new ImpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, gramaticaParser.RULE_impresion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.match(gramaticaParser.T__15);
	        this.state = 102;
	        this.match(gramaticaParser.T__4);
	        this.state = 103;
	        this.valor();
	        this.state = 104;
	        this.match(gramaticaParser.T__5);
	        this.state = 105;
	        this.match(gramaticaParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	retorno() {
	    let localctx = new RetornoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, gramaticaParser.RULE_retorno);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        this.match(gramaticaParser.T__16);
	        this.state = 108;
	        this.valor();
	        this.state = 109;
	        this.match(gramaticaParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, gramaticaParser.RULE_valor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1835008) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, gramaticaParser.RULE_cadena);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        _la = this._input.LA(1);
	        if(!(_la===18 || _la===20)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

gramaticaParser.EOF = antlr4.Token.EOF;
gramaticaParser.T__0 = 1;
gramaticaParser.T__1 = 2;
gramaticaParser.T__2 = 3;
gramaticaParser.T__3 = 4;
gramaticaParser.T__4 = 5;
gramaticaParser.T__5 = 6;
gramaticaParser.T__6 = 7;
gramaticaParser.T__7 = 8;
gramaticaParser.T__8 = 9;
gramaticaParser.T__9 = 10;
gramaticaParser.T__10 = 11;
gramaticaParser.T__11 = 12;
gramaticaParser.T__12 = 13;
gramaticaParser.T__13 = 14;
gramaticaParser.T__14 = 15;
gramaticaParser.T__15 = 16;
gramaticaParser.T__16 = 17;
gramaticaParser.TEXTO = 18;
gramaticaParser.NUMERO = 19;
gramaticaParser.NOMBRE = 20;
gramaticaParser.WS = 21;

gramaticaParser.RULE_programa = 0;
gramaticaParser.RULE_declaracion = 1;
gramaticaParser.RULE_funcion = 2;
gramaticaParser.RULE_argumentos = 3;
gramaticaParser.RULE_instrucciones = 4;
gramaticaParser.RULE_ejecucion = 5;
gramaticaParser.RULE_operacion_texto = 6;
gramaticaParser.RULE_concatenar = 7;
gramaticaParser.RULE_transformacion = 8;
gramaticaParser.RULE_impresion = 9;
gramaticaParser.RULE_retorno = 10;
gramaticaParser.RULE_valor = 11;
gramaticaParser.RULE_cadena = 12;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(gramaticaParser.EOF, 0);
	};

	declaracion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclaracionContext);
	    } else {
	        return this.getTypedRuleContext(DeclaracionContext,i);
	    }
	};

	funcion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FuncionContext);
	    } else {
	        return this.getTypedRuleContext(FuncionContext,i);
	    }
	};

	ejecucion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EjecucionContext);
	    } else {
	        return this.getTypedRuleContext(EjecucionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitPrograma(this);
		}
	}


}



class DeclaracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_declaracion;
    }

	NOMBRE() {
	    return this.getToken(gramaticaParser.NOMBRE, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterDeclaracion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitDeclaracion(this);
		}
	}


}



class FuncionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_funcion;
    }

	NOMBRE() {
	    return this.getToken(gramaticaParser.NOMBRE, 0);
	};

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	argumentos() {
	    return this.getTypedRuleContext(ArgumentosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterFuncion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitFuncion(this);
		}
	}


}



class ArgumentosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_argumentos;
    }

	NOMBRE() {
	    return this.getToken(gramaticaParser.NOMBRE, 0);
	};

	argumentos() {
	    return this.getTypedRuleContext(ArgumentosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterArgumentos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitArgumentos(this);
		}
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_instrucciones;
    }

	operacion_texto = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Operacion_textoContext);
	    } else {
	        return this.getTypedRuleContext(Operacion_textoContext,i);
	    }
	};

	concatenar = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConcatenarContext);
	    } else {
	        return this.getTypedRuleContext(ConcatenarContext,i);
	    }
	};

	impresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImpresionContext);
	    } else {
	        return this.getTypedRuleContext(ImpresionContext,i);
	    }
	};

	retorno = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RetornoContext);
	    } else {
	        return this.getTypedRuleContext(RetornoContext,i);
	    }
	};

	NOMBRE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(gramaticaParser.NOMBRE);
	    } else {
	        return this.getToken(gramaticaParser.NOMBRE, i);
	    }
	};


	argumentos = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgumentosContext);
	    } else {
	        return this.getTypedRuleContext(ArgumentosContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitInstrucciones(this);
		}
	}


}



class EjecucionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_ejecucion;
    }

	operacion_texto() {
	    return this.getTypedRuleContext(Operacion_textoContext,0);
	};

	concatenar() {
	    return this.getTypedRuleContext(ConcatenarContext,0);
	};

	impresion() {
	    return this.getTypedRuleContext(ImpresionContext,0);
	};

	NOMBRE() {
	    return this.getToken(gramaticaParser.NOMBRE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterEjecucion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitEjecucion(this);
		}
	}


}



class Operacion_textoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_operacion_texto;
    }

	NOMBRE() {
	    return this.getToken(gramaticaParser.NOMBRE, 0);
	};

	transformacion() {
	    return this.getTypedRuleContext(TransformacionContext,0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterOperacion_texto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitOperacion_texto(this);
		}
	}


}



class ConcatenarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_concatenar;
    }

	NOMBRE() {
	    return this.getToken(gramaticaParser.NOMBRE, 0);
	};

	cadena = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CadenaContext);
	    } else {
	        return this.getTypedRuleContext(CadenaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterConcatenar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitConcatenar(this);
		}
	}


}



class TransformacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_transformacion;
    }


	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterTransformacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitTransformacion(this);
		}
	}


}



class ImpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_impresion;
    }

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterImpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitImpresion(this);
		}
	}


}



class RetornoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_retorno;
    }

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterRetorno(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitRetorno(this);
		}
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_valor;
    }

	TEXTO() {
	    return this.getToken(gramaticaParser.TEXTO, 0);
	};

	NUMERO() {
	    return this.getToken(gramaticaParser.NUMERO, 0);
	};

	NOMBRE() {
	    return this.getToken(gramaticaParser.NOMBRE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitValor(this);
		}
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_cadena;
    }

	TEXTO() {
	    return this.getToken(gramaticaParser.TEXTO, 0);
	};

	NOMBRE() {
	    return this.getToken(gramaticaParser.NOMBRE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitCadena(this);
		}
	}


}




gramaticaParser.ProgramaContext = ProgramaContext; 
gramaticaParser.DeclaracionContext = DeclaracionContext; 
gramaticaParser.FuncionContext = FuncionContext; 
gramaticaParser.ArgumentosContext = ArgumentosContext; 
gramaticaParser.InstruccionesContext = InstruccionesContext; 
gramaticaParser.EjecucionContext = EjecucionContext; 
gramaticaParser.Operacion_textoContext = Operacion_textoContext; 
gramaticaParser.ConcatenarContext = ConcatenarContext; 
gramaticaParser.TransformacionContext = TransformacionContext; 
gramaticaParser.ImpresionContext = ImpresionContext; 
gramaticaParser.RetornoContext = RetornoContext; 
gramaticaParser.ValorContext = ValorContext; 
gramaticaParser.CadenaContext = CadenaContext; 
