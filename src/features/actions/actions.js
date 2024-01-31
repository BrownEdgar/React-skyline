import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const actionForAll = createAction('actionForAll/run', function prepare(userId) {
  return {
    payload: {
      userId,
    },
  }
})
