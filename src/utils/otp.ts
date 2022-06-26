import topt from 'totp-generator'
import base32Encode from "base32-encode";

const buff = Buffer.from("GlenGlen")
const base32Str = base32Encode(buff, 'RFC3548')
console.log(buff,base32Str)