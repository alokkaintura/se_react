import React from 'react';
import './style.css';

  function Content() {
    return (
       <div>
         <section className="">
         <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.unsplash.com/photo-1472791108553-c9405341e398?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1237&q=80" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1477948879622-5f16e220fa42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </section>   
 
        <section className="bg-light" id="about">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                 <h3 className="text-center mt-4 text-secondary">Know about us</h3>
               </div>
              </div>
             <div className="row">
                <p className="mt-4 mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                    like Aldus PageMaker including versions of Lorem Ipsum</p>
             </div>   
          </div>   
        </section>   
 
        <section className="" id="destinations">   
         <div className="container">
             <div className="row">
              <div className="col-sm-12 col-md-12">
                 <h3 className="text-center mt-4 text-secondary">Favourite Destinations</h3>
               </div>
              </div>
              <div className="row">
                 <div className="col-sm-4 mb-5">
                    <div className="card mt-4 shadow">
                       <img className="card-img-top" src="https://images.unsplash.com/photo-1570804485046-b5b8d795dc5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt=""/>
                       <div className="card-body">
                          <h4 className="card-title text-secondary">Rishikesh</h4>
                          <p className="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                       </div>
                       <div className="card-footer">
                          <a href="#" className="btn btn-primary">Read more</a>
                       </div>
                    </div>
                 </div>
                 <div className="col-sm-4 mb-5">
                    <div className="card mt-4 shadow">
                       <img className="card-img-top" src="https://images.unsplash.com/photo-1570804485046-b5b8d795dc5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt=""/>
                       <div className="card-body">
                          <h4 className="card-title text-secondary">Rishikesh-1</h4>
                          <p className="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                       </div>
                       <div className="card-footer">
                          <a href="#" className="btn btn-primary">Read more</a>
                       </div>
                    </div>
                 </div>
                 <div className="col-sm-4 mb-5">
                    <div className="card mt-4 shadow">
                       <img className="card-img-top" src="https://images.unsplash.com/photo-1570804485046-b5b8d795dc5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt=""/>
                       <div className="card-body">
                          <h4 className="card-title text-secondary">Rishikesh-2</h4>
                          <p className="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                       </div>
                       <div className="card-footer">
                          <a href="#" className="btn btn-primary">Read more</a>
                       </div>
                    </div>
                 </div>
              </div>
        </div>
       </section>  
 
 
       <section className=""  id="places">
        <div className="container">
          <div className="col-sm-12 col-md-12 mb-4">
             <h3 className="text-center text-secondary mt-4">Places and Description</h3>
         </div>
         <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div> 
    </section>
 
     
    <section className="bg-light mt-5" id="tourist">    
     <div className="container">
      <div className="row text-center">
        <div className="col-sm-12 col-md-12 mb-4">
            <h3 className="text-center mt-4 text-secondary">Tourist Opinions</h3>
         </div>
        <div className="col-md-4">
          <div className="testimonial mb-5">
           <div className="avatar mx-auto">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" className="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 className="font-weight-bold dark-grey-text mt-4">Anna Deynah</h4>
          <h6 className="font-weight-bold blue-text my-3">Tourist</h6>
          <p className="font-weight-normal dark-grey-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
            eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.</p>
        </div>
      </div>
 
      <div className="col-md-4">
        <div className="testimonial mb-5">
          <div className="avatar mx-auto">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" className="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 className="font-weight-bold dark-grey-text mt-4">John Doe</h4>
          <h6 className="font-weight-bold blue-text my-3">Tourist</h6>
          <p className="font-weight-normal dark-grey-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam
            corporis suscipit laboriosam, nisi ut aliquid commodi.</p>
        </div>
 
      </div>
      <div className="col-md-4">
        <div className="testimonial mb-5">
          <div className="avatar mx-auto">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" className="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 className="font-weight-bold dark-grey-text mt-4">Maria Kate</h4>
          <h6 className="font-weight-bold blue-text my-3">Toursit</h6>
          <p className="font-weight-normal dark-grey-text">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti.</p>
        </div>
        </div>
      </div>
    </div> 
   </section> 
   </div>
    );
  }
   
  export default Content;