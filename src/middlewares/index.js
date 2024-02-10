// const checkDelete = (store) => (next) => (action) => {
//     if (action.type === 'actionForAll/run') {
//       alert('users can not deleted!')
//     //   return;
//     }
//     next(action)
//   }
  
  const loggerTimeMiddleWare = (store) => (next) => (action) => {
    // const time = new Date().toLocaleTimeString();
    // console.log({ time, type: action });
    next(action)
  }
  
  const myFirstMiddleWare = (store) => (next) => (action) => {
    // if (action.type === 'users/getasync/fulfilled') {
    //   const users = store.getState().users.data.map(user => user.email);
    //   action.payload = action.payload
    //     .filter(newUser => !users.includes(newUser.email))
    //     .map(user => ({id:user.id, name: user.name, email: user.email }))
    // }
    next(action)
  }
  
  const myMiddleWares = (getdefaultMiddleWare) => {
    return getdefaultMiddleWare()
      .concat(myFirstMiddleWare, loggerTimeMiddleWare)
  }
  
  export default myMiddleWares