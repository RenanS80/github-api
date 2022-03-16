import './styles.css';

type Props = {
    text: string;
}

function Button({ text }: Props){
    return(
        <div>
            <a href="link" className="btn btn-primary btn-custom" role="button">{text}</a>
        </div>
    );
}

export default Button;