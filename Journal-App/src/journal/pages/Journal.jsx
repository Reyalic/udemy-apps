import { AddOutlined } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import { fontSize } from '@mui/system'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startNewNote } from '../../store/journal'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelected } from '../views'

export const Journal = () => {

  const dispatch= useDispatch()
  const {isSaving, active} = useSelector(state => state.journal)

  const onClickNewNote = () => {
    dispatch(startNewNote())

  }
  return (
    <JournalLayout>

      {
        (!!active)
        ? <NoteView />
        : <NothingSelected />
      }

      <IconButton
        disabled={isSaving}
        onClick={onClickNewNote}
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