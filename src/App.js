import React,{Component} from 'react';
import './bootstrap.min.css'
import Header from './components/Header'
import NuevaCita from './components/NuevaCita'
import ListaCitas from './components/ListaCitas'

class App extends Component {
  state = { 
    citas:[]
   }

   //cuando la aplicacion carga
   componentDidMount(){
    //leer los datos de storage
    let citasLS=localStorage.getItem('citas')
    if(citasLS){
      this.setState({
        citas:JSON.parse(citasLS)
      })
    }

   }
   //cuando agregamos o eliminamos una nueva cita
   componentDidUpdate(){
     localStorage.setItem('citas', JSON.stringify(this.state.citas))
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
    //tomar una copia del state
    let citasActuales=[...this.state.citas]
    //utilizar filter para sacar el elemiento id del arreglo
    let citas=citasActuales.filter(cita=>cita.id!==id)

    //ahora actualizamos el state
    this.setState({
      citas
    })
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