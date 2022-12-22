import { useRecoilValue, useSetRecoilState } from "recoil"
import { erroState, listaParticipantesState } from "../atom"

export const useAdicionarParticipante = () => {
    const setLista = useSetRecoilState<string[]>(listaParticipantesState);
    const lista = useRecoilValue<string[]>(listaParticipantesState);
    const setErro = useSetRecoilState<string>(erroState);
    return (nomeDoParticipante: string) => {
        if (lista.includes(nomeDoParticipante)) {
            setErro('Nomes duplicados não são permitidos!');
            setTimeout(() => {
                setErro('');
            }, 5000)
            return;
        }
        return setLista(listaAtual => [...listaAtual, nomeDoParticipante]);
    }
}
