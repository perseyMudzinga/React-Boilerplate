import { INPUT } from './types';

export const updateField = ({ prop, value }) => {
  return {
    type: INPUT,
    payload: { prop, value }
  };
};
