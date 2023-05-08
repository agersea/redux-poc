import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Container, CssBaseline, Drawer } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { AppState } from '../store'
import { Dto, ListProps } from './dtos'
import { fetchListings, listSelector, setActive, setList } from './listingsSlice'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'description', headerName: 'Desc', width: 250 },
  { field: 'name', headerName: 'Name', width: 250 },
  { field: 'title', headerName: 'Title', width: 130 },
];

function List(p: ListProps) {
  // destructure the updatedAt property from the props to display last value from static page rendering
  const { updatedAt } = p

  // encapsulated state for the drawer works alongside Redux manged state
  const [state, setState] = useState({ drawerActive: false })

  // create selectors to get the active listing and the list of listings
  const al: Dto | null = useSelector((s: AppState) => s.listings.active)
  const dl: Dto[] = useSelector(listSelector) // same as: const tl =

  // create a dispatch function to trigger actions and thunks
  const dispatch = useDispatch()

  // wrap the fetchListings thunk in a useEffect hook to trigger it on page load and prevent infinite loops
  useEffect(() => { dispatch(fetchListings()) }, [])

  // change values for the active listing and update corresponding values in the list
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
      <p>Select a Listing to view its details</p>
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
