import { useEffect, useState } from "react";

const About = ()=> {
    const [members, setMembers] = useState([]);
    useEffect(()=>{
        fetch('./member.json')
        .then(res=>res.json())
         .then(data=>setMembers(data))
    },[])

    return (
      <div className="mt-5">
          <h3>Our Goal</h3>
          <p className="mt-2 ms-2">Our goal is to teach people English at a minimum cost. They can learn easily. Our goal is to teach people English at a minimum cost. They can learn easily. Our goal is to teach people English at a minimum cost. They can learn easily. Our goal is to teach people English at a minimum cost. They can learn easily.
          Our goal is to teach people English at a minimum cost. They can learn easily.
          Our goal is to teach people English at a minimum cost. They can learn easily.
          </p>
          <h3 className="text-center mt-3">Our Honorable Supervisors</h3>
          <div className="container mb-5">
              <div className="row">
                {
                  members.map(member=>
                    <div className="col-3 border my-3 mx-2">
                        <img src={member.image} alt="pic" width="100%" height="250px"/>
                        <div className="">Name : {member.Name}</div>
                        <div>Age : {member.age}</div>
                    </div>
                  )
                }
              </div>
          </div>
          <div  className="">
              <h3 className="">Our Achivement</h3>
              <img src="./images/ach1.jpg" alt="ach1" width="300px" heigt="250px"/>
              <img src="./images/ach2.png" alt="ach2" width="300px" heigt="350px"/>
          </div>
      </div>
    );
  }
  
  export default About;
  