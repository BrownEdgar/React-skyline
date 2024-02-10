import { createAction } from '@reduxjs/toolkit';
export const actionForAll = createAction('actionForAll/run', function prepare(userId) {
  return {
    payload: {
      userId,
    },
  }
})
