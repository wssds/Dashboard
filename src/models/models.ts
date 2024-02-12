export interface Posts {
    userId: number;
    id: number;
    body: string;
    title: string;
}

export interface ToDo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}