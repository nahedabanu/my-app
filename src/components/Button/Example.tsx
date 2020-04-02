import * as React from 'react'
interface WelcomeProps {
 name: string,

}
 const Welcome: React.SFC<WelcomeProps> = (props) => {
 return <div>
      <button disabled={false} color="red">Enabled Button  </button>
     <br/>
     <br/>
      <button disabled={true}>Disabled Button </button>
     </div>
}
export default Welcome;