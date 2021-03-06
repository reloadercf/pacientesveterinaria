import React, { Component } from 'react';
import uuid from 'uuid'
import PropTypes from 'prop-types'


let stateInicial= { cita:{
    mascota:'',
    propietario:'',
    fecha:'',
    hora:'',
    sintomas:'',
}, 
error:false
 }

class NuevaCita extends Component {
    state = { ...stateInicial}


    //para que funcione el siguiente snipet el state tiene que ser
    // igual a la propiedad que tiene el input en el state
    //y con eso va a funcionar
    //handleChamnge cuando el usuario escribe en los inputs
    handleChange=(e)=>{
        //formas de acceder a los valores
        console.log(e.target.name+': '+e.target.value);


        //colocar lo que el usuario escribe en el state
        this.setState({
            cita:{
                ...this.state.cita,
                [e.target.name]:e.target.value
            },
            error:false
        })
    }

    //cuando el usuario envia el formulario
    handleSubmit=e=>{
        e.preventDefault()
        //primero vamos a validar que todos los campos esten llenos
        //si todo esta bien agregamos la cita al state de la app

        //extraer los valores con destructuring
        let {mascota,propietario,fecha,hora,sintomas}=this.state.cita

        //validar todos los campos
        if(mascota===''||propietario===''||fecha===''||hora===''||sintomas===''){
            this.setState({
                error:true
            })
            //detener la ejecucion del if con un return 
            return
        }

        //generar objeto con los datos para pasarle la nueva cita
        let nuevaCita={...this.state.cita}
        nuevaCita.id=uuid()

        //agregar la cita al state
        this.props.crearNuevaCita(nuevaCita)
        //colocar en el state el state inicial
        this.setState({
            ...stateInicial
        })

    }



    render() { 

        //extraer el valor del state
        let {error}=this.state

        return ( 
            <div className="card mt-5 py-5">
                <div className='card-body'>
                    <h2 className="card-title text-center mb-5">
                        Llena el formulario para crear una nueva cita
                    </h2>
                    {error?<div className="alert alert-danger mt-2 md-5 text-center">todos los campos son obligatorios</div>:null}
                    <form
                    onSubmit={this.handleSubmit}
                    >
                        <div className='form-group row'>
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                type='text'
                                className='form-control'
                                placeholder='Nombre mascota'
                                name='mascota'
                                onChange={this.handleChange}
                                value={this.state.cita.mascota}
                                />
                            </div>
                        </div>{/*  cierre de form grup */}
                        <div className='form-group row'>
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre del dueño de la mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                type='text'
                                className='form-control'
                                placeholder='Nombre del dueño'
                                name='propietario'
                                onChange={this.handleChange}
                                value={this.state.cita.propietario}
                                />
                            </div>
                        </div>{/*  cierre de form grup */}
                        <div className='form-group row'>
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha de registro</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                type='date'
                                className='form-control'
                                placeholder='fecha'
                                name='fecha'
                                onChange={this.handleChange}
                                value={this.state.cita.fecha}
                                />
                            </div>
            
                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                type='time'
                                className='form-control'
                                placeholder='hora'
                                name='hora'
                                onChange={this.handleChange}
                                value={this.state.cita.hora}
                                />
                            </div>
                        </div>{/*  cierre de form grup */}
                        <div className='form-group row'>
                            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea
                                className='form-control'
                                name='sintomas'
                                placeholder="describe los sintomas"
                                onChange={this.handleChange}
                                value={this.state.cita.sintomas}
                                >

                                </textarea>
                            </div>
                        </div>{/*  cierre de form grup */}

                        <input type='submit' className='py-3 mt-2 btn btn-success btn-block' value="agregar nueva cita" />
                    </form>
                </div>
            </div>
         );
    }
}
 
NuevaCita.propTypes={
    crearNuevaCita:PropTypes.func.isRequired
}

export default NuevaCita;