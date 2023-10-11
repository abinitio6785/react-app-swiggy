import React from 'react'
import ProfileClass from '../Componants/ProfileClass'
import UserContext from '../helper/UserContext'


class About extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <>
        <div>this is my About page</div>
        <UserContext.Consumer>
          {({user})=>(
            
            <h1 className='text-bold text-red-500'>{user.name} --{user.email}</h1>
    )}
        </UserContext.Consumer>
        <ProfileClass name="Samrood"/>
      </>
    )
  }
}
export default About