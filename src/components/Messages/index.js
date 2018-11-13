import React from 'react'
import posed, { PoseGroup } from 'react-pose'
import { observer, inject } from 'mobx-react'
import Notification from 'react-bulma-components/lib/components/notification'

const Boo = posed.div({
  enter: { scaleX: 1, opacity: 1 },
  exit: { scaleX: 0, opacity: 0 },
})

const Messages = observer(({ messages, deleteMessage }) => (
  <div className="messages">
    <PoseGroup>
      {messages.map(({ id, text }) => (
        <Boo key={id} style={{ margin: `0 1em 1em` }}>
          <Notification color="warning">
            <button className="delete" onClick={() => deleteMessage(id)} />
            {text}
          </Notification>
        </Boo>
      ))}
    </PoseGroup>
  </div>
))

export default inject(({ rootStore }) => ({
  messages: rootStore.messagesStore.messages,
  deleteMessage: rootStore.messagesStore.deleteMessage,
}))(Messages)
