
import {Outlet} from 'react-router-dom'

function Main(props){

    return(
      <div className="col-10 mainpadding">
        <div className="floatright hamburger">
          <a onClick={props.hamburger}><i className="fas fa-bars fa-2x hamburger-color"></i></a>         
        </div>
        <Outlet/>
      {/* <Home/>
      <About/>
      <Contact/>
      <Resume/>*/}
     </div>
    )

}
export default Main;
