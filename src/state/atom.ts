import { atom } from "recoil";
import { IParticipante } from "../interfaces/IParticipante";

export const listaParticipantesState = atom<IParticipante[]>({
    key: 'listaParticipantesState',
    default: []
})

export const erroState = atom<string>({
    key: 'erroState',
    default: ''
});