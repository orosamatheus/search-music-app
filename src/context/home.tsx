import {useState, createContext, useEffect} from 'react';
import { 
    ProviderProps, 
    HomeContextProps, 
    IChartsProps,
    ITracksProps,
    IAlbumsProps,
    IArtistsProps
 } from './types'

import { api } from "../services/api"
import { addFavorite, removeFavorite } from "../store/actions/favoritesActions"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducers';

const Context = createContext({} as HomeContextProps);



function HomeProvider({children}: ProviderProps){
//redux reducers call
    const dispatch = useDispatch();
    const favorites: any = useSelector((state: RootState) => state.Favorites)



//states
    const [charts, setCharts] = useState<Array<IChartsProps>>([]);
    const [tracks, setTracks] = useState<Array<ITracksProps>>([]);
    const [albums, setAlbums] = useState<Array<IAlbumsProps>>([]);
    const [artists, setArtists] = useState<Array<IArtistsProps>>([]);
    const [index, setIndex] = useState(0);
    const [limit, ] = useState(8);
    const [option, setOption] = useState("Charts");
    const [query, setQuery] = useState("a");
//getting data
    useEffect(() => {
        async function getCharts() {
            const response = await api.get(`chart/0/tracks?index=${index}&limit=${limit}`)
            setCharts(response.data.data);
        }
        getCharts()
        getTracks()
        getArtists()
        getAlbums()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index, limit])
 
    async function getTracks(){
        const response = await api.get(`https://api.deezer.com/search/track?q=${query}&index=${index}&limit=${limit}`)
        setTracks(response.data.data);
    }
    async function getAlbums(){
        const response = await api.get(`https://api.deezer.com/search/album?q=${query}&index=${index}&limit=${limit}`)
        setAlbums(response.data.data);
    }
    async function getArtists(){
        const response = await api.get(`https://api.deezer.com/search/artist?q=${query}&index=${index}&limit=${limit}`)
        setArtists(response.data.data);
    }
//favorites
    function handleLike(favorite: any) {
        if(favorites.favorites.find((f: any) => f.id  === favorite.id)){
            return alert("Esta musica já foi favoritada!")
        } else {
            dispatch(addFavorite(favorite))
            alert("Favoritado")
        }
    }
    
    function handleUnlike(favorite: any){
        dispatch(removeFavorite(favorite))
        alert("Desfavoritado")

    }
//pagination
    function handleNextPage() {
        setIndex(index+8);
        console.log(index)
        window.scrollTo(0, 0);
        
    }
    
    function handlePreviousPage() {
        setIndex(index-8);
        console.log(index)
        window.scrollTo(0, 0);
    }
//submit
    function handleSubmit(e: any){
        e.preventDefault();
        console.log(option)
        setIndex(0)

        if(option==="Título"){
            getTracks();
        }
        if(option==="Artista"){
            getArtists();
        }
        if(option==="Álbum"){
            getAlbums();
        }
    }


    return(
        <Context.Provider value= {{ 
        charts,
        tracks, setTracks, getTracks,
        albums, setAlbums, getAlbums,
        artists, setArtists, getArtists,
        handleLike, handleUnlike,
        handleNextPage, handlePreviousPage, 
        option, setOption,
        query, setQuery,
        index,
        handleSubmit
        }}
        >
        {children}
        </Context.Provider>
    )
}

export {Context, HomeProvider} 