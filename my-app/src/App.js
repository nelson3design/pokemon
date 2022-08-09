
import React,{useState,useEffect} from "react";
import './App.css';

function App() {
 

  

  const [pokemos, setPokemons]= useState([])
  const [next, setNext]= useState("")
  const [previous, setPrevious]= useState("")
  const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
  const [info , setInfo]= useState([])
  const [img, setImg]=useState()
  const [types, setTypes]= useState([])
  const [base, setbase]= useState([])

  const [show, setShow]= useState(false)

  const [count, setCount]= useState(1)
const [fundo, setFundo]= useState(false)


  const handleNext =()=>{
  
   setUrl(next)
  
  }

  const handlePrevious =()=>{
    setUrl(previous)
  }

  useEffect(()=>{
    fetch(url)
    .then(response=> response.json())
    .then(response=>{

     
      
      setNext(response.next)
      setPrevious(response.previous)
      setPokemons(response.results)
     
   
    })
  },[url])




  const handleinfo= (url)=>{
   
   
    fetch(url)
    .then(response=> response.json())
    .then(response=>{
     
      setInfo(response)
       setImg(response.sprites.other.dream_world.front_default)

       setTypes(response.types)

       setbase(response.stats)
     setShow(true)
     setFundo(false)

    })
   
  }




const handleImage =(src)=>{

setCount(count + 1)
if(count ==3){
  setFundo(src)
  setCount(1)

  setShow(false)
}

}




  return (
    <div className="fundo" style={{backgroundImage: "url(" + fundo + ")"}}>

    <div className="nomes">
    {
        pokemos && pokemos.map((item)=>(
          <>
        
          <div className="nome" onClick={(e)=>handleinfo(item.url)}>{item.name}</div>
         
          </>
        ))
      }

      <div className="btns">
       
          
            <button className="btn" onClick={handlePrevious}>previous</button>
            <button className="btn" onClick={handleNext}>next</button>
      
      </div>

    </div>



  
{
      show? 
<div className="info">

      



<div className="infoContent">
<img className="image" src={img} alt={img} onClick={(e)=>handleImage(e.target.src)}/>
 <div className="infoNome">
 <div className="pekenonNome">{info.name}</div>
<div className="btns2">
{
  types.map((item)=>(
    <button className="btn">{item.type.name}</button>
  ))
 }
</div>

 </div>

</div>
 <div className="progress">
 {
    base.slice(0,3).map((item)=>(
      <div className="barra" style={{width:"200px",height:"20px", border: "1px solid black"}}><div className="dados" style={{width: `${item.base_stat}%`,background:"blue",height:"20px"}}></div></div>
    ))
  }

   {
    base.slice(5).map((item)=>(
      <div className="barra" style={{width:"200px",height:"20px", border: "1px solid black"}}><div className="dados" style={{width: `${item.base_stat}%`,background:"blue",height:"20px"}}></div></div>
    ))
  }

 </div>

       
      
</div>
      :
      null
     }
       
    

   
    </div>
  );
}

export default App;
