t��Archive�� 
ImportPath Name Imports�� 
ExportData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �5���net/http/internalinternalbufiobyteserrorsfmtio��
$$ exports $$
pv0internal"net/http/internalErrLineTooLong6	 NewChunkedReader rReaderioio Read p2nerr6   : 	 NewChunkedWriter wWriter 
Write p2nerr6   WriteCloserCloser 
Close   6  D   AA=$packages["bufio"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["bytes"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["errors"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} DD=$packages["fmt"];a    $r=D.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} EE=$packages["io"];a    $r=E.$init();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} G�0G=$pkg.chunkedReader=$newType(0,$kindStruct,"internal.chunkedReader","chunkedReader","net/http/internal",function(r_,n_,err_,buf_){this.$val=this;if(arguments.length===0){this.r=N.nil;this.n=new $Uint64(0,0);this.err=$ifaceNil;this.buf=O.zero();return;}this.r=r_;this.n=n_;this.err=err_;this.buf=buf_;});�R.methods=[{prop:"beginChunk",name:"beginChunk",pkg:"net/http/internal",typ:$funcType([],[],false)},{prop:"chunkHeaderAvailable",name:"chunkHeaderAvailable",pkg:"net/http/internal",typ:$funcType([],[$Bool],false)},{prop:"Read",name:"Read",pkg:"",typ:$funcType([P],[$Int,$error],false)}];�G.init([{prop:"r",name:"r",pkg:"net/http/internal",typ:N,tag:""},{prop:"n",name:"n",pkg:"net/http/internal",typ:$Uint64,tag:""},{prop:"err",name:"err",pkg:"net/http/internal",typ:$error,tag:""},{prop:"buf",name:"buf",pkg:"net/http/internal",typ:O,tag:""}]);chunkedReadernet/http/internal.Nnet/http/internal.Onet/http/internal.Pnet/http/internal.Rnet/http/internal.chunkedReader L��L=$pkg.chunkedWriter=$newType(0,$kindStruct,"internal.chunkedWriter","chunkedWriter","net/http/internal",function(Wire_){this.$val=this;if(arguments.length===0){this.Wire=$ifaceNil;return;}this.Wire=Wire_;});��S.methods=[{prop:"Write",name:"Write",pkg:"",typ:$funcType([P],[$Int,$error],false)},{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)}];?L.init([{prop:"Wire",name:"Wire",pkg:"",typ:E.Writer,tag:""}]);chunkedWriter	io.Writernet/http/internal.Pnet/http/internal.Snet/http/internal.chunkedWriter NN=$ptrType(A.Reader);Nbufio.Reader OO=$arrayType($Uint8,2);O PP=$sliceType($Uint8);P QQ=$sliceType($emptyInterface);Q RR=$ptrType(G);Rnet/http/internal.chunkedReader SS=$ptrType(L);Snet/http/internal.chunkedWriter ErrLineTooLong 7    $pkg.ErrLineTooLong=C.New("header line too long");
errors.New net/http/internal.ErrLineTooLong "net/http/internal.NewChunkedReaderF��F=function(a){var $ptr,a,b,c,d;  �b=$assertType(a,N,true);c=b[0];d=b[1];    if(!d){  �c=A.NewReader(a);    }  �return new G.ptr(c,new $Uint64(0,0),$ifaceNil,O.zero());    };$pkg.NewChunkedReader=F;NewChunkedReaderbufio.NewReaderbufio.Readernet/http/internal.N"net/http/internal.NewChunkedReadernet/http/internal.Onet/http/internal.chunkedReader -(*net/http/internal.chunkedReader).beginChunk�SG.ptr.prototype.beginChunk=function(){var $ptr,a,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  ca=this;  �b=P.nil;  �d=H(a.r);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}c=d;b=c[0];a.err=c[1];    if(!($interfaceIsEqual(a.err,$ifaceNil))){  �return;    }  �e=M(b);a.n=e[0];a.err=e[1];    if(!($interfaceIsEqual(a.err,$ifaceNil))){  "return;    }    if((f=a.n,(f.$high===0&&f.$low===0))){  >a.err=E.EOF;    }    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:G.ptr.prototype.beginChunk};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.beginChunk=function(){return this.$val.beginChunk();};chunkedReaderbeginChunk~io.EOFnet/http/internal.Pnet/http/internal.chunkedReadernet/http/internal.parseHexUintnet/http/internal.readLine 7(*net/http/internal.chunkedReader).chunkHeaderAvailable��G.ptr.prototype.chunkHeaderAvailable=function(){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  Za=this;  �b=a.r.Buffered();  �if(b>0){$s=1;continue;}$s=2;continue;    case 1:  �d=a.r.Peek(b);$s=3;case 3:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}c=d;e=c[0];  �return B.IndexByte(e,10)>=0;    case 2:  �return false;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:G.ptr.prototype.chunkHeaderAvailable};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.chunkHeaderAvailable=function(){return this.$val.chunkHeaderAvailable();};chunkedReaderchunkHeaderAvailable~bytes.IndexBytenet/http/internal.chunkedReader '(*net/http/internal.chunkedReader).Read��G.ptr.prototype.Read=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=0;c=$ifaceNil;  d=this;  Dcase 1:if(!($interfaceIsEqual(d.err,$ifaceNil))){$s=2;continue;}  Zif((e=d.n,(e.$high===0&&e.$low===0))){$s=3;continue;}$s=4;continue;    case 3:  lif(!(b>0)){f=false;$s=7;continue s;}g=d.chunkHeaderAvailable();$s=8;case 8:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}f=!g;case 7:if(f){$s=5;continue;}$s=6;continue;    case 5:  �$s=2;continue;    case 6:  �$r=d.beginChunk();$s=9;case 9:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  $s=1;continue;    case 4:    if(a.$length===0){  2$s=2;continue;    }  >h=a;    if((i=new $Uint64(0,h.$length),j=d.n,(i.$high>j.$high||(i.$high===j.$high&&i.$low>j.$low)))){  kh=$subslice(h,0,$flatten64(d.n));    }  �k=0;  �m=d.r.Read(h);$s=10;case 10:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}l=m;k=l[0];d.err=l[1];  �b=b+(k)>>0;  �a=$subslice(a,k);  �d.n=(n=d.n,o=new $Uint64(0,k),new $Uint64(n.$high-o.$high,n.$low-o.$low));  9if((p=d.n,(p.$high===0&&p.$low===0))&&$interfaceIsEqual(d.err,$ifaceNil)){$s=11;continue;}$s=12;continue;    case 11:  _r=E.ReadFull(d.r,$subslice(new P(d.buf),0,2));$s=13;case 13:if($c){$c=false;r=r.$blk();}if(r&&r.$blk!==undefined){break s;}q=r;d.err=q[1];if($interfaceIsEqual(d.err,$ifaceNil)){$s=14;continue;}$s=15;continue;    case 14:    if(!((d.buf[0]===13))||!((d.buf[1]===10))){  �d.err=C.New("malformed chunked encoding");    }    case 15:    case 12:    $s=1;continue;case 2:    s=b;t=d.err;b=s;c=t;return[b,c];    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:G.ptr.prototype.Read};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.Read=function(a){return this.$val.Read(a);};chunkedReader
errors.Newio.ReadFullnet/http/internal.Pnet/http/internal.beginChunk~'net/http/internal.chunkHeaderAvailable~net/http/internal.chunkedReader net/http/internal.readLineH��H=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=P.nil;c=$ifaceNil;  
0e=a.ReadSlice(10);$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d=e;b=d[0];c=d[1];if(!($interfaceIsEqual(c,$ifaceNil))){$s=2;continue;}$s=3;continue;    case 2:    if($interfaceIsEqual(c,E.EOF)){  
�c=E.ErrUnexpectedEOF;    }else if($interfaceIsEqual(c,A.ErrBufferFull)){  c=$pkg.ErrLineTooLong;    }    f=P.nil;g=c;b=f;c=g;return[b,c];    case 3:    if(b.$length>=4096){    h=P.nil;i=$pkg.ErrLineTooLong;b=h;c=i;return[b,c];    }    j=I(b);k=$ifaceNil;b=j;c=k;return[b,c];    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:H};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.$s=$s;$f.$r=$r;return $f;};readLinebufio.ErrBufferFullio.EOFio.ErrUnexpectedEOF net/http/internal.ErrLineTooLongnet/http/internal.Pnet/http/internal.readLine(net/http/internal.trimTrailingWhitespace (net/http/internal.trimTrailingWhitespaceI��I=function(a){var $ptr,a,b;  �while(true){if(!(a.$length>0&&J((b=a.$length-1>>0,((b<0||b>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+b]))))){break;}  a=$subslice(a,0,(a.$length-1>>0));    }  'return a;    };trimTrailingWhitespacenet/http/internal.isASCIISpace(net/http/internal.trimTrailingWhitespace net/http/internal.isASCIISpaceJQJ=function(a){var $ptr,a;  Ureturn(a===32)||(a===9)||(a===10)||(a===13);    };isASCIISpacenet/http/internal.isASCIISpace "net/http/internal.NewChunkedWriterKQK=function(a){var $ptr,a;  �return new L.ptr(a);    };$pkg.NewChunkedWriter=K;NewChunkedWriter"net/http/internal.NewChunkedWriternet/http/internal.chunkedWriter ((*net/http/internal.chunkedWriter).Write�~L.ptr.prototype.Write=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=0;c=$ifaceNil;  vd=this;    if(a.$length===0){    e=0;f=$ifaceNil;b=e;c=f;return[b,c];    }  %h=D.Fprintf(d.Wire,"%x\r\n",new Q([new $Int(a.$length)]));$s=1;case 1:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}g=h;c=g[1];if(!($interfaceIsEqual(c,$ifaceNil))){$s=2;continue;}$s=3;continue;    case 2:    i=0;j=c;b=i;c=j;return[b,c];    case 3:  }l=d.Wire.Write(a);$s=4;case 4:if($c){$c=false;l=l.$blk();}if(l&&l.$blk!==undefined){break s;}k=l;b=k[0];c=k[1];if(!($interfaceIsEqual(c,$ifaceNil))){$s=5;continue;}$s=6;continue;    case 5:  �return[b,c];    case 6:    if(!((b===a.$length))){  �c=E.ErrShortWrite;  �return[b,c];    }  �n=E.WriteString(d.Wire,"\r\n");$s=7;case 7:if($c){$c=false;n=n.$blk();}if(n&&n.$blk!==undefined){break s;}m=n;c=m[1];  return[b,c];    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:L.ptr.prototype.Write};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.Write=function(a){return this.$val.Write(a);};chunkedWriterfmt.Fprintfio.ErrShortWriteio.WriteStringnet/http/internal.Qnet/http/internal.chunkedWriter ((*net/http/internal.chunkedWriter).Close�HL.ptr.prototype.Close=function(){var $ptr,a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  *a=this;  Nc=E.WriteString(a.Wire,"0\r\n");$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;d=b[1];  zreturn d;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:L.ptr.prototype.Close};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.Close=function(){return this.$val.Close();};chunkedWriterio.WriteStringnet/http/internal.chunkedWriter net/http/internal.parseHexUintM�kM=function(a){var $ptr,a,b,c,d,e,f,g,h,i;b=new $Uint64(0,0);c=$ifaceNil;  �d=a;e=0;while(true){if(!(e<d.$length)){break;}f=((e<0||e>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+e]);  �b=$shiftLeft64(b,(4));  �if(48<=f&&f<=57){  f=f-48<<24>>>24;  }else if(97<=f&&f<=102){  4f=(f-97<<24>>>24)+10<<24>>>24;  G}else if(65<=f&&f<=70){  ef=(f-65<<24>>>24)+10<<24>>>24;    }else{    g=new $Uint64(0,0);h=C.New("invalid byte in chunk length");b=g;c=h;return[b,c];    }  �b=(i=new $Uint64(0,f),new $Uint64(b.$high|i.$high,(b.$low|i.$low)>>>0));    e++;}  �return[b,c];    };parseHexUint
errors.Newnet/http/internal.parseHexUint �K{"Base":5084,"Files":[{"Name":"/usr/local/go/src/net/http/internal/chunked.go","Base":1,"Size":5082,"Lines":[0,55,109,159,160,221,222,289,311,328,329,338,347,356,366,373,379,381,382,444,445,501,502,587,640,715,718,793,857,904,933,943,969,972,1002,1004,1005,1033,1052,1089,1100,1113,1115,1116,1156,1176,1193,1224,1244,1253,1256,1291,1311,1320,1323,1339,1357,1360,1362,1363,1418,1440,1452,1478,1520,1523,1537,1539,1540,1602,1623,1640,1684,1734,1769,1779,1784,1803,1815,1819,1838,1847,1851,1863,1895,1917,1921,1934,1965,1975,1988,2009,2064,2102,2136,2201,2249,2304,2310,2315,2319,2322,2340,2342,2343,2386,2432,2484,2548,2603,2648,2688,2749,2770,2799,2840,2864,2868,2886,2889,2919,2948,2951,2990,2992,2993,3040,3087,3106,3109,3119,3121,3122,3155,3211,3213,3214,3295,3376,3444,3447,3514,3577,3643,3712,3748,3800,3826,3828,3829,3904,3966,3994,4010,4012,4013,4065,4144,4207,4272,4273,4343,4364,4380,4383,4384,4453,4469,4472,4519,4528,4531,4552,4577,4586,4589,4631,4632,4640,4642,4643,4684,4728,4740,4742,4743,4795,4818,4828,4839,4868,4883,4912,4932,4961,4981,4992,5048,5052,5069,5072,5080],"Infos":null}]}
 