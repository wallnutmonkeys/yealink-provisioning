import { Component } from '@angular/core';

import { Account } from './account';
import { DssLineKey, DssBlfKey, DssKey } from './dss-key';

@Component({
    moduleId: module.id,
    selector: 't46g-keys',
    templateUrl : 't46g-keys.component.html',
    styleUrls: ['t46g-keys.component.css']
})
export class T46gKeysComponent {

    public accounts:Array<Account> = new Array<Account>();
    public dssKeys:Array<DssKey> = new Array<DssKey>();

    constructor() {

        this.initDummyData();
    }

    private initDummyData(): void {

        this.accounts.push(new Account("118", "u010118", "asdkEkld", "vgw8.ubity.com"));
        this.accounts.push(new Account("136", "u010136", "kjtytlker", "vgw8.ubity.com"));

        this.dssKeys.push(new DssLineKey(this.accounts[0]));
        this.dssKeys.push(new DssLineKey(this.accounts[0]));
        this.dssKeys.push(new DssLineKey(this.accounts[1]));
        this.dssKeys.push(new DssLineKey(this.accounts[1]));

        this.dssKeys.push(new DssBlfKey("116", "Benoit Duverger"));
        this.dssKeys.push(new DssBlfKey("117", "Christophe Catherine"));
        this.dssKeys.push(new DssBlfKey("116", "Daniel Guertin"));
        this.dssKeys.push(new DssBlfKey("105", "Sebastien Couture"));
        this.dssKeys.push(new DssBlfKey("115", "Jinkui"));
        this.dssKeys.push(new DssBlfKey("109", "Victor"));
        
    }

}