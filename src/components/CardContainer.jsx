import AncientCard from "./AncientCard"
import "../styles/App.css"


const CardContainer = ({ data }) => {
  return (
    <div className="card-containers">


<AncientCard data={data} />
    
    
    </div>
  );
}

export default CardContainer