import { methodOptions } from 'src/core/types';

export interface ControllerOptions {
  notAllowedMethods?: methodOptions[];
  createDTO?: any;
  updateDTO?: any;
}
