// Generated from src/antlr/Qasm.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { CharStream } from 'antlr4ts/CharStream';
import { Lexer } from 'antlr4ts/Lexer';
import { LexerATNSimulator } from 'antlr4ts/atn/LexerATNSimulator';
import { NotNull } from 'antlr4ts/Decorators';
import { Override } from 'antlr4ts/Decorators';
import { RuleContext } from 'antlr4ts/RuleContext';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';


export class QasmLexer extends Lexer {
	public static readonly T__0=1;
	public static readonly Comment=2;
	public static readonly WhiteSpace=3;
	public static readonly Real=4;
	public static readonly Int=5;
	public static readonly IbmQasm=6;
	public static readonly Qreg=7;
	public static readonly Creg=8;
	public static readonly Include=9;
	public static readonly Qelib=10;
	public static readonly Id=11;
	public static readonly Semi=12;
	public static readonly LeftParen=13;
	public static readonly RightParen=14;
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE"
	];

	public static readonly ruleNames: string[] = [
		"T__0", "Comment", "WhiteSpace", "Real", "Int", "IbmQasm", "Qreg", "Creg", 
		"Include", "Qelib", "Id", "Semi", "LeftParen", "RightParen"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'foo'", undefined, undefined, undefined, undefined, undefined, 
		"'qreg'", "'creg'", "'include'", "'QELIB.INC'", undefined, "';'", "'['", 
		"']'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, undefined, "Comment", "WhiteSpace", "Real", "Int", "IbmQasm", 
		"Qreg", "Creg", "Include", "Qelib", "Id", "Semi", "LeftParen", "RightParen"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(QasmLexer._LITERAL_NAMES, QasmLexer._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return QasmLexer.VOCABULARY;
	}


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(QasmLexer._ATN, this);
	}

	@Override
	public get grammarFileName(): string { return "Qasm.g4"; }

	@Override
	public get ruleNames(): string[] { return QasmLexer.ruleNames; }

	@Override
	public get serializedATN(): string { return QasmLexer._serializedATN; }

	@Override
	public get modeNames(): string[] { return QasmLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x02\x10|\b\x01\x04"+
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04"+
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r"+
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03"+
		"\x03\x03\x03\x03\x03\x07\x03(\n\x03\f\x03\x0E\x03+\v\x03\x03\x03\x03\x03"+
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x06\x054\n\x05\r\x05\x0E\x05"+
		"5\x03\x05\x03\x05\x06\x05:\n\x05\r\x05\x0E\x05;\x03\x06\x06\x06?\n\x06"+
		"\r\x06\x0E\x06@\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07"+
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07"+
		"R\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03"+
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03"+
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x07\fr\n\f\f\f\x0E\fu\v\f"+
		"\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x02\x02\x02\x10\x03\x02\x03"+
		"\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02"+
		"\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x03"+
		"\x02\x07\x04\x02\f\f\x0F\x0F\x05\x02\v\f\x0F\x0F\"\"\x03\x022;\x03\x02"+
		"c|\x05\x022;C\\c|\x81\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02"+
		"\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02"+
		"\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02"+
		"\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02"+
		"\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x03"+
		"\x1F\x03\x02\x02\x02\x05#\x03\x02\x02\x02\x07.\x03\x02\x02\x02\t3\x03"+
		"\x02\x02\x02\v>\x03\x02\x02\x02\rQ\x03\x02\x02\x02\x0FS\x03\x02\x02\x02"+
		"\x11X\x03\x02\x02\x02\x13]\x03\x02\x02\x02\x15e\x03\x02\x02\x02\x17o\x03"+
		"\x02\x02\x02\x19v\x03\x02\x02\x02\x1Bx\x03\x02\x02\x02\x1Dz\x03\x02\x02"+
		"\x02\x1F \x07h\x02\x02 !\x07q\x02\x02!\"\x07q\x02\x02\"\x04\x03\x02\x02"+
		"\x02#$\x071\x02\x02$%\x071\x02\x02%)\x03\x02\x02\x02&(\n\x02\x02\x02\'"+
		"&\x03\x02\x02\x02(+\x03\x02\x02\x02)\'\x03\x02\x02\x02)*\x03\x02\x02\x02"+
		"*,\x03\x02\x02\x02+)\x03\x02\x02\x02,-\b\x03\x02\x02-\x06\x03\x02\x02"+
		"\x02./\t\x03\x02\x02/0\x03\x02\x02\x0201\b\x04\x02\x021\b\x03\x02\x02"+
		"\x0224\t\x04\x02\x0232\x03\x02\x02\x0245\x03\x02\x02\x0253\x03\x02\x02"+
		"\x0256\x03\x02\x02\x0267\x03\x02\x02\x0279\x070\x02\x028:\t\x04\x02\x02"+
		"98\x03\x02\x02\x02:;\x03\x02\x02\x02;9\x03\x02\x02\x02;<\x03\x02\x02\x02"+
		"<\n\x03\x02\x02\x02=?\t\x04\x02\x02>=\x03\x02\x02\x02?@\x03\x02\x02\x02"+
		"@>\x03\x02\x02\x02@A\x03\x02\x02\x02A\f\x03\x02\x02\x02BC\x07Q\x02\x02"+
		"CD\x07R\x02\x02DE\x07G\x02\x02EF\x07P\x02\x02FG\x07S\x02\x02GH\x07C\x02"+
		"\x02HI\x07U\x02\x02IR\x07O\x02\x02JK\x07K\x02\x02KL\x07D\x02\x02LM\x07"+
		"O\x02\x02MN\x07S\x02\x02NO\x07C\x02\x02OP\x07U\x02\x02PR\x07O\x02\x02"+
		"QB\x03\x02\x02\x02QJ\x03\x02\x02\x02R\x0E\x03\x02\x02\x02ST\x07s\x02\x02"+
		"TU\x07t\x02\x02UV\x07g\x02\x02VW\x07i\x02\x02W\x10\x03\x02\x02\x02XY\x07"+
		"e\x02\x02YZ\x07t\x02\x02Z[\x07g\x02\x02[\\\x07i\x02\x02\\\x12\x03\x02"+
		"\x02\x02]^\x07k\x02\x02^_\x07p\x02\x02_`\x07e\x02\x02`a\x07n\x02\x02a"+
		"b\x07w\x02\x02bc\x07f\x02\x02cd\x07g\x02\x02d\x14\x03\x02\x02\x02ef\x07"+
		"S\x02\x02fg\x07G\x02\x02gh\x07N\x02\x02hi\x07K\x02\x02ij\x07D\x02\x02"+
		"jk\x070\x02\x02kl\x07K\x02\x02lm\x07P\x02\x02mn\x07E\x02\x02n\x16\x03"+
		"\x02\x02\x02os\t\x05\x02\x02pr\t\x06\x02\x02qp\x03\x02\x02\x02ru\x03\x02"+
		"\x02\x02sq\x03\x02\x02\x02st\x03\x02\x02\x02t\x18\x03\x02\x02\x02us\x03"+
		"\x02\x02\x02vw\x07=\x02\x02w\x1A\x03\x02\x02\x02xy\x07]\x02\x02y\x1C\x03"+
		"\x02\x02\x02z{\x07_\x02\x02{\x1E\x03\x02\x02\x02\t\x02)5;@Qs\x03\b\x02"+
		"\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!QasmLexer.__ATN) {
			QasmLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(QasmLexer._serializedATN));
		}

		return QasmLexer.__ATN;
	}

}

