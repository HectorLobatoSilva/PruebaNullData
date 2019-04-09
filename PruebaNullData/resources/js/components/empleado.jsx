import  React, { Component } from 'react'
import { TextField, Card, CardContent, Button, Divider } from '@material-ui/core'
import axios from 'axios'

class Empleado  extends Component{

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


    render(){

        const { nombre,email,puesto,fecha,domicilio,skills } = this.state;

        const storeEmpleado = () => {
    
            axios.post('/api/empleado',{ nombre,email,puesto,fecha,domicilio,skills }).then( response => {
                alert('Agregado')
                this.setState({
                    nombre:'',
                    email:'',
                    puesto:'',
                    fecha:'',
                    domicilio:'',
                    skills:''
                })
            } ).catch(error => alert('error'))
        }

        const handleChange = state => event => {
            this.setState({
                [state]:event.target.value
            })
        }

        return(
            <Card >
                <CardContent>
                    <form noValidate autoComplete="off">
                        <TextField
                            id="outlined-full-width"
                            label="Email"
                            style={{ margin: 8 }}
                            placeholder="Email"
                            helperText="Obligatorio!"
                            // fullWidth
                            margin="normal"
                            variant="outlined"
                            onChange={handleChange('email')}
                        />
                        <TextField
                            id="outlined-full-width"
                            label="Nombre"
                            style={{ margin: 8 }}
                            placeholder="Nombre"
                            helperText="Obligatorio!"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            onChange={handleChange('nombre')}
                        />
                        <TextField
                            id="outlined-full-width"
                            label="Puesto"
                            style={{ margin: 8 }}
                            placeholder="Puesto"
                            helperText="Obligatorio!"
                            // fullWidth
                            margin="normal"
                            variant="outlined"
                            onChange={handleChange('puesto')}
                        />

                        <TextField
                            id="outlined-full-width"
                            label="Fecha de nacimiento"
                            style={{ margin: 8 }}
                            placeholder="Puesto"
                            helperText="Obligatorio!"
                            // fullWidth
                            margin="normal"
                            variant="outlined"
                            type="date"
                            onChange={handleChange('fecha')}
                        />

                        <TextField
                            id="outlined-full-width"
                            label="Domicilio"
                            style={{ margin: 8 }}
                            placeholder="Domicilio"
                            helperText="Obligatorio!"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            onChange={handleChange('domicilio')}
                        />
                        
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Skills"
                            multiline
                            rowsMax="5"
                            margin="normal"
                            helperText="hello"
                            variant="outlined"
                            onChange={handleChange('skills')}
                        />
                        <Divider/>
                        <Button onClick={storeEmpleado}>Agregar</Button>
                    </form>
                </CardContent>
            </Card>
        )
    }
}

export default Empleado