const AncientCard= ({data}) => {
  return (
    <>
      {data.map(({name,img,history},index)=>(
        <div key={index} className="cards">
          <div className="flip-card">
            <div className="on">
              <img src={img} alt="" />
              <h3>{name}</h3>
            </div>
            <div className="arka">
              <p>🏛️{history[0]}</p>
              <p>🏛️{history[1]}</p>
              <p>🏛️{history[2]}</p>
              <p>🏛️{history[3]}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default AncientCard