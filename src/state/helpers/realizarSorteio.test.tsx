import React from "react";
import { IParticipante } from "../../interfaces/IParticipante";
import { realizarSorteio } from "./realizarSorteio";

describe('dado um sorteio de amigo secreto', () => {
    test('cada participante nao sorteie o proprio nome', () => {
        const participantes: IParticipante[] = [
            {"nome": "Roberto"},
            {"nome": "Gislaine"},
            {"nome": "Carlos"},
            {"nome": "Roberta"},
            {"nome": "Eduardo"},
            {"nome": "Lurdes"},
        ];

        const sorteio = realizarSorteio(participantes);
        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante.nome);
            expect(amigoSecreto).not.toEqual(participante.nome);
        })
    })
})