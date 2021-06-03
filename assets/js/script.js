class Multimedia {
    constructor(url) {
        let _url = url;
        this.getUrl = () => _url;
        this.setUrl = (nueva_url) => _url = nueva_url;
    }
    get url() {
        return this.getUrl();
    }
    set url(nueva_url) {
        this.setUrl(nueva_url)
    }
    setInicio() {
        return `Este método es para realizar un cambio en la URL del video`
    }
}
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url)
        let _id = id;
        this.getId = () => _id;
        this.setId = (nuevoId) => _id = nuevoId
    }
    get id() {
        return this.getId;
    }
    set id(nueva_id) {
        this.getId(nueva_id)
    }

    setInicio(tiempo1,tiempo2,tiempo3) {
        document.getElementById('musica').innerHTML = `<iframe width="560" height="315" src="${urlMusica}?start=${tiempo1}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
       document.getElementById('peliculas').innerHTML = `<iframe width="560" height="315" src="${urlPelicula}?start=${tiempo2}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
       document.getElementById('series').innerHTML = `<iframe width="560" height="315" src="${urlSerie}?start=${tiempo3}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  
    }
    playMultimedia() {
        mostrarVideo.videoMusica(this.url, this.id());
        mostrarVideo.videoPelicula(this.url, this.id());
        mostrarVideo.videoSerie(this.url, this.id());
    }


}

//Modulo que nos servirá para mostrar el patrón
const mostrarVideo = (() => {
    let musicaV = (urlMusica, idMusica) => {
        idMusica.innerHTML = `<iframe width="560" height="315" src="${urlMusica}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    };
    let peliculaV = (urlPelicula, idPelicula) => {
        idPelicula.innerHTML = `<iframe width="560" height="315" src="${urlPelicula}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    };
    let serieV = (urlSerie, idSerie) => {
        idSerie.innerHTML = `<iframe width="560" height="315" src="${urlSerie}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    };

    return {
        videoMusica: () => {
            musicaV(urlMusica, idMusica)
        },
        videoPelicula: () => {
            peliculaV(urlPelicula, idPelicula)
        },
        videoSerie: () => {
            serieV(urlSerie, idSerie)
        }
    }
})();
//los id y url correspondientes.
let urlMusica = 'https://www.youtube.com/embed/D8YGud-8NFs';
let idMusica = document.getElementById('musica');
let urlPelicula = 'https://www.youtube.com/embed/5PSNL1qE6VY';
let idPelicula = document.getElementById('peliculas');
let urlSerie = 'https://www.youtube.com/embed/YQeUmSD1c3g';
let idSerie = document.getElementById('series');

//instancia de cada uno. 
let musica = new Reproductor(urlMusica, idMusica)
let pelicula = new Reproductor(urlPelicula, idPelicula)
let serie = new Reproductor(urlSerie, idSerie)

//llamada al método
musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();
musica.setInicio(10,15,20)
pelicula.setInicio(10,15,20)
serie.setInicio(10,15,20)
