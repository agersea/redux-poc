import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@mui/material/Button';
import {AppState} from '../store'
import {Dto} from './dtos'

function List() {
  // const dl = useSelector(list)
  const dl: Dto[] = useSelector((s: AppState) => s.listings.list)
  return <>
    <h2>List</h2>
    <Button variant="contained">Hello World</Button>
    <ul>
      { dl.map((e: Dto) => { return <li key={e.id}>{e.title}</li> }) }
    </ul>
  </>
}

export default List
