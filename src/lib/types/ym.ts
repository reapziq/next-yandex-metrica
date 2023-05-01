import { EventParameters } from './events';

export type YM = (tagID: number, ...parameters: EventParameters) => void;
