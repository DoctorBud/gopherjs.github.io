g��Archive�� 
ImportPath Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  g���� FullName Vars�� BodyCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   �!��errors��package errors
func @"".New(@"".text string) (? error)
type @"".errorString struct { @"".s string }
func (? *@"".errorString) @"".Error() (? string)
$$
CC=$ptrType(B);errors:*errors.errorStringerrors.errorString B��B=$pkg.errorString=$newType(0,$kindStruct,"errors.errorString","errorString","errors",function(s_){this.$val=this;this.s=s_!==undefined?s_:"";});jC.methods=[["Error","Error","",$funcType([],[$String],false),-1]];B.init([["s","s","errors",$String,""]]);errors.errorStringerrors:*errors.errorString 
errors.NewA7A=$pkg.New=function(a){  Freturn new B.Ptr(a);    };
errors.Newerrors.errorString (*errors.errorString).Error��B.Ptr.prototype.Error=function(){var a;  �a=this;  �return a.s;    };B.prototype.Error=function(){return this.$val.Error();};errors.errorStringerrors.errorString ��{"Base":501,"Files":[{"Name":"/usr/local/go/src/errors/errors.go","Base":1,"Size":499,"Lines":[0,56,110,160,161,222,237,238,294,324,351,353,354,407,433,443,445,446,485,497],"Infos":null}]}
 