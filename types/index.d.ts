interface Same {
    name: string;
    id: number;
}
export interface Person<S extends Same> {
    iden: string;
    same: S;
}
export {};
