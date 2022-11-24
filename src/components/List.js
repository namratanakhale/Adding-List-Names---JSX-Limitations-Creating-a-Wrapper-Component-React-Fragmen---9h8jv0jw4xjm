import React from 'react';
import ListItems from './ListItems';
//code here
 const List = ({listx}) =>{
  return(
    <React.Fragment>
     {listx.map((i)=>{
      return <ListItems valuex={i}/>
     })}
      
    </React.Fragment>
 
   
    
  
  )
}

export default List;