import { fireEvent, render, screen, act } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Formulario from ".";

describe('Comportamento do formulario.tsx',() => {
    test('Quando o input está vazio, novos participantes não podem ser adicionados', () => {
        render(<RecoilRoot><Formulario /></RecoilRoot>);
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
        const botao = screen.getByRole('Adicionar');
        expect(input).toBeInTheDocument();
        expect(botao).toBeDisabled();
    })
    test('Adicionar um participante caso exista um nome preenchido', () => {
        render(<RecoilRoot><Formulario /></RecoilRoot>);
        // encontra no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
        // encontrar o botao
        const botao = screen.getByRole('Adicionar');
        // inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: 'Roberto'
            }
        });
        // clicar no botao de submeter
        fireEvent.click(botao);
        // garantir que o unput esteja com o foco ativo
        expect(input).toHaveFocus();
        // garantir que o input nao tenha valor
        expect(input).toHaveValue('');
    })
    test('nomes duplicados nao podem ser adicionados na lista', () => {
        render(<RecoilRoot><Formulario /></RecoilRoot>);
        // encontra no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
        // encontrar o botao
        const botao = screen.getByRole('Adicionar');
        // inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: 'Roberto'
            }
        });
        // clicar no botao de submeter
        fireEvent.click(botao);
        // inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: 'Roberto'
            }
        });
        // clicar no botao de submeter
        fireEvent.click(botao);
        // mensagem de erro
        const mensagemDeErro = screen.getByRole('alert');
        // verifica mensagem
        expect(mensagemDeErro.textContent).toBe('Nomes duplicados não são permitidos!');
        
    })
    test('a mensagem de erro deve sumir apos os timers', () => {
        jest.useFakeTimers()
        render(<RecoilRoot><Formulario /></RecoilRoot>);
        // encontra no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
        // encontrar o botao
        const botao = screen.getByRole('Adicionar');
        // inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: 'Roberto'
            }
        });
        // clicar no botao de submeter
        fireEvent.click(botao);
        // inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: 'Roberto'
            }
        });
        // clicar no botao de submeter
        fireEvent.click(botao);
        // mensagem de erro
        let mensagemDeErro = screen.queryByRole('alert');
        // verifica mensagem
        expect(mensagemDeErro).toBeInTheDocument();
        // esperar N segundos
        act(() => {
            jest.runAllTimers();
        });
        // verifica mensagem
        mensagemDeErro = screen.queryByRole('alert');
        // verifica se mensagem nao esta mais na tela
        expect(mensagemDeErro).toBeNull();
    })
})