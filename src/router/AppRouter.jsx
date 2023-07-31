import {Route, Routes} from 'react-router-dom'
import { NavBar } from '../navBar/navBar';
import { WhoIAm } from '../presentation/WhoIAm';
import { MyProyects } from '../myProjects/MyProyects';

export const AppRouter = () => {
    return ( 
        
        <>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<WhoIAm/>}/>
                    <Route path="/myProyects" element={<MyProyects/>}/>
                </Routes>
           
        </>
     );
}
 