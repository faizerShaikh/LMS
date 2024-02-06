import { methodOptions } from '../types';

export interface ControllerOptions {
  notAllowedMethods?: methodOptions[];
  createDTO?: any;
  updateDTO?: any;
}
