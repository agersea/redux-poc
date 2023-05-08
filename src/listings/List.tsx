import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Container, CssBaseline, Drawer } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { AppState } from '../store'
import { Dto, ListProps } from './dtos'
import { listSelector, setActive, setList } from './listingsSlice'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'description', headerName: 'Desc', width: 250 },
  { field: 'name', headerName: 'Name', width: 250 },
  { field: 'title', headerName: 'Title', width: 130 },
];

function List(p: ListProps) {
  const { updatedAt } = p
  const dispatch = useDispatch()
  const [state, setState] = useState({ drawerActive: false })

  const al: Dto | null = useSelector((s: AppState) => s.listings.active)
  const dl: Dto[] = useSelector(listSelector) // same as: const tl =

  function btnHandler() {
    if (!al) return
    const changed: Dto = {
      id: al.id,
      description: 'Changed Desc',
      name: 'Changed Name',
      title: 'Changed Title'
    }
    const cList = dl.map((e) => {
      if (e.id !== al.id) return e
      const r = { ...e }
      r.description = changed.description
      r.id = changed.id
      r.name = changed.name
      r.title = changed.title
      return r
    })
    dispatch(setActive(changed))
    dispatch(setList(cList))
  }


  return <>
    <CssBaseline />
    <Drawer
      anchor='right'
      open={state['drawerActive']}
      onClose={() => setState({ drawerActive: false })}
    >
      <Container>
        <h2>{al?.title}</h2>
        <p>Name: {al?.name}</p>
        <p>Id: {al?.id}</p>
        <p>Description: {al?.description}</p>
        <Button variant="contained" onClick={btnHandler}>Change Some Stuff</Button>
      </Container>
    </Drawer>
    <Container maxWidth='xl'>
      <h2>Listings - {updatedAt}</h2>
      <DataGrid
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        rows={dl}
        onRowClick={(e) => {
          dispatch(setActive(e.row))
          setState({ drawerActive: true })
        }}
      />
    </Container>
  </>
}

export default List
