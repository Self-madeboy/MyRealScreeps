interface BaseRoles {
  /**
   * 角色身体部件
   */
   baseBody: Array<BodyPartConstant>
  /**
   * 角色
   */
   creep: Creep;
  /**
   *
   * 角色构造函数,该函数完成角色初始化功能
   * @param creep 需要初始化的角色
   */
  // public constructor(creep: Creep) {
  //   this.creep = creep;
  // }
  /**
   * 角色行为
   */
    run(): void;
}
