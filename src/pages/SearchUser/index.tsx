import Button from '../../components/Button';
import ResultCard from '../../components/ResultCard';
import './styles.css';

function SearchUser() {
    return (
        <>
            <main>
                <div className="container bg-secondary">
                    <div className="search-inside-container">
                        <div className="search-title">
                            <h2>Encontre um perfil GitHub</h2>
                        </div>

                        <form>
                            <input type="text" placeholder="Usuário GitHub" />
                            <Button text="Encontrar" />
                        </form>
                    </div>
                </div>
            </main>

            <ResultCard />
        </>
    );
}

export default SearchUser;