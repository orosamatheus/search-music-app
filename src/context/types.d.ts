export interface ProviderProps {
    children: React.ReactElement
}

export interface HomeContextProps{
    charts: any;
    tracks: any;
    setTracks: any;
    getTracks: any;
    albums: any;
    setAlbums: any;
    getAlbums: any;
    artists: any;
    setArtists: any;
    getArtists: any;
    handleLike: any;
    handleUnlike: any;
    handleNextPage: any;
    handlePreviousPage: any;
    option: string;
    setOption: any;
    query: string;
    setQuery: any;
    index: number;
    handleSubmit: any;
}

