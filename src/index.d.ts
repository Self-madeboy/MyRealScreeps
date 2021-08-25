interface CreepMemory {
  sourceId: Id<Source>;
  role: string;
  room: string;
  working: boolean;
}
type BodyAutoConfigConstant =
  | "harvester"
  | "worker"
  | "upgrader"
  | "manager"
  | "processor"
  | "reserver"
  | "attacker"
  | "healer"
  | "dismantler"
  | "remoteHarvester";
