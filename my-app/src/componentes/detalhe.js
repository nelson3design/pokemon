


export default function Detalhe(props){
    return(
        <div className="info">


        <div className="infoContent">
        <img className="image" src={ props.img} alt={ props.img} onClick={(e)=> props.handleImage(e.target.src)}/>
         <div className="infoNome">
         <div className="pekenonNome">{ props.info.name}</div>
        <div className="btns2">
        {
          props.types.map((item)=>(
            <button className="btn">{item.type.name}</button>
          ))
         }
        </div>
        
         </div>
        
        </div>
         <div className="progress">
          
    
           <div className="bar"> <span>hp</span>  <progress id="file" max="255" value={ props.base[0].base_stat}> </progress></div>
        
           <div className="bar"><span>attack</span>  <progress id="file" max="150" value={ props.base[1].base_stat}> </progress></div>
        
           <div className="bar"><span>defense</span>  <progress id="file" max="150" value={ props.base[2].base_stat}> </progress></div>
        
           <div className="bar"><span>speed</span>   <progress id="file" max="150" value={ props.base[5].base_stat}> </progress></div>

        
         </div>
        
               
              
        </div>
    )
}