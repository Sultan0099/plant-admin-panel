import axios from 'axios';


export const register = ( userData ) => async dispatch =>{
    try { 
        await  
            axios.post(`http://localhost:2019/admin/signup`,{userData})
              .then(res => {
                console.log(res);
              })
    }catch( err){
        console.log( {err} )
    }
}