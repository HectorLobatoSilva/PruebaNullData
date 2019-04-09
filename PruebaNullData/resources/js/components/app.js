import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import AppBar from './appbar'

import { BrowserRouter, Route, Redirect, Switch, Link } from 'react-router-dom'

import Empleados from './empleados'
import Empleado from './empleado'
import EmpleadoEmail from './EmpleadoEmail'


class App extends Component{
    render(){
        return(
            <BrowserRouter>
            <AppBar/>
            <Link to="/empleados">Listar</Link>
            <Link to="/empleado">Agregar</Link>
            <Switch>
                <Route exact path = "/empleado" component = { Empleado } />
                <Route exact path = "/empleados" component = { Empleados } />
                <Route exact path = "/empleado/:email" component = { EmpleadoEmail } />
                <Redirect from = "/" to = "/empleados" />
            </Switch>
        </BrowserRouter>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('app'))