

export class DirectoryEntry {
    constructor(public label: string, public value: string) {}
}

export class Directory {
    public name:string;
    public entries:Array<DirectoryEntry> = new Array<DirectoryEntry>();
}