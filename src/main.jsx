import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from './App'
import { createBrowserRouter } from 'react-router-dom'
import './index.css'
import { createRoutesFromElements } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { loadContacts } from './loaders'
import Contact from './Contact'
import { loadContact } from './loaders'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Layout />} loader={loadContacts}>

    <Route path="/contacts/:contactId" loader={({params})=> loadContact(params.contactId)} element={<Contact />} />
    </Route>
    </>
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
