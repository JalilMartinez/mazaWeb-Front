import {Route, Routes} from 'react-router-dom'
import { NavBar } from '../routes/navBar/NavBar';
import { WhoIAm } from '../routes/presentation/WhoIAm';
import {MyProyects} from '../routes/myProjects/MyProyects'
import { Footer } from '../routes/footer/Footer';
export const AppRouter = () => {
    return ( 
        
        <>
            <NavBar/>
            <Routes>
                <Route path="mazaWeb-Front/" element={<WhoIAm/>}/>
                <Route path="mazaWeb-Front/myProyects" element={<MyProyects/>}/>
            </Routes>
            <Footer/>
        </>
     );
}
 