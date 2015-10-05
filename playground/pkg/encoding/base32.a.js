t��Archive�� 
ImportPath Name Imports�� 
ExportData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �vF��encoding/base32base32bytesiostrconvstrings�I
$$ exports $$
pv0base32encoding/base32"CorruptInputError 

Errore8    Encoding encode   decodeMap �2 Encodeenc<dst2srcF  EncodeToStringenc<src2   EncodedLenenc<n  decodeenc<dst2srcVnend err6 Decodeenc<dst2src\nerr6 DecodeStringenc<s  2 6 DecodedLenenc<n  HexEncoding<	NewDecoder enc<rReaderioio Read p2nerr6   n 	NewEncoder enc<wWriter 
Write p2nerr6   WriteCloserCloser 
Close   6  z   	NewEncoding encoder  h StdEncodingh(AA=$packages["bytes"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["io"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["strconv"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} DD=$packages["strings"];a    $r=D.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} E��E=$pkg.Encoding=$newType(0,$kindStruct,"base32.Encoding","Encoding","encoding/base32",function(encode_,decodeMap_){this.$val=this;if(arguments.length===0){this.encode="";this.decodeMap=N.zero();return;}this.encode=encode_;this.decodeMap=decodeMap_;});�SP.methods=[{prop:"Encode",name:"Encode",pkg:"",typ:$funcType([O,O],[],false)},{prop:"EncodeToString",name:"EncodeToString",pkg:"",typ:$funcType([O],[$String],false)},{prop:"EncodedLen",name:"EncodedLen",pkg:"",typ:$funcType([$Int],[$Int],false)},{prop:"decode",name:"decode",pkg:"encoding/base32",typ:$funcType([O,O],[$Int,$Bool,$error],false)},{prop:"Decode",name:"Decode",pkg:"",typ:$funcType([O,O],[$Int,$error],false)},{prop:"DecodeString",name:"DecodeString",pkg:"",typ:$funcType([$String],[O,$error],false)},{prop:"DecodedLen",name:"DecodedLen",pkg:"",typ:$funcType([$Int],[$Int],false)}];��E.init([{prop:"encode",name:"encode",pkg:"encoding/base32",typ:$String,tag:""},{prop:"decodeMap",name:"decodeMap",pkg:"encoding/base32",typ:N,tag:""}]);Encodingencoding/base32.Encodingencoding/base32.Nencoding/base32.Oencoding/base32.P H�bH=$pkg.encoder=$newType(0,$kindStruct,"base32.encoder","encoder","encoding/base32",function(err_,enc_,w_,buf_,nbuf_,out_){this.$val=this;if(arguments.length===0){this.err=$ifaceNil;this.enc=P.nil;this.w=$ifaceNil;this.buf=Q.zero();this.nbuf=0;this.out=R.zero();return;}this.err=err_;this.enc=enc_;this.w=w_;this.buf=buf_;this.nbuf=nbuf_;this.out=out_;});��U.methods=[{prop:"Write",name:"Write",pkg:"",typ:$funcType([O],[$Int,$error],false)},{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)}];�yH.init([{prop:"err",name:"err",pkg:"encoding/base32",typ:$error,tag:""},{prop:"enc",name:"enc",pkg:"encoding/base32",typ:P,tag:""},{prop:"w",name:"w",pkg:"encoding/base32",typ:B.Writer,tag:""},{prop:"buf",name:"buf",pkg:"encoding/base32",typ:Q,tag:""},{prop:"nbuf",name:"nbuf",pkg:"encoding/base32",typ:$Int,tag:""},{prop:"out",name:"out",pkg:"encoding/base32",typ:R,tag:""}]);encoderencoding/base32.Oencoding/base32.Pencoding/base32.Qencoding/base32.Rencoding/base32.Uencoding/base32.encoder	io.Writer JvJ=$pkg.CorruptInputError=$newType(8,$kindInt64,"base32.CorruptInputError","CorruptInputError","encoding/base32",null);QJ.methods=[{prop:"Error",name:"Error",pkg:"",typ:$funcType([],[$String],false)}];CorruptInputError!encoding/base32.CorruptInputError K��K=$pkg.decoder=$newType(0,$kindStruct,"base32.decoder","decoder","encoding/base32",function(err_,enc_,r_,end_,buf_,nbuf_,out_,outbuf_){this.$val=this;if(arguments.length===0){this.err=$ifaceNil;this.enc=P.nil;this.r=$ifaceNil;this.end=false;this.buf=R.zero();this.nbuf=0;this.out=O.nil;this.outbuf=T.zero();return;}this.err=err_;this.enc=enc_;this.r=r_;this.end=end_;this.buf=buf_;this.nbuf=nbuf_;this.out=out_;this.outbuf=outbuf_;});TV.methods=[{prop:"Read",name:"Read",pkg:"",typ:$funcType([O],[$Int,$error],false)}];��K.init([{prop:"err",name:"err",pkg:"encoding/base32",typ:$error,tag:""},{prop:"enc",name:"enc",pkg:"encoding/base32",typ:P,tag:""},{prop:"r",name:"r",pkg:"encoding/base32",typ:B.Reader,tag:""},{prop:"end",name:"end",pkg:"encoding/base32",typ:$Bool,tag:""},{prop:"buf",name:"buf",pkg:"encoding/base32",typ:R,tag:""},{prop:"nbuf",name:"nbuf",pkg:"encoding/base32",typ:$Int,tag:""},{prop:"out",name:"out",pkg:"encoding/base32",typ:O,tag:""},{prop:"outbuf",name:"outbuf",pkg:"encoding/base32",typ:T,tag:""}]);decoderencoding/base32.Oencoding/base32.Pencoding/base32.Rencoding/base32.Tencoding/base32.Vencoding/base32.decoder	io.Reader L��L=$pkg.newlineFilteringReader=$newType(0,$kindStruct,"base32.newlineFilteringReader","newlineFilteringReader","encoding/base32",function(wrapped_){this.$val=this;if(arguments.length===0){this.wrapped=$ifaceNil;return;}this.wrapped=wrapped_;});TW.methods=[{prop:"Read",name:"Read",pkg:"",typ:$funcType([O],[$Int,$error],false)}];TL.init([{prop:"wrapped",name:"wrapped",pkg:"encoding/base32",typ:B.Reader,tag:""}]);newlineFilteringReaderencoding/base32.Oencoding/base32.W&encoding/base32.newlineFilteringReader	io.Reader NN=$arrayType($Uint8,256);N OO=$sliceType($Uint8);O PP=$ptrType(E);Pencoding/base32.Encoding QQ=$arrayType($Uint8,5);Q RR=$arrayType($Uint8,1024);R SS=$arrayType($Uint8,8);S TT=$arrayType($Uint8,640);T UU=$ptrType(H);Uencoding/base32.encoder VV=$ptrType(K);Vencoding/base32.decoder WW=$ptrType(L);W&encoding/base32.newlineFilteringReader StdEncoding HexEncoding GremoveNewlinesMapper <    $pkg.StdEncoding=F("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567");encoding/base32.NewEncodingencoding/base32.StdEncoding <    $pkg.HexEncoding=F("0123456789ABCDEFGHIJKLMNOPQRSTUV");encoding/base32.HexEncodingencoding/base32.NewEncoding e    G=(function(a){var $ptr,a;    if((a===13)||(a===10)){  �return-1;    }  �return a;    });removeNewlinesMapper$encoding/base32.removeNewlinesMapper encoding/base32.NewEncodingF��F=function(a){var $ptr,a,b,c,d,e,f,g;  }b=new E.ptr("",N.zero());  �b.encode=a;  �c=0;while(true){if(!(c<256)){break;}  �(d=b.decodeMap,((c<0||c>=d.length)?$throwRuntimeError("index out of range"):d[c]=255));  �c=c+(1)>>0;    }  �e=0;while(true){if(!(e<a.length)){break;}  (f=b.decodeMap,g=a.charCodeAt(e),((g<0||g>=f.length)?$throwRuntimeError("index out of range"):f[g]=(e<<24>>>24)));  e=e+(1)>>0;    }  5return b;    };$pkg.NewEncoding=F;NewEncodingencoding/base32.Encodingencoding/base32.Nencoding/base32.NewEncoding "(*encoding/base32.Encoding).Encode�lE.ptr.prototype.Encode=function(a,b){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;  �c=this;    if(b.$length===0){  return;    }  while(true){if(!(b.$length>0)){break;}  6d=0;e=0;f=0;g=0;h=0;i=0;j=0;k=0;l=d;m=e;n=f;o=g;p=h;q=i;r=j;s=k;  �t=b.$length;  �if(t===4){  
r=(r|((((((3>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+3])<<3<<24>>>24))&31)>>>0)))>>>0;  (q=((((3>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+3])>>>2<<24>>>24))&31)>>>0;  Ep=(3>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+3])>>>7<<24>>>24;  rp=(p|((((((2>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+2])<<1<<24>>>24))&31)>>>0)))>>>0;  �o=((((2>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+2])>>>4<<24>>>24))&31)>>>0;  �o=(o|((((((1>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+1])<<4<<24>>>24))&31)>>>0)))>>>0;  �n=((((1>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+1])>>>1<<24>>>24))&31)>>>0;  	m=((((1>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+1])>>>6<<24>>>24))&31)>>>0;  	7m=(m|((((((0>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+0])<<2<<24>>>24))&31)>>>0)))>>>0;  	Ul=(0>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+0])>>>3<<24>>>24;  g}else if(t===3){  rp=(p|((((((2>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+2])<<1<<24>>>24))&31)>>>0)))>>>0;  �o=((((2>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+2])>>>4<<24>>>24))&31)>>>0;  �o=(o|((((((1>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+1])<<4<<24>>>24))&31)>>>0)))>>>0;  �n=((((1>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+1])>>>1<<24>>>24))&31)>>>0;  	m=((((1>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+1])>>>6<<24>>>24))&31)>>>0;  	7m=(m|((((((0>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+0])<<2<<24>>>24))&31)>>>0)))>>>0;  	Ul=(0>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+0])>>>3<<24>>>24;  �}else if(t===2){  �o=(o|((((((1>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+1])<<4<<24>>>24))&31)>>>0)))>>>0;  �n=((((1>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+1])>>>1<<24>>>24))&31)>>>0;  	m=((((1>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+1])>>>6<<24>>>24))&31)>>>0;  	7m=(m|((((((0>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+0])<<2<<24>>>24))&31)>>>0)))>>>0;  	Ul=(0>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+0])>>>3<<24>>>24;  	,}else if(t===1){  	7m=(m|((((((0>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+0])<<2<<24>>>24))&31)>>>0)))>>>0;  	Ul=(0>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+0])>>>3<<24>>>24;    }else{  �s=((4>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+4])&31)>>>0;  �r=(4>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+4])>>>5<<24>>>24;  
r=(r|((((((3>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+3])<<3<<24>>>24))&31)>>>0)))>>>0;  (q=((((3>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+3])>>>2<<24>>>24))&31)>>>0;  Ep=(3>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+3])>>>7<<24>>>24;  rp=(p|((((((2>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+2])<<1<<24>>>24))&31)>>>0)))>>>0;  �o=((((2>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+2])>>>4<<24>>>24))&31)>>>0;  �o=(o|((((((1>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+1])<<4<<24>>>24))&31)>>>0)))>>>0;  �n=((((1>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+1])>>>1<<24>>>24))&31)>>>0;  	m=((((1>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+1])>>>6<<24>>>24))&31)>>>0;  	7m=(m|((((((0>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+0])<<2<<24>>>24))&31)>>>0)))>>>0;  	Ul=(0>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+0])>>>3<<24>>>24;    }  	�(0>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]=c.encode.charCodeAt(l));  	�(1>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+1]=c.encode.charCodeAt(m));  	�(2>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+2]=c.encode.charCodeAt(n));  	�(3>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+3]=c.encode.charCodeAt(o));  
(4>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+4]=c.encode.charCodeAt(p));  
"(5>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+5]=c.encode.charCodeAt(q));  
<(6>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+6]=c.encode.charCodeAt(r));  
V(7>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+7]=c.encode.charCodeAt(s));    if(b.$length<5){  
�(7>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+7]=61);    if(b.$length<4){  
�(6>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+6]=61);  
�(5>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+5]=61);    if(b.$length<3){   (4>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+4]=61);    if(b.$length<2){  *(3>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+3]=61);  =(2>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+2]=61);    }    }    }  _break;    }  kb=$subslice(b,5);  {a=$subslice(a,8);    }    };E.prototype.Encode=function(a,b){return this.$val.Encode(a,b);};Encodingencoding/base32.Encoding *(*encoding/base32.Encoding).EncodeToString��E.ptr.prototype.EncodeToString=function(a){var $ptr,a,b,c;  �b=this;  �c=$makeSlice(O,b.EncodedLen(a.$length));  .b.Encode(c,a);  Dreturn $bytesToString(c);    };E.prototype.EncodeToString=function(a){return this.$val.EncodeToString(a);};Encodingencoding/base32.Encodingencoding/base32.O  (*encoding/base32.encoder).Write�
H.ptr.prototype.Write=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=0;c=$ifaceNil;  *d=this;    if(!($interfaceIsEqual(d.err,$ifaceNil))){    e=0;f=d.err;b=e;c=f;return[b,c];    }  �if(d.nbuf>0){$s=1;continue;}$s=2;continue;    case 1:  �g=0;  �g=0;while(true){if(!(g<a.$length&&d.nbuf<5)){break;}  �(h=d.buf,i=d.nbuf,((i<0||i>=h.length)?$throwRuntimeError("index out of range"):h[i]=((g<0||g>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+g])));  �d.nbuf=d.nbuf+(1)>>0;  �g=g+(1)>>0;    }  b=b+(g)>>0;  a=$subslice(a,g);    if(d.nbuf<5){  4return[b,c];    }  Ad.enc.Encode($subslice(new O(d.out),0),$subslice(new O(d.buf),0));  ik=d.w.Write($subslice(new O(d.out),0,8));$s=3;case 3:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}j=k;d.err=j[1];if(!($interfaceIsEqual(d.err,$ifaceNil))){$s=4;continue;}$s=5;continue;    case 4:    l=b;m=d.err;b=l;c=m;return[b,c];    case 5:  �d.nbuf=0;    case 2:  �case 6:if(!(a.$length>=5)){$s=7;continue;}  �n=640;    if(n>a.$length){  !n=a.$length;  0n=n-((o=n%5,o===o?o:$throwRuntimeError("integer divide by zero")))>>0;    }  Cd.enc.Encode($subslice(new O(d.out),0),$subslice(a,0,n));  ir=d.w.Write($subslice(new O(d.out),0,((q=n/5,(q===q&&q!==1/0&&q!==-1/0)?q>>0:$throwRuntimeError("integer divide by zero"))*8>>0)));$s=8;case 8:if($c){$c=false;r=r.$blk();}if(r&&r.$blk!==undefined){break s;}p=r;d.err=p[1];if(!($interfaceIsEqual(d.err,$ifaceNil))){$s=9;continue;}$s=10;continue;    case 9:    s=b;t=d.err;b=s;c=t;return[b,c];    case 10:  �b=b+(n)>>0;  �a=$subslice(a,n);    $s=6;continue;case 7:  �u=0;while(true){if(!(u<a.$length)){break;}  	(v=d.buf,((u<0||u>=v.length)?$throwRuntimeError("index out of range"):v[u]=((u<0||u>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+u])));  u=u+(1)>>0;    }  d.nbuf=a.$length;  .b=b+(a.$length)>>0;  ;return[b,c];    }return;}if($f===undefined){$f={$blk:H.ptr.prototype.Write};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.$s=$s;$f.$r=$r;return $f;};H.prototype.Write=function(a){return this.$val.Write(a);};encoderencoding/base32.Oencoding/base32.encoder  (*encoding/base32.encoder).Close�H.ptr.prototype.Close=function(){var $ptr,a,b,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �a=this;  if($interfaceIsEqual(a.err,$ifaceNil)&&a.nbuf>0){$s=1;continue;}$s=2;continue;    case 1:  .a.enc.Encode($subslice(new O(a.out),0),$subslice(new O(a.buf),0,a.nbuf));  Ya.nbuf=0;  fc=a.w.Write($subslice(new O(a.out),0,8));$s=3;case 3:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;a.err=b[1];    case 2:  �return a.err;    }return;}if($f===undefined){$f={$blk:H.ptr.prototype.Close};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};H.prototype.Close=function(){return this.$val.Close();};encoderencoding/base32.Oencoding/base32.encoder encoding/base32.NewEncoderIoI=function(a,b){var $ptr,a,b;  return new H.ptr($ifaceNil,a,b,Q.zero(),0,R.zero());    };$pkg.NewEncoder=I;
NewEncoderencoding/base32.Encodingencoding/base32.NewEncoderencoding/base32.Pencoding/base32.Qencoding/base32.Rencoding/base32.encoder &(*encoding/base32.Encoding).EncodedLen��E.ptr.prototype.EncodedLen=function(a){var $ptr,a,b,c;  �b=this;  �return(c=((a+4>>0))/5,(c===c&&c!==1/0&&c!==-1/0)?c>>0:$throwRuntimeError("integer divide by zero"))*8>>0;    };E.prototype.EncodedLen=function(a){return this.$val.EncodedLen(a);};Encodingencoding/base32.Encoding )(encoding/base32.CorruptInputError).Error��J.prototype.Error=function(){var $ptr,a;  a=this;  .return"illegal base32 data at input byte "+C.FormatInt(new $Int64(a.$high,a.$low),10);    };$ptrType(J).prototype.Error=function(){return this.$get().Error();};CorruptInputError!encoding/base32.CorruptInputErrorstrconv.FormatInt "(*encoding/base32.Encoding).decode��E.ptr.prototype.decode=function(a,b){var $ptr,a,aa,ab,ac,ad,ae,af,ag,ah,ai,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;c=0;d=false;e=$ifaceNil;  �f=this;  �g=b.$length;  �while(true){if(!(b.$length>0&&!d)){break;}  6h=S.zero();  Ei=8;  Vj=0;while(true){if(!(j<8)){break;}    if(b.$length===0){    k=c;l=false;m=new J(0,((g-b.$length>>0)-j>>0));c=k;d=l;e=m;return[c,d,e];    }  �n=(0>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+0]);  �b=$subslice(b,1);    if((n===61)&&j>=2&&b.$length<8){    if((b.$length+j>>0)<7){    o=c;p=false;q=new J(0,g);c=o;d=p;e=q;return[c,d,e];    }  �r=0;while(true){if(!(r<(7-j>>0))){break;}    if(b.$length>r&&!((((r<0||r>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+r])===61))){    s=c;t=false;u=new J(0,(((g-b.$length>>0)+r>>0)-1>>0));c=s;d=t;e=u;return[c,d,e];    }  �r=r+(1)>>0;    }  \v=j;w=true;i=v;d=w;    if((i===1)||(i===3)||(i===6)){    x=c;y=false;z=new J(0,((g-b.$length>>0)-1>>0));c=x;d=y;e=z;return[c,d,e];    }  Sbreak;    }  a((j<0||j>=h.length)?$throwRuntimeError("index out of range"):h[j]=(aa=f.decodeMap,((n<0||n>=aa.length)?$throwRuntimeError("index out of range"):aa[n])));    if(((j<0||j>=h.length)?$throwRuntimeError("index out of range"):h[j])===255){    ab=c;ac=false;ad=new J(0,((g-b.$length>>0)-1>>0));c=ab;d=ac;e=ad;return[c,d,e];    }  �j=j+(1)>>0;    }  *ae=i;  :if(ae===8){  E(4>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+4]=(((h[6]<<5<<24>>>24)|h[7])>>>0));  (3>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+3]=(((((h[4]<<7<<24>>>24)|(h[5]<<2<<24>>>24))>>>0)|(h[6]>>>3<<24>>>24))>>>0));  �(2>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+2]=(((h[3]<<4<<24>>>24)|(h[4]>>>1<<24>>>24))>>>0));  (1>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+1]=(((((h[1]<<6<<24>>>24)|(h[2]<<1<<24>>>24))>>>0)|(h[3]>>>4<<24>>>24))>>>0));  P(0>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]=(((h[0]<<3<<24>>>24)|(h[1]>>>2<<24>>>24))>>>0));  t}else if(ae===7){  (3>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+3]=(((((h[4]<<7<<24>>>24)|(h[5]<<2<<24>>>24))>>>0)|(h[6]>>>3<<24>>>24))>>>0));  �(2>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+2]=(((h[3]<<4<<24>>>24)|(h[4]>>>1<<24>>>24))>>>0));  (1>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+1]=(((((h[1]<<6<<24>>>24)|(h[2]<<1<<24>>>24))>>>0)|(h[3]>>>4<<24>>>24))>>>0));  P(0>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]=(((h[0]<<3<<24>>>24)|(h[1]>>>2<<24>>>24))>>>0));  �}else if(ae===5){  �(2>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+2]=(((h[3]<<4<<24>>>24)|(h[4]>>>1<<24>>>24))>>>0));  (1>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+1]=(((((h[1]<<6<<24>>>24)|(h[2]<<1<<24>>>24))>>>0)|(h[3]>>>4<<24>>>24))>>>0));  P(0>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]=(((h[0]<<3<<24>>>24)|(h[1]>>>2<<24>>>24))>>>0));  �}else if(ae===4){  (1>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+1]=(((((h[1]<<6<<24>>>24)|(h[2]<<1<<24>>>24))>>>0)|(h[3]>>>4<<24>>>24))>>>0));  P(0>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]=(((h[0]<<3<<24>>>24)|(h[1]>>>2<<24>>>24))>>>0));  E}else if(ae===2){  P(0>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]=(((h[0]<<3<<24>>>24)|(h[1]>>>2<<24>>>24))>>>0));    }  wa=$subslice(a,5);  �af=i;  �if(af===2){  �c=c+(1)>>0;  �}else if(af===4){  �c=c+(2)>>0;  �}else if(af===5){  �c=c+(3)>>0;  �}else if(af===7){  �c=c+(4)>>0;  �}else if(af===8){  �c=c+(5)>>0;    }    }    ag=c;ah=d;ai=$ifaceNil;c=ag;d=ah;e=ai;return[c,d,e];    };E.prototype.decode=function(a,b){return this.$val.decode(a,b);};Encodingdecode~!encoding/base32.CorruptInputErrorencoding/base32.Encodingencoding/base32.S "(*encoding/base32.Encoding).Decode��E.ptr.prototype.Decode=function(a,b){var $ptr,a,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=0;d=$ifaceNil;  We=this;  �f=A.Map(G,b);$s=1;case 1:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}b=f;  �g=e.decode(a,b);c=g[0];d=g[2];  �return[c,d];    }return;}if($f===undefined){$f={$blk:E.ptr.prototype.Decode};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};E.prototype.Decode=function(a,b){return this.$val.Decode(a,b);};Encoding	bytes.Mapencoding/base32.Encodingencoding/base32.decode~$encoding/base32.removeNewlinesMapper ((*encoding/base32.Encoding).DecodeString��E.ptr.prototype.DecodeString=function(a){var $ptr,a,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  8b=this;  qc=D.Map(G,a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}a=c;  �d=$makeSlice(O,b.DecodedLen(a.length));  �e=b.decode(d,new O($stringToBytes(a)));f=e[0];g=e[2];  �return[$subslice(d,0,f),g];    }return;}if($f===undefined){$f={$blk:E.ptr.prototype.DecodeString};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};E.prototype.DecodeString=function(a){return this.$val.DecodeString(a);};Encodingencoding/base32.Encodingencoding/base32.Oencoding/base32.decode~$encoding/base32.removeNewlinesMapperstrings.Map (*encoding/base32.decoder).Read�	K.ptr.prototype.Read=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=0;c=$ifaceNil;   �d=this;    if(!($interfaceIsEqual(d.err,$ifaceNil))){    e=0;f=d.err;b=e;c=f;return[b,c];    }    if(d.out.$length>0){  !�b=$copySlice(a,d.out);  !�d.out=$subslice(d.out,b);    g=b;h=$ifaceNil;b=g;c=h;return[b,c];    }  !�j=(i=a.$length/5,(i===i&&i!==1/0&&i!==-1/0)?i>>0:$throwRuntimeError("integer divide by zero"))*8>>0;    if(j<8){  "j=8;    }    if(j>1024){  "/j=1024;    }  "Cl=B.ReadAtLeast(d.r,$subslice(new O(d.buf),d.nbuf,j),8-d.nbuf>>0);$s=1;case 1:if($c){$c=false;l=l.$blk();}if(l&&l.$blk!==undefined){break s;}k=l;j=k[0];d.err=k[1];  "�d.nbuf=d.nbuf+(j)>>0;    if(d.nbuf<8){    m=0;n=d.err;b=m;c=n;return[b,c];    }  "�p=(o=d.nbuf/8,(o===o&&o!==1/0&&o!==-1/0)?o>>0:$throwRuntimeError("integer divide by zero"))*8>>0;  #r=(q=d.nbuf/8,(q===q&&q!==1/0&&q!==-1/0)?q>>0:$throwRuntimeError("integer divide by zero"))*5>>0;    if(r>a.$length){  #4s=d.enc.decode($subslice(new O(d.outbuf),0),$subslice(new O(d.buf),0,p));r=s[0];d.end=s[1];d.err=s[2];  #qd.out=$subslice(new O(d.outbuf),0,r);  #�b=$copySlice(a,d.out);  #�d.out=$subslice(d.out,b);    }else{  #�t=d.enc.decode(a,$subslice(new O(d.buf),0,p));b=t[0];d.end=t[1];d.err=t[2];    }  #�d.nbuf=d.nbuf-(p)>>0;  $u=0;while(true){if(!(u<d.nbuf)){break;}  $(x=d.buf,((u<0||u>=x.length)?$throwRuntimeError("index out of range"):x[u]=(v=d.buf,w=u+p>>0,((w<0||w>=v.length)?$throwRuntimeError("index out of range"):v[w]))));  $u=u+(1)>>0;    }    if($interfaceIsEqual(d.err,$ifaceNil)){  $Nd.err=c;    }    y=b;z=d.err;b=y;c=z;return[b,c];    }return;}if($f===undefined){$f={$blk:K.ptr.prototype.Read};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$r=$r;return $f;};K.prototype.Read=function(a){return this.$val.Read(a);};decoderencoding/base32.Oencoding/base32.decoderencoding/base32.decode~io.ReadAtLeast .(*encoding/base32.newlineFilteringReader).Read� L.ptr.prototype.Read=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  $�b=this;  $�d=b.wrapped.Read(a);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}c=d;e=c[0];f=c[1];  %	case 2:if(!(e>0)){$s=3;continue;}  %g=0;  %%h=$subslice(a,0,e);i=0;while(true){if(!(i<h.$length)){break;}j=i;k=((i<0||i>=h.$length)?$throwRuntimeError("index out of range"):h.$array[h.$offset+i]);    if(!((k===13))&&!((k===10))){    if(!((j===g))){  %y((g<0||g>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+g]=k);    }  %�g=g+(1)>>0;    }    i++;}    if(g>0){  %�return[g,f];    }  &m=b.wrapped.Read(a);$s=4;case 4:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}l=m;e=l[0];f=l[1];    $s=2;continue;case 3:  &%return[e,f];    }return;}if($f===undefined){$f={$blk:L.ptr.prototype.Read};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.Read=function(a){return this.$val.Read(a);};newlineFilteringReader&encoding/base32.newlineFilteringReader encoding/base32.NewDecoderM��M=function(a,b){var $ptr,a,b;  &�return new K.ptr($ifaceNil,a,new L.ptr(b),false,R.zero(),0,O.nil,T.zero());    };$pkg.NewDecoder=M;
NewDecoderencoding/base32.NewDecoderencoding/base32.Oencoding/base32.Pencoding/base32.Rencoding/base32.Tencoding/base32.decoder&encoding/base32.newlineFilteringReader &(*encoding/base32.Encoding).DecodedLen��E.ptr.prototype.DecodedLen=function(a){var $ptr,a,b,c;  'ab=this;  '�return(c=a/8,(c===c&&c!==1/0&&c!==-1/0)?c>>0:$throwRuntimeError("integer divide by zero"))*5>>0;    };E.prototype.DecodedLen=function(a){return this.$val.DecodedLen(a);};Encodingencoding/base32.Encoding ��{"Base":10140,"Files":[{"Name":"/usr/local/go/src/encoding/base32/base32.go","Base":1,"Size":10138,"Lines":[0,55,109,159,160,231,246,247,256,265,271,282,293,295,296,299,312,316,317,385,453,513,570,593,611,632,634,635,688,741,742,811,846,891,911,931,972,996,999,1036,1072,1075,1085,1087,1088,1150,1163,1204,1205,1274,1306,1347,1348,1395,1424,1436,1439,1449,1451,1452,1455,1466,1470,1471,1525,1563,1566,1624,1685,1739,1786,1806,1815,1818,1819,1839,1881,1882,1931,1956,1976,1987,2009,2029,2044,2054,2084,2113,2133,2148,2158,2188,2217,2232,2242,2272,2301,2330,2345,2355,2385,2405,2409,2410,2461,2487,2513,2539,2565,2591,2617,2643,2669,2670,2697,2717,2733,2754,2771,2788,2810,2828,2851,2870,2889,2896,2902,2907,2916,2920,2936,2952,2955,2957,2958,3012,3069,3116,3138,3158,3160,3161,3183,3195,3211,3227,3283,3326,3360,3362,3363,3418,3437,3455,3458,3459,3479,3496,3508,3553,3577,3589,3593,3602,3614,3632,3642,3646,3683,3737,3756,3760,3773,3776,3777,3804,3823,3850,3869,3884,3900,3904,3939,4000,4019,4023,4033,4046,4049,4050,4071,4102,4120,4123,4140,4153,4161,4163,4164,4218,4271,4305,4362,4395,4438,4451,4486,4489,4503,4505,4506,4574,4646,4706,4774,4803,4864,4897,4899,4900,4965,5000,5070,5071,5074,5085,5089,5090,5119,5120,5164,5243,5245,5246,5316,5384,5454,5511,5587,5605,5633,5679,5698,5710,5711,5734,5756,5816,5821,5837,5854,5898,5947,5973,6000,6046,6052,6085,6125,6152,6218,6225,6231,6255,6330,6406,6478,6551,6622,6667,6728,6734,6744,6749,6780,6804,6864,6869,6876,6880,6881,6938,6951,6967,6977,7010,7025,7035,7084,7099,7109,7145,7160,7170,7219,7234,7244,7280,7284,7300,7316,7326,7336,7346,7356,7366,7376,7386,7396,7406,7416,7420,7423,7443,7445,7446,7511,7580,7649,7712,7760,7826,7870,7904,7912,7914,7915,7985,8047,8089,8135,8177,8199,8201,8202,8224,8238,8256,8274,8315,8352,8364,8406,8433,8435,8436,8490,8509,8527,8530,8531,8579,8600,8621,8641,8657,8660,8661,8679,8701,8714,8723,8726,8748,8766,8769,8830,8844,8861,8879,8882,8883,8947,8969,8991,9009,9070,9095,9116,9136,9146,9195,9198,9212,9243,9268,9271,9272,9291,9305,9308,9325,9327,9328,9365,9384,9386,9387,9450,9479,9492,9506,9535,9566,9587,9606,9612,9625,9630,9634,9652,9674,9678,9731,9760,9763,9778,9780,9781,9835,9891,9949,9951,9952,10022,10074],"Infos":null}]}
 