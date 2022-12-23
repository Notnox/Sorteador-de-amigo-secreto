import { useSetRecoilState } from "recoil";
import { resultadoAmigoSecreto } from "../atom";
import { realizarSorteio } from "../helpers/realizarSorteio";
import { useListaDeParticipantes } from "./useListaDeParticipantes"

export const useSorteador = () => {
    const listaDeParticipantes = useListaDeParticipantes();
    const setResultado = useSetRecoilState(resultadoAmigoSecreto);

    return () => {
        const resultado = realizarSorteio(listaDeParticipantes);
        setResultado(resultado);
    }
}