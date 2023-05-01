import { ExtLinkOptions, FileOptions, HitOptions, NotBounceOptions } from './options';
import {
  FirstPartyParamsParameters,
  InitParameters,
  UserParameters,
  VisitParameters,
} from './parameters';

type InitEventParameters = [eventName: 'init', parameters: InitParameters];

type AddFileExtensionEventParameters = [
  eventName: 'addFileExtension',
  extensions: string | string[],
];

type ExtLinkEventParameters = [eventName: 'extLink', url: string, options?: ExtLinkOptions];

type FileEventParameters = [eventName: 'file', url: string, options?: FileOptions];

type FirstPartyParamsEventParameters = [
  eventName: 'firstPartyParams',
  parameters: FirstPartyParamsParameters,
];

type GetClientIDEventParameters = [eventName: 'getClientID', cb: (clientID: string) => void];

type HitEventParameters = [eventName: 'hit', url: string, options?: HitOptions];

type NotBounceEventParameters = [eventName: 'notBounce', options?: NotBounceOptions];

type ParamsEventParameters = [eventName: 'params', parameters: VisitParameters | VisitParameters[]];

type ReachGoalEventParameters = [
  eventName: 'reachGoal',
  target: string,
  params?: VisitParameters,
  callback?: () => void,
];

type SetUserIDEventParameters = [eventName: 'setUserID', userID: string];

type UserParamsEventParameters = [eventName: 'userParams', parameters: UserParameters];

export type EventParameters =
  | InitEventParameters
  | AddFileExtensionEventParameters
  | ExtLinkEventParameters
  | FileEventParameters
  | FirstPartyParamsEventParameters
  | GetClientIDEventParameters
  | HitEventParameters
  | NotBounceEventParameters
  | ParamsEventParameters
  | ReachGoalEventParameters
  | SetUserIDEventParameters
  | UserParamsEventParameters;
