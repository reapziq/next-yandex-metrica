import { VisitParameters } from './parameters';

export interface ExtLinkOptions {
  callback?: () => void;
  params?: VisitParameters;
  title?: string;
}

export interface FileOptions {
  callback?: () => void;
  params?: VisitParameters;
  referer?: string;
  title?: string;
}

export interface HitOptions {
  callback?: () => void;
  params?: VisitParameters;
  referer?: string;
  title?: string;
}

export interface NotBounceOptions {
  callback?: () => void;
}
