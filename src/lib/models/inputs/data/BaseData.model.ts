export class BaseData {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }
    
    setName(name: string) {
        this.name = name;
    }
}