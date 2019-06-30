import React, { Component } from 'react';
class NuevaCita extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="card mt-5 py-5">
                <div className='card-body'>
                    <h2 className="card-title text-center mb-5">
                        Llena el formulario para crear una nueva cita
                    </h2>
                    <form>
                        <div className='form-group row'>
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                type='text'
                                className='form-control'
                                placeholder='Nombre mascota'
                                name='mascota'
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
                                />
                            </div>
            
                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                type='time'
                                className='form-control'
                                placeholder='hora'
                                name='hora'
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
 
export default NuevaCita;