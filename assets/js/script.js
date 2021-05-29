class Multimedia {
    constructor(url) {
        let _url = url;
        this.getUrl = () => _url;
        this.setUrl = (nueva_url) => _url = nueva_url;

    }
    setInicio() {
        return `Este método es para realizar un cambio en la URL del video`
    }
}
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url, id)
        let _id = id;
        this.getId = () => _id;
        this.setId = (nuevoId) => _id = nuevoId
    }
    playMultimedia(url, id) {
        mostrarVideo.videoMusica(url, id);
        mostrarVideo.videoPelicula(url, id);
        mostrarVideo.videoSerie(url, id);
    }
}

//Modulo que nos servirá para mostrar el patrón
const mostrarVideo = (() => {
    let musicaV = () => {
        idMusica.innerHTML = `<iframe width="560" height="315" src="${urlMusica}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    };
    let peliculaV = () => {
        idPelicula.innerHTML = `<iframe width="560" height="315" src="${urlPelicula}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    };
    let serieV = () => {
        idSerie.innerHTML = `<iframe width="560" height="315" src="${urlSerie}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    };

    return {
        videoMusica: () => {
            musicaV()
        },
        videoPelicula: () => {
            peliculaV()
        },
        videoSerie: () => {
            serieV()
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
musica.playMultimedia(urlMusica, idMusica);
pelicula.playMultimedia(urlPelicula, idPelicula);
serie.playMultimedia(urlSerie, idSerie);