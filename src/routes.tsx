import { Switch, Route } from "react-router-dom";


import Home from "./pages/Home";
import Favorites from "./pages/Favorites";


export function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/favorites" component={Favorites} />

        </Switch>
    )
}