import  React, { Component } from 'react'
import { TextField, Card, CardContent, Button, Divider, FormControl, InputLabel, Select, Input, MenuItem, Chip } from '@material-ui/core'
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
            skills:['Dedicado','Backend','Frontend','Estudioso','Programador'],
        }
    }

    


    render(){

        const handleChangeSkills = event => {
            this.setState({ skills: event.target.value });
        };

        const names = [
            'Dedicado','Backend','Frontend','Estudioso','Programador'
        ];

        const ITEM_HEIGHT = 48;
        const ITEM_PADDING_TOP = 8;

        const MenuProps = {
            PaperProps: {
              style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
              },
            },
          };

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

                        <FormControl >
                            <InputLabel htmlFor="select-multiple-chip">Skills</InputLabel>
                            <Select
                                multiple
                                value={names}
                                onChange={this.handleChangeSkills}
                                input={<Input id="select-multiple-chip" />}
                                renderValue={selected => (
                                <div >
                                    {selected.map(value => (
                                    <Chip key={value} label={value}  />
                                    ))}
                                </div>
                                )}
                                MenuProps={MenuProps}
                            >
                                {names.map(name => (
                                <MenuItem key={name} value={name}>
                                    {name}
                                </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Divider/>
                        <Button onClick={storeEmpleado}>Agregar</Button>
                    </form>
                </CardContent>
            </Card>
        )
    }
}

export default Empleado