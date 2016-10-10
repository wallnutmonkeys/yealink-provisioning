import { Account } from './account';

export abstract class DssKey {
    
    public abstract getLabel(): string;

}

export class DssLineKey extends DssKey {
    
    constructor(public account:Account) {
        super();
    }

    public getLabel(): string {
        return this.account.label;
    }
}

export class DssBlfKey extends DssKey {
    
    constructor(public target:string,
        public label:string) {
        super();
    }

    public getLabel(): string {
        return this.label;
    }
}
