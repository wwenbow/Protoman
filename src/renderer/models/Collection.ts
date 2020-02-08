import { Flow } from './http/flow';

export interface Collection {
  readonly protoDefs: ReadonlyArray<File>;
  readonly messageNames: ReadonlyArray<string>;
  readonly flows: Readonly<{ [key: string]: Flow }>;
}
