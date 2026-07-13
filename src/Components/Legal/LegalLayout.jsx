import { Link } from 'react-router-dom'
import './LegalLayout.css'


function LegalLayout({ eyebrow = 'Informations légales', title, updatedDate, intro, sections }) {

    return (

        <main className="legal-page">

            <header className="legal-header">

                <div className="legal-header__eyebrow">
                    <span className="legal-dot" aria-hidden="true"></span>
                    {eyebrow}
                </div>

                <h1>{title}</h1>

                {updatedDate && (
                    <p className="legal-updated">Dernière mise à jour : {updatedDate}</p>
                )}

                {intro && <p className="legal-intro">{intro}</p>}

            </header>


            <div className="legal-body">

                <nav className="legal-toc" aria-label="Sommaire">
                    <span className="legal-toc__label">Sommaire</span>
                    <ol>
                        {sections.map((section, index) => (
                            <li key={section.id}>
                                <a href={`#${section.id}`}>
                                    <span className="legal-toc__index">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    {section.title}
                                </a>
                            </li>
                        ))}
                    </ol>
                </nav>


                <div className="legal-content">
                    {sections.map((section, index) => (
                        <section key={section.id} id={section.id} className="legal-section">

                            <h2>
                                <span className="legal-section__index">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                {section.title}
                            </h2>

                            {section.paragraphs?.map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                            ))}

                            {section.list && (
                                <ul>
                                    {section.list.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                            )}

                        </section>
                    ))}
                </div>

            </div>


            <div className="legal-footer-nav">
                <Link to="/">← Retour à l'accueil</Link>
            </div>

        </main>

    )

}


export default LegalLayout
