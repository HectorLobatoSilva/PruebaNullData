import  React, { Component } from 'react'
import { Card, CardContent, Typography, Divider } from '@material-ui/core'
import axios from 'axios'

class EmpleadoEmail  extends Component{

    constructor(props){
        super(props)
        this.state = {
            nombre:'',
            email:'',
            puesto:'',
            fecha:'',
            domicilio:'',
            skills:''
        }
    }

    componentDidMount(){
        const { email } = this.props.match.params
        axios.get(`/api/empleado/${email}`).then(response => {
            this.setState({
                nombre:response.data.nombre,
                puesto:response.data.puesto,
                fecha:response.data.fecha,
                domicilio:response.data.domicilio,
                skills:response.data.skills,
                email
            })
            console.log(response)
        }).catch(error => console.log(error))
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

        const { nombre,email,puesto,fecha,domicilio,skills } = this.state;

        return(
            <Card >
                <CardContent>
                    <Typography  color="textPrimary">Email: {email} </Typography><Divider/>
                    <Typography  color="textPrimary">Nombre: {nombre} </Typography><Divider/>
                    <Typography  color="textPrimary">Fecha: {this.transformDate(fecha)} </Typography><Divider/>
                    <Typography  color="textPrimary">Puesto: {puesto} </Typography><Divider/>
                    <Typography  color="textPrimary">Domicilio: {domicilio} </Typography><Divider/>
                    <Typography  color="textPrimary">Skills: {skills} </Typography><Divider/>
                </CardContent>
            </Card>
        )
    }
}

export default EmpleadoEmail