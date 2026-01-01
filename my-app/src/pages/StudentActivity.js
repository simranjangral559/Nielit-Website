import React from "react";

function StudentActivity() {
  return (
    <div className="studentactivity">
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-4">Campus Activities</h2>

        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-md-4">
            <div className="card h-100">
              <img
                src="https://nielit.ac.in/img/student-life/10.jpg"
                className="card-img-top"
                alt="Cultural Festivals"
                height="400"
                width="350"
              />
              <div className="card-body">
                <h5 className="card-title">Cultural Festivals</h5>
                <p className="card-text">
                  Activities include jam sessions, open mic events, and cultural
                  celebrations promoting cross-cultural understanding.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div className="card h-100">
              <img
                src="https://nielit.ac.in/img/student-life/16.jpg"
                className="card-img-top"
                alt="Sports Events"
                height="400"
                width="350"
              />
              <div className="card-body">
                <h5 className="card-title">Sports Events</h5>
                <p className="card-text">
                  Sports help students improve physical activity, teamwork, and
                  overall participation in campus life.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="card h-100">
              <img
                src="https://nielit.ac.in/img/student-life/17.jpg"
                className="card-img-top"
                alt="Tech Hackathons"
                height="400"
                width="300"
              />
              <div className="card-body">
                <h5 className="card-title">Tech Hackathons</h5>
                <p className="card-text">
                  Hackathons offer students opportunities to collaborate, learn
                  coding, and work on innovative tech projects.
                </p>
              </div>
            </div>
          </div>
        </div> 
        <div className="container my-5">

      <h2 className="text-center mb-4 fw-bold">Clubs & Organizations</h2>

      <div className="row">

        {/* Sports Club */}
        <div className="col-md-3 col-sm-6 mb-4">
          <div className="card club-card">
            <img
              src="https://nielit.gov.in/sites/default/files/Chandigarh/gym_sports_1.jpg"
              className="card-img-top"
              alt="Sports Club"
            />
            <div className="card-body">
              <h5 className="card-title">Sports Club</h5>
              <p className="card-text">
                Enhances the college experience by offering physical fitness & teamwork.
              </p>
            </div>
          </div>
        </div>

        {/* Coding Club */}
        <div className="col-md-3 col-sm-6 mb-4">
          <div className="card club-card">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.PCEkGXbfs4qwCWbaGtBGfgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"
              className="card-img-top"
              alt="Coding Club"
            />
            <div className="card-body">
              <h5 className="card-title">Technology & Coding Club</h5>
              <p className="card-text">
                Space for tech lovers to collaborate, learn, and explore.
              </p>
            </div>
          </div>
        </div>

        {/* Debate Club */}
        <div className="col-md-3 col-sm-6 mb-4">
          <div className="card club-card">
            <img
              src="https://nielit.ac.in/img/student-life/students-skill-developement-2.jpg"
              className="card-img-top"
              alt="Debate Club"
            />
            <div className="card-body">
              <h5 className="card-title">Debate & Public Speaking Club</h5>
              <p className="card-text">
                Boosts communication, debating skills, and confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Music Club */}
        <div className="col-md-3 col-sm-6 mb-4">
          <div className="card club-card">
            <img
              src="https://nielit.ac.in/img/student-life/students_clubs6.jpg"
              className="card-img-top"
              alt="Music Club"
            />
            <div className="card-body">
              <h5 className="card-title">Cultural & Music Club</h5>
              <p className="card-text">
                Brings music lovers together through jam sessions & events.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
          </div>
      
     
      <div className='container-fluid'>
    <div className='row pt-4'>
        <div className='col-sm-4 bg-dark text-white border border-white' id="colms">
        <h2 className='row45 text-orange'>Links <br></br><br></br></h2><hr></hr>
        <a href="https://nielit.ac.in/about.php">About Neilit</a><br></br><br></br>
        
<a href="https://nielit.ac.in/contact.php"><img src="https://pngimg.com/uploads/phone/phone_PNG48991.png" alt="ekta" height="20px"></img>Contact Us</a><br></br>
        </div>
        <div className='col-sm-4 bg-dark text-white text-justify border border-white'id="colms" >

        <img src="https://nielit.ac.in/img/nielit-centers/nielit-ropar.png" height="400px"></img>

            </div>
            <div className='col-sm-4 bg-dark text-white border border-white' id="colms">
            <h2 className='row566 text-orange'>How To Reach Us </h2>
            <hr></hr>
            <ul>

                
                    <li><p><img src="https://th.bing.com/th/id/OIP.OpO-0p8SzNURZN-Pbwx7EwHaHa?rs=1&pid=ImgDetMain" alt="guru" height="20px"></img>Address:</p>
                   NIELIT Ropar,
Main Campus, Bada Phull,
Rupnagar(Ropar), Punjab-140001</li>
                    <li><p><img src="https://pngimg.com/uploads/phone/phone_PNG48991.png" alt="ekta" height="20px"></img>Phone:</p>
                   Anita Budhiraja
9815988717<br></br>
Dr. Sarwan Singh
9815621657 </li>
                    
            </ul>
            </div>
    </div>
</div>
 <div className='para3'>
        <p>Copyright by Preeti</p>
      </div>
      
      
          </div>
  
    
  );
}

export default StudentActivity;
