import {ReactComponent as Sacola} from '../../assets/img/sacolas.svg';
import { AiOutlinePlayCircle } from 'react-icons/ai'
import styles from './RodaPe.module.scss';
import { useListaDeParticipantes } from '../../state/hooks/useListaDeParticipantes';
import { useNavigate } from 'react-router-dom';
import { useSorteador } from '../../state/hooks/useSorteador';

const RodaPe = () => {
    const participantes = useListaDeParticipantes();
    const navigatePara = useNavigate();
    const sortear = useSorteador();

    const iniciar = () => {
        sortear();
        navigatePara('/sorteio');
    }
    return (
        <footer className={styles.iniciar}>
            <button 
                className={styles.iniciar__botao}
                disabled={participantes.length < 3}
                onClick={iniciar}
            >
                <AiOutlinePlayCircle size={40}/>
                <label className={styles.iniciar__label}>
                    Iniciar brincadeira
                </label>
            </button>
            <Sacola />
        </footer>
    )
}

export default RodaPe;