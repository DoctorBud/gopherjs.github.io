g’Archive’ 
ImportPath Imports’ GcData
 Declarations’ FileSet
 Minified   ’[]string’   ’[]*compiler.Decl’ ’  g’’ FullName Vars’ BodyCode
 InitCode
 
DceFilters’ DceDeps’ Blocking   žź’hashiožupackage hash
import io "io"
type @"".Hash interface { @"".BlockSize() (? int); @"".Reset() (); @"".Size() (? int); @"".Sum(@"".b []byte) (? []byte); @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"".Hash32 interface { @"".BlockSize() (? int); @"".Reset() (); @"".Size() (? int); @"".Sum(@"".b []byte) (? []byte); @"".Sum32() (? uint32); @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"".Hash64 interface { @"".BlockSize() (? int); @"".Reset() (); @"".Size() (? int); @"".Sum(@"".b []byte) (? []byte); @"".Sum64() (? uint64); @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
$$
AA=$packages["io"];E    $r=A.$init($BLOCKING);$s=1;case 1:if($r&&$r.$blocking){$r=$r();} EE=$sliceType($Uint8);hash:[]byte BFB=$pkg.Hash=$newType(8,$kindInterface,"hash.Hash","Hash","hash",null);’žB.init([["BlockSize","BlockSize","",$funcType([],[$Int],false)],["Reset","Reset","",$funcType([],[],false)],["Size","Size","",$funcType([],[$Int],false)],["Sum","Sum","",$funcType([E],[E],false)],["Write","Write","",$funcType([E],[$Int,$error],false)]]);	hash.Hashhash:[]byte CLC=$pkg.Hash32=$newType(8,$kindInterface,"hash.Hash32","Hash32","hash",null);ž1C.init([["BlockSize","BlockSize","",$funcType([],[$Int],false)],["Reset","Reset","",$funcType([],[],false)],["Size","Size","",$funcType([],[$Int],false)],["Sum","Sum","",$funcType([E],[E],false)],["Sum32","Sum32","",$funcType([],[$Uint32],false)],["Write","Write","",$funcType([E],[$Int,$error],false)]]);hash.Hash32hash:[]byte DLD=$pkg.Hash64=$newType(8,$kindInterface,"hash.Hash64","Hash64","hash",null);ž1D.init([["BlockSize","BlockSize","",$funcType([],[$Int],false)],["Reset","Reset","",$funcType([],[],false)],["Size","Size","",$funcType([],[$Int],false)],["Sum","Sum","",$funcType([E],[E],false)],["Sum64","Sum64","",$funcType([],[$Uint64],false)],["Write","Write","",$funcType([E],[$Int,$error],false)]]);hash.Hash64hash:[]byte ž!{"Base":1212,"Files":[{"Name":"/usr/local/go/src/hash/hash.go","Base":1,"Size":1210,"Lines":[0,55,109,159,160,216,229,230,242,243,310,332,417,448,459,460,531,581,603,604,652,661,662,716,728,729,785,840,903,941,958,960,961,1037,1061,1067,1083,1085,1086,1162,1186,1192,1208],"Infos":null}]}
 