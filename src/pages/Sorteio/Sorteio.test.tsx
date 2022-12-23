import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Sorteio from ".";
import { IParticipante } from "../../interfaces/IParticipante";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";
import { useResultadoSorteio } from "../../state/hooks/useResultadoSorteio";

jest.mock('../../state/hooks/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})
jest.mock('../../state/hooks/useResultadoSorteio', () => {
    return {
        useResultadoSorteio: jest.fn()
    }
})

describe('na pagina de sorteio', () => {
    const listaDeParticipantes: IParticipante[] = [
        {"nome": 'Lucas'},
        {"nome": 'Guilherme'},
        {"nome": 'Ana'}
    ]
    const resultado = new Map([
        ['Ana', 'Lucas'],
        ['Lucas', 'Guilherme'],
        ['Guilherme', 'Ana']
    ])
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(listaDeParticipantes);
        (useResultadoSorteio as jest.Mock).mockReturnValue(resultado);
     });
    test('todos os participantes podem exibir o seu amigo secreto', () => {
        render(<RecoilRoot><Sorteio /></RecoilRoot>)
        const opcoes = screen.queryAllByRole('option');
        expect(opcoes).toHaveLength(listaDeParticipantes.length + 1);
    })
    test('o amigo secreto eh exibido quando solicitado', () => {
        render(<RecoilRoot><Sorteio /></RecoilRoot>)
        const select = screen.getByPlaceholderText('Selecione o seu nome');
        fireEvent.change(select, {
            target: {
                value: listaDeParticipantes[0].nome
            }
        });
        const botao = screen.getByRole('button');
        fireEvent.click(botao);
        const amigoSecreto = screen.getByRole('alert');
        expect(amigoSecreto).toBeInTheDocument();
    })
    test('o nome sorteado deve sumir apos os timers', () => {
        jest.useFakeTimers()
        render(<RecoilRoot><Sorteio /></RecoilRoot>);
        const select = screen.getByPlaceholderText('Selecione o seu nome');
        fireEvent.change(select, {
            target: {
                value: listaDeParticipantes[0].nome
            }
        });
        const botao = screen.getByRole('button');
        fireEvent.click(botao);
        let amigoSecreto: null | HTMLElement = screen.getByRole('alert');
        expect(amigoSecreto).toBeInTheDocument();

        // esperar N segundos
        act(() => {
            jest.runAllTimers();
        });
        amigoSecreto = screen.queryByRole('alert');
        expect(amigoSecreto).toBeNull();
    })
})