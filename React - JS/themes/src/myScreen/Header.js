import 'bootstrap/dist/css/bootstrap.css' ;

import 'bootstrap/dist/css/bootstrap.min.css' ;

import 'bootstrap/dist/js/bootstrap.min.js' ;


function Header()
{
    return(
        <>
        

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">MY PAGE</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Register</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://cdn.pixabay.com/photo/2016/04/30/13/12/sutterlin-1362879_1280.jpg"style={{"height":"500px","width":"700px"}}  class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2015/11/19/21/11/atlas-1052011_1280.jpg"  style={{"height":"500px","width":"700px"}} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2015/11/19/21/11/book-1052014_1280.jpg" style={{"height":"500px","width":"700px"}} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div className= "container mt-5">

    <div className="row ">

            <div className="col-4">
                <div className="text-center">
                <img src='https://icons.veryicon.com/png/o/internet--web/web-8/next-step-28.png' style={{"height":"100px","width":"100px"}}/>
                </div>
            </div>
        
            <div className="col-4">
            <div className="text-center">
                    <img src='https://icons.veryicon.com/png/o/healthcate-medical/at-icon-library/go-to-next-step.png' 
                    style={{"height":"100px","width":"100px"}}/>
                </div>
            </div>
        
            <div className="col-4">
            <div className="text-center">
            <img src='https://icons.veryicon.com/png/256/miscellaneous/talent-map/next-step-27.png'  style={{"height":"100px","width":"100px"}} />
                </div>
            </div>
    </div>

</div>

<div className="container mt-5">
        <div className="row">
            <div className="col-6">
                <img style={{"height":"400px"}} src="https://cdn.pixabay.com/photo/2016/11/19/15/18/woman-1839798_1280.jpg"/>
            </div>

            <div className="col-6">
                <img style={{"height":"400px"}} src="https://cdn.pixabay.com/photo/2021/01/15/23/17/reading-5920739_1280.jpg"/>
            </div>
    
        </div>
</div>
        
        </>

    )
}

export default Header