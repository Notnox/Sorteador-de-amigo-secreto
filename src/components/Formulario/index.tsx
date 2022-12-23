import styles from './Formulario.module.scss';
import { AiOutlineUserAdd, AiOutlinePlayCircle } from 'react-icons/ai'
import {ReactComponent as Logo} from '../../assets/img/logo.svg';
import {ReactComponent as Menina} from '../../assets/img/menina.svg';
import {ReactComponent as Sacola} from '../../assets/img/sacolas.svg';
import { useRef, useState } from 'react';
import { useAdicionarParticipante } from '../../state/hooks/useAdicionaParticipante';
import { useMensagemDeErro } from '../../state/hooks/useMensagemDeErro';
import ListaDeParticipantes from '../ListaDeParticipantes';
import { IParticipante } from '../../interfaces/IParticipante';

const Formulario: React.FC = () => {
    const [nome, setNome] = useState<string>('');
    const adicionaParticipante = useAdicionarParticipante();
    const inputRef = useRef<HTMLInputElement>(null);
    const mensagemDeErro = useMensagemDeErro();

    const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        adicionaParticipante(nome);
        setNome('');
        inputRef.current?.focus();
    }

  
    return (
        <div className={styles.paper}>
            <Logo className={styles.paper__logo}/>
            <Menina className={styles.paper__menina}/>
            <div className={styles.paper__form}>
                <form className={styles.form} onSubmit={adicionarParticipante}>
                    <h1 className={styles.form__titulo}>Vamos começar</h1>
                    <div className={styles.form__cadastro}>
                        <div className={styles.form__cadastro__box} >
                            {mensagemDeErro && 
                            <p 
                                className={styles.form__cadastro__box__error}
                                role='alert'
                            >
                                {mensagemDeErro}
                            </p>}
                            <AiOutlineUserAdd size={20}/>
                            <input 
                                ref={inputRef}
                                className={styles.form__cadastro__input}
                                placeholder="Insira os nomes dos participantes"
                                value={nome}
                                onChange={evento => setNome(evento.target.value)}
                                required
                                />
                        </div>
                        <button 
                            className={styles.form__cadastro__botao}
                            disabled={!nome}
                            role='Adicionar'
                            >
                            Adicionar
                        </button>
                    </div>
                    <ListaDeParticipantes />
                    <div className={styles.form__iniciar}>
                        <button type='button' className={styles.form__iniciar__botao}>
                            <AiOutlinePlayCircle size={40}/>
                            <label className={styles.form__iniciar__label}>
                                Iniciar brincadeira
                            </label>
                        </button>
                        <Sacola />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Formulario;