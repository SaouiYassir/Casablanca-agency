import { Link } from "react-router-dom";
import "./NotFound.css";


function NotFound() {

    return (

        <main className="not-found">

            <div className="not-found-content">


                <div className="not-found-icon">
                    <i className="bi bi-car-front-fill"></i>
                </div>


                <span className="not-found-label">
                    Erreur 404
                </span>


                <h1>
                    Cette route n'existe pas
                </h1>


                <p>
                    La page que vous recherchez semble avoir disparu.
                    Continuez votre voyage et découvrez nos véhicules disponibles.
                </p>


                <div className="not-found-actions">

                    <Link 
                        to="/"
                        className="btn-primary"
                    >
                        Retour à l'accueil
                    </Link>


                    <Link 
                        to="/vehicules"
                        className="btn-secondary"
                    >
                        Voir les véhicules
                    </Link>

                </div>


            </div>


            <div className="not-found-number">
                404
            </div>


        </main>

    )
}


export default NotFound;