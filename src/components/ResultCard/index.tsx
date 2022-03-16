import './styles.css';

function ResultCard() {
    return (
        <section>
            <div className="container bg-light">
                <div className="profile-image">
                    <img src="https://avatars.githubusercontent.com/u/27973894?v=4" className="img-fluid" alt="Imagem de perfil" />
                </div>

                <div className="profile-info-container">
                    <div className="profile-title text-primary">
                        <h5>Informações</h5>
                    </div>

                    <div className="profile-info">
                        <div className="profile-url">
                            <p>Perfil: </p>
                            <span>
                                <a href="https://api.github.com/users/renans80">https://api.github.com/users/renans80</a>
                            </span>
                        </div>

                        <div className="profile-followers">
                            <p>Seguidores: </p>
                            <span>4379</span>
                        </div>

                        <div className="profile-location">
                            <p>Localidade: </p>
                            <span>São Gonçalo</span>
                        </div>

                        <div className="profile-name">
                            <p>Nome: </p>
                            <span>Renan Soares</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ResultCard;