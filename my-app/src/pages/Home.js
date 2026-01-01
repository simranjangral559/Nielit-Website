
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Home() {
  return (
    <div className='Home'>
       <div className='container-fluid bg-info'>
            <div id="slider121">
            <figure>
            <img src="https://nielit.ac.in/img/banners/nielit-banner-5.webp" alt='hat7' height="400px" ></img>
            <img src="https://nielit.ac.in/img/banners/NIELIT-banner-2025-26.webp"alt='hat' height="400px" ></img>
            <img src="https://nielit.ac.in/img/nielit-centers/nielit-ropar.png" alt='hat2' height="400px" ></img>
            <img src="https://nielit.ac.in/img/banners/nielit-banner-4.webp" alt='hat3'></img>
            <img src="https://nielit.ac.in/img/banners/nielit-banner-1.webp" alt='hat4' height="400px" ></img>
            <img src="https://nielit.ac.in/img/banners/nielit-banner-4.webp" alt='hat5' height="400px"></img>
            <img src="https://nielit.ac.in/img/ttt3.jpg" alt='hat5' height="400px" ></img>
            <img src="https://th.bing.com/th/id/R.add803e516aa2d0ed5d66f87ed274c94?rik=IfaF8%2fNaK058pg&riu=http%3a%2f%2fwww.architectsrenukhanna.com%2fwp-content%2fuploads%2f2020%2f01%2f1_0005_NIELIT-CAMPUS-ROPAR-2.jpg&ehk=M9C%2fA%2fugoEeJ5BS5Krrnp7JYQu2xqU5MQRVtGIEdYcY%3d&risl=&pid=ImgRaw&r=0" alt='hat6' height="400px"></img>
            </figure>
            </div>
        </div>
      <div className='container-fluid'>
         <div className='row bg-primary'>
            <div className='col-sm-4  border border-dark p-2' id="courses" >
        
             <h2 className='heading' >Available Course</h2><hr></hr>
     <ul>
      <li>Engineering & Technology B.Tech. (Electronics & Computer Engg) </li>
      <li>B.Tech(Electronics & Communication Engg) </li>
      <li>B.Tech (Electronics & Communication Engg) Lateral Entry</li>
      <li>  B.Tech. (Computer Sc. & Engg.) </li>
      <li>M.Tech. (Computer Science & Engineering) </li>
      <li>BCA (Three Years) </li>
      <li>BSC(Three Years) </li>

     
     </ul>
            </div>
            
            <div className='col-sm-4 border border-dark p-2' id="schol">
            <h2 className='headind2 p-3' >About Nielit Ropar</h2><hr></hr>
      <p className='parra p-3'>National  Institute of Electronics and Information Technology, Rupnagar Centre is coming up on 89 Kanals 7 Marlas of land (adjoining to the upcoming IIT, Rupnagar Campus) that was allotted free of cost by Government of Punjab at Village Bada Phull, Rupnagar in September 2012.  
Subsequently, Department of Electronics and Information Technology (DeitY) approved a project titled “Construction of Permanent Campus of NIELIT Chandigarh at Ropar, Punjab” on this land under ‘Manpower Development Programme (including Skill Development in IT)’ with budgetary outlay of Rs. 8,426.00 lakh. 
Objective –
•   </p>
                
                </div>
                <div className='col-sm-4 border border-dark p-2' id="home">
                <h2 className='update'>Updates</h2><hr></hr>
                <div className='updates p-2' id="styl">
      <p> The interview for PhD admissions is scheduled to be held on 27th and 28th October 2025. All eligible candidates are requested to check their registered email IDs for further details.
.</p>
      <p>Applications are invited for the post of Field Investigator for ICSSR Project in the Guru Nanak Dev University College Verka. Click here for details</p>
      <p>Applications are invited for the post of Instructor(s) in the department of Life Long Learning . Click here for details.
Click here to Apply</p>
</div>
                </div>
         </div>
         </div>
        <div className="container">
  <div className="row justify-content-center gap-4 py-4" id="gndu">
    
    <div className="col-sm-2 text-center option-box">
      <a href="https://nielit.ac.in/advertisement.php">
        <img 
          src="https://th.bing.com/th/id/R.15b762332d44c248f1c99a4bfa2f9353?rik=VY%2bG1cmzN3gWxg&riu=http%3a%2f%2fjdpsnawada.com%2fimages%2fadmission.png&ehk=Ca6d%2fN5pD8oPaNHcud2JGAt8Pw%2bj1wLAs7FTOoK88K4%3d&risl=&pid=ImgRaw&r=0"
          height="100"
        />
      </a>
      <p>ADMISSION NOTICE</p>
    </div>

    <div className="col-sm-2 text-center option-box">
      <a href="https://www.nielit.gov.in/sites/default/files/Chandigarh/NIELIT%20Chandigarh%20Prospectus-2023-24.pdf">
        <img src="https://www.freeiconspng.com/uploads/study-icon-21.png" height="100" />
      </a>
      <p>PROSPECTUS</p>
    </div>

    <div className="col-sm-2 text-center option-box">
      <a href="https://nielit.ac.in/fee-structure.php">
        <img src="https://cdn.iconscout.com/icon/premium/png-64-thumb/fees-10-482208.png" height="100" />
      </a>
      <p>FEES PORTAL</p>
    </div>

    <div className="col-sm-2 text-center option-box">
      <a href="https://nielit.ac.in/syllabus.php">
        <img src="https://cdn-icons-png.flaticon.com/512/4231/4231654.png" height="100" />
      </a>
      <p>SYLLABUS</p>
    </div>

    <div className="col-sm-2 text-center option-box">
      <a href="https://student.nielit.gov.in/WEB/Result.aspx">
        <img src="https://cdn-icons-png.flaticon.com/512/992/992848.png" height="100" />
      </a>
      <p>RESULT</p>
    </div>

  </div>
</div>

      
         
          <div className="container py-5">
  <h2 className="text-center mb-5 fw-bold text-primary">
    Welcome to the NIELIT Deemed University Information System
  </h2>

  <div className="row justify-content-center">

    {/* Faculty Card */}
    <div className="col-md-4 mb-4">
      <div className="card shadow p-4 text-center">
        <h4 className="fw-bold">Faculty / Officials Sign In</h4>
        <p className="text-muted mt-2">
          Access your faculty or official account to manage programs and student records.
        </p>

        {/* Faculty Sign In Link */}
        <a
          href="http://59.91.196.55/nielitndu/logIn"
          className="btn btn-primary px-4 mt-3"
        >
          Sign In
        </a>
      </div>
    </div>

    {/* Student Card */}
    <div className="col-md-4 mb-4">
      <div className="card shadow p-4 text-center">
        <h4 className="fw-bold">Student Sign In</h4>
        <p className="text-muted mt-2">
          Login to view your programmes and other student services.
        </p>

        {/* Student Sign In Link */}
        <a
          href="http://59.91.196.55/nielitndu/studentLogIn"
          className="btn btn-primary px-4 mt-3"
        >
          Student Sign In
        </a>
      </div>
    </div>

  </div>
</div>

         <div class="container-fluid">
  <h2 class="pink">Course Detailed Information</h2>
</div>

<div class="container-fluid p-4">
  <div class="row g-4">

    
    <div class="col-sm-6 col-md-4 col-lg-3 d-flex">
      <div class="p-3 course-card w-100">
        <h2>B.Tech. (Computer Sc. & Engg.)</h2>
        <p>Course duration: 4 Year</p>
      </div>
    </div>

    <div class="col-sm-6 col-md-4 col-lg-3 d-flex">
      <div class="p-3 course-card w-100">
        <h2>B.Tech (Electronics & Communication Engg)</h2>
        <p>Course duration: 4 Year</p>
      </div>
    </div>

    <div class="col-sm-6 col-md-4 col-lg-3 d-flex">
      <div class="p-3 course-card w-100">
        <h2>BCA (Three Years)</h2>
        <p>Course duration: 3 Year</p>
      </div>
    </div>

    <div class="col-sm-6 col-md-4 col-lg-3 d-flex">
      <div class="p-3 course-card w-100">
        <h2>MCA (Three Years)</h2>
        <p>Course duration: 2 Year</p>
      </div>
    </div>

    <div class="col-sm-6 col-md-4 col-lg-3 d-flex">
      <div class="p-3 course-card w-100">
        <h2>BSc(IT) (Three Years)</h2>
        <p>Course duration: 3 Year</p>
      </div>
    </div>

    <div class="col-sm-6 col-md-4 col-lg-3 d-flex">
      <div class="p-3 course-card w-100">
        <h2>Msc.IT </h2>
        <p>Course duration: 2 Year</p>
      </div>
    </div>

    <div class="col-sm-6 col-md-4 col-lg-3 d-flex">
      <div class="p-3 course-card w-100">
        <h2>Short Term/Six Month Industrial Training</h2>
        <p>Course duration: 4 ,8 Week/6 Month </p>
      </div>
    </div>

    <div class="col-sm-6 col-md-4 col-lg-3 d-flex">
      <div class="p-3 course-card w-100">
        <h2>UG(Diploma Courses)</h2>
        <p>Course duration: 1 Year</p>
      </div>
    </div>

  </div>
</div>

        
        <h2 className='teacher'>Executive Director’s desk</h2>
        <div className='container'>
          <div className='row' id="snow">
          <div className='col-sm-12' >
<img src="https://www.nielit.gov.in/sites/default/files/Chandigarh/Deepak%20Sir%20Photo.jpeg" height="150px" ></img>
<h2>Sh. Deepak Wasan</h2>
<h2>Executive Director</h2>
<p>Oldest Centre of NIELIT established in 1978, with primary objective for starting automation and digitization of government organizations, boards & PSUs in the Northern Region and creating a highly skilled pool of human resources in the field of Information Technology. This Centre that was well known as the Regional Computer Centre (RCC) is a brand in itself; and many Systems designed and implemented by it have stood the test of time and are still in operation even after four decades. It has also provided Consultancy support, resolved real time issues faced by the industry and has taken up Turn-key Projects for organizations like PSPCL (erstwhile PSEB), UHBVN, PGI Chandigarh, SBI, CBSE, Council of Scientific and Industrial Research (CSIR) Delhi, CSO, Survey of India Dehradun, Registrar General of India under Ministry of Home Affairs to name a few.
</p>
          </div>
          </div>
          </div><br></br><br></br>
       <div class='container-fluid'>
  <h2 class="universe">About Nielit Ropar</h2>

  
    <div class="container-fluid">
  <div id="video-row">

    <div class='col-sm-2'>
      <div class='buchofphtoes'>
        <iframe width="100%" height="200px"
          src="https://www.youtube-nocookie.com/embed/1EPY3eF_oDU?si=NUEW11YDMRXJSGy2"
          allowfullscreen></iframe>
      </div>
    </div>

    <div class='col-sm-2'>
      <div class='buchofphtoes'>
        <iframe width="100%" height="200px"
          src="https://www.youtube-nocookie.com/embed/UjQcnS1Y8O4?si=FQS9UHbqtiYWmZ-0"
          allowfullscreen></iframe>
      </div>
    </div>

    <div class='col-sm-2'>
      <div class='buchofphtoes'>
        <iframe width="100%" height="200px"
          src="https://www.youtube-nocookie.com/embed/PhTLhlxqZmY?si=BnLW0BrS7LWRIZr0"
          allowfullscreen></iframe>
      </div>
    </div>

    <div class='col-sm-2'>
      <div class='buchofphtoes'>
        <iframe width="100%" height="200px"
          src="https://www.youtube-nocookie.com/embed/51IxRk3I3ww?si=3sVh0Z27QS1Mk_nc"
          allowfullscreen></iframe>
      </div>
    </div>

    <div class='col-sm-2'>
      <div class='buchofphtoes'>
        <iframe width="100%" height="200px"
          src="https://www.youtube-nocookie.com/embed/KQcfRNfnmu0?si=4h-bk-XzQKCBvTLJ"
          allowfullscreen></iframe>
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
          <h2 className='recruiter'>Our Recruiters</h2>
        <div className='container-fluid'>
          <div className='row'>
              <div className='rose' id="rosepic">
            <img src="https://rcgsp.gndu.ac.in/wp-content/uploads/2021/04/logo-3.jpg" alt="happy" height="60px"></img>
<img src="https://rcgsp.gndu.ac.in/wp-content/uploads/2021/04/logo-20.jpg" alt="happy" height="60px" ></img>
        
<img src="https://rcgsp.gndu.ac.in/wp-content/uploads/2021/04/logo-26.jpg" alt="happy" height="60px" ></img>
            
<img src="https://rcgsp.gndu.ac.in/wp-content/uploads/2021/04/logo-28.jpg" alt="happy" height="60px" ></img>
          
<img src="https://rcgsp.gndu.ac.in/wp-content/uploads/2021/04/Logo_StatusBrew.jpg" alt="happy" height="60px"></img>
            
  
<img src="https://rcgsp.gndu.ac.in/wp-content/uploads/2021/04/logo-1.jpg" alt="happy" height="60px" ></img>
            
<img src="https://rcgsp.gndu.ac.in/wp-content/uploads/2021/04/logo-2.jpg" alt="happy" height="60px" ></img>
      
<img src="https://rcgsp.gndu.ac.in/wp-content/uploads/2021/04/logo-3.jpg" alt="happy" height="60px"></img>
            
            
<img src="https://rcgsp.gndu.ac.in/wp-content/uploads/2021/04/logo-4.jpg" alt="happy" height="60px" ></img>
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

export default Home;
