const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");

var numeros1 = [1156922477272,1156922411736,1156922739416,1156922804952,1156922018520,1156921952984,1156922215128,1156922149592,1156922084056,1156922542808,1156923198168,1156921887448,1156922346200];

var numeros2 = [1156923394776,0,0,1156923132632,1156922673880,1156922870488,1156923460312,1156923067096,1156923001560,1156923263704,1156922608344,1156922936024,1156922280664];


numeros1.forEach((el, ind) => {
  const plantilla = `
    
    <div class="col-12 col-sm-6 col-md-4 mb-3" >
    <div class="card">
    <iframe max-width="560" height="315" src="//ok.ru/videoembed/${el}" frameborder="0" allow="autoplay" allowfullscreen></iframe>
    
        <div class="card-body">
            <h4 class="card-title">Capitulo ${ind + 1}</h4>
            <p class="card-text">Hello World!</p>
        </div>
    </div>
</div>
    `;

  box1.insertAdjacentHTML("beforeend", plantilla);
});


numeros2.forEach((el, ind) => {
    const plantilla = `
      
      <div class="col-12 col-sm-6 col-md-4 mb-3" >
      <div class="card ">
      <iframe max-width="560" height="315" src="//ok.ru/videoembed/${el}" frameborder="0" allow="autoplay" allowfullscreen></iframe>
      
          <div class="card-body">
              <h4 class="card-title">Capitulo ${ind + 1}</h4>
              <p class="card-text">Hello World!</p>
          </div>
      </div>
  </div>
      `;
  
    box2.insertAdjacentHTML("beforeend", plantilla);
  });
  
