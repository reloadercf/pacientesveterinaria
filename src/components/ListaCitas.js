import React from 'react'
import Cita from './Cita'

let ListaCitas =({citas})=>(
    <div className='card mt-2 py-5'>
        <div className='card-body'>
            <h2 className=''>Administra las citas aqui</h2>
            <div className='lista-citas'>
                {citas.map(cita=>(
                    <Cita
                    key={cita.id}
                    cita={cita}
                    />
                )
                )}
            </div>
        </div>
    </div>
)
export default ListaCitas