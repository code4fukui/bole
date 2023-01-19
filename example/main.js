import bole from "../bole.js";
import * as mod from "./mymodule.js";

bole.output({
  level: 'info',
  stream: Deno.stdout
})

mod.derp()
