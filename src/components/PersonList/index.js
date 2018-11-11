import React from 'react'
import posed, { PoseGroup } from 'react-pose'
import { observer } from 'mobx-react'
import Person from 'components/Person'

const Boo = posed.div({
  enter: { scale: 1, opacity: 1 },
  exit: { scale: 0, opacity: 0 },
})

let PersonList = ({ people }) => (
  <div className="personList">
    <PoseGroup>
      {people.length > 0 ? (
        people.map(obj => (
          <Boo key={obj.id}>
            <Person {...obj} />
          </Boo>
        ))
      ) : (
        <Boo key="nope">No people matching criteria</Boo>
      )}
    </PoseGroup>
  </div>
)
export default observer(PersonList)
