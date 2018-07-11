export class Base {

  public id: any;
  public created_at: Date;
  public updated_at: Date;

  private _type: string;

  public get type(): string { return this.className().underscore(); }
  public set type(_: string) { this._type = this.className().underscore(); } // não funciona quando minificado :(


  constructor(params?: any) {
    if (params) {  this.setParams(params); }
    this.type = this.className().underscore();
    this.created_at = (this.created_at !== undefined ? new Date(this.created_at) : new Date());
    this.updated_at = (this.updated_at !== undefined ? new Date(this.updated_at) : new Date());
  }

  setParams(params: any): void {
    for (const [key, value] of Object.entries(params)) {
      this[key] = value;
    }
  }

  inspect(): void {
    for (const [key, value] of Object.entries(this)) {
      console.log(key, value);
    }
  }

  className(): string {
    return this.constructor.name;
  }

  isInstanceOf(klass: any): boolean {
    const instance = new klass();
    return this.constructor === instance.constructor;
  }

  isA(klass: string): boolean {
    return this.constructor.name === klass;
  }

}
