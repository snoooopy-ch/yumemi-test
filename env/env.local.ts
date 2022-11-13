import { buildEnvironment } from "./common/env.build"
import { workboxEnvironment } from "./common/env.workbox"
import { scssEnvironment } from "./common/env.scss"
import { networkEnvironment} from "./local/env.network";

export let build =new buildEnvironment();
export let workbox =new workboxEnvironment();
export let scss =new scssEnvironment();
export let network =new networkEnvironment();
