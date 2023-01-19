import bole from "../bole.js";

const log = bole('mymodule')

export const derp = () => {
  log.debug('W00t!')
  log.info('Starting mymodule#derp()')
};
