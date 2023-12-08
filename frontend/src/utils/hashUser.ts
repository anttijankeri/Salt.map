import { SHA256, enc } from "crypto-js";

function hashUser(user: string) {
  const hash = SHA256(user);
  return hash.toString(enc.Hex);
}

export default hashUser;
