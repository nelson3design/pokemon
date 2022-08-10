
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
  const [showStart, setShowStart]= useState(true)

  const [count, setCount]= useState(1)
const [fundo, setFundo]= useState(false)
const [nome, setNome]=useState("")

const [colorBack, setColorback]= useState("")

const [height, setheight]=useState("")
var color;


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
       setImg("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+response.id+".png")

     

       setTypes(response.types)

       setbase(response.stats)
     setShow(true)
     setFundo(false)
setNome(response.types[0].type.name)
   console.log(nome)

    })
   
  }



const handleImage =(src)=>{

setCount(count + 1)
if(count ===3){
  setFundo(src)
  setCount(1)

  setShow(false)
  setShowStart(false)
  setColorback(color)
  setheight("100vh")
}

}

const handleClose=()=>{
  setShow(false)
 
}

function handlestart(){

  window.location.reload(true);
}




  switch (nome) {
    case "normal":
      color = "#a8a878";
      break;
    case "fighting":
      color = "#c03028";
      break;
    case "flying":
      color = "#a890f0";
      break;
    case "poison":
      color = "#a040a0";
      break;
    case "ground":
      color = "#e0c068";
      break;
    case "rock":
      color = "#b8a038";
      break;
    case "bug":
      color = "#a8b820";
      break;
    case "ghost":
      color = "#705898";
      break;
    case "steel":
      color = "#b8b8d0";
      break;
    case "fire":
      color = "#f08030";
      break;
    case "water":
      color = "#6890f0";
      break;
    case "grass":
      color = "#78c850";
      break;
    case "electric":
      color = "#f8d030";
      break;
    case "psychic":
      color = "#f85888";
      break;
    case "ice":
      color = "#98d8d8";
      break;
    case "dragon":
      color = "#7038f8";
      break;
    case "dark":
      color = "#705848";
      break;
    case "fairy":
      color = "#ee99ac";
      break;
    default:
      color = "#68a090";
  }




  return (
    <div className="fundo" style={{backgroundImage: "url(" + fundo + ")",backgroundColor:colorBack,height: height}}>

   {
    showStart?

    <div className="nomes" style={{backgroundColor: color}}>
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


    :
    <div className="start" onClick={handlestart}>iniciar</div>
   }

  
  
{
      show? 
     <Detalhe img={img} info={info} types={types} handleImage={handleImage} base={base} handleClose={handleClose} color={color}/>
      :
      null
     }
       
    

   
    </div>
  );
}

export default App;
