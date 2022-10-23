//import { utf8ToBytes } from 'micro-stacks/common';
//import { hashRipemd160 } from 'micro-stacks/crypto';
//import { hashSha256 } from 'micro-stacks/crypto-sha';
import { namespaceContracts } from '../integration/stacksnode/client';
//import { whiteListedNames } from './whiteListedNames';

//export const DOMAIN_MIN_LENGTH = 3;
//export const DOMAIN_MAX_LENGTH = 32;
//export const DOMAIN_CHARACTER_REGEX = /[^0-9a-z_+-]/;

//export function filter(domain: string) {
//  return domain
//    .replace(DOMAIN_CHARACTER_REGEX, '')
//    .substring(0, DOMAIN_MAX_LENGTH);//
//}

export function isSupportedNamespace(namespace: string) {
  return Object.hasOwn(namespaceContracts, namespace);
}

//export function addSaltAndhash160(string: string, salt: string) {
//  return hashRipemd160(hashSha256(utf8ToBytes(`${string}${salt}`)));
//}

//export function whiteListed(name: string, namespace: string) {
//  return (
//    !whiteListedNames[namespace] ||
//    whiteListedNames[namespace].indexOf(name) >= 0
//  );
//}
