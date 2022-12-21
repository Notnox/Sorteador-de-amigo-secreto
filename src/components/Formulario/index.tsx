import styles from './Formulario.module.scss';
import { AiOutlineUserAdd, AiOutlinePlayCircle } from 'react-icons/ai'
import {ReactComponent as Logo} from '../../assets/img/logo.svg';
import {ReactComponent as Menina} from '../../assets/img/menina.svg';
import {ReactComponent as Sacola} from '../../assets/img/sacolas.svg';

const Formulario = () => {
    const participantes = [{
        "nome": "Lucas"
    },{
        "nome": "Laura"
    },{
        "nome": "Thiago"
    },{
        "nome": "Davi"
    }];
    return (
        <div className={styles.paper}>
            <Logo className={styles.paper__logo}/>
            <Menina className={styles.paper__menina}/>
            <div className={styles.paper__form}>
                <form className={styles.form}>
                    <h1 className={styles.form__titulo}>Vamos começar</h1>
                    <div className={styles.form__cadastro}>
                        <div className={styles.form__cadastro__box} >
                            <AiOutlineUserAdd size={20}/>
                            <input 
                                className={styles.form__cadastro__input}
                                placeholder="Insira os nomes dos participantes"
                                required
                                />
                        </div>
                        <button 
                            className={styles.form__cadastro__botao}
                            disabled
                            type='submit'
                            >
                            Adicionar
                        </button>
                    </div>
                    <div className={styles.form__participantes}>
                        {participantes?.map((participante, index) => (
                            <label key={index} className={styles.form__participantes__label}>
                                {participante.nome}
                            </label>
                        ))}
                    </div>
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