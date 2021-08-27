export interface ProviderProps {
    children: React.ReactElement
}

interface IMusicProps {
    id: string;
    link: string;
}

export interface IChartsProps extends IMusicProps {
    title: string;
    preview: string;
    cover_medium: string;
    artist: { name: string};
}
export interface ITracksProps extends IMusicProps {
    title: string;
    preview: string;
    album: {cover_medium: string};
    artist: { name: string};
}
export interface IAlbumsProps extends IMusicProps {
    title: string;
    cover_medium: string;
    artist: { name: string};
}
export interface IArtistsProps extends IMusicProps {
    name: string;
    picture_medium: string;
}

export interface HomeContextProps{
    charts: IChartsProps[];
    tracks: ITracksProps[];
    setTracks: React.Dispatch<React.SetStateAction<ITracksProps[]>>;
    getTracks(): Promise<void>;
    albums: IAlbumsProps[];
    setAlbums: React.Dispatch<React.SetStateAction<IAlbumsProps[]>>;
    getAlbums(): Promise<void>;
    artists: IArtistsProps[];
    setArtists: React.Dispatch<React.SetStateAction<IArtistsProps[]>>;
    getArtists(): Promise<void>;
    handleLike(object: any[]): void;
    handleUnlike(object: any[]): void;
    handleNextPage(): void;
    handlePreviousPage(): void;
    option: string;
    setOption: React.Dispatch<React.SetStateAction<string>>;
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    index: number;
    handleSubmit(e: any): void;
}

