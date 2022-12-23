import { useRecoilValue, useSetRecoilState } from "recoil"
import { IParticipante } from "../../interfaces/IParticipante";
import { erroState, listaParticipantesState } from "../atom"

export const useAdicionarParticipante = () => {
    const setLista = useSetRecoilState<IParticipante[]>(listaParticipantesState);
    const lista = useRecoilValue<IParticipante[]>(listaParticipantesState);
    const setErro = useSetRecoilState<string>(erroState);
    return (nomeDoParticipante: IParticipante) => {
        console.log(lista)
        console.log(nomeDoParticipante)
        console.log(lista.filter(nome => nome.nome === nomeDoParticipante.nome))
        if (lista.filter(nome => nome.nome === nomeDoParticipante.nome).length !== 0) {
            setErro('Nomes duplicados não são permitidos!');
            setTimeout(() => {
                setErro('');
            }, 5000)
            return;
        }
        return setLista(listaAtual => [...listaAtual, nomeDoParticipante]);
    }
}
