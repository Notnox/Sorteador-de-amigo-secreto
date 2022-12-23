import styles from './Formulario.module.scss';
import { AiOutlineUserAdd } from 'react-icons/ai'
import { useRef, useState } from 'react';
import { useAdicionarParticipante } from '../../state/hooks/useAdicionaParticipante';
import { useMensagemDeErro } from '../../state/hooks/useMensagemDeErro';
import Paper from '../Paper';
import { IParticipante } from '../../interfaces/IParticipante';

const participante = {
    "nome" : ''
}

const Formulario: React.FC = () => {
    const [nome, setNome] = useState<IParticipante>(participante);
    const adicionaParticipante = useAdicionarParticipante();
    const inputRef = useRef<HTMLInputElement>(null);
    const mensagemDeErro = useMensagemDeErro();

    const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        adicionaParticipante(nome);
        setNome(participante);
        inputRef.current?.focus();
    }

    return (
        <Paper>
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
                            value={nome.nome}
                            onChange={evento => setNome({...nome, 'nome': evento.target.value})}
                            required
                            />
                    </div>
                    <button 
                        className={styles.form__cadastro__botao}
                        disabled={!nome.nome}
                        role='Adicionar'
                        >
                        Adicionar
                    </button>
                </div>
            </form>
        </Paper>
    )
}

export default Formulario;