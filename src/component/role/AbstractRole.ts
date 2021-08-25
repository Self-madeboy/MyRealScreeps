abstract class Role {
  public creep: Creep;
    public constructor(creep: Creep) { this.creep = creep }
    public abstract run():boolean|void;

}
