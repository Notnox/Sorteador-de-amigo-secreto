import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Sorteio from ".";
import { IParticipante } from "../../interfaces/IParticipante";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";

jest.mock('../../state/hooks/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})

describe('na pagina de sorteio', () => {
    const listaDeParticipantes: IParticipante[] = [
        {"nome": 'Lucas'},
        {"nome": 'Guilherme'},
        {"nome": 'Ana'}
    ]
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(listaDeParticipantes);
     });
    test('todos os participantes podem exibir o seu amigo secreto', () => {
        render(<RecoilRoot><Sorteio /></RecoilRoot>)
        const opcoes = screen.queryAllByRole('option');
        expect(opcoes).toHaveLength(listaDeParticipantes.length);
    })
})