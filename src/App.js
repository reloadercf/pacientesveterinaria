import React,{Component} from 'react';
import './bootstrap.min.css'
import Header from './components/Header'
import NuevaCita from './components/NuevaCita'
import ListaCitas from './components/ListaCitas'

class App extends Component {
  state = { 
    citas:[]
   }

  crearNuevaCita=datos=>{
    //copiar el state actial
    let citas =[...this.state.citas,datos]

    //agregar el nuevo state
    this.setState({
      citas:citas
    })
  }

  //eliminar citas del state
  eliminarCita=id=>{
    console.log(id)
  }

  render() { 
    return ( 
      <div className ="container">
        <Header
        titulo="Verinaria de Sandy"
        />
        <div className='row'>
          <div className='col-md10 mx-auto'>
            <NuevaCita
            crearNuevaCita={this.crearNuevaCita}
            />
          </div>
          <div  className='mt-5 col-md-10 mx-auto'>
            <ListaCitas
            citas={this.state.citas}
            eliminarCita={this.eliminarCita}
             />
          </div>
        </div>
      </div>
     );
  }
}
 
export default App;