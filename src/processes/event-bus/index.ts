import mitt from 'mitt'
import type { Emitter } from 'mitt'

type Events = {
  error401: void;
  tokenRefreshed: void;
};

export const emitter: Emitter<Events> = mitt<Events>();
