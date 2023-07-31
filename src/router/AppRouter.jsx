import {Route, Routes} from 'react-router-dom'
import { NavBar } from '../navBar/navBar';
import { WhoIAm } from '../presentation/WhoIAm';
import { MyProyects } from '../myProjects/MyProyects';

export const AppRouter = () => {
    return ( 
        
        <>
                <NavBar/>
                <Routes>
                    <Route path="/mazaWeb-Front" element={<WhoIAm/>}/>
                    <Route path="/mazaWeb-Front/myProyects" element={<MyProyects/>}/>
                </Routes>
           
        </>
     );
}
 