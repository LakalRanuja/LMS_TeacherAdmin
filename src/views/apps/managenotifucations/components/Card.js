
import './styles/card.css'
import {Link} from 'react-router-dom'

const Card = ({date = "", title = "", description = ""}) => {
     return (
         <div>
          <div  className="btn  rounded mt-1 pt-1 shadow myStyle col-12"  >
               <div className="row">
                    <span className="myStyle__headTextContainer col-2">
                         <h6><small  className="  myColor myText">Date </small> </h6>
                    </span> 
                    <span className=" myStyle__headTextContainer2 col-10">
                         <h6 ><small className="text-white  text-capitalize myTextSub">{date}</small></h6>
                    </span>
               </div>
               <div className="row">
                    <span className="myStyle__headTextContainer col-2">
                         <h6><small  className="myColor myText ">Title </small></h6>
                    </span> 
                    <span className="myStyle__headTextContainer2 col-10">
                         <h6><small  className=" text-white text-capitalize myTextSub">{title}</small></h6>
                    </span>
               </div>
               <div className="row">
                    <span className="myStyle__headTextContainer col-2">
                         <h6 ><small className="myColor myText">Description </small></h6>
                    </span>
                    <span className=" myStyle__headTextContainer2 col-10">
                         <h6 ><small className="text-white  text-capitalize myTextSub">{description}</small></h6>
                    </span>
               </div>
          </div>
 
         </div>
     )
}

export default Card
