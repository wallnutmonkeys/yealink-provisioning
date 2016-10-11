import { DssLineKey, DssBlfKey, DssKey } from './dss-key';
import { Account } from './account';
import { Directory } from './directory';

export class PhoneConfig {
    public mac:string;
    public accounts:Array<Account> = new Array<Account>();
    public dssKeys:Array<DssKey> = new Array<DssKey>();
    public directories:Array<Directory> = new Array<Directory>();
}