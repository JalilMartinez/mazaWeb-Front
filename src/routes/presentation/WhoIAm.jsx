import '../../styles/header.css'
import '../../styles/WhoIAm.css'
import {ListItem} from "../../components/ListItem.jsx";
export const WhoIAm = () => {
    return ( 
        <>
            <header>
                <div className='headerBlock'>
                    <div className="content-header">
                        <div className='name-header'>
                            <h1 className='myName'>Mazatl Martinez</h1>
                            <h2 className='myProfession'>Desarrollador Web</h2>
                            <h6 className='technologies'>ReactJs, Java, Spring Boot.</h6>
                        </div>
                    </div>
                </div>
            </header>
            <main className=''>
                <div className='presentation'>
                    <div className='presentation-description'>
                        <h2 className='title'>Sobre Mi</h2>
                        <hr className='title-underlineBar' size="8px" color="black" />
                        <h5>
                            <div>
                                Soy un apasionado de la programación, la música, los videojuegos y el deporte. 
                                Mi vida se define por tres pilares fundamentales: disciplina, dedicación 
                                y compromiso. Siempre busco dar lo mejor de mí en cualquier situación, 
                                sin importar si es sencilla o compleja.
                            </div>
                            <div>
                                Con determinación y constancia, estoy comprometido a alcanzar mis metas 
                                en cada una de estas áreas. Mi pasión y enfoque me impulsan a aprender y mejorar constantemente.
                            </div>
                        </h5>
                    </div>{/* presentation-description */}
                    <div className='presentation-info'>
                        <div className='info-photo'>
                            <img className='photo' src="../assets/img/myPhoto.png" alt="MyPhoto" />
                        </div>
                        <div className='info-text'>
                            <h2 className='title'>Ingeniero En Comunicaciones y Electrónica</h2>
                            <h5 className='presentation-text'>
                                Empecé mi trayectoria profesional como desarrollador de manera remota en base
                                a la metodologia Scrum Agil, hace 9 meses, la llegada de la pandemia me 
                                llevó a trabajar desde casa y aprender por mi cuenta. Durante todo este tiempo 
                                he trabajado como desarrollador web, utilizando mis conocimientos, pretendo 
                                mejorar mi vida como profesional y seguir aprendiendo, dado que el mundo de 
                                la programación y del desarrollo son ámbitos en los que nunca se termina de aprender.
                                <div className='info-text-details'>
                                    <ListItem title={"Edad"} text="23 Años."/>
                                    <ListItem title={"Ciudad"} text="Ecatepec de Morelos, Mex."/>
                                    <ListItem title={"Grado"} text="Licenciatura."/>
                                    <ListItem title={"Nivel"} text="Junior."/>
                                    <ListItem title={"Lenguaje principal"} text="Java."/>
                                </div>
                            </h5>
                        </div>
                    </div>
                </div>{/*content-body-presentation */}
            </main>{/* content-body */}
            
        </>
     );
}
 