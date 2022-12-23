import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";

const Sorteio = () => {

    const listaDeParticipantes = useListaDeParticipantes();

    return (
        <section>
            <form>
                <select name="participanteDavez" id="participanteDavez">
                    {listaDeParticipantes?.map(participante => 
                        <option key={participante.nome}>
                            {participante.nome}
                        </option>
                    )}
                </select>
            </form>
        </section>
    )
}

export default Sorteio;