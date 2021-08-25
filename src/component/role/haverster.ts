export default class Havster extends Role {
  public run(): boolean | void {
    /**
     * 判断该角色存储能量
     */
    if (this.creep.store.getFreeCapacity() == this.creep.store.getCapacity()) {
      this.goHarvest(this.creep);
    }
  }
  goHarvest(creep: Creep) {
    throw new Error("Function not implemented.");
  }
}
