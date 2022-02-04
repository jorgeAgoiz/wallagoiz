import React, { useState } from 'react'
import { Grid } from '@mui/material'
import { CHAT_ENGINE_PROJECTID, CHAT_ENGINE_SECRET, CHAT_ENGINE_USER } from '../../constants/index'
import { ChatEngine, getOrCreateChat } from 'react-chat-engine'
import { styleProps } from './styles'

const Chat = () => {
  const [username, setUsername] = useState('')

  const createDirectChat = (creds) => {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername('')
    )
  }

  const renderChatForm = (creds) => {
    return (
      <div>
        <input
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={() => createDirectChat(creds)}>
          Create
        </button>
      </div>
    )
  }

  return (
    <Grid item xs={12} sm={10} md={8} marginTop={3} sx={styleProps}>
      <ChatEngine
        height='70vh'
        projectID={CHAT_ENGINE_PROJECTID}
        userName={CHAT_ENGINE_USER}
        userSecret={CHAT_ENGINE_SECRET}
        renderNewChatForm={(creds) => renderChatForm(creds)}
      />
    </Grid>

  )
}

export default Chat

/* Aquí hay mucho trabajo por hacer */
