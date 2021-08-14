import { Switch, Route } from "react-router-dom";


import HomeView from "./views/Home.view";
import FavoritesView from "./views/Favorites.view";


export function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/favorites" component={FavoritesView} />
        </Switch>
    )
}