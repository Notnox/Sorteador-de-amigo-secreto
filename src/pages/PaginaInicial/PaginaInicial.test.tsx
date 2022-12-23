import { render } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import PaginaInicial from ".";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavigate
    }
})

describe('a pagina inicial', () => {
    test('deve ser renderizado corretamente', () => {
        const { container } = render(<RecoilRoot><PaginaInicial /></RecoilRoot>);

        expect(container).toMatchSnapshot();
    })
})