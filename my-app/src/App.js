
import React,{useState,useEffect} from "react";
import Detalhe from "./componentes/detalhe";


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
if(count ===3){
  setFundo(src)
  setCount(1)

  setShow(false)
}

}

const handleClose=()=>{
  setShow(false)
 
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
     <Detalhe img={img} info={info} types={types} handleImage={handleImage} base={base} handleClose={handleClose}/>
      :
      null
     }
       
    

   
    </div>
  );
}

export default App;
