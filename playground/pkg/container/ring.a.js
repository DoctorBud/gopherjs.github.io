t��Archive�� 
ImportPath Name Imports�� 
ExportData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �%��container/ringring��
$$ exports $$
pv0ringcontainer/ring	New n Ring next < prev @ 
Value   initr<  < Nextr<  < Prevr<  < Mover<n < Linkr<s< < Unlinkr<n < Lenr<   Dor<f         <A��A=$pkg.Ring=$newType(0,$kindStruct,"ring.Ring","Ring","container/ring",function(next_,prev_,Value_){this.$val=this;if(arguments.length===0){this.next=C.nil;this.prev=C.nil;this.Value=$ifaceNil;return;}this.next=next_;this.prev=prev_;this.Value=Value_;});�C.methods=[{prop:"init",name:"init",pkg:"container/ring",typ:$funcType([],[C],false)},{prop:"Next",name:"Next",pkg:"",typ:$funcType([],[C],false)},{prop:"Prev",name:"Prev",pkg:"",typ:$funcType([],[C],false)},{prop:"Move",name:"Move",pkg:"",typ:$funcType([$Int],[C],false)},{prop:"Link",name:"Link",pkg:"",typ:$funcType([C],[C],false)},{prop:"Unlink",name:"Unlink",pkg:"",typ:$funcType([$Int],[C],false)},{prop:"Len",name:"Len",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Do",name:"Do",pkg:"",typ:$funcType([D],[],false)}];��A.init([{prop:"next",name:"next",pkg:"container/ring",typ:C,tag:""},{prop:"prev",name:"prev",pkg:"container/ring",typ:C,tag:""},{prop:"Value",name:"Value",pkg:"",typ:$emptyInterface,tag:""}]);Ringcontainer/ring.Ccontainer/ring.Dcontainer/ring.Ring CC=$ptrType(A);Ccontainer/ring.Ring D(D=$funcType([$emptyInterface],[],false);D (*container/ring.Ring).init��A.ptr.prototype.init=function(){var $ptr,a;  �a=this;  �a.next=a;  �a.prev=a;  �return a;    };A.prototype.init=function(){return this.$val.init();};Ringinit~container/ring.Ring (*container/ring.Ring).Next��A.ptr.prototype.Next=function(){var $ptr,a;  a=this;    if(a.next===C.nil){  /return a.init();    }  Creturn a.next;    };A.prototype.Next=function(){return this.$val.Next();};Ringcontainer/ring.Ccontainer/ring.Ringcontainer/ring.init~ (*container/ring.Ring).Prev��A.ptr.prototype.Prev=function(){var $ptr,a;  �a=this;    if(a.next===C.nil){  �return a.init();    }  �return a.prev;    };A.prototype.Prev=function(){return this.$val.Prev();};Ringcontainer/ring.Ccontainer/ring.Ringcontainer/ring.init~ (*container/ring.Ring).Move�nA.ptr.prototype.Move=function(a){var $ptr,a,b;  �b=this;    if(b.next===C.nil){  �return b.init();    }  �if(a<0){  �while(true){if(!(a<0)){break;}  �b=b.prev;  �a=a+(1)>>0;    }  }else if(a>0){  while(true){if(!(a>0)){break;}  *b=b.next;  !a=a-(1)>>0;    }    }  =return b;    };A.prototype.Move=function(a){return this.$val.Move(a);};Ringcontainer/ring.Ccontainer/ring.Ringcontainer/ring.init~ container/ring.NewB�&B=function(a){var $ptr,a,b,c,d;    if(a<=0){  �return C.nil;    }  �b=new A.ptr(C.nil,C.nil,$ifaceNil);  �c=b;  �d=1;while(true){if(!(d<a)){break;}  �c.next=new A.ptr(C.nil,c,$ifaceNil);  �c=c.next;  �d=d+(1)>>0;    }   c.next=b;  b.prev=c;  return b;    };$pkg.New=B;Newcontainer/ring.Ccontainer/ring.Newcontainer/ring.Ring (*container/ring.Ring).Link��A.ptr.prototype.Link=function(a){var $ptr,a,b,c,d;  �b=this;  �c=b.Next();    if(!(a===C.nil)){  �d=a.Prev();  	db.next=a;  	qa.prev=b;  	~c.prev=d;  	�d.next=c;    }  	�return c;    };A.prototype.Link=function(a){return this.$val.Link(a);};Ringcontainer/ring.Ccontainer/ring.Ring (*container/ring.Ring).Unlink��A.ptr.prototype.Unlink=function(a){var $ptr,a,b;  
eb=this;    if(a<=0){  
�return C.nil;    }  
�return b.Link(b.Move(a+1>>0));    };A.prototype.Unlink=function(a){return this.$val.Unlink(a);};Ringcontainer/ring.Ccontainer/ring.Ring (*container/ring.Ring).Len�A.ptr.prototype.Len=function(){var $ptr,a,b,c;  <a=this;  Rb=0;    if(!(a===C.nil)){  jb=1;  vc=a.Next();while(true){if(!(!(c===a))){break;}  �b=b+(1)>>0;  �c=c.next;}    }  �return b;    };A.prototype.Len=function(){return this.$val.Len();};Ringcontainer/ring.Ccontainer/ring.Ring (*container/ring.Ring).Do�A.ptr.prototype.Do=function(a){var $ptr,a,b,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  5b=this;  Yif(!(b===C.nil)){$s=1;continue;}$s=2;continue;    case 1:  i$r=a(b.Value);$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  zc=b.Next();case 4:if(!(!(c===b))){$s=5;continue;}  �$r=a(c.Value);$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  �c=c.next;$s=4;continue;case 5:    case 2:    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:A.ptr.prototype.Do};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};A.prototype.Do=function(a){return this.$val.Do(a);};Ringcontainer/ring.Ccontainer/ring.Ring �{"Base":3254,"Files":[{"Name":"/usr/local/go/src/container/ring/ring.go","Base":1,"Size":3252,"Lines":[0,55,109,159,160,217,230,231,284,355,426,494,520,523,542,560,632,634,635,665,677,689,699,701,702,762,792,812,830,833,848,850,851,915,945,965,983,986,1001,1003,1004,1076,1143,1146,1181,1201,1219,1222,1232,1245,1266,1280,1284,1297,1318,1332,1336,1339,1349,1351,1352,1389,1413,1426,1439,1442,1458,1466,1492,1518,1531,1534,1546,1558,1568,1570,1571,1626,1684,1708,1711,1757,1817,1876,1935,1991,2008,2011,2059,2121,2180,2218,2221,2258,2273,2288,2304,2354,2401,2414,2427,2440,2453,2456,2466,2468,2469,2534,2592,2651,2654,2691,2704,2717,2720,2750,2752,2753,2803,2866,2869,2896,2904,2919,2927,2969,2976,2980,2983,2993,2995,2996,3066,3118,3159,3174,3187,3229,3243,3247,3250],"Infos":null}]}
 