export interface Project {
    id: string;
    title: string;
    url: string;
    giturl?: string;
    date?: string;
    tags?: string[];
    description?: string;
}
