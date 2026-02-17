import Signal from "@rbxts/signal";

interface Voxel extends Part {}
interface Hitbox 
{
    Touched: Signal<(baseParts: BasePart[]) => void>,

    Start(): void,

    Stop(): void,

    Destroy(): void,

    GetTouchingParts(): void,

    WeldTo(to: BasePart): void,

    UnWeld(): void,
}

interface MoveableHitbox extends Hitbox
{
    Part: Part,
}

export function VoxelizePart(partToVoxelize: Part, minimumVoxelSize: number, timeToReset: number): Voxel[]

export function CreateMoveableHitbox(
    minimumVoxelSize?: number | "Relative",
    voxelResetTime?: number,
    hitboxSize?: Vector3, 
    hitboxCoordinate?: CFrame, 
    hitboxShape?: Enum.PartType, 
    queryParameters?: OverlapParams
): MoveableHitbox

export function CreateHitbox(
    hitboxSize?: Vector3,
    hitboxCoordinate?: CFrame,
    hitboxShape?: Enum.PartType,
    minimumVoxelSize?: number | "Relative",
    voxelResetTime?: number,
    queryParameters?: OverlapParams,
): Voxel[]

export function CutInHalf(partToCut: Part): [Part, Part]

export const VoxBreakerSettings: {
    // The name of attribute that the module will check parts for.
    TagName: string 
    RandomColors: boolean  // Will make every part a random color. Set this to true if you want a visual representation of how the parts are being divided.
    Visualizer: boolean // Will make hitboxes visible when set to true
    miniumCubeSize: number //Default Minimum possible size that divided cubes can be.
    voxelFolder: Workspace //Where the voxels are stored. Workspace by default.
    AutoStartMoveable: boolean //Toggle this to true if you want your moveable hitboxes to activate automatically without having to use :Start()
    PartCacheEnabled: boolean //Enables PartCache. This significantly improves performance so I reccommend keeping it on. 
}
