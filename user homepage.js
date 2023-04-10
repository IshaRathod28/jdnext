import { useRouter } from 'next/router'
// import 'bootstrap/dist/css/bootstrap.css'
import Pic from './Pic';
const Homepage = ()=>{

    const router = useRouter();
    return(<div>
      
        <h3>next js project</h3>

         <div class='text-center'>
         <button class='btn btn-outline-success' onClick={() => router.push('/user/Add')}>
     add employee
    </button>&nbsp;&nbsp;
    <button class='btn btn-outline-secondary' onClick={() => router.push('/user/List')}>list </button>
         </div>
    
    </div>)
}

export default Homepage ; 
