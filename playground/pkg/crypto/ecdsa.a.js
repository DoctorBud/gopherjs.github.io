g��Archive�� 
ImportPath Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  g���� FullName Vars�� BodyCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   �v}��crypto/ecdsacryptocrypto/ellipticencoding/asn1iomath/big�S�package ecdsa
import crypto "crypto"
import elliptic "crypto/elliptic"
import asn1 "encoding/asn1"
import io "io"
import big "math/big"
func @"".GenerateKey(@"".c @"crypto/elliptic".Curve, @"".rand @"io".Reader) (@"".priv *@"".PrivateKey, @"".err error)
type @"".PrivateKey struct { ? @"".PublicKey; @"".D *@"math/big".Int }
func (? *@"".PrivateKey) @"".Public() (? @"crypto".PublicKey)
func (? *@"".PrivateKey) @"".Sign(@"".rand @"io".Reader, @"".msg []byte, @"".opts @"crypto".SignerOpts) (? []byte, ? error)
type @"".PublicKey struct { ? @"crypto/elliptic".Curve; @"".X *@"math/big".Int; @"".Y *@"math/big".Int }
func @"".Sign(@"".rand @"io".Reader, @"".priv *@"".PrivateKey, @"".hash []byte) (@"".r *@"math/big".Int, @"".s *@"math/big".Int, @"".err error)
func @"".Verify(@"".pub *@"".PublicKey, @"".hash []byte, @"".r *@"math/big".Int, @"".s *@"math/big".Int) (? bool)
type @"".ecdsaSignature struct { @"".R *@"math/big".Int; @"".S *@"math/big".Int }
type @"crypto/elliptic".Curve interface { @"crypto/elliptic".Add(@"crypto/elliptic".x1 *@"math/big".Int, @"crypto/elliptic".y1 *@"math/big".Int, @"crypto/elliptic".x2 *@"math/big".Int, @"crypto/elliptic".y2 *@"math/big".Int) (@"crypto/elliptic".x *@"math/big".Int, @"crypto/elliptic".y *@"math/big".Int); @"crypto/elliptic".Double(@"crypto/elliptic".x1 *@"math/big".Int, @"crypto/elliptic".y1 *@"math/big".Int) (@"crypto/elliptic".x *@"math/big".Int, @"crypto/elliptic".y *@"math/big".Int); @"crypto/elliptic".IsOnCurve(@"crypto/elliptic".x *@"math/big".Int, @"crypto/elliptic".y *@"math/big".Int) (? bool); @"crypto/elliptic".Params() (? *@"crypto/elliptic".CurveParams); @"crypto/elliptic".ScalarBaseMult(@"crypto/elliptic".k []byte) (@"crypto/elliptic".x *@"math/big".Int, @"crypto/elliptic".y *@"math/big".Int); @"crypto/elliptic".ScalarMult(@"crypto/elliptic".x1 *@"math/big".Int, @"crypto/elliptic".y1 *@"math/big".Int, @"crypto/elliptic".k []byte) (@"crypto/elliptic".x *@"math/big".Int, @"crypto/elliptic".y *@"math/big".Int) }
type @"io".Reader interface { @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"math/big".Int struct { @"math/big".neg bool; @"math/big".abs @"math/big".nat }
func (? *@"math/big".Int) @"math/big".Abs(@"math/big".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Add(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".And(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".AndNot(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Binomial(@"math/big".n int64, @"math/big".k int64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Bit(@"math/big".i int) (? uint)
func (? *@"math/big".Int) @"math/big".BitLen() (? int)
func (? *@"math/big".Int) @"math/big".Bits() (? []@"math/big".Word)
func (? *@"math/big".Int) @"math/big".Bytes() (? []byte)
func (? *@"math/big".Int) @"math/big".Cmp(@"math/big".y *@"math/big".Int) (@"math/big".r int)
func (? *@"math/big".Int) @"math/big".Div(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".DivMod(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int, @"math/big".m *@"math/big".Int) (? *@"math/big".Int, ? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Exp(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int, @"math/big".m *@"math/big".Int) (? *@"math/big".Int)
import fmt "fmt"
func (? *@"math/big".Int) @"math/big".Format(@"math/big".s @"fmt".State, @"math/big".ch rune) ()
func (? *@"math/big".Int) @"math/big".GCD(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int, @"math/big".a *@"math/big".Int, @"math/big".b *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".GobDecode(@"math/big".buf []byte) (? error)
func (? *@"math/big".Int) @"math/big".GobEncode() (? []byte, ? error)
func (? *@"math/big".Int) @"math/big".Int64() (? int64)
func (? *@"math/big".Int) @"math/big".Lsh(@"math/big".x *@"math/big".Int, @"math/big".n uint) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".MarshalJSON() (? []byte, ? error)
func (? *@"math/big".Int) @"math/big".MarshalText() (@"math/big".text []byte, @"math/big".err error)
func (? *@"math/big".Int) @"math/big".Mod(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".ModInverse(@"math/big".g *@"math/big".Int, @"math/big".n *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Mul(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".MulRange(@"math/big".a int64, @"math/big".b int64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Neg(@"math/big".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Not(@"math/big".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Or(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".ProbablyPrime(@"math/big".n int) (? bool)
func (? *@"math/big".Int) @"math/big".Quo(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".QuoRem(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int, @"math/big".r *@"math/big".Int) (? *@"math/big".Int, ? *@"math/big".Int)
import rand "math/rand"
func (? *@"math/big".Int) @"math/big".Rand(@"math/big".rnd *@"math/rand".Rand, @"math/big".n *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Rem(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Rsh(@"math/big".x *@"math/big".Int, @"math/big".n uint) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Scan(@"math/big".s @"fmt".ScanState, @"math/big".ch rune) (? error)
func (? *@"math/big".Int) @"math/big".Set(@"math/big".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetBit(@"math/big".x *@"math/big".Int, @"math/big".i int, @"math/big".b uint) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetBits(@"math/big".abs []@"math/big".Word) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetBytes(@"math/big".buf []byte) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetInt64(@"math/big".x int64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetString(@"math/big".s string, @"math/big".base int) (? *@"math/big".Int, ? bool)
func (? *@"math/big".Int) @"math/big".SetUint64(@"math/big".x uint64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Sign() (? int)
func (? *@"math/big".Int) @"math/big".String() (? string)
func (? *@"math/big".Int) @"math/big".Sub(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Uint64() (? uint64)
func (? *@"math/big".Int) @"math/big".UnmarshalJSON(@"math/big".text []byte) (? error)
func (? *@"math/big".Int) @"math/big".UnmarshalText(@"math/big".text []byte) (? error)
func (? *@"math/big".Int) @"math/big".Xor(@"math/big".x *@"math/big".Int, @"math/big".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".binaryGCD(@"math/big".a *@"math/big".Int, @"math/big".b *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".scan(@"math/big".r @"io".RuneScanner, @"math/big".base int) (? *@"math/big".Int, ? int, ? error)
type @"crypto".PublicKey interface {  }
type @"crypto".SignerOpts interface { @"crypto".HashFunc() (? @"crypto".Hash) }
type @"crypto/elliptic".CurveParams struct { @"crypto/elliptic".P *@"math/big".Int; @"crypto/elliptic".N *@"math/big".Int; @"crypto/elliptic".B *@"math/big".Int; @"crypto/elliptic".Gx *@"math/big".Int; @"crypto/elliptic".Gy *@"math/big".Int; @"crypto/elliptic".BitSize int }
func (? *@"crypto/elliptic".CurveParams) @"crypto/elliptic".Add(@"crypto/elliptic".x1 *@"math/big".Int, @"crypto/elliptic".y1 *@"math/big".Int, @"crypto/elliptic".x2 *@"math/big".Int, @"crypto/elliptic".y2 *@"math/big".Int) (? *@"math/big".Int, ? *@"math/big".Int)
func (? *@"crypto/elliptic".CurveParams) @"crypto/elliptic".Double(@"crypto/elliptic".x1 *@"math/big".Int, @"crypto/elliptic".y1 *@"math/big".Int) (? *@"math/big".Int, ? *@"math/big".Int)
func (? *@"crypto/elliptic".CurveParams) @"crypto/elliptic".IsOnCurve(@"crypto/elliptic".x *@"math/big".Int, @"crypto/elliptic".y *@"math/big".Int) (? bool)
func (? *@"crypto/elliptic".CurveParams) @"crypto/elliptic".Params() (? *@"crypto/elliptic".CurveParams)
func (? *@"crypto/elliptic".CurveParams) @"crypto/elliptic".ScalarBaseMult(@"crypto/elliptic".k []byte) (? *@"math/big".Int, ? *@"math/big".Int)
func (? *@"crypto/elliptic".CurveParams) @"crypto/elliptic".ScalarMult(@"crypto/elliptic".Bx *@"math/big".Int, @"crypto/elliptic".By *@"math/big".Int, @"crypto/elliptic".k []byte) (? *@"math/big".Int, ? *@"math/big".Int)
func (? *@"crypto/elliptic".CurveParams) @"crypto/elliptic".addJacobian(@"crypto/elliptic".x1 *@"math/big".Int, @"crypto/elliptic".y1 *@"math/big".Int, @"crypto/elliptic".z1 *@"math/big".Int, @"crypto/elliptic".x2 *@"math/big".Int, @"crypto/elliptic".y2 *@"math/big".Int, @"crypto/elliptic".z2 *@"math/big".Int) (? *@"math/big".Int, ? *@"math/big".Int, ? *@"math/big".Int)
func (? *@"crypto/elliptic".CurveParams) @"crypto/elliptic".affineFromJacobian(@"crypto/elliptic".x *@"math/big".Int, @"crypto/elliptic".y *@"math/big".Int, @"crypto/elliptic".z *@"math/big".Int) (@"crypto/elliptic".xOut *@"math/big".Int, @"crypto/elliptic".yOut *@"math/big".Int)
func (? *@"crypto/elliptic".CurveParams) @"crypto/elliptic".doubleJacobian(@"crypto/elliptic".x *@"math/big".Int, @"crypto/elliptic".y *@"math/big".Int, @"crypto/elliptic".z *@"math/big".Int) (? *@"math/big".Int, ? *@"math/big".Int, ? *@"math/big".Int)
type @"math/big".nat []@"math/big".Word
func (? @"math/big".nat) @"math/big".add(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".and(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".andNot(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".bit(@"math/big".i uint) (? uint)
func (? @"math/big".nat) @"math/big".bitLen() (? int)
func (? @"math/big".nat) @"math/big".bytes(@"math/big".buf []byte) (@"math/big".i int)
func (? @"math/big".nat) @"math/big".clear() ()
func (? @"math/big".nat) @"math/big".cmp(@"math/big".y @"math/big".nat) (@"math/big".r int)
func (? @"math/big".nat) @"math/big".convertWords(@"math/big".s []byte, @"math/big".charset string, @"math/big".b @"math/big".Word, @"math/big".ndigits int, @"math/big".bb @"math/big".Word, @"math/big".table []@"math/big".divisor) ()
func (? @"math/big".nat) @"math/big".decimalString() (? string)
func (? @"math/big".nat) @"math/big".div(@"math/big".z2 @"math/big".nat, @"math/big".u @"math/big".nat, @"math/big".v @"math/big".nat) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".nat)
func (? @"math/big".nat) @"math/big".divLarge(@"math/big".u @"math/big".nat, @"math/big".uIn @"math/big".nat, @"math/big".v @"math/big".nat) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".nat)
func (? @"math/big".nat) @"math/big".divW(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".Word) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".Word)
func (? @"math/big".nat) @"math/big".expNN(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat, @"math/big".m @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".expNNWindowed(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat, @"math/big".m @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".expWW(@"math/big".x @"math/big".Word, @"math/big".y @"math/big".Word) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".make(@"math/big".n int) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".modW(@"math/big".d @"math/big".Word) (@"math/big".r @"math/big".Word)
func (? @"math/big".nat) @"math/big".mul(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".mulAddWW(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".Word, @"math/big".r @"math/big".Word) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".mulRange(@"math/big".a uint64, @"math/big".b uint64) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".norm() (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".or(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".probablyPrime(@"math/big".reps int) (? bool)
func (? @"math/big".nat) @"math/big".random(@"math/big".rand *@"math/rand".Rand, @"math/big".limit @"math/big".nat, @"math/big".n int) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".scan(@"math/big".r @"io".RuneScanner, @"math/big".base int) (? @"math/big".nat, ? int, ? error)
func (? @"math/big".nat) @"math/big".set(@"math/big".x @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setBit(@"math/big".x @"math/big".nat, @"math/big".i uint, @"math/big".b uint) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setBytes(@"math/big".buf []byte) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setUint64(@"math/big".x uint64) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setWord(@"math/big".x @"math/big".Word) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".shl(@"math/big".x @"math/big".nat, @"math/big".s uint) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".shr(@"math/big".x @"math/big".nat, @"math/big".s uint) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".string(@"math/big".charset string) (? string)
func (? @"math/big".nat) @"math/big".sub(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".trailingZeroBits() (? uint)
func (? @"math/big".nat) @"math/big".xor(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".add(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".and(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".andNot(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".bit(@"math/big".i uint) (? uint)
func (? *@"math/big".nat) @"math/big".bitLen() (? int)
func (? *@"math/big".nat) @"math/big".bytes(@"math/big".buf []byte) (@"math/big".i int)
func (? *@"math/big".nat) @"math/big".clear() ()
func (? *@"math/big".nat) @"math/big".cmp(@"math/big".y @"math/big".nat) (@"math/big".r int)
func (? *@"math/big".nat) @"math/big".convertWords(@"math/big".s []byte, @"math/big".charset string, @"math/big".b @"math/big".Word, @"math/big".ndigits int, @"math/big".bb @"math/big".Word, @"math/big".table []@"math/big".divisor) ()
func (? *@"math/big".nat) @"math/big".decimalString() (? string)
func (? *@"math/big".nat) @"math/big".div(@"math/big".z2 @"math/big".nat, @"math/big".u @"math/big".nat, @"math/big".v @"math/big".nat) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".nat)
func (? *@"math/big".nat) @"math/big".divLarge(@"math/big".u @"math/big".nat, @"math/big".uIn @"math/big".nat, @"math/big".v @"math/big".nat) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".nat)
func (? *@"math/big".nat) @"math/big".divW(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".Word) (@"math/big".q @"math/big".nat, @"math/big".r @"math/big".Word)
func (? *@"math/big".nat) @"math/big".expNN(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat, @"math/big".m @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".expNNWindowed(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat, @"math/big".m @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".expWW(@"math/big".x @"math/big".Word, @"math/big".y @"math/big".Word) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".make(@"math/big".n int) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".modW(@"math/big".d @"math/big".Word) (@"math/big".r @"math/big".Word)
func (? *@"math/big".nat) @"math/big".mul(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".mulAddWW(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".Word, @"math/big".r @"math/big".Word) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".mulRange(@"math/big".a uint64, @"math/big".b uint64) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".norm() (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".or(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".probablyPrime(@"math/big".reps int) (? bool)
func (? *@"math/big".nat) @"math/big".random(@"math/big".rand *@"math/rand".Rand, @"math/big".limit @"math/big".nat, @"math/big".n int) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".scan(@"math/big".r @"io".RuneScanner, @"math/big".base int) (? @"math/big".nat, ? int, ? error)
func (? *@"math/big".nat) @"math/big".set(@"math/big".x @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setBit(@"math/big".x @"math/big".nat, @"math/big".i uint, @"math/big".b uint) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setBytes(@"math/big".buf []byte) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setUint64(@"math/big".x uint64) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setWord(@"math/big".x @"math/big".Word) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".shl(@"math/big".x @"math/big".nat, @"math/big".s uint) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".shr(@"math/big".x @"math/big".nat, @"math/big".s uint) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".string(@"math/big".charset string) (? string)
func (? *@"math/big".nat) @"math/big".sub(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".trailingZeroBits() (? uint)
func (? *@"math/big".nat) @"math/big".xor(@"math/big".x @"math/big".nat, @"math/big".y @"math/big".nat) (? @"math/big".nat)
type @"math/big".Word uintptr
type @"fmt".State interface { @"fmt".Flag(@"fmt".c int) (? bool); @"fmt".Precision() (@"fmt".prec int, @"fmt".ok bool); @"fmt".Width() (@"fmt".wid int, @"fmt".ok bool); @"fmt".Write(@"fmt".b []byte) (@"fmt".ret int, @"fmt".err error) }
type @"math/rand".Rand struct { @"math/rand".src @"math/rand".Source }
func (? *@"math/rand".Rand) @"math/rand".ExpFloat64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Float32() (? float32)
func (? *@"math/rand".Rand) @"math/rand".Float64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Int() (? int)
func (? *@"math/rand".Rand) @"math/rand".Int31() (? int32)
func (? *@"math/rand".Rand) @"math/rand".Int31n(@"math/rand".n int32) (? int32)
func (? *@"math/rand".Rand) @"math/rand".Int63() (? int64)
func (? *@"math/rand".Rand) @"math/rand".Int63n(@"math/rand".n int64) (? int64)
func (? *@"math/rand".Rand) @"math/rand".Intn(@"math/rand".n int) (? int)
func (? *@"math/rand".Rand) @"math/rand".NormFloat64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Perm(@"math/rand".n int) (? []int)
func (? *@"math/rand".Rand) @"math/rand".Seed(@"math/rand".seed int64) ()
func (? *@"math/rand".Rand) @"math/rand".Uint32() (? uint32)
type @"fmt".ScanState interface { @"fmt".Read(@"fmt".buf []byte) (@"fmt".n int, @"fmt".err error); @"fmt".ReadRune() (@"fmt".r rune, @"fmt".size int, @"fmt".err error); @"fmt".SkipSpace() (); @"fmt".Token(@"fmt".skipSpace bool, @"fmt".f func (? rune) (? bool)) (@"fmt".token []byte, @"fmt".err error); @"fmt".UnreadRune() (? error); @"fmt".Width() (@"fmt".wid int, @"fmt".ok bool) }
type @"io".RuneScanner interface { @"io".ReadRune() (@"io".r rune, @"io".size int, @"io".err error); @"io".UnreadRune() (? error) }
type @"crypto".Hash uint
func (? @"crypto".Hash) @"crypto".Available() (? bool)
func (? @"crypto".Hash) @"crypto".HashFunc() (? @"crypto".Hash)
import hash "hash"
func (? @"crypto".Hash) @"crypto".New() (? @"hash".Hash)
func (? @"crypto".Hash) @"crypto".Size() (? int)
func (? *@"crypto".Hash) @"crypto".Available() (? bool)
func (? *@"crypto".Hash) @"crypto".HashFunc() (? @"crypto".Hash)
func (? *@"crypto".Hash) @"crypto".New() (? @"hash".Hash)
func (? *@"crypto".Hash) @"crypto".Size() (? int)
type @"math/big".divisor struct { @"math/big".bbb @"math/big".nat; @"math/big".nbits int; @"math/big".ndigits int }
type @"math/rand".Source interface { @"math/rand".Int63() (? int64); @"math/rand".Seed(@"math/rand".seed int64) () }
type @"hash".Hash interface { @"hash".BlockSize() (? int); @"hash".Reset() (); @"hash".Size() (? int); @"hash".Sum(@"hash".b []byte) (? []byte); @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
$$
AA=$packages["crypto"];E    $r=A.$init($BLOCKING);$s=1;case 1:if($r&&$r.$blocking){$r=$r();} BB=$packages["crypto/elliptic"];E    $r=B.$init($BLOCKING);$s=2;case 2:if($r&&$r.$blocking){$r=$r();} CC=$packages["encoding/asn1"];E    $r=C.$init($BLOCKING);$s=3;case 3:if($r&&$r.$blocking){$r=$r();} DD=$packages["io"];E    $r=D.$init($BLOCKING);$s=4;case 4:if($r&&$r.$blocking){$r=$r();} EE=$packages["math/big"];E    $r=E.$init($BLOCKING);$s=5;case 5:if($r&&$r.$blocking){$r=$r();} PP=$sliceType($Uint8);crypto/ecdsa:[]byte QQ=$ptrType(E.Int);crypto/ecdsa:*math/big.Intmath/big.Int RR=$ptrType(G);%crypto/ecdsa:*crypto/ecdsa.PrivateKeycrypto/ecdsa.PrivateKey SS=$ptrType(B.CurveParams);)crypto/ecdsa:*crypto/elliptic.CurveParamscrypto/elliptic.CurveParams TT=$ptrType(F);$crypto/ecdsa:*crypto/ecdsa.PublicKeycrypto/ecdsa.PublicKey F��F=$pkg.PublicKey=$newType(0,$kindStruct,"ecdsa.PublicKey","PublicKey","crypto/ecdsa",function(Curve_,X_,Y_){this.$val=this;this.Curve=Curve_!==undefined?Curve_:$ifaceNil;this.X=X_!==undefined?X_:Q.nil;this.Y=Y_!==undefined?Y_:Q.nil;});�F.methods=[["Add","Add","",$funcType([Q,Q,Q,Q],[Q,Q],false),0],["Double","Double","",$funcType([Q,Q],[Q,Q],false),0],["IsOnCurve","IsOnCurve","",$funcType([Q,Q],[$Bool],false),0],["Params","Params","",$funcType([],[S],false),0],["ScalarBaseMult","ScalarBaseMult","",$funcType([P],[Q,Q],false),0],["ScalarMult","ScalarMult","",$funcType([Q,Q,P],[Q,Q],false),0]];T.methods=[["Add","Add","",$funcType([Q,Q,Q,Q],[Q,Q],false),0],["Double","Double","",$funcType([Q,Q],[Q,Q],false),0],["IsOnCurve","IsOnCurve","",$funcType([Q,Q],[$Bool],false),0],["Params","Params","",$funcType([],[S],false),0],["ScalarBaseMult","ScalarBaseMult","",$funcType([P],[Q,Q],false),0],["ScalarMult","ScalarMult","",$funcType([Q,Q,P],[Q,Q],false),0]];F.init([["Curve","","",B.Curve,""],["X","X","",Q,""],["Y","Y","",Q,""]]);crypto/ecdsa.PublicKey$crypto/ecdsa:*crypto/ecdsa.PublicKey)crypto/ecdsa:*crypto/elliptic.CurveParamscrypto/ecdsa:*math/big.Intcrypto/ecdsa:[]bytecrypto/elliptic.Curvecrypto/elliptic.CurveParams G��G=$pkg.PrivateKey=$newType(0,$kindStruct,"ecdsa.PrivateKey","PrivateKey","crypto/ecdsa",function(PublicKey_,D_){this.$val=this;this.PublicKey=PublicKey_!==undefined?PublicKey_:new F.Ptr();this.D=D_!==undefined?D_:Q.nil;});��G.methods=[["Add","Add","",$funcType([Q,Q,Q,Q],[Q,Q],false),0],["Double","Double","",$funcType([Q,Q],[Q,Q],false),0],["IsOnCurve","IsOnCurve","",$funcType([Q,Q],[$Bool],false),0],["Params","Params","",$funcType([],[S],false),0],["ScalarBaseMult","ScalarBaseMult","",$funcType([P],[Q,Q],false),0],["ScalarMult","ScalarMult","",$funcType([Q,Q,P],[Q,Q],false),0]];R.methods=[["Add","Add","",$funcType([Q,Q,Q,Q],[Q,Q],false),0],["Double","Double","",$funcType([Q,Q],[Q,Q],false),0],["IsOnCurve","IsOnCurve","",$funcType([Q,Q],[$Bool],false),0],["Params","Params","",$funcType([],[S],false),0],["Public","Public","",$funcType([],[A.PublicKey],false),-1],["ScalarBaseMult","ScalarBaseMult","",$funcType([P],[Q,Q],false),0],["ScalarMult","ScalarMult","",$funcType([Q,Q,P],[Q,Q],false),0],["Sign","Sign","",$funcType([D.Reader,P,A.SignerOpts],[P,$error],false),-1]];G.init([["PublicKey","","",F,""],["D","D","",Q,""]]);crypto/ecdsa.PrivateKeycrypto.PublicKeycrypto.SignerOptscrypto/ecdsa.PublicKey%crypto/ecdsa:*crypto/ecdsa.PrivateKey)crypto/ecdsa:*crypto/elliptic.CurveParamscrypto/ecdsa:*math/big.Intcrypto/ecdsa:[]byte	io.Reader H��H=$pkg.ecdsaSignature=$newType(0,$kindStruct,"ecdsa.ecdsaSignature","ecdsaSignature","crypto/ecdsa",function(R_,S_){this.$val=this;this.R=R_!==undefined?R_:Q.nil;this.S=S_!==undefined?S_:Q.nil;});.H.init([["R","R","",Q,""],["S","S","",Q,""]]);crypto/ecdsa.ecdsaSignaturecrypto/ecdsa:*math/big.Int Icrypto/ecdsa.one 1    I=new E.Int.Ptr().SetInt64(new $Int64(0,1));crypto/ecdsa.onemath/big.Int !(*crypto/ecdsa.PrivateKey).Public��G.Ptr.prototype.Public=function(){var a;  _a=this;  �return a.PublicKey;    };G.prototype.Public=function(){return this.$val.Public();};crypto/ecdsa.PrivateKeycrypto/ecdsa.PrivateKey (*crypto/ecdsa.PrivateKey).Sign�>G.Ptr.prototype.Sign=function(a,b,c){var d,e,f,g,h,i;  �d=this;  �e=N(a,d,b);f=e[0];g=e[1];h=e[2];  "    if(!($interfaceIsEqual(h,$ifaceNil))){  4return[P.nil,h];    }  Ireturn C.Marshal((i=new H.Ptr(f,g),new i.constructor.Struct(i)));    };G.prototype.Sign=function(a,b,c){return this.$val.Sign(a,b,c);};crypto/ecdsa.PrivateKeycrypto/ecdsa.PrivateKeycrypto/ecdsa.ecdsaSignaturecrypto/ecdsa:[]byteencoding/asn1.Marshal crypto/ecdsa.randFieldElementJ��J=function(a,b){var c=Q.nil,d=$ifaceNil,e,f,g,h,i;  oe=a.Params();  �g=P.make(((f=e.BitSize/8,(f===f&&f!==1/0&&f!==-1/0)?f>>0:$throwRuntimeError("integer divide by zero"))+8>>0));  �h=D.ReadFull(b,g);d=h[1];  �    if(!($interfaceIsEqual(d,$ifaceNil))){  �return[c,d];    }  �c=new E.Int.Ptr().SetBytes(g);  i=new E.Int.Ptr().Sub(e.N,I);  -c.Mod(c,i);  :c.Add(c,I);  Ireturn[c,d];    };crypto/ecdsa.randFieldElementcrypto/ecdsa.onecrypto/ecdsa:*math/big.Intcrypto/ecdsa:[]byteio.ReadFullmath/big.Int crypto/ecdsa.GenerateKeyK�:K=$pkg.GenerateKey=function(a,b){var c=R.nil,d=$ifaceNil,e,f,g;  �e=J(a,b);f=e[0];d=e[1];      if(!($interfaceIsEqual(d,$ifaceNil))){  return[c,d];    }  "c=new G.Ptr();  :c.PublicKey.Curve=a;  Tc.D=f;  `g=a.ScalarBaseMult(f.Bytes());c.PublicKey.X=g[0];c.PublicKey.Y=g[1];  �return[c,d];    };crypto/ecdsa.GenerateKeycrypto/ecdsa.PrivateKeycrypto/ecdsa.randFieldElement%crypto/ecdsa:*crypto/ecdsa.PrivateKey crypto/ecdsa.hashToIntL�[L=function(a,b){var c,d,e,f,g;  
c=b.Params().N.BitLen();  
�e=(d=((c+7>>0))/8,(d===d&&d!==1/0&&d!==-1/0)?d>>0:$throwRuntimeError("integer divide by zero"));  
�    if(a.$length>e){  
�a=$subslice(a,0,e);    }  f=new E.Int.Ptr().SetBytes(a);  &g=(a.$length*8>>0)-c>>0;  I    if(g>0){  [f.Rsh(f,(g>>>0));    }  zreturn f;    };crypto/ecdsa.hashToIntmath/big.Int crypto/ecdsa.fermatInverseM��M=function(a,b){var c,d;  �c=E.NewInt(new $Int64(0,2));  �d=new E.Int.Ptr().Sub(b,c);  �return new E.Int.Ptr().Exp(a,d,b);    };crypto/ecdsa.fermatInversemath/big.Intmath/big.NewInt crypto/ecdsa.SignN�qN=$pkg.Sign=function(a,b,c){var d=Q.nil,e=Q.nil,f=$ifaceNil,g,h,i,j,k,l,m,n,o;  �g=b.PublicKey.Curve;  �h=g.Params().N;  �  �i=Q.nil;j=Q.nil;k=i;l=j;  �while(true){  �while(true){  �m=J(g,a);k=m[0];f=m[1];       if(!($interfaceIsEqual(f,$ifaceNil))){  d=Q.nil;   return[d,e,f];    }  0l=M(k,h);  Nn=b.PublicKey.Curve.ScalarBaseMult(k.Bytes());d=n[0];  }d.Mod(d,h);  �    if(!((d.Sign()===0))){  �break;    }    }  �o=L(c,g);  �e=new E.Int.Ptr().Mul(b.D,d);  �e.Add(e,o);  �e.Mul(e,l);  e.Mod(e,h);      if(!((e.Sign()===0))){  4break;    }    }  Creturn[d,e,f];    };crypto/ecdsa.Signcrypto/ecdsa.fermatInversecrypto/ecdsa.hashToIntcrypto/ecdsa.randFieldElementcrypto/ecdsa:*math/big.Intmath/big.Int crypto/ecdsa.VerifyO�aO=$pkg.Verify=function(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;  )e=a.Curve;  9f=e.Params().N;  M    if((c.Sign()===0)||(d.Sign()===0)){  sreturn false;    }  �    if(c.Cmp(f)>=0||d.Cmp(f)>=0){  �return false;    }  �g=L(b,e);  �h=new E.Int.Ptr().ModInverse(d,f);  �i=g.Mul(g,h);  i.Mod(i,f);  j=h.Mul(c,h);  .j.Mod(j,f);  >k=e.ScalarBaseMult(i.Bytes());l=k[0];m=k[1];  fn=e.ScalarMult(a.X,a.Y,j.Bytes());o=n[0];p=n[1];  �q=e.Add(l,m,o,p);r=q[0];s=q[1];  �    if((r.Sign()===0)&&(s.Sign()===0)){  �return false;    }  �r.Mod(r,f);  �return r.Cmp(c)===0;    };crypto/ecdsa.Verifycrypto/ecdsa.hashToIntmath/big.Int ��{"Base":4883,"Files":[{"Name":"/usr/local/go/src/crypto/ecdsa/ecdsa.go","Base":1,"Size":4881,"Lines":[0,55,109,159,160,239,265,279,280,295,350,396,420,476,477,486,496,515,532,538,550,552,553,598,622,638,653,655,656,702,727,738,750,752,753,782,797,799,800,856,908,932,934,935,1009,1087,1164,1177,1276,1312,1329,1347,1350,1351,1394,1396,1397,1432,1433,1512,1563,1645,1667,1706,1737,1754,1763,1766,1767,1797,1835,1848,1863,1871,1873,1874,1930,2013,2050,2067,2076,2079,2080,2104,2130,2142,2208,2216,2218,2219,2296,2371,2449,2524,2601,2628,2685,2721,2756,2785,2812,2815,2816,2852,2887,2904,2933,2936,2948,2950,2951,3028,3106,3177,3215,3260,3282,3319,3359,3361,3362,3442,3520,3599,3608,3694,3714,3741,3760,3761,3783,3790,3798,3836,3855,3867,3878,3883,3884,3914,3961,3976,3998,4008,4013,4017,4018,4044,4078,4092,4109,4123,4144,4153,4157,4160,4161,4169,4171,4172,4252,4308,4371,4391,4407,4426,4427,4464,4479,4482,4519,4534,4537,4562,4598,4599,4618,4633,4652,4667,4668,4708,4758,4789,4826,4841,4844,4857,4879],"Infos":null}]}
 