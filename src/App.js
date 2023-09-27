import React from 'react';
import './App.css';
import { AppBar } from "@material-ui/core";
import AutoCrud from "./components/AutoCrud";

export default function App() {

  return (
    <div className="App">
      <AppBar position="static">
        <div>
          <h1>Simple CRUD</h1>
        </div>
      </AppBar>
      <AutoCrud />
    </div>
  );
}