import { useContext } from 'react'
import { MyContext } from './utils/Context'

export default function C() {
  const context = useContext(MyContext)

  return (
    <div className={context.data}>
      <h1>Component C</h1>
      <p>{context.data}</p>
      <button onClick={() => context.changeTheme('dark')}>change</button>
      {/* old version */}
      {/* <MyContext.Consumer>
        {
          (context) => <p>{context.data}</p>
        }
      </MyContext.Consumer> */}

    </div>
  )
}
