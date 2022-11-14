import { AddOutlined } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import { fontSize } from '@mui/system'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelected } from '../views'

export const Journal = () => {
  return (
    <JournalLayout>
      {/* <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem sint recusandae mollitia provident earum et inventore odio enim neque optio velit sit, sapiente ipsum vero, aliquam debitis eligendi deleniti nobis.</Typography> */}
      {/* <NothingSelected /> */}

      <NoteView />

      <IconButton
        size='large'
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": {backgroundColor: "error.main", opacity: 0.9},
          position: "fixed",
          right: 50,
          bottom: 50
        }}>

        <AddOutlined sx={{fontSize: 30}} />

      </IconButton>
    </JournalLayout>
  )
}