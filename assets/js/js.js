class Video {
    constructor(videoMusica,videoPelicula,videoSeries){
        this._videoMusica = () => videoMusica;
        this._videoPelicula = () => videoPelicula;
        this._videoSeries = () => videoSeries;
    }
    get videoMusica(){
        return this._videoMusica();
    }

    set videoMusica(nuevaMusica){
        this._videoMusica = () => nuevaMusica;
    }

    get videoPelicula(){
        return this._videoPelicula();
    }

    set videoPelicula(nuevaPelicula){
        this._videoPelicula = () => nuevaPelicula;
    }

    get videoSeries(){
        return this._videoSeries();
    }

    set videoSeries(nuevaSerie){
        this._videoSeries = () => nuevaSerie;
    }
}

class Musica extends Video {
    constructor(videoMusica,videoPelicula,videoSeries){
        super(videoMusica,videoPelicula,videoSeries)
    }
    mostrarMusica(){
        document.getElementById('musica').innerHTML = `<iframe width="560" height="315" src="${this.videoMusica}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
}

class Pelicula extends Video {
    constructor(videoMusica,videoPelicula,videoSeries){
        super(videoMusica,videoPelicula,videoSeries)
    }
    mostrarPelicula(){
        document.getElementById('peliculas').innerHTML = `<iframe width="560" height="315" src="${this.videoPelicula}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
}

class Serie extends Video {
    constructor(videoMusica,videoPelicula,videoSeries){
        super(videoMusica,videoPelicula,videoSeries)
    }
    mostrarSeries(){
        document.getElementById('series').innerHTML = `<iframe width="560" height="315" src="${this.videoSeries}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
}

let musica = "https://www.youtube.com/embed/D8YGud-8NFs";
let pelicula = "https://www.youtube.com/embed/wOg0TY1jG3w";
let serie = "https://www.youtube.com/embed/YQeUmSD1c3g";

let videoM = new Musica(musica, pelicula, serie);
let videoP = new Pelicula(musica, pelicula, serie);
let videoS = new Serie(musica, pelicula, serie);

videoM.mostrarMusica();
videoP.mostrarPelicula();
videoS.mostrarSeries();

//Variables privadas
const videos = (() => {
    {
         let musica = document.getElementById('musica');
         let pelicula = document.getElementById('peliculas');
         let series = document.getElementById('series');

         let fpMusica = (vMusica) => {
              musica.insertAdjacentHTML('musica', vMusica);
         };

         let fpPeliculas = (vPelicula) => {
              pelicula.insertAdjacentHTML('película', vPelicula);
         };

         let fpSeries = (vSeries) => {
              series.insertAdjacentHTML('series', vSeries);
         };

         return {
              pfMusica: (musicaV) => {
                   fpMusica(musicaV);
              },
              pfPelicula: (peliculasV) => {
                   fpPeliculas(peliculasV);
              },
              pfSeries: (seriesV) => {
                   fpSeries(seriesV);
              },
         };
    }
})();