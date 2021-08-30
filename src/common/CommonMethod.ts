/**
 * 角色工作公共方法
 */
export class CommonMethod {
  /**
   * 暂时放的Spawn名字
   */
  public static SpawnOfMy = "buibui-1";
  /**
   * 自定义移动
   * @param creep
   * @param target
   * @returns CreepMoveReturnCode
   */
  public static moveToTarget(
    creep: Creep,
    target: RoomPosition | { pos: RoomPosition }
  ): CreepMoveReturnCode | ERR_NO_PATH | ERR_INVALID_TARGET | ERR_NOT_FOUND {
    return creep.moveTo(target, {
      reusePath: 6,
      visualizePathStyle: { fill: "#4e6ef2", lineStyle: "dotted" }
    });
  }
  /**
   *
   * 获取资源id
   * @param creep
   * @returns Source
   */
  public static getSource(creep: Creep): Source | null {
    let source: Source | null = null;
    if (creep.memory.sourceId) {
      source = Game.getObjectById<Source>(creep.memory.sourceId);
    } else {
      creep.memory.sourceId = creep?.pos?.findClosestByRange(FIND_SOURCES)?.id;
      source = Game.getObjectById<Source>(creep.memory.sourceId ?? "");
    }
    return source;
  }
  /**
   * 传送energy
   * @param creep
   *
   */
  public static goTransfer(creep: Creep, structure: Structure): void {
    const code = CommonMethod.moveToTarget(creep, structure);
    if (code === OK) {
      creep.transfer(structure, RESOURCE_ENERGY);
    }
  }
  /**
   * build建筑
   * @param creep
   * @param structure 需要buil的建筑
   */
  public static buildTarget(creep: Creep, structure: ConstructionSite): void {
    const code = CommonMethod.moveToTarget(creep, structure);
    if (code === OK) {
      creep.build(structure);
    }
  }
  /**
   * harvest energy
   * @param creep
   * @param source
   */
  public static haverstSource(creep: Creep, source: Source): void {
    const code = CommonMethod.moveToTarget(creep, source);
    if (code === OK) {
      creep.harvest(source);
    }
  }
  /**
   * 是否在container准备好
   * @param creep
   * @returns
   */
  public static goContainer(creep: Creep, source?: Source): boolean {
    if (creep.memory.targetId) {
      return CommonMethod.isContainer(creep);
    } else if (source) {
      // 先尝试获取 container
      const containers = source.pos.findInRange<StructureContainer>(FIND_STRUCTURES, 1, {
        filter: s => s.structureType === STRUCTURE_CONTAINER
      });
      // 找到了就把 container 当做目标
      if (containers.length > 0) {
        creep.memory.targetId = containers[0].id;
        if (creep.memory.targetId) {
          return CommonMethod.isContainer(creep);
        }
      }
    }
    return false;
  }
  /**
   * 判断creep是否已经在Container就位
   * @param creep
   * @returns true creep已经在Container就位
   */
  private static isContainer(creep: Creep): boolean {
    const containerOfMy = Game.getObjectById<StructureContainer>(creep.memory.targetId ?? "");
    if (containerOfMy) {
      const code = CommonMethod.moveToTarget(creep, containerOfMy);
      if (code === OK) {
        const range = containerOfMy instanceof Source ? 1 : 0;
        if (creep.pos.inRangeTo(containerOfMy.pos, range)) return true;
      }
    }
    return false;
  }
}
