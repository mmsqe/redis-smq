import { Monitor } from '@crypto.com/redis-smq-monitor';

export interface ConfigInterface extends Monitor.ConfigInterface {
    namespace?: string,
    log?: {
        enabled: boolean,
        options: {
            [key:string]: any
        }
    },
}