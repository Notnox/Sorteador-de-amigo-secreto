import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import RodaPe from ".";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";

jest.mock('../../state/hooks/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavigate
    }
})

describe('quando nao existem participantes suficientes', () => {
    const participantes = ['Ana', 'Catarina'];
    beforeEach(() => {
       (useListaDeParticipantes as jest.Mock).mockReturnValue([]) ;
    });
    test('a brincadeira nao pode ser iniciada', () => {
        render(<RecoilRoot><RodaPe/></RecoilRoot>);

        const botao = screen.getByRole('button');

        expect(botao).toBeDisabled();
    })
})

describe('quando existem participantes duficientes',() => {
    const participantes = ['Ana', 'Catarina', 'João'];
    beforeEach(() => {
       (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes) ;
    });
    test('a brincadeira pode ser iniciada', () => {
        render(<RecoilRoot><RodaPe/></RecoilRoot>);
        const botao = screen.getByRole('button');
        expect(botao).not.toBeDisabled();
    })
    test('a brincadeira foi iniciada', () => {
        render(<RecoilRoot><RodaPe/></RecoilRoot>);
        const botao = screen.getByRole('button');
        fireEvent.click(botao);
        expect(mockNavigate).toHaveBeenCalledTimes(1);
        expect(mockNavigate).toHaveBeenCalledWith('/sorteio');
    })
})