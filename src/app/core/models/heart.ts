export class Heart {
  public full: boolean;
  public urlHeartFull: string;
  public urlHeartEmpty: string;

  constructor(valueFull: boolean = false) {
    this.urlHeartFull = '/assets/coracao_cheio.png';
    this.urlHeartEmpty = '/assets/coracao_vazio.png';
    this.full = valueFull;
  }

  public get(): string {
    if (this.full) { return this.urlHeartFull; } else { return this.urlHeartEmpty; }
  }
}
