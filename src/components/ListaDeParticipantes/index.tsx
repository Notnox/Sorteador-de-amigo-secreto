import { IParticipante } from '../../interfaces/IParticipante';
import { useListaDeParticipantes } from '../../state/hooks/useListaDeParticipantes';
import styles from './ListaDeParticipantes.module.scss';

const ListaDeParticipantes = () => {
    const listaDeParticipantes: IParticipante[] = useListaDeParticipantes();

    return (
        <ul className={styles.participantes}>
            {listaDeParticipantes?.map((participante, index) => (
                <li key={index} className={styles.participantes__label}>
                    {participante.nome}
                </li>
            ))}
        </ul>
    )
}

export default ListaDeParticipantes;