import { createContext } from 'react';

export const MyContext = createContext('default value');
MyContext.displayName = 'main'