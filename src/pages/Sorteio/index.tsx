import { useState } from "react";
import Paper from "../../components/Paper";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";
import { useResultadoSorteio } from "../../state/hooks/useResultadoSorteio";
import styles from './Sorteio.module.scss';
import { BiDice5 } from 'react-icons/bi'
import {ReactComponent as Aviao} from '../../assets/img/aviao.svg';

const Sorteio: React.FC = () => {

    const listaDeParticipantes = useListaDeParticipantes();
    const [participanteDavez, setParticipanteDavez] = useState<string>('');
    const [amigoSecreto, setAmigoSecreto] = useState<string>('');
    const resultado = useResultadoSorteio();

    const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        if (resultado.has(participanteDavez)) {
            setAmigoSecreto(resultado.get(participanteDavez)!);
        }
    }

    return (
        <Paper>
            <section>
                <form 
                    className={styles.form}
                    onSubmit={sortear}
                >
                    <h1 className={styles.form__titulo}>Quem vai tirar o papelzinho</h1>
                    <select 
                        className={styles.form__select}
                        required
                        name="participanteDavez" 
                        id="participanteDavez"
                        placeholder="Selecione o seu nome"
                        value={participanteDavez}
                        onChange={evento => setParticipanteDavez(evento.target.value)}
                        >
                        {listaDeParticipantes?.map(participante => 
                            <option key={participante.nome}>
                                {participante.nome}
                            </option>
                        )}
                    </select>
                    <p className={styles.form__texto}>Clique em sortear para ver quem é o seu amigo secreto!</p>
                    <button
                        className={styles.form__botao}
                    >
                        <BiDice5 size={30}/>
                        <label className={styles.form__botao__label}>Sortear</label>
                    </button>
                    {amigoSecreto && 
                    <p 
                        role='alert'
                        className={styles.form__sorteado}
                    >
                        {amigoSecreto}
                    </p>}
                    <Aviao />
                </form>
            </section>
        </Paper>
    )
}

export default Sorteio;