import './styles.css';
import { ReactComponent as Linkedin } from '../../assets/images/linkedin.svg';
import { ReactComponent as Github } from '../../assets/images/github.svg';


function Footer() {
    return (
        <footer className="bg-secondary">
            <div className="container">
                <div className="footer-credit">
                    <p>@ 2022 - Renan Soares</p>
                </div>

                <div className="contact">
                    <a href="https://www.linkedin.com/in/renansoaresf/" className="linkedin" target="_blank" rel="noreferrer">
                        <Linkedin />
                    </a>
                    <a href="https://github.com/renans80" target="_blank" rel="noreferrer">
                        <Github />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;