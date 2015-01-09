g��Archive�� 
ImportPath Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  g���� FullName Vars�� BodyCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   �`	��database/sql/drivererrorsfmtreflectstrconvtime��package driver
import errors "errors"
import fmt "fmt"
import reflect "reflect"
import strconv "strconv"
import time "time"
var @"".Bool @"".boolType
type @"".ColumnConverter interface { @"".ColumnConverter(@"".idx int) (? @"".ValueConverter) }
type @"".Conn interface { @"".Begin() (? @"".Tx, ? error); @"".Close() (? error); @"".Prepare(@"".query string) (? @"".Stmt, ? error) }
var @"".DefaultParameterConverter @"".defaultConverter
type @"".Driver interface { @"".Open(@"".name string) (? @"".Conn, ? error) }
var @"".ErrBadConn error
var @"".ErrSkip error
type @"".Execer interface { @"".Exec(@"".query string, @"".args []@"".Value) (? @"".Result, ? error) }
var @"".Int32 @"".int32Type
func @"".IsScanValue(@"".v interface {  }) (? bool)
func @"".IsValue(@"".v interface {  }) (? bool)
type @"".NotNull struct { @"".Converter @"".ValueConverter }
func (? @"".NotNull) @"".ConvertValue(@"".v interface {  }) (? @"".Value, ? error)
func (? *@"".NotNull) @"".ConvertValue(@"".v interface {  }) (? @"".Value, ? error)
type @"".Null struct { @"".Converter @"".ValueConverter }
func (? @"".Null) @"".ConvertValue(@"".v interface {  }) (? @"".Value, ? error)
func (? *@"".Null) @"".ConvertValue(@"".v interface {  }) (? @"".Value, ? error)
type @"".Queryer interface { @"".Query(@"".query string, @"".args []@"".Value) (? @"".Rows, ? error) }
type @"".Result interface { @"".LastInsertId() (? int64, ? error); @"".RowsAffected() (? int64, ? error) }
var @"".ResultNoRows @"".noRows
type @"".Rows interface { @"".Close() (? error); @"".Columns() (? []string); @"".Next(@"".dest []@"".Value) (? error) }
type @"".RowsAffected int64
func (? @"".RowsAffected) @"".LastInsertId() (? int64, ? error)
func (? @"".RowsAffected) @"".RowsAffected() (? int64, ? error)
func (? *@"".RowsAffected) @"".LastInsertId() (? int64, ? error)
func (? *@"".RowsAffected) @"".RowsAffected() (? int64, ? error)
type @"".Stmt interface { @"".Close() (? error); @"".Exec(@"".args []@"".Value) (? @"".Result, ? error); @"".NumInput() (? int); @"".Query(@"".args []@"".Value) (? @"".Rows, ? error) }
var @"".String @"".stringType
type @"".Tx interface { @"".Commit() (? error); @"".Rollback() (? error) }
type @"".Value interface {  }
type @"".ValueConverter interface { @"".ConvertValue(@"".v interface {  }) (? @"".Value, ? error) }
type @"".Valuer interface { @"".Value() (? @"".Value, ? error) }
type @"".boolType struct {  }
func (? @"".boolType) @"".ConvertValue(@"".src interface {  }) (? @"".Value, ? error)
func (? @"".boolType) @"".String() (? string)
func (? *@"".boolType) @"".ConvertValue(@"".src interface {  }) (? @"".Value, ? error)
func (? *@"".boolType) @"".String() (? string)
type @"".defaultConverter struct {  }
func (? @"".defaultConverter) @"".ConvertValue(@"".v interface {  }) (? @"".Value, ? error)
func (? *@"".defaultConverter) @"".ConvertValue(@"".v interface {  }) (? @"".Value, ? error)
type @"".int32Type struct {  }
func (? @"".int32Type) @"".ConvertValue(@"".v interface {  }) (? @"".Value, ? error)
func (? *@"".int32Type) @"".ConvertValue(@"".v interface {  }) (? @"".Value, ? error)
type @"".noRows struct {  }
func (? @"".noRows) @"".LastInsertId() (? int64, ? error)
func (? @"".noRows) @"".RowsAffected() (? int64, ? error)
func (? *@"".noRows) @"".LastInsertId() (? int64, ? error)
func (? *@"".noRows) @"".RowsAffected() (? int64, ? error)
type @"".stringType struct {  }
func (? @"".stringType) @"".ConvertValue(@"".v interface {  }) (? @"".Value, ? error)
func (? *@"".stringType) @"".ConvertValue(@"".v interface {  }) (? @"".Value, ? error)
$$
@AA=$packages["errors"];E    $r=A.$init($BLOCKING);$s=1;case 1:if($r&&$r.$blocking){$r=$r();} BB=$packages["fmt"];E    $r=B.$init($BLOCKING);$s=2;case 2:if($r&&$r.$blocking){$r=$r();} CC=$packages["reflect"];E    $r=C.$init($BLOCKING);$s=3;case 3:if($r&&$r.$blocking){$r=$r();} DD=$packages["strconv"];E    $r=D.$init($BLOCKING);$s=4;case 4:if($r&&$r.$blocking){$r=$r();} EE=$packages["time"];E    $r=E.$init($BLOCKING);$s=5;case 5:if($r&&$r.$blocking){$r=$r();} ABAB=$sliceType($Uint8);database/sql/driver:[]byte ACAC=$sliceType($emptyInterface);!database/sql/driver:[]interface{} ADAD=$sliceType(F);/database/sql/driver:[]database/sql/driver.Valuedatabase/sql/driver.Value AEAE=$sliceType($String);database/sql/driver:[]string AFAF=$ptrType(P);5database/sql/driver:*database/sql/driver.RowsAffected database/sql/driver.RowsAffected AGAG=$ptrType(Q);/database/sql/driver:*database/sql/driver.noRowsdatabase/sql/driver.noRows AHAH=$ptrType(T);1database/sql/driver:*database/sql/driver.boolTypedatabase/sql/driver.boolType AIAI=$ptrType(U);2database/sql/driver:*database/sql/driver.int32Typedatabase/sql/driver.int32Type AJAJ=$ptrType(V);3database/sql/driver:*database/sql/driver.stringTypedatabase/sql/driver.stringType AKAK=$ptrType(W);-database/sql/driver:*database/sql/driver.Nulldatabase/sql/driver.Null ALAL=$ptrType(X);0database/sql/driver:*database/sql/driver.NotNulldatabase/sql/driver.NotNull AMAM=$ptrType(AA);9database/sql/driver:*database/sql/driver.defaultConverter$database/sql/driver.defaultConverter FZF=$pkg.Value=$newType(8,$kindInterface,"driver.Value","Value","database/sql/driver",null);F.init([]);database/sql/driver.Value G]G=$pkg.Driver=$newType(8,$kindInterface,"driver.Driver","Driver","database/sql/driver",null);CG.init([["Open","Open","",$funcType([$String],[J,$error],false)]]);database/sql/driver.Driverdatabase/sql/driver.Conn H]H=$pkg.Execer=$newType(8,$kindInterface,"driver.Execer","Execer","database/sql/driver",null);FH.init([["Exec","Exec","",$funcType([$String,AD],[K,$error],false)]]);database/sql/driver.Execerdatabase/sql/driver.Resultdatabase/sql/driver.Value/database/sql/driver:[]database/sql/driver.Value I`I=$pkg.Queryer=$newType(8,$kindInterface,"driver.Queryer","Queryer","database/sql/driver",null);HI.init([["Query","Query","",$funcType([$String,AD],[N,$error],false)]]);database/sql/driver.Queryerdatabase/sql/driver.Rows/database/sql/driver:[]database/sql/driver.Value JWJ=$pkg.Conn=$newType(8,$kindInterface,"driver.Conn","Conn","database/sql/driver",null);��J.init([["Begin","Begin","",$funcType([],[O,$error],false)],["Close","Close","",$funcType([],[$error],false)],["Prepare","Prepare","",$funcType([$String],[L,$error],false)]]);database/sql/driver.Conndatabase/sql/driver.Stmtdatabase/sql/driver.Tx K]K=$pkg.Result=$newType(8,$kindInterface,"driver.Result","Result","database/sql/driver",null);��K.init([["LastInsertId","LastInsertId","",$funcType([],[$Int64,$error],false)],["RowsAffected","RowsAffected","",$funcType([],[$Int64,$error],false)]]);database/sql/driver.Result LWL=$pkg.Stmt=$newType(8,$kindInterface,"driver.Stmt","Stmt","database/sql/driver",null);��L.init([["Close","Close","",$funcType([],[$error],false)],["Exec","Exec","",$funcType([AD],[K,$error],false)],["NumInput","NumInput","",$funcType([],[$Int],false)],["Query","Query","",$funcType([AD],[N,$error],false)]]);database/sql/driver.Stmtdatabase/sql/driver.Resultdatabase/sql/driver.Rows/database/sql/driver:[]database/sql/driver.Value MxM=$pkg.ColumnConverter=$newType(8,$kindInterface,"driver.ColumnConverter","ColumnConverter","database/sql/driver",null);OM.init([["ColumnConverter","ColumnConverter","",$funcType([$Int],[R],false)]]);#database/sql/driver.ColumnConverter"database/sql/driver.ValueConverter NWN=$pkg.Rows=$newType(8,$kindInterface,"driver.Rows","Rows","database/sql/driver",null);��N.init([["Close","Close","",$funcType([],[$error],false)],["Columns","Columns","",$funcType([],[AE],false)],["Next","Next","",$funcType([AD],[$error],false)]]);database/sql/driver.Rows/database/sql/driver:[]database/sql/driver.Valuedatabase/sql/driver:[]string OQO=$pkg.Tx=$newType(8,$kindInterface,"driver.Tx","Tx","database/sql/driver",null);vO.init([["Commit","Commit","",$funcType([],[$error],false)],["Rollback","Rollback","",$funcType([],[$error],false)]]);database/sql/driver.Tx PkP=$pkg.RowsAffected=$newType(8,$kindInt64,"driver.RowsAffected","RowsAffected","database/sql/driver",null);�AP.methods=[["LastInsertId","LastInsertId","",$funcType([],[$Int64,$error],false),-1],["RowsAffected","RowsAffected","",$funcType([],[$Int64,$error],false),-1]];AF.methods=[["LastInsertId","LastInsertId","",$funcType([],[$Int64,$error],false),-1],["RowsAffected","RowsAffected","",$funcType([],[$Int64,$error],false),-1]]; database/sql/driver.RowsAffected5database/sql/driver:*database/sql/driver.RowsAffected QqQ=$pkg.noRows=$newType(0,$kindStruct,"driver.noRows","noRows","database/sql/driver",function(){this.$val=this;});�LQ.methods=[["LastInsertId","LastInsertId","",$funcType([],[$Int64,$error],false),-1],["RowsAffected","RowsAffected","",$funcType([],[$Int64,$error],false),-1]];AG.methods=[["LastInsertId","LastInsertId","",$funcType([],[$Int64,$error],false),-1],["RowsAffected","RowsAffected","",$funcType([],[$Int64,$error],false),-1]];Q.init([]);database/sql/driver.noRows/database/sql/driver:*database/sql/driver.noRows RuR=$pkg.ValueConverter=$newType(8,$kindInterface,"driver.ValueConverter","ValueConverter","database/sql/driver",null);[R.init([["ConvertValue","ConvertValue","",$funcType([$emptyInterface],[F,$error],false)]]);"database/sql/driver.ValueConverterdatabase/sql/driver.Value S]S=$pkg.Valuer=$newType(8,$kindInterface,"driver.Valuer","Valuer","database/sql/driver",null);>S.init([["Value","Value","",$funcType([],[F,$error],false)]]);database/sql/driver.Valuerdatabase/sql/driver.Value TwT=$pkg.boolType=$newType(0,$kindStruct,"driver.boolType","boolType","database/sql/driver",function(){this.$val=this;});�<T.methods=[["ConvertValue","ConvertValue","",$funcType([$emptyInterface],[F,$error],false),-1],["String","String","",$funcType([],[$String],false),-1]];AH.methods=[["ConvertValue","ConvertValue","",$funcType([$emptyInterface],[F,$error],false),-1],["String","String","",$funcType([],[$String],false),-1]];T.init([]);database/sql/driver.boolTypedatabase/sql/driver.Value1database/sql/driver:*database/sql/driver.boolType UzU=$pkg.int32Type=$newType(0,$kindStruct,"driver.int32Type","int32Type","database/sql/driver",function(){this.$val=this;});��U.methods=[["ConvertValue","ConvertValue","",$funcType([$emptyInterface],[F,$error],false),-1]];AI.methods=[["ConvertValue","ConvertValue","",$funcType([$emptyInterface],[F,$error],false),-1]];U.init([]);database/sql/driver.int32Typedatabase/sql/driver.Value2database/sql/driver:*database/sql/driver.int32Type V}V=$pkg.stringType=$newType(0,$kindStruct,"driver.stringType","stringType","database/sql/driver",function(){this.$val=this;});��V.methods=[["ConvertValue","ConvertValue","",$funcType([$emptyInterface],[F,$error],false),-1]];AJ.methods=[["ConvertValue","ConvertValue","",$funcType([$emptyInterface],[F,$error],false),-1]];V.init([]);database/sql/driver.stringTypedatabase/sql/driver.Value3database/sql/driver:*database/sql/driver.stringType W��W=$pkg.Null=$newType(0,$kindStruct,"driver.Null","Null","database/sql/driver",function(Converter_){this.$val=this;this.Converter=Converter_!==undefined?Converter_:$ifaceNil;});��W.methods=[["ConvertValue","ConvertValue","",$funcType([$emptyInterface],[F,$error],false),-1]];AK.methods=[["ConvertValue","ConvertValue","",$funcType([$emptyInterface],[F,$error],false),-1]];W.init([["Converter","Converter","",R,""]]);database/sql/driver.Nulldatabase/sql/driver.Value"database/sql/driver.ValueConverter-database/sql/driver:*database/sql/driver.Null X��X=$pkg.NotNull=$newType(0,$kindStruct,"driver.NotNull","NotNull","database/sql/driver",function(Converter_){this.$val=this;this.Converter=Converter_!==undefined?Converter_:$ifaceNil;});��X.methods=[["ConvertValue","ConvertValue","",$funcType([$emptyInterface],[F,$error],false),-1]];AL.methods=[["ConvertValue","ConvertValue","",$funcType([$emptyInterface],[F,$error],false),-1]];X.init([["Converter","Converter","",R,""]]);database/sql/driver.NotNulldatabase/sql/driver.Value"database/sql/driver.ValueConverter0database/sql/driver:*database/sql/driver.NotNull AA��AA=$pkg.defaultConverter=$newType(0,$kindStruct,"driver.defaultConverter","defaultConverter","database/sql/driver",function(){this.$val=this;});��AA.methods=[["ConvertValue","ConvertValue","",$funcType([$emptyInterface],[F,$error],false),-1]];AM.methods=[["ConvertValue","ConvertValue","",$funcType([$emptyInterface],[F,$error],false),-1]];AA.init([]);$database/sql/driver.defaultConverterdatabase/sql/driver.Value9database/sql/driver:*database/sql/driver.defaultConverter database/sql/driver.ErrSkip database/sql/driver.ErrBadConn $pkg.ResultNoRows=new Q.Ptr(); database/sql/driver.ResultNoRows database/sql/driver.ResultNoRowsdatabase/sql/driver.noRows $pkg.Bool=new T.Ptr();database/sql/driver.Booldatabase/sql/driver.Booldatabase/sql/driver.boolType $pkg.Int32=new U.Ptr();database/sql/driver.Int32database/sql/driver.Int32database/sql/driver.int32Type $pkg.String=new V.Ptr();database/sql/driver.Stringdatabase/sql/driver.Stringdatabase/sql/driver.stringType ,$pkg.DefaultParameterConverter=new AA.Ptr();-database/sql/driver.DefaultParameterConverter-database/sql/driver.DefaultParameterConverter$database/sql/driver.defaultConverter P    $pkg.ErrSkip=A.New("driver: skip fast-path; continue as if unimplemented");database/sql/driver.ErrSkip
errors.New 5    $pkg.ErrBadConn=A.New("driver: bad connection");database/sql/driver.ErrBadConn
errors.New     database/sql/driver._     database/sql/driver._     database/sql/driver._     database/sql/driver._     database/sql/driver._ /(database/sql/driver.RowsAffected).LastInsertId��P.prototype.LastInsertId=function(){  return[new $Int64(0,0),A.New("no LastInsertId available")];    };$ptrType(P).prototype.LastInsertId=function(){return this.$get().LastInsertId();}; database/sql/driver.RowsAffected database/sql/driver.RowsAffected
errors.New /(database/sql/driver.RowsAffected).RowsAffected��P.prototype.RowsAffected=function(){var a;  Ia=this;  zreturn[new $Int64(a.$high,a.$low),$ifaceNil];    };$ptrType(P).prototype.RowsAffected=function(){return this.$get().RowsAffected();}; database/sql/driver.RowsAffected )(database/sql/driver.noRows).LastInsertId��Q.Ptr.prototype.LastInsertId=function(){  �return[new $Int64(0,0),A.New("no LastInsertId available after DDL statement")];    };Q.prototype.LastInsertId=function(){return this.$val.LastInsertId();};database/sql/driver.noRowsdatabase/sql/driver.noRows
errors.New )(database/sql/driver.noRows).RowsAffected��Q.Ptr.prototype.RowsAffected=function(){  7return[new $Int64(0,0),A.New("no RowsAffected available after DDL statement")];    };Q.prototype.RowsAffected=function(){return this.$val.RowsAffected();};database/sql/driver.noRowsdatabase/sql/driver.noRows
errors.New %(database/sql/driver.boolType).StringuT.Ptr.prototype.String=function(){  !Mreturn"Bool";    };T.prototype.String=function(){return this.$val.String();};database/sql/driver.boolTypedatabase/sql/driver.boolType +(database/sql/driver.boolType).ConvertValue�T.Ptr.prototype.ConvertValue=function(a){var b,c,d,e,f,g,h,i,j,k,l,m;  !�c=a;  !�if($assertType(c,$Bool,true)[1]){b=c.$val;  !�return[new $Bool(b),$ifaceNil];      !�}else if($assertType(c,$String,true)[1]){b=c.$val;  !�d=D.ParseBool(b);e=d[0];f=d[1];  "    if(!($interfaceIsEqual(f,$ifaceNil))){  "return[$ifaceNil,B.Errorf("sql/driver: couldn't convert %q into type bool",new AC([new $String(b)]))];    }  "ireturn[new $Bool(e),$ifaceNil];      "x}else if($assertType(c,AB,true)[1]){b=c.$val;  "�g=D.ParseBool($bytesToString(b));h=g[0];i=g[1];  "�    if(!($interfaceIsEqual(i,$ifaceNil))){  "�return[$ifaceNil,B.Errorf("sql/driver: couldn't convert %q into type bool",new AC([b]))];    }  #return[new $Bool(h),$ifaceNil];    }  #(j=C.ValueOf(a);  #Dk=j.Kind();  #Xif(k===2||k===3||k===4||k===5||k===6){  #�l=j.Int();  #�    if((l.$high===0&&l.$low===1)||(l.$high===0&&l.$low===0)){  #�return[new $Bool((l.$high===0&&l.$low===1)),$ifaceNil];    }  #�return[$ifaceNil,B.Errorf("sql/driver: couldn't convert %d into type bool",new AC([l]))];      $;}else if(k===7||k===8||k===9||k===10||k===11){  $�m=j.Uint();  $�    if((m.$high===0&&m.$low===1)||(m.$high===0&&m.$low===0)){  $�return[new $Bool((m.$high===0&&m.$low===1)),$ifaceNil];    }  $�return[$ifaceNil,B.Errorf("sql/driver: couldn't convert %d into type bool",new AC([m]))];    }  %(return[$ifaceNil,B.Errorf("sql/driver: couldn't convert %v (%T) into type bool",new AC([a,a]))];    };T.prototype.ConvertValue=function(a){return this.$val.ConvertValue(a);};database/sql/driver.boolTypedatabase/sql/driver.boolTypedatabase/sql/driver:[]byte!database/sql/driver:[]interface{}
fmt.Errorfreflect.ValueOfstrconv.ParseBool ,(database/sql/driver.int32Type).ConvertValue�NU.Ptr.prototype.ConvertValue=function(a){var b,c,d,e,f,g,h;  &�b=C.ValueOf(a);  &�c=b.Kind();  &�if(c===2||c===3||c===4||c===5||c===6){  &�d=b.Int();  '    if((d.$high>0||(d.$high===0&&d.$low>2147483647))||(d.$high<-1||(d.$high===-1&&d.$low<2147483648))){  ';return[$ifaceNil,B.Errorf("sql/driver: value %d overflows int32",new AC([a]))];    }  '�return[d,$ifaceNil];      '�}else if(c===7||c===8||c===9||c===10||c===11){  '�e=b.Uint();  '�    if((e.$high>0||(e.$high===0&&e.$low>2147483647))){  (return[$ifaceNil,B.Errorf("sql/driver: value %d overflows int32",new AC([a]))];    }  ([return[new $Int64(e.$high,e.$low),$ifaceNil];      (s}else if(c===24){  (�f=D.Atoi(b.String());g=f[0];h=f[1];  (�    if(!($interfaceIsEqual(h,$ifaceNil))){  (�return[$ifaceNil,B.Errorf("sql/driver: value %q can't be converted to int32",new AC([a]))];    }  )return[new $Int64(0,g),$ifaceNil];    }  )0return[$ifaceNil,B.Errorf("sql/driver: unsupported value %v (type %T) converting to int32",new AC([a,a]))];    };U.prototype.ConvertValue=function(a){return this.$val.ConvertValue(a);};database/sql/driver.int32Typedatabase/sql/driver.int32Type!database/sql/driver:[]interface{}
fmt.Errorfreflect.ValueOfstrconv.Atoi -(database/sql/driver.stringType).ConvertValue�)V.Ptr.prototype.ConvertValue=function(a){var b;  *�b=a;  *�if($assertType(b,$String,true)[1]||$assertType(b,AB,true)[1]){  +return[a,$ifaceNil];    }  + return[new $String(B.Sprintf("%v",new AC([a]))),$ifaceNil];    };V.prototype.ConvertValue=function(a){return this.$val.ConvertValue(a);};database/sql/driver.stringTypedatabase/sql/driver.stringTypedatabase/sql/driver:[]byte!database/sql/driver:[]interface{}fmt.Sprintf '(database/sql/driver.Null).ConvertValue�W.Ptr.prototype.ConvertValue=function(a){var b;  +�b=$clone(this,W);  ,/    if($interfaceIsEqual(a,$ifaceNil)){  ,?return[$ifaceNil,$ifaceNil];    }  ,Sreturn b.Converter.ConvertValue(a);    };W.prototype.ConvertValue=function(a){return this.$val.ConvertValue(a);};database/sql/driver.Nulldatabase/sql/driver.Null *(database/sql/driver.NotNull).ConvertValue�3X.Ptr.prototype.ConvertValue=function(a){var b;  -7b=$clone(this,X);  -p    if($interfaceIsEqual(a,$ifaceNil)){  -�return[$ifaceNil,B.Errorf("nil value not allowed",new AC([]))];    }  -�return b.Converter.ConvertValue(a);    };X.prototype.ConvertValue=function(a){return this.$val.ConvertValue(a);};database/sql/driver.NotNulldatabase/sql/driver.NotNull!database/sql/driver:[]interface{}
fmt.Errorf database/sql/driver.IsValueY��Y=$pkg.IsValue=function(a){var b,c;  .t    if(Z(a)){  .�return true;    }  .�  .�b=$assertType(a,$String,true);c=b[1];    if(c){  .�return true;    }  .�return false;    };database/sql/driver.IsValuedatabase/sql/driver.IsScanValue database/sql/driver.IsScanValueZ�BZ=$pkg.IsScanValue=function(a){var b;  /~    if($interfaceIsEqual(a,$ifaceNil)){  /�return true;    }  /�b=a;  /�if($assertType(b,$Int64,true)[1]||$assertType(b,$Float64,true)[1]||$assertType(b,AB,true)[1]||$assertType(b,$Bool,true)[1]||$assertType(b,E.Time,true)[1]){  /�return true;    }  /�return false;    };database/sql/driver.IsScanValuedatabase/sql/driver:[]byte	time.Time 3(database/sql/driver.defaultConverter).ConvertValue�8AA.Ptr.prototype.ConvertValue=function(a){var b,c,d,e,f,g,h,i,j,k;  2"    if(Y(a)){  24return[a,$ifaceNil];    }  2G  2Jb=$assertType(a,S,true);c=b[0];d=b[1];    if(d){  2he=c.Value();f=e[0];g=e[1];  2�    if(!($interfaceIsEqual(g,$ifaceNil))){  2�return[$ifaceNil,g];    }  2�    if(!Y(f)){  2�return[$ifaceNil,B.Errorf("non-Value type %T returned from Value",new AC([f]))];    }  3	return[f,$ifaceNil];    }  3h=C.ValueOf(a);  37i=h.Kind();  3Kif(i===22){  3v    if(h.IsNil()){  3�return[$ifaceNil,$ifaceNil];    }else{  3�return new AA.Ptr().ConvertValue(h.Elem().Interface());    }      3�}else if(i===2||i===3||i===4||i===5||i===6){  49return[h.Int(),$ifaceNil];      4O}else if(i===7||i===8||i===9||i===10){  4�return[(j=h.Uint(),new $Int64(j.$high,j.$low)),$ifaceNil];      4�}else if(i===11){  4�k=h.Uint();  4�    if((k.$high>2147483648||(k.$high===2147483648&&k.$low>=0))){  4�return[$ifaceNil,B.Errorf("uint64 values with high bit set are not supported",new AC([]))];    }  5Breturn[new $Int64(k.$high,k.$low),$ifaceNil];      5Z}else if(i===13||i===14){  5�return[new $Float64(h.Float()),$ifaceNil];    }  5�return[$ifaceNil,B.Errorf("unsupported type %T, a %s",new AC([a,new C.Kind(h.Kind())]))];    };AA.prototype.ConvertValue=function(a){return this.$val.ConvertValue(a);};$database/sql/driver.defaultConverterdatabase/sql/driver.IsValuedatabase/sql/driver.Valuer$database/sql/driver.defaultConverter!database/sql/driver:[]interface{}
fmt.Errorfreflect.Kindreflect.ValueOf �	�{"Base":13795,"Files":[{"Name":"/usr/local/go/src/database/sql/driver/driver.go","Base":1,"Size":6782,"Lines":[0,55,109,159,160,227,262,265,302,317,318,334,335,392,450,453,464,477,487,499,551,566,589,590,656,667,691,742,796,800,856,914,977,981,1044,1054,1087,1089,1090,1157,1226,1290,1349,1364,1445,1446,1512,1580,1648,1678,1681,1751,1815,1883,1919,1973,1974,2044,2047,2118,2186,2200,2203,2231,2255,2305,2307,2308,2379,2382,2455,2523,2537,2540,2569,2594,2643,2645,2646,2713,2740,2743,2778,2800,2868,2905,2906,2962,3017,3053,3057,3110,3173,3236,3273,3288,3289,3337,3358,3360,3361,3407,3431,3489,3549,3558,3589,3590,3650,3661,3692,3694,3695,3758,3803,3825,3857,3861,3920,3940,3955,3956,4015,4019,4083,4148,4209,4213,4273,4335,4392,4408,4409,4466,4494,4530,4531,4590,4602,4637,4639,4640,4704,4773,4804,4837,4899,4963,5024,5045,5086,5088,5089,5146,5168,5228,5289,5351,5397,5417,5418,5454,5469,5470,5527,5587,5623,5627,5673,5720,5771,5775,5834,5860,5862,5863,5887,5907,5923,5941,5943,5944,6012,6047,6071,6072,6103,6104,6156,6207,6209,6210,6264,6286,6288,6289,6362,6437,6471,6495,6496,6517,6518,6542,6543,6589,6660,6662,6663,6709,6780],"Infos":null},{"Name":"/usr/local/go/src/database/sql/driver/types.go","Base":6784,"Size":7010,"Lines":[0,55,109,159,160,175,176,185,192,203,214,222,224,225,295,298,363,434,494,497,566,636,697,726,729,797,823,826,894,928,960,1013,1057,1059,1060,1115,1118,1177,1210,1234,1268,1292,1294,1295,1360,1363,1392,1430,1455,1474,1495,1532,1594,1629,1647,1648,1671,1672,1706,1707,1757,1758,1821,1847,1859,1875,1889,1922,1940,2019,2023,2039,2053,2094,2112,2191,2195,2211,2214,2215,2243,2263,2341,2358,2384,2407,2411,2490,2573,2591,2617,2640,2644,2723,2726,2727,2816,2818,2819,2885,2929,2949,2950,2974,2975,3010,3011,3073,3099,3119,3197,3215,3256,3325,3329,3347,3430,3449,3472,3541,3545,3570,3592,3630,3648,3729,3733,3756,3759,3855,3857,3858,3925,3988,4053,4083,4105,4106,4131,4132,4195,4214,4236,4252,4255,4289,4291,4292,4357,4419,4438,4464,4466,4467,4526,4541,4559,4562,4598,4600,4601,4672,4734,4756,4782,4784,4785,4847,4862,4912,4915,4951,4953,4954,5016,5072,5107,5128,5142,5145,5175,5189,5192,5206,5208,5209,5270,5334,5373,5388,5402,5405,5424,5471,5485,5488,5502,5504,5505,5567,5627,5647,5650,5715,5775,5844,5857,5904,5905,5936,5937,5979,5980,6049,6066,6082,6085,6086,6118,6143,6161,6180,6184,6204,6275,6279,6296,6299,6300,6326,6346,6365,6388,6406,6425,6436,6501,6505,6583,6606,6673,6704,6726,6745,6765,6844,6848,6873,6913,6938,6941,7008],"Infos":null}]}
 