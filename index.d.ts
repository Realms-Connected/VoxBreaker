import Signal from "@rbxts/signal";

interface Voxel extends Part {}

interface MoveableHitbox
{
    Part: Part;
    Touched: Signal<(baseParts: BasePart[]) => void>;

    Start(): void;
    Stop(): void;
    Destroy(): void;
    GetTouchingParts(part?: BasePart): BasePart[];
    WeldTo(to: BasePart): void;
    UnWeld(): void;
}

interface VoxBreakerSettings
{
    TagName: string;
    RandomColors: boolean;
    Visualizer: boolean;
    minimumCubeSize: number;
    voxelFolder: Instance;
    AutoStartMoveable: boolean;
    PartCacheEnabled: boolean;
}

interface VoxBreaker
{
    VoxBreakerSettings: VoxBreakerSettings;

    VoxelizePart(partToVoxelize: Part, minimumVoxelSize?: number, timeToReset?: number): Voxel[];

    CreateHitbox(
        hitboxSize?: Vector3,
        hitboxCoordinate?: CFrame,
        hitboxShape?: Enum.PartType | MeshPart,
        minimumVoxelSize?: number | "Relative",
        voxelResetTime?: number,
        queryParameters?: OverlapParams,
    ): Voxel[];

    CreateMoveableHitbox: (
        minimumVoxelSize?: number | "Relative",
        voxelResetTime?: number,
        hitboxSize?: Vector3,
        hitboxCoordinate?: CFrame,
        hitboxShape?: Enum.PartType | MeshPart,
        queryParameters?: OverlapParams,
    ) => MoveableHitbox;

    CutInHalf(partToCut: Part, timeToReset?: number): [Part, Part];

    Divide(
        part: Part,
        minimumVoxelSize?: number,
        parent?: Instance,
        timeToReset?: number,
    ): Part[];

    ReturnPart(part: Part): void;
}

declare const VoxBreaker: VoxBreaker;
export = VoxBreaker;
