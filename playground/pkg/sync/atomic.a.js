g��Archive�� 
ImportPath Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  g���� FullName Vars�� BodyCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   �,���sync/atomicgithub.com/gopherjs/gopherjs/js��package atomic
import js "github.com/gopherjs/gopherjs/js"
func @"".AddInt32(@"".addr *int32, @"".delta int32) (? int32)
func @"".AddInt64(@"".addr *int64, @"".delta int64) (? int64)
func @"".AddUint32(@"".addr *uint32, @"".delta uint32) (? uint32)
func @"".AddUint64(@"".addr *uint64, @"".delta uint64) (? uint64)
func @"".AddUintptr(@"".addr *uintptr, @"".delta uintptr) (? uintptr)
func @"".CompareAndSwapInt32(@"".addr *int32, @"".old int32, @"".new int32) (? bool)
func @"".CompareAndSwapInt64(@"".addr *int64, @"".old int64, @"".new int64) (? bool)
func @"".CompareAndSwapPointer(@"".addr *@"unsafe".Pointer, @"".old @"unsafe".Pointer, @"".new @"unsafe".Pointer) (? bool)
func @"".CompareAndSwapUint32(@"".addr *uint32, @"".old uint32, @"".new uint32) (? bool)
func @"".CompareAndSwapUint64(@"".addr *uint64, @"".old uint64, @"".new uint64) (? bool)
func @"".CompareAndSwapUintptr(@"".addr *uintptr, @"".old uintptr, @"".new uintptr) (? bool)
func @"".LoadInt32(@"".addr *int32) (? int32)
func @"".LoadInt64(@"".addr *int64) (? int64)
func @"".LoadPointer(@"".addr *@"unsafe".Pointer) (? @"unsafe".Pointer)
func @"".LoadUint32(@"".addr *uint32) (? uint32)
func @"".LoadUint64(@"".addr *uint64) (? uint64)
func @"".LoadUintptr(@"".addr *uintptr) (? uintptr)
func @"".StoreInt32(@"".addr *int32, @"".val int32) ()
func @"".StoreInt64(@"".addr *int64, @"".val int64) ()
func @"".StorePointer(@"".addr *@"unsafe".Pointer, @"".val @"unsafe".Pointer) ()
func @"".StoreUint32(@"".addr *uint32, @"".val uint32) ()
func @"".StoreUint64(@"".addr *uint64, @"".val uint64) ()
func @"".StoreUintptr(@"".addr *uintptr, @"".val uintptr) ()
func @"".SwapInt32(@"".addr *int32, @"".new int32) (? int32)
func @"".SwapInt64(@"".addr *int64, @"".new int64) (? int64)
func @"".SwapPointer(@"".addr *@"unsafe".Pointer, @"".new @"unsafe".Pointer) (? @"unsafe".Pointer)
func @"".SwapUint32(@"".addr *uint32, @"".new uint32) (? uint32)
func @"".SwapUint64(@"".addr *uint64, @"".new uint64) (? uint64)
func @"".SwapUintptr(@"".addr *uintptr, @"".new uintptr) (? uintptr)
type @"".Value struct { @"".v interface {  } }
func (? *@"".Value) @"".Load() (@"".x interface {  })
func (? *@"".Value) @"".Store(@"".x interface {  }) ()
type @"".ifaceWords struct { @"".typ @"unsafe".Pointer; @"".data @"unsafe".Pointer }
$$
&A/A=$packages["github.com/gopherjs/gopherjs/js"];E    $r=A.$init($BLOCKING);$s=1;case 1:if($r&&$r.$blocking){$r=$r();} AJAJ=$ptrType(AF);sync/atomic:*sync/atomic.Valuesync/atomic.Value AF��AF=$pkg.Value=$newType(0,$kindStruct,"atomic.Value","Value","sync/atomic",function(v_){this.$val=this;this.v=v_!==undefined?v_:$ifaceNil;});��AJ.methods=[["Load","Load","",$funcType([],[$emptyInterface],false),-1],["Store","Store","",$funcType([$emptyInterface],[],false),-1]];AF.init([["v","v","sync/atomic",$emptyInterface,""]]);sync/atomic.Valuesync/atomic:*sync/atomic.Value AG��AG=$pkg.ifaceWords=$newType(0,$kindStruct,"atomic.ifaceWords","ifaceWords","sync/atomic",function(typ_,data_){this.$val=this;this.typ=typ_!==undefined?typ_:0;this.data=data_!==undefined?data_:0;});iAG.init([["typ","typ","sync/atomic",$UnsafePointer,""],["data","data","sync/atomic",$UnsafePointer,""]]);sync/atomic.ifaceWords sync/atomic.SwapInt32BaB=$pkg.SwapInt32=function(ad,ae){var af;   �af=ad.$get();   �ad.$set(ae);   �return af;    };sync/atomic.SwapInt32 sync/atomic.SwapInt64CaC=$pkg.SwapInt64=function(ad,ae){var af;   �af=ad.$get();   �ad.$set(ae);   �return af;    };sync/atomic.SwapInt64 sync/atomic.SwapUint32DbD=$pkg.SwapUint32=function(ad,ae){var af;  ?af=ad.$get();  Mad.$set(ae);  Zreturn af;    };sync/atomic.SwapUint32 sync/atomic.SwapUint64EbE=$pkg.SwapUint64=function(ad,ae){var af;  �af=ad.$get();  �ad.$set(ae);  �return af;    };sync/atomic.SwapUint64 sync/atomic.SwapUintptrFcF=$pkg.SwapUintptr=function(ad,ae){var af;  �af=ad.$get();  ad.$set(ae);  return af;    };sync/atomic.SwapUintptr sync/atomic.SwapPointerGcG=$pkg.SwapPointer=function(ad,ae){var af;  saf=ad.$get();  �ad.$set(ae);  �return af;    };sync/atomic.SwapPointer sync/atomic.CompareAndSwapInt32H��H=$pkg.CompareAndSwapInt32=function(ad,ae,af){  �    if(ad.$get()===ae){  �ad.$set(af);  �return true;    }  return false;    };sync/atomic.CompareAndSwapInt32 sync/atomic.CompareAndSwapInt64I��I=$pkg.CompareAndSwapInt64=function(ad,ae,af){var ag;  Z    if((ag=ad.$get(),(ag.$high===ae.$high&&ag.$low===ae.$low))){  nad.$set(af);  |return true;    }  �return false;    };sync/atomic.CompareAndSwapInt64  sync/atomic.CompareAndSwapUint32J��J=$pkg.CompareAndSwapUint32=function(ad,ae,af){  �    if(ad.$get()===ae){  �ad.$set(af);  �return true;    }  return false;    }; sync/atomic.CompareAndSwapUint32  sync/atomic.CompareAndSwapUint64K��K=$pkg.CompareAndSwapUint64=function(ad,ae,af){var ag;  `    if((ag=ad.$get(),(ag.$high===ae.$high&&ag.$low===ae.$low))){  tad.$set(af);  �return true;    }  �return false;    }; sync/atomic.CompareAndSwapUint64 !sync/atomic.CompareAndSwapUintptrL��L=$pkg.CompareAndSwapUintptr=function(ad,ae,af){  �    if(ad.$get()===ae){  �ad.$set(af);  return true;    }  return false;    };!sync/atomic.CompareAndSwapUintptr !sync/atomic.CompareAndSwapPointerM��M=$pkg.CompareAndSwapPointer=function(ad,ae,af){  z    if(ad.$get()===ae){  �ad.$set(af);  �return true;    }  �return false;    };!sync/atomic.CompareAndSwapPointer sync/atomic.AddInt32NfN=$pkg.AddInt32=function(ad,ae){var af;  �af=ad.$get()+ae>>0;  ad.$set(af);  return af;    };sync/atomic.AddInt32 sync/atomic.AddUint32OhO=$pkg.AddUint32=function(ad,ae){var af;  Saf=ad.$get()+ae>>>0;  iad.$set(af);  vreturn af;    };sync/atomic.AddUint32 sync/atomic.AddInt64P��P=$pkg.AddInt64=function(ad,ae){var af,ag;  �ag=(af=ad.$get(),new $Int64(af.$high+ae.$high,af.$low+ae.$low));  �ad.$set(ag);  �return ag;    };sync/atomic.AddInt64 sync/atomic.AddUint64Q��Q=$pkg.AddUint64=function(ad,ae){var af,ag;  ag=(af=ad.$get(),new $Uint64(af.$high+ae.$high,af.$low+ae.$low));  1ad.$set(ag);  >return ag;    };sync/atomic.AddUint64 sync/atomic.AddUintptrRiR=$pkg.AddUintptr=function(ad,ae){var af;  �af=ad.$get()+ae>>>0;  �ad.$set(af);  �return af;    };sync/atomic.AddUintptr sync/atomic.LoadInt32S;S=$pkg.LoadInt32=function(ad){  �return ad.$get();    };sync/atomic.LoadInt32 sync/atomic.LoadInt64T;T=$pkg.LoadInt64=function(ad){  return ad.$get();    };sync/atomic.LoadInt64 sync/atomic.LoadUint32U<U=$pkg.LoadUint32=function(ad){  Hreturn ad.$get();    };sync/atomic.LoadUint32 sync/atomic.LoadUint64V<V=$pkg.LoadUint64=function(ad){  �return ad.$get();    };sync/atomic.LoadUint64 sync/atomic.LoadUintptrW=W=$pkg.LoadUintptr=function(ad){  �return ad.$get();    };sync/atomic.LoadUintptr sync/atomic.LoadPointerX=X=$pkg.LoadPointer=function(ad){  	return ad.$get();    };sync/atomic.LoadPointer sync/atomic.StoreInt32Y:Y=$pkg.StoreInt32=function(ad,ae){  	?ad.$set(ae);    };sync/atomic.StoreInt32 sync/atomic.StoreInt64Z:Z=$pkg.StoreInt64=function(ad,ae){  	yad.$set(ae);    };sync/atomic.StoreInt64 sync/atomic.StoreUint32AA<AA=$pkg.StoreUint32=function(ad,ae){  	�ad.$set(ae);    };sync/atomic.StoreUint32 sync/atomic.StoreUint64AB<AB=$pkg.StoreUint64=function(ad,ae){  	�ad.$set(ae);    };sync/atomic.StoreUint64 sync/atomic.StoreUintptrAC=AC=$pkg.StoreUintptr=function(ad,ae){  
3ad.$set(ae);    };sync/atomic.StoreUintptr sync/atomic.StorePointerAD=AD=$pkg.StorePointer=function(ad,ae){  
�ad.$set(ae);    };sync/atomic.StorePointer (*sync/atomic.Value).Load��AF.Ptr.prototype.Load=function(){var ad=$ifaceNil,ae;  
�ae=this;  
�    ad=ae.v;return ad;    };AF.prototype.Load=function(){return this.$val.Load();};sync/atomic.Valuesync/atomic.Value (*sync/atomic.Value).Store��AF.Ptr.prototype.Store=function(ad){var ae;  
�ae=this;  
�    if($interfaceIsEqual(ad,$ifaceNil)){   $panic(new $String("sync/atomic: store of nil value into Value"));    }  8    if(!($interfaceIsEqual(ae.v,$ifaceNil))&&!(ad.constructor===ae.v.constructor)){  �$panic(new $String("sync/atomic: store of inconsistently typed value into Value"));    }  �ae.v=ad;    };AF.prototype.Store=function(ad){return this.$val.Store(ad);};sync/atomic.Valuesync/atomic.Value sync/atomic.panic64AEkAE=function(){  !�$panic(new $String("sync/atomic: broken 64-bit atomic operations (buggy QEMU)"));    };sync/atomic.panic64 sync/atomic.runtime_procPinAHWAH=function(){$panic("Native function not implemented: sync/atomic.runtime_procPin");};sync/atomic.runtime_procPin sync/atomic.runtime_procUnpinAIYAI=function(){$panic("Native function not implemented: sync/atomic.runtime_procUnpin");};sync/atomic.runtime_procUnpin �	{"Base":11174,"Files":[{"Name":"/tmp/tempgopath123/src/github.com/gopherjs/gopherjs/compiler/natives/sync/atomic/atomic.go","Base":1,"Size":3060,"Lines":[0,13,14,29,30,39,49,50,85,87,88,135,149,162,174,176,177,224,238,251,263,265,266,317,331,344,356,358,359,410,424,437,449,451,452,507,521,534,546,548,549,625,639,652,664,666,667,728,747,761,775,778,792,794,795,856,875,889,903,906,920,922,923,987,1006,1020,1034,1037,1051,1053,1054,1118,1137,1151,1165,1168,1182,1184,1185,1252,1271,1285,1299,1302,1316,1318,1319,1400,1419,1433,1447,1450,1464,1466,1467,1515,1537,1550,1562,1564,1565,1617,1639,1652,1664,1666,1667,1715,1737,1750,1762,1764,1765,1817,1839,1852,1864,1866,1867,1923,1945,1958,1970,1972,1973,2009,2023,2025,2026,2062,2076,2078,2079,2118,2132,2134,2135,2174,2188,2190,2191,2233,2247,2249,2250,2306,2320,2322,2323,2365,2378,2380,2381,2423,2436,2438,2439,2484,2497,2499,2500,2545,2558,2560,2561,2609,2622,2624,2625,2687,2700,2702,2703,2744,2756,2758,2759,2798,2813,2867,2870,2975,3046,3049,3058],"Infos":null},{"Name":"/usr/local/go/src/sync/atomic/doc.go","Base":3062,"Size":5655,"Lines":[0,56,110,160,161,223,278,281,341,414,475,509,549,552,625,643,646,661,676,690,693,763,806,809,830,846,862,867,883,886,957,975,978,996,1012,1015,1085,1148,1166,1169,1184,1185,1194,1204,1206,1207,1305,1308,1403,1406,1489,1566,1638,1657,1658,1742,1793,1794,1878,1929,1930,2015,2070,2071,2156,2211,2212,2298,2357,2358,2444,2524,2525,2608,2677,2678,2761,2830,2831,2915,2987,2988,3072,3144,3145,3231,3306,3307,3400,3489,3490,3560,3612,3613,3684,3774,3838,3894,3895,3965,4017,4018,4089,4179,4243,4299,4300,4372,4432,4433,4470,4510,4511,4548,4588,4589,4627,4670,4671,4709,4752,4753,4792,4838,4839,4878,4938,4939,4987,5027,5028,5076,5116,5117,5166,5209,5210,5259,5302,5303,5353,5399,5400,5450,5510,5511,5568,5585,5653],"Infos":null},{"Name":"/usr/local/go/src/sync/atomic/value.go","Base":8718,"Size":2455,"Lines":[0,55,109,159,160,175,176,185,195,197,198,274,333,386,445,465,480,482,483,537,562,583,604,606,607,663,732,773,813,842,890,926,939,942,973,1014,1028,1044,1052,1054,1055,1098,1181,1242,1281,1296,1350,1353,1393,1434,1441,1471,1489,1525,1583,1642,1692,1713,1787,1811,1824,1829,1857,1892,1925,1948,1958,1962,1997,2034,2092,2132,2144,2148,2207,2228,2300,2304,2338,2347,2350,2352,2353,2407,2430],"Infos":null}]}
 