export interface Show {
    show: {
        id: number,
        url: string,
        name: string,
        image: {
            medium: string | null,
        },
    }
}

export interface ShowDetail {
    id: number,
    name: string,
    image: {
        original: string,
    },
    summary: string,
}