import React from 'react'

const Welcome = ({props}) => {
  return (
    <div>
      <div>Name :- {props.displayName}</div>
      <div>Username :-{props.userName}</div>
      <div>email :- {props.email}</div>
    </div>
  )
}



export default Welcome
