import { useState } from "react";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";
import { useResultadoSorteio } from "../../state/hooks/useResultadoSorteio";

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
        <section>
            <form onSubmit={sortear}>
                <select 
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
                <button>Sortear</button>
            </form>
            {amigoSecreto && <p role='alert'>{amigoSecreto}</p>}
        </section>
    )
}

export default Sorteio;