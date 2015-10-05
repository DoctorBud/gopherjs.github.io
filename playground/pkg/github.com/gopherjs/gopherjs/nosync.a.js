t��Archive�� 
ImportPath Name Imports�� 
ExportData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �+r��#github.com/gopherjs/gopherjs/nosyncnosync��
$$ exports $$
pv0nosyncFgithub.com/gopherjs/gopherjs/nosync

Mutex locked   Lockm8   Unlockm8   Once 
doing   done   DooDf      Pool 
store    New       GetpN     PutpNx    RWMutex writeLocked   readLockCounter  Lockrwf   Unlockrwf   
RLockrwf   RUnlockrwf   WaitGroup counter  Addwgz
delta  Donewgz   Waitwgz   A��A=$pkg.Mutex=$newType(0,$kindStruct,"nosync.Mutex","Mutex","github.com/gopherjs/gopherjs/nosync",function(locked_){this.$val=this;if(arguments.length===0){this.locked=false;return;}this.locked=locked_;});��F.methods=[{prop:"Lock",name:"Lock",pkg:"",typ:$funcType([],[],false)},{prop:"Unlock",name:"Unlock",pkg:"",typ:$funcType([],[],false)}];cA.init([{prop:"locked",name:"locked",pkg:"github.com/gopherjs/gopherjs/nosync",typ:$Bool,tag:""}]);Mutex%github.com/gopherjs/gopherjs/nosync.F)github.com/gopherjs/gopherjs/nosync.Mutex B�4B=$pkg.RWMutex=$newType(0,$kindStruct,"nosync.RWMutex","RWMutex","github.com/gopherjs/gopherjs/nosync",function(writeLocked_,readLockCounter_){this.$val=this;if(arguments.length===0){this.writeLocked=false;this.readLockCounter=0;return;}this.writeLocked=writeLocked_;this.readLockCounter=readLockCounter_;});�G.methods=[{prop:"Lock",name:"Lock",pkg:"",typ:$funcType([],[],false)},{prop:"Unlock",name:"Unlock",pkg:"",typ:$funcType([],[],false)},{prop:"RLock",name:"RLock",pkg:"",typ:$funcType([],[],false)},{prop:"RUnlock",name:"RUnlock",pkg:"",typ:$funcType([],[],false)}];��B.init([{prop:"writeLocked",name:"writeLocked",pkg:"github.com/gopherjs/gopherjs/nosync",typ:$Bool,tag:""},{prop:"readLockCounter",name:"readLockCounter",pkg:"github.com/gopherjs/gopherjs/nosync",typ:$Int,tag:""}]);RWMutex%github.com/gopherjs/gopherjs/nosync.G+github.com/gopherjs/gopherjs/nosync.RWMutex C��C=$pkg.WaitGroup=$newType(0,$kindStruct,"nosync.WaitGroup","WaitGroup","github.com/gopherjs/gopherjs/nosync",function(counter_){this.$val=this;if(arguments.length===0){this.counter=0;return;}this.counter=counter_;});��H.methods=[{prop:"Add",name:"Add",pkg:"",typ:$funcType([$Int],[],false)},{prop:"Done",name:"Done",pkg:"",typ:$funcType([],[],false)},{prop:"Wait",name:"Wait",pkg:"",typ:$funcType([],[],false)}];dC.init([{prop:"counter",name:"counter",pkg:"github.com/gopherjs/gopherjs/nosync",typ:$Int,tag:""}]);	WaitGroup%github.com/gopherjs/gopherjs/nosync.H-github.com/gopherjs/gopherjs/nosync.WaitGroup D��D=$pkg.Once=$newType(0,$kindStruct,"nosync.Once","Once","github.com/gopherjs/gopherjs/nosync",function(doing_,done_){this.$val=this;if(arguments.length===0){this.doing=false;this.done=false;return;}this.doing=doing_;this.done=done_;});EJ.methods=[{prop:"Do",name:"Do",pkg:"",typ:$funcType([I],[],false)}];��D.init([{prop:"doing",name:"doing",pkg:"github.com/gopherjs/gopherjs/nosync",typ:$Bool,tag:""},{prop:"done",name:"done",pkg:"github.com/gopherjs/gopherjs/nosync",typ:$Bool,tag:""}]);Once%github.com/gopherjs/gopherjs/nosync.I%github.com/gopherjs/gopherjs/nosync.J(github.com/gopherjs/gopherjs/nosync.Once E��E=$pkg.Pool=$newType(0,$kindStruct,"nosync.Pool","Pool","github.com/gopherjs/gopherjs/nosync",function(store_,New_){this.$val=this;if(arguments.length===0){this.store=K.nil;this.New=$throwNilPointerError;return;}this.store=store_;this.New=New_;});��L.methods=[{prop:"Get",name:"Get",pkg:"",typ:$funcType([],[$emptyInterface],false)},{prop:"Put",name:"Put",pkg:"",typ:$funcType([$emptyInterface],[],false)}];��E.init([{prop:"store",name:"store",pkg:"github.com/gopherjs/gopherjs/nosync",typ:K,tag:""},{prop:"New",name:"New",pkg:"",typ:M,tag:""}]);Pool%github.com/gopherjs/gopherjs/nosync.K%github.com/gopherjs/gopherjs/nosync.L%github.com/gopherjs/gopherjs/nosync.M(github.com/gopherjs/gopherjs/nosync.Pool FF=$ptrType(A);F)github.com/gopherjs/gopherjs/nosync.Mutex GG=$ptrType(B);G+github.com/gopherjs/gopherjs/nosync.RWMutex HH=$ptrType(C);H-github.com/gopherjs/gopherjs/nosync.WaitGroup II=$funcType([],[],false);I JJ=$ptrType(D);J(github.com/gopherjs/gopherjs/nosync.Once KK=$sliceType($emptyInterface);K LL=$ptrType(E);L(github.com/gopherjs/gopherjs/nosync.Pool M(M=$funcType([],[$emptyInterface],false);M 1(*github.com/gopherjs/gopherjs/nosync.Mutex).Lock��A.ptr.prototype.Lock=function(){var $ptr,a;   �a=this;    if(a.locked){   �$panic(new $String("nosync: mutex is already locked"));    }   �a.locked=true;    };A.prototype.Lock=function(){return this.$val.Lock();};Mutex)github.com/gopherjs/gopherjs/nosync.Mutex 3(*github.com/gopherjs/gopherjs/nosync.Mutex).Unlock��A.ptr.prototype.Unlock=function(){var $ptr,a;  Pa=this;    if(!a.locked){  w$panic(new $String("nosync: unlock of unlocked mutex"));    }  �a.locked=false;    };A.prototype.Unlock=function(){return this.$val.Unlock();};Mutex)github.com/gopherjs/gopherjs/nosync.Mutex 3(*github.com/gopherjs/gopherjs/nosync.RWMutex).Lock�B.ptr.prototype.Lock=function(){var $ptr,a;  �a=this;    if(!((a.readLockCounter===0))||a.writeLocked){  �$panic(new $String("nosync: mutex is already locked"));    }  	a.writeLocked=true;    };B.prototype.Lock=function(){return this.$val.Lock();};RWMutex+github.com/gopherjs/gopherjs/nosync.RWMutex 5(*github.com/gopherjs/gopherjs/nosync.RWMutex).Unlock��B.ptr.prototype.Unlock=function(){var $ptr,a;  �a=this;    if(!a.writeLocked){  �$panic(new $String("nosync: unlock of unlocked mutex"));    }  �a.writeLocked=false;    };B.prototype.Unlock=function(){return this.$val.Unlock();};RWMutex+github.com/gopherjs/gopherjs/nosync.RWMutex 4(*github.com/gopherjs/gopherjs/nosync.RWMutex).RLock� B.ptr.prototype.RLock=function(){var $ptr,a;  ea=this;    if(a.writeLocked){  �$panic(new $String("nosync: mutex is already locked"));    }  �a.readLockCounter=a.readLockCounter+(1)>>0;    };B.prototype.RLock=function(){return this.$val.RLock();};RWMutex+github.com/gopherjs/gopherjs/nosync.RWMutex 6(*github.com/gopherjs/gopherjs/nosync.RWMutex).RUnlock�B.ptr.prototype.RUnlock=function(){var $ptr,a;  la=this;    if(a.readLockCounter===0){  �$panic(new $String("nosync: unlock of unlocked mutex"));    }  �a.readLockCounter=a.readLockCounter-(1)>>0;    };B.prototype.RUnlock=function(){return this.$val.RUnlock();};RWMutex+github.com/gopherjs/gopherjs/nosync.RWMutex 4(*github.com/gopherjs/gopherjs/nosync.WaitGroup).Add��C.ptr.prototype.Add=function(a){var $ptr,a,b;  �b=this;  �b.counter=b.counter+(a)>>0;    if(b.counter<0){  �$panic(new $String("sync: negative WaitGroup counter"));    }    };C.prototype.Add=function(a){return this.$val.Add(a);};	WaitGroup-github.com/gopherjs/gopherjs/nosync.WaitGroup 5(*github.com/gopherjs/gopherjs/nosync.WaitGroup).Done��C.ptr.prototype.Done=function(){var $ptr,a;  Ya=this;  ra.Add(-1);    };C.prototype.Done=function(){return this.$val.Done();};	WaitGroup-github.com/gopherjs/gopherjs/nosync.WaitGroup 5(*github.com/gopherjs/gopherjs/nosync.WaitGroup).Wait��C.ptr.prototype.Wait=function(){var $ptr,a;  �a=this;    if(!((a.counter===0))){  �$panic(new $String("sync: WaitGroup counter not zero"));    }    };C.prototype.Wait=function(){return this.$val.Wait();};	WaitGroup-github.com/gopherjs/gopherjs/nosync.WaitGroup .(*github.com/gopherjs/gopherjs/nosync.Once).Do�D.ptr.prototype.Do=function(a){var $ptr,a,b,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);b=[b];  �b[0]=this;    if(b[0].done){  �return;    }    if(b[0].doing){  �$panic(new $String("nosync: Do called within f"));    }  �b[0].doing=true;  $deferred.push([(function(b){return function(){var $ptr;  b[0].doing=false;  1b[0].done=true;    };})(b),[]]);  E$r=a();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;case-1:}return;}}catch(err){$err=err;$s=-1;}finally{$callDeferred($deferred,$err);if($curGoroutine.asleep){if($f===undefined){$f={$blk:D.ptr.prototype.Do};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};D.prototype.Do=function(a){return this.$val.Do(a);};Once(github.com/gopherjs/gopherjs/nosync.Once /(*github.com/gopherjs/gopherjs/nosync.Pool).Get��E.ptr.prototype.Get=function(){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  fa=this;  �if(a.store.$length===0){$s=1;continue;}$s=2;continue;    case 1:  �if(!(a.New===$throwNilPointerError)){$s=3;continue;}$s=4;continue;    case 3:  �b=a.New();$s=5;case 5:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}return b;    case 4:  �return $ifaceNil;    case 2:  �e=(c=a.store,d=a.store.$length-1>>0,((d<0||d>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+d]));  �a.store=$subslice(a.store,0,(a.store.$length-1>>0));  return e;    }return;}if($f===undefined){$f={$blk:E.ptr.prototype.Get};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};E.prototype.Get=function(){return this.$val.Get();};Pool(github.com/gopherjs/gopherjs/nosync.Pool /(*github.com/gopherjs/gopherjs/nosync.Pool).Put��E.ptr.prototype.Put=function(a){var $ptr,a,b;  Eb=this;    if($interfaceIsEqual(a,$ifaceNil)){  treturn;    }  b.store=$append(b.store,a);    };E.prototype.Put=function(a){return this.$val.Put(a);};Pool(github.com/gopherjs/gopherjs/nosync.Pool ��{"Base":5279,"Files":[{"Name":"/Users/richard/src/github.com/gopherjs/gopherjs/nosync/mutex.go","Base":1,"Size":2073,"Lines":[0,15,16,59,79,92,94,95,159,184,199,242,245,262,264,265,329,356,372,416,419,437,439,440,485,507,529,550,552,553,653,681,729,772,775,798,800,801,891,921,943,987,990,1014,1016,1017,1118,1147,1168,1211,1214,1236,1238,1239,1381,1412,1442,1486,1489,1511,1513,1514,1561,1585,1598,1600,1601,1702,1740,1761,1782,1826,1829,1831,1832,1874,1904,1916,1918,1919,1972,2002,2024,2068,2071],"Infos":null},{"Name":"/Users/richard/src/github.com/gopherjs/gopherjs/nosync/once.go","Base":2075,"Size":1072,"Lines":[0,15,16,75,94,106,118,120,121,190,253,271,349,423,473,476,553,629,677,730,733,780,783,859,881,884,914,927,936,939,953,991,994,1010,1026,1044,1060,1065,1070],"Infos":null},{"Name":"/Users/richard/src/github.com/gopherjs/gopherjs/nosync/pool.go","Base":3148,"Size":2130,"Lines":[0,15,16,91,105,108,188,265,295,298,363,366,440,517,597,612,615,687,761,838,862,865,942,1021,1091,1105,1108,1188,1267,1347,1361,1364,1383,1404,1430,1432,1433,1501,1540,1600,1675,1706,1709,1780,1812,1847,1871,1891,1909,1913,1926,1929,1959,1995,2005,2007,2008,2035,2071,2086,2095,2098,2128],"Infos":null}]}
 