import React from 'react'
import { observer } from 'mobx-react'

let Person = ({ name, surname, photo }) => (
  <div className="person">
    <img src={photo} alt="person" />
    <div>
      {name} {surname}
    </div>
  </div>
)
export default observer(Person) // don't actually need this because observable.shallow is used for the list
