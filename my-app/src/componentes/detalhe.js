export default function Detalhe(props) {


  return (
    <div className="info" style={{ background: props.color }}>
      <span className="close" onClick={props.handleClose}>
        x
      </span>
      <div className="infoContent">
        <img
          className="image"
          src={props.img}
          alt={props.img}
          onClick={(e) => props.handleImage(e.target.src)}
        />

        <div className="infoNome">
          <div className="pekenonNome">{props.info.name}</div>
          <div className="btns2">
            {props.types.map((item) => (
              <button className="btn">{item.type.name}</button>
            ))}
          </div>
        </div>
      </div>
      <div className="progress">
        <div className="bar">

          <div className="barProgress">
          <span>hp</span>
        
         <div className="barraBase"><div className="per">{`${props.base[0].base_stat}%`}</div><div className="perbase" style={{width:`${props.base[0].base_stat}%`,height:"15px",background:"#fe0000"}}></div></div>
          </div>
         
        </div>

        <div className="bar">
        
          <div className="barProgress">
          <span>attack</span>
        
         <div className="barraBase"><div className="per">{`${props.base[1].base_stat}%`}</div><div className="perbase" style={{width:`${props.base[1].base_stat}%`,height:"15px",background:"#ef7e30"}}></div></div>
          </div>
        </div>

        <div className="bar">
         
          <div className="barProgress">
          <span>defense</span>
        
         <div className="barraBase"><div className="per">{`${props.base[2].base_stat}%`}</div><div className="perbase" style={{width:`${props.base[2].base_stat}%`,height:"15px",background:"#f8d030"}}></div></div>
          </div>
        </div>

        <div className="bar">
        
          <div className="barProgress">
          <span>speed</span>
         
         <div className="barraBase"><div className="per">{`${props.base[5].base_stat}%`}</div><div className="perbase" style={{width:`${props.base[5].base_stat}%`,height:"15px",background:"#f85687"}}></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
