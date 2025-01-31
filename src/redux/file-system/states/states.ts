export type fileSystemStateChild = Array<string>;



export interface fileSystemStateNode {
    readonly id: string,
    readonly name: string,
    readonly kind: "file" | "directory",
    readonly children?: fileSystemStateChild,
}

export interface fileSystemStateTable {
    readonly [nodeId: string]: fileSystemStateNode,
}


export interface fileSystemState {
    readonly fileSystemState?: fileSystemStateTable,
    readonly rootId: string,
}

export interface fileState{
    readonly id:string;
    readonly name:string;
    readonly content:string;
    readonly type : "new" | "standalone" | "folder" ; 

}

export interface editorState {
    readonly editorState: Array<fileState>; //[id,content]
    readonly currentId: string|null;
}


export interface stateType extends fileSystemState,editorState {

}

