import React, { Component } from 'react'

import { withStyles, Card, CardContent, Typography, Table, TableHead, TableRow,  TableBody, TableCell, Divider, Button} from '@material-ui/core';
import Axios from 'axios';
import { Link } from 'react-router-dom'

const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

class Empleados extends Component{

    constructor(props){
        super(props)
        this.state = {
            empleados : []
        }
    }

    componentDidMount(){
        Axios.get('api/empleado').then(response => {
            this.setState({empleados:response.data})
        })
    }

    transformDate(date){
        
        const explode = date.split('-')
        let dat = explode[2]
        switch(explode[1]){
            case '01':dat+='/Enero/';break;
            case '02':dat+='/Febrero/';break;
            case '03':dat+='/Abril/';break;
            case '05':dat+='/Mayo/';break;
            case '06':dat+='/Junio/';break;
            case '07':dat+='/Julio/';break;
            case '08':dat+='/Agosto/';break;
            case '09':dat+='/Septiembre/';break;
            case '10':dat+='/Octuble/';break;
            case '11':dat+='/Noviembre/';break;
            case '12':dat+='/Diciembre/';break;
        }
        dat += explode[0]
        return dat;
    }

    render(){

        const { empleados } = this.state

        return(
            <div>
                <Card >
                    <CardContent>
                        <Typography  color="textPrimary">Listado de Empleados</Typography>
                        <Divider/>
                        
                        <Divider/>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <CustomTableCell>E-mail</CustomTableCell>
                                    <CustomTableCell align="right">Nombre</CustomTableCell>
                                    <CustomTableCell align="right">Puesto</CustomTableCell>
                                    <CustomTableCell align="right">Fecha de nacimiento</CustomTableCell>
                                    <CustomTableCell align="right">Domicilio</CustomTableCell>
                                    <CustomTableCell align="right">Skills</CustomTableCell>
                                    <CustomTableCell align="right">Acciones</CustomTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {empleados.map(row => (
                                <TableRow  key={row.email}>
                                    <CustomTableCell align="right">{row.email}</CustomTableCell>
                                    <CustomTableCell align="right">{row.nombre}</CustomTableCell>
                                    <CustomTableCell align="right">{row.puesto}</CustomTableCell>
                                    <CustomTableCell align="right">{this.transformDate(row.fecha)}</CustomTableCell>
                                    <CustomTableCell align="right">{row.domicilio}</CustomTableCell>
                                    <CustomTableCell align="right">{row.skills}</CustomTableCell>
                                    <CustomTableCell align="right"><Link to ={`empleado/${row.email}`}>Visualizar</Link></CustomTableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
            
        )
    }
}

export default Empleados;