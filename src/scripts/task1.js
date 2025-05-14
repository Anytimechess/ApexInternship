let animes=[
  {
    animeName: 'One Piece',
    image:'onepiece',
    rating:8.5,
    urlLink:'https://www.imdb.com/title/tt0388629/?ref_=sr_t_2'
  },
  {
    animeName:'Spirited Away',
    image:'spirtedaway',
    rating:8.6
  },
  {
    animeName:'My Hero Academia',
    image:'myheroacadmedia',
    rating:7.6,
    urlLink:'https://www.imdb.com/title/tt5626028/?ref_=sr_t_5'
  },
  {
    animeName:'Death Note',
    image:'deathnote',
    rating:8.7,
    urlLink:'https://www.imdb.com/title/tt0877057/?ref_=sr_t_9'
  },{
    animeName:'Attack On Titan',
    image:'attackontitan',
    rating:7.8,
    urlLink:'https://www.imdb.com/title/tt2560140/?ref_=ext_shr_lnk'
  },
  {
    animeName:'Hunter X Hunter',
    image:'hunterxhunter',
    rating:7.8,
    urlLink:'https://www.imdb.com/title/tt2098220/?ref_=sr_t_11'
  },
  {
    animeName:'Black Clover',
    image:'blackclover',
    rating:9
  },
  {
    animeName:'Naruto',
    image:'naruto',
    rating:7.8,
    urlLink:'https://www.imdb.com/title/tt0409591/?ref_=sr_t_10'
  },
  {
    animeName:'Demon Slayer',
    image:'demonslayer',
    rating:8,
    urlLink:'https://www.imdb.com/title/tt9335498/?ref_=sr_t_3'
  },
  {
    animeName:'Jujutsu Kaisen',
    image:'jujustukaisen',
    rating:7.8,
    urlLink:'https://www.imdb.com/title/tt12343534/?ref_=sr_t_4'
  },
  {
    animeName:'Vinland Saga',
    image:'vinlandsaga',
    rating:8.8,
    urlLink:'https://www.imdb.com/title/tt10233448/?ref_=sr_t_6'
  },
  {
    animeName:'Frieren:Beyond Journeys End',
    image:'frierenbeyondjourneysend',
    rating:8.8,
    urlLink:'https://www.imdb.com/title/tt22248376/?ref_=sr_t_7'
  },
  
];
  const recMendations=[];
  
  function random(){
    const randomIndex = Math.floor(Math.random() * animes.length);

    // const randomAnimes = movies[randomIndex];
    return randomIndex;
  }
 
  function recomendAnimes(){
    recMendations.length=0;
    recMendations.push(animes[random()]);
    recMendations.push(animes[random()]);
    recMendations.push(animes[random()]);
    recMendations.push(animes[random()]);
    console.log(recMendations)
    loadAnimes();
    // popUp();
  }
  recomendAnimes()

function loadAnimes(){
  let rootDiv=document.querySelector('.root');
  // console.log(rootDiv)
  let acc=' ';
  recMendations.forEach((anime)=>{
    // console.log(anime )
    acc+=`
       <div class="card">
          <div class="card-head">
            <img src="../public/images/${anime.image}.jpg" alt="">
          </div>
          <div class="card-body"> 
            <div class="card-ratings">
              <span class="bi bi-star-fill"></span>
                <span>${anime.rating}</span>
            </div>
              <p class="anime-name">${anime.animeName}</p>
          </div>
          <div class="card-footer">
           <a href=${anime.urlLink} target="_blank">
             <button class="btn"><span>Watch Now</span></button>
           </a>
            
          </div>
       </div>
    `
  })
  rootDiv.innerHTML=acc;
}

function popUp(){
  alert('New Featured Animes Loaded');
}