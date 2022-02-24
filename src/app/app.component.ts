import { Component } from '@angular/core';
import data from 'src/assets/json/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interactive-comments-section';

  /*extraccion de datos del json*/
  dataJson: any = data




  constructor() {
    /* LEYENDO LOS DATOS DEL LOCALSTORAGE*/

    /* ------- AMYROBSON ------*/

    //score de amyrobson
    if (localStorage.getItem("scoreMasRobson") === 'false') {
      this.scoreMasRobson = false
    } else {
      if (localStorage.getItem("scoreMasRobson") === 'true') {
        this.scoreMasRobson = true
      }
    }
    if (localStorage.getItem("scoreMenosRobson") === 'false') {
      this.scoreMenosRobson = false
    } else {
      if (localStorage.getItem("scoreMenosRobson") === 'true') {
        this.scoreMenosRobson = true
      }
    }
    var scoreAmyrobson = parseInt(localStorage.getItem("scoreNumberRobson")!)
    if (isNaN(scoreAmyrobson) === false) {
      this.scoreNumberRobson = scoreAmyrobson
    }
    this.filterMasRoobson = localStorage.getItem("filterMasRoobson")!
    this.filterMenosRobson = localStorage.getItem("filterMenosRobson")!

    //respuesta de juliusomo a amyrobson

    if (localStorage.getItem("repleyamyrobson") === 'false') {
      this.repleyamyrobson = false
    }
    if (localStorage.getItem("comentariopublicadoamyrobson") === 'true') {
      this.comentariopublicadoamyrobson = true
    }
    this.inputAmyrobsontxt = localStorage.getItem("inputAmyrobsontxt")
    this.etiquetaParrafo = localStorage.getItem("etiquetaParrafo")!

    //score de juliusomo en respuesta a amyrobson
    if (localStorage.getItem("scoreMasJuliuomo1") === 'false') {
      this.scoreMasJuliuomo1 = false
    } else {
      if (localStorage.getItem("scoreMasJuliuomo1") === 'true') {
        this.scoreMasJuliuomo1 = true
      }
    }
    if (localStorage.getItem("scoreMenossJuliuomo1") === 'false') {
      this.scoreMenossJuliuomo1 = false
    } else {
      if (localStorage.getItem("scoreMenossJuliuomo1") === 'true') {
        this.scoreMenossJuliuomo1 = true
      }
    }
    var scoreJuliusumo1 = parseInt(localStorage.getItem("scorejuliusomo1")!)
    if (isNaN(scoreJuliusumo1) === false) {
      this.scorejuliusomo1 = scoreJuliusumo1
    }
    this.filterMasjuliusomo1 = localStorage.getItem("filterMasjuliusomo1")!
    this.filterMenosjuliusomo1 = localStorage.getItem("filterMenosjuliusomo1")!

    //Tiempo de publicada la respuesta de juliusomo a amyrobson

    this.tiempoDePublicadoRegistro = localStorage.getItem("tiempoDePublicadoRegistro")
    this.tiempoPublicado = this.TiempoPublicado(this.tiempoDePublicadoRegistro);
    setInterval(() => {
      this.tiempoPublicado = this.TiempoPublicado(this.tiempoDePublicadoRegistro);
    }, 60000);

    /* ------- MAXBLAGUN ------*/

    //score de maxblagun

    if (localStorage.getItem("scoreMasMaxblagun") === 'false') {
      this.scoreMasMaxblagun = false
    } else {
      if (localStorage.getItem("scoreMasMaxblagun") === 'true') {
        this.scoreMasMaxblagun = true
      }
    }
    if (localStorage.getItem("scoreMenosMaxblagun") === 'false') {
      this.scoreMenosMaxblagun = false
    } else {
      if (localStorage.getItem("scoreMenosMaxblagun") === 'true') {
        this.scoreMenosMaxblagun = true
      }
    }
    var scoreMaxblagun = parseInt(localStorage.getItem("scoreNumberMaxblagun")!)
    if (isNaN(scoreMaxblagun) === false) {
      this.scoreNumberMaxblagun = scoreMaxblagun
    }
    this.filterMasMaxblagun = localStorage.getItem("filterMasMaxblagun")!
    this.filterMenosMaxblagun = localStorage.getItem("filterMenosMaxblagun")!

    //respuesta de juliusomo a maxblagun
    if (localStorage.getItem("repleyMaxblagun") === 'false') {
      this.repleyMaxblagun = false
    }
    if (localStorage.getItem("comentariopublicadoMaxblagun") === 'true') {
      this.comentariopublicadoMaxblagun = true
    }
    this.inputMaxblaguntxt = localStorage.getItem("inputMaxblaguntxt")
    this.etiquetaParrafoMaxblagun = localStorage.getItem("etiquetaParrafoMaxblagun")!
    //score de la respuesta de juliusomo a maxblagun

    if (localStorage.getItem("scoreMasJuliuomo4") === 'false') {
      this.scoreMasJuliuomo4 = false
    } else {
      if (localStorage.getItem("scoreMasJuliuomo4") === 'true') {
        this.scoreMasJuliuomo4 = true
      }
    }
    if (localStorage.getItem("scoreMenossJuliuomo4") === 'false') {
      this.scoreMenossJuliuomo4 = false
    } else {
      if (localStorage.getItem("scoreMenossJuliuomo4") === 'true') {
        this.scoreMenossJuliuomo4 = true
      }
    }
    var scoreJuliusumo4 = parseInt(localStorage.getItem("scoreNumberJuliusomo4")!)
    if (isNaN(scoreJuliusumo4) === false) {
      this.scoreNumberJuliusomo4 = scoreJuliusumo4
    }
    this.filterMasJuliusomo4 = localStorage.getItem("filterMasJuliusomo4")!
    this.filterMenosJuliusomo4 = localStorage.getItem("filterMenosJuliusomo4")!
    //Tiempo de publicada la respuesta de juliusomo a maxblagun

    this.tiempoDePublicadoRegistroMaxblagun = localStorage.getItem("tiempoDePublicadoRegistroMaxblagun")
    this.tiempoPublicadoMaxblagun = this.TiempoPublicado(this.tiempoDePublicadoRegistroMaxblagun);
    setInterval(() => {
      this.tiempoPublicadoMaxblagun = this.TiempoPublicado(this.tiempoDePublicadoRegistroMaxblagun);
    }, 60000);

    /* ------- Remsesmiro ------*/

    //score de Remsesmiro
    if (localStorage.getItem("scoreMasremsesmiro") === 'false') {
      this.scoreMasremsesmiro = false
    } else {
      if (localStorage.getItem("scoreMasremsesmiro") === 'true') {
        this.scoreMasremsesmiro = true
      }
    }
    if (localStorage.getItem("scoreMenosremsesmiro") === 'false') {
      this.scoreMenosremsesmiro = false
    } else {
      if (localStorage.getItem("scoreMenosremsesmiro") === 'true') {
        this.scoreMenosremsesmiro = true
      }
    }
    var scoreRemsesmiro = parseInt(localStorage.getItem("scoreNumberremsesmiro")!)
    if (isNaN(scoreRemsesmiro) === false) {
      this.scoreNumberremsesmiro = scoreRemsesmiro
    }
    this.filterMasremsesmiro = localStorage.getItem("filterMasremsesmiro")!
    this.filterMenosremsesmiro = localStorage.getItem("filterMenosremsesmiro")!

    //respuesta de juliusomo a remsesmiro

    if (localStorage.getItem("repleyremsesmiro") === 'false') {
      this.repleyremsesmiro = false
    }
    if (localStorage.getItem("comentariopublicadoremsesmiro") === 'true') {
      this.comentariopublicadoremsesmiro = true
    }
    this.inputremsesmirotxt = localStorage.getItem("inputremsesmirotxt")
    this.etiquetaParraforemsesmiro = localStorage.getItem("etiquetaParraforemsesmiro")!

    //score de respuesta de juliusomo a remsesmiro
    if (localStorage.getItem("scoreMasJuliuomo2") === 'false') {
      this.scoreMasJuliuomo2 = false
    } else {
      if (localStorage.getItem("scoreMasJuliuomo2") === 'true') {
        this.scoreMasJuliuomo2 = true
      }
    }
    if (localStorage.getItem("scoreMenossJuliuomo2") === 'false') {
      this.scoreMenossJuliuomo2 = false
    } else {
      if (localStorage.getItem("scoreMenossJuliuomo2") === 'true') {
        this.scoreMenossJuliuomo2 = true
      }
    }
    var scoreJuliusomo2 = parseInt(localStorage.getItem("scoreNumberJuliusomo2")!)
    if (isNaN(scoreJuliusomo2) === false) {
      this.scoreNumberJuliusomo2 = scoreJuliusomo2
    }
    this.filterMasJuliusomo2 = localStorage.getItem("filterMasJuliusomo2")!
    this.filterMenosJuliusomo2 = localStorage.getItem("filterMenosJuliusomo2")!
    //Tiempo de publicada la respuesta de juliusomo a remsesmiro

    this.tiempoDePublicadoRegistroRemsesmiro = localStorage.getItem("tiempoDePublicadoRegistroRemsesmiro")
    this.tiempoPublicadoRemsesmiro = this.TiempoPublicado(this.tiempoDePublicadoRegistroRemsesmiro);
    setInterval(() => {
      this.tiempoPublicadoRemsesmiro = this.TiempoPublicado(this.tiempoDePublicadoRegistroRemsesmiro);
    }, 60000);

    /*----- RESPUESTA YA PUBLIVADA DE JULIUSOMO------*/
    ///contenido
    if (localStorage.getItem("inputJuliusomo3txt") != null) {
      if (this.dataJson.comments[1].replies[1].content != localStorage.getItem("inputJuliusomo3txt")) {
        this.inputJuliusomo3txt = localStorage.getItem("inputJuliusomo3txt")
      } else {
        this.inputJuliusomo3txt = (this.dataJson.comments[1].replies[1].content)
      }
    }
    if (localStorage.getItem("RespuestaYapublicadaDeJuliusomo3") === 'false') {
      this.RespuestaYapublicadaDeJuliusomo3 = false
    }
    //score
    if (localStorage.getItem("scoreMasJuliuomo3") === 'false') {
      this.scoreMasJuliuomo3 = false
    } else {
      if (localStorage.getItem("scoreMasJuliuomo3") === 'true') {
        this.scoreMasJuliuomo3 = true
      }
    }
    if (localStorage.getItem("scoreMenossJuliuomo3") === 'false') {
      this.scoreMenossJuliuomo3 = false
    } else {
      if (localStorage.getItem("scoreMenossJuliuomo3") === 'true') {
        this.scoreMenossJuliuomo3 = true
      }
    }
    var scoreJuliusumo3 = parseInt(localStorage.getItem("scoreNumberJuliusomo3")!)
    if (isNaN(scoreJuliusumo3) === false) {
      this.scoreNumberJuliusomo3 = scoreJuliusumo3
    }
    this.filterMasJuliusomo3 = localStorage.getItem("filterMasJuliusomo3")!
    this.filterMenosJuliusomo3 = localStorage.getItem("filterMenosJuliusomo3")!


    /*-----RESPUESTA GENERAL-----*/

    if (localStorage.getItem("textareaGeneral") === 'false') {
      this.textareaGeneral = false
    }
    if (localStorage.getItem("comentariopublicadoGeneral") === 'true') {
      this.comentarioVisibleGeneral = true
      this.comentariopublicadoGeneral = true
    }
    this.inputGeneraltxt = localStorage.getItem("inputGeneraltxt")!
    // score general

    if (localStorage.getItem("scoreMasGeneral") === 'false') {
      this.scoreMasGeneral = false
    } else {
      if (localStorage.getItem("scoreMasGeneral") === 'true') {
        this.scoreMasGeneral = true
      }
    }
    if (localStorage.getItem("scoreMenosGeneral") === 'false') {
      this.scoreMenosGeneral = false
    } else {
      if (localStorage.getItem("scoreMenosGeneral") === 'true') {
        this.scoreMenosGeneral = true
      }
    }
    var scoreJuliusumo3 = parseInt(localStorage.getItem("scoreGeneral")!)
    if (isNaN(scoreJuliusumo3) === false) {
      this.scoreGeneral = scoreJuliusumo3
    }
    this.filterMasGeneral = localStorage.getItem("filterMasGeneral")!
    this.filterMenosGeneral = localStorage.getItem("filterMenosGeneral")!

    //Tiempo de publicada la respuesta de juliusomo a maxblagun

    this.tiempoDePublicadoRegistroGeneral = localStorage.getItem("tiempoDePublicadoRegistroGeneral")
    this.tiempoPublicadoGeneral = this.TiempoPublicado(this.tiempoDePublicadoRegistroGeneral);
    setInterval(() => {
      this.tiempoPublicadoGeneral = this.TiempoPublicado(this.tiempoDePublicadoRegistroGeneral);
    }, 60000);


  }

  /*----------------------------------------------------------*/
  /* Funciones del Chat de Amyrobson*/

  /* variables para Amyrobson */
  repleyamyrobson: boolean = false
  inputAmyrobsontxt: any = "@Amyrobson "
  comentariopublicadoamyrobson: boolean = false
  comentarioVisibleamyrobson: boolean = true
  comentarioEnActualizacionamyrobson: boolean = false
  cajaTextoamyrobson: string = "cajaTextoamyrobson"
  replyNoreply: string = 'Reply'
  etiquetaParrafo!: string
  tiempoPublicado: any
  tiempoDePublicadoRegistro: any

  //animacion
  opacity!: string
  animationComentar!: string
  animationComentarioPublicadoEliminado!: string

  /*variables score*/
  scoreMasRobson: boolean = false
  scoreMenosRobson: boolean = false
  filterMasRoobson!: string
  filterMenosRobson!: string
  scoreNumberRobson: number = (this.dataJson.comments[0].score)


  /*funcion para responder a un mensaje*/

  Replyamyrobson() {
    if (this.comentariopublicadoamyrobson === true) {
      this.opacity = '35%'
      setTimeout(() => {
        this.opacity = '100%'
      }, 600);
    } else {
      if (this.repleyamyrobson === true) {
        this.animationComentar = 'AnimationPublicarComentClosed'
        setTimeout(() => {
          this.repleyamyrobson = false
        }, 500);
        this.replyNoreply = 'Reply'
      } else {
        this.animationComentar = 'AnimationPublicarComentOpen'
        this.repleyamyrobson = true
        this.inputAmyrobsontxt = "@Amyrobson "
        this.repleyamyrobson = true
        setTimeout(() => {
          let cajaDeTexto = document.getElementById(this.cajaTextoamyrobson) as HTMLImageElement;
          cajaDeTexto.focus()
        }, 100);
        this.replyNoreply = 'No Reply'
      }
    }
  }

  /*funcion para publicar un mensaje*/

  PublicarComentarioamyrobson() {
    if (this.inputAmyrobsontxt != '') {
      let arr = this.inputAmyrobsontxt.split(' ');//convertimos el parrafo a array
      let etiqueta = arr.shift()//extraemos la primera palabra o etiqueta
      /*identificamos que  la etiqueta sea verdadera*/
      if ((etiqueta.substr(0, 1)) === "@") {
        this.etiquetaParrafo = etiqueta//le damos la etiqueta a la vaiable q se mostrara
        let stringtxt = arr.toString()//convertimos a string el resto
        let txt = stringtxt.replace(/,/g, " ");//reemplazamos las comas por espacios
        this.inputAmyrobsontxt = txt//pasamos el texto  arreglado a la variable que lo mostrara
      } else {
        this.etiquetaParrafo = ''
      }
      this.animationComentar = 'AnimationPublicarComentClosed'
      setTimeout(() => {
        this.repleyamyrobson = false
        this.comentariopublicadoamyrobson = true
        this.animationComentarioPublicadoEliminado = 'AnimationComentPublicado'
        //score
        this.scorejuliusomo1 = 0
        this.filterMasjuliusomo1 = 'none'
        this.filterMenosjuliusomo1 = 'none'
        this.scoreMasJuliuomo1 = false
        this.scoreMenossJuliuomo1 = false
        //actualizacion
        this.comentarioVisibleamyrobson = true
        this.comentarioEnActualizacionamyrobson = false
        this.replyNoreply = 'Reply'

        /*enviamos los datos al localstorage*/
        localStorage.setItem("repleyamyrobson", 'false')
        localStorage.setItem("comentariopublicadoamyrobson", 'true')
        localStorage.setItem("etiquetaParrafo", this.etiquetaParrafo)
        localStorage.setItem("inputAmyrobsontxt", this.inputAmyrobsontxt)

      }, 500);

      this.tiempoDePublicadoRegistro = Date.now()
      localStorage.setItem("tiempoDePublicadoRegistro", this.tiempoDePublicadoRegistro)
      this.tiempoPublicado = 0 + " minutes ago"
      setInterval(() => {
        this.tiempoPublicado = this.TiempoPublicado(this.tiempoDePublicadoRegistro);
      }, 60000);
    } else {
      let cajaDeTexto = document.getElementById(this.cajaTextoamyrobson) as HTMLImageElement;
      cajaDeTexto.focus()
    }

  }

  /*funcion para actualizar un mensaje*/

  updateamyrobson() {
    if (this.inputAmyrobsontxt != '') {
      this.comentarioEnActualizacionamyrobson = false;
      this.comentarioVisibleamyrobson = true
      localStorage.setItem("inputAmyrobsontxt", this.inputAmyrobsontxt)
    } else {
      let cajaDeTexto = document.getElementById(this.cajaTextoamyrobson) as HTMLImageElement;
      cajaDeTexto.focus()
    }
  }

  /*funcion para eliminar un mensaje*/

  alertaEliminaramyrobson() {
    this.ventanaAlerta = true
    this.comentarioEnEliminacion = 'amyrobson'
    this.animationAlert = 'AnimationAlertOpen'
    this.animationFondoAlert = 'AnimationopacityFondoOpen'
  }

  /*Funciones Score*/

  ScoreMasAmyrobson() {
    if (this.scoreMasRobson === false) {
      this.filterMasRoobson = 'contrast(0%) hue-rotate(100deg)'
      if (this.scoreMenosRobson === true) {
        this.scoreNumberRobson = this.scoreNumberRobson + 2
        this.filterMenosRobson = 'none'
        this.scoreMenosRobson = false
        this.scoreMasRobson = true
      } else {
        this.scoreMasRobson = true
        this.scoreNumberRobson = this.scoreNumberRobson + 1
      }
    } else {
      this.filterMasRoobson = 'none'
      this.scoreMasRobson = false
      this.scoreNumberRobson = this.scoreNumberRobson - 1
    }
    /*enviaos los datos al localstorage*/
    localStorage.setItem("scoreMasRobson", this.scoreMasRobson.toString())
    localStorage.setItem("scoreMenosRobson", this.scoreMenosRobson.toString())
    localStorage.setItem("scoreNumberRobson", this.scoreNumberRobson.toString())
    localStorage.setItem("filterMasRoobson", this.filterMasRoobson)
    localStorage.setItem("filterMenosRobson", this.filterMenosRobson)
  }

  ScoreMenosAmyrobson() {
    if (this.scoreMenosRobson === false) {
      this.filterMenosRobson = 'contrast(0%) hue-rotate(100deg)'
      if (this.scoreMasRobson === true) {
        this.filterMasRoobson = 'none'
        this.scoreNumberRobson = this.scoreNumberRobson - 2
        this.scoreMasRobson = false
        this.scoreMenosRobson = true
      } else {
        this.scoreMenosRobson = true
        this.scoreNumberRobson = this.scoreNumberRobson - 1
      }
    } else {
      this.filterMenosRobson = 'none'
      this.scoreMenosRobson = false
      this.scoreNumberRobson = this.scoreNumberRobson + 1
    }
    /*enviaos los datos al localstorage*/
    localStorage.setItem("scoreMasRobson", this.scoreMasRobson.toString())
    localStorage.setItem("scoreMenosRobson", this.scoreMenosRobson.toString())
    localStorage.setItem("scoreNumberRobson", this.scoreNumberRobson.toString())
    localStorage.setItem("filterMasRoobson", this.filterMasRoobson)
    localStorage.setItem("filterMenosRobson", this.filterMenosRobson)
  }

  /*----------------------------------------------------------*/
  /* Funciones del Chat de Maxblagun*/

  /*Variables Maxblagun*/

  /* variables para Maxblagun */
  repleyMaxblagun: boolean = false
  inputMaxblaguntxt: any = "@Maxblagun "
  comentariopublicadoMaxblagun: boolean = false
  comentarioVisibleMaxblagun: boolean = true
  comentarioEnActualizacionMaxblagun: boolean = false
  cajaTextoMaxblagun: string = "cajaTextoMaxblagun"
  replyNoreplyMaxblagun: string = 'Reply'
  etiquetaParrafoMaxblagun!: string
  tiempoDePublicadoRegistroMaxblagun: any
  tiempoPublicadoMaxblagun: any
  //animacion
  opacityMaxblagun!: string
  animationComentarMaxblagun!: string
  animationComentarioPublicadoEliminadoMaxblagun!: string


  scoreMasMaxblagun: boolean = false
  scoreMenosMaxblagun: boolean = false
  filterMasMaxblagun!: string
  filterMenosMaxblagun!: string
  scoreNumberMaxblagun: number = (this.dataJson.comments[1].score)

  /*Funciones Score*/

  ScoreMasMaxblagun() {
    if (this.scoreMasMaxblagun === false) {
      this.filterMasMaxblagun = 'contrast(0%) hue-rotate(100deg)'
      if (this.scoreMenosMaxblagun === true) {
        this.scoreNumberMaxblagun = this.scoreNumberMaxblagun + 2
        this.filterMenosMaxblagun = 'none'
        this.scoreMenosMaxblagun = false
        this.scoreMasMaxblagun = true
      } else {
        this.scoreMasMaxblagun = true
        this.scoreNumberMaxblagun = this.scoreNumberMaxblagun + 1
      }
    } else {
      this.filterMasMaxblagun = 'none'
      this.scoreMasMaxblagun = false
      this.scoreNumberMaxblagun = this.scoreNumberMaxblagun - 1
    }
    /*enviaos los datos al localstorage*/
    localStorage.setItem("scoreMasMaxblagun", this.scoreMasMaxblagun.toString())
    localStorage.setItem("scoreMenosMaxblagun", this.scoreMenosMaxblagun.toString())
    localStorage.setItem("scoreNumberMaxblagun", this.scoreNumberMaxblagun.toString())
    localStorage.setItem("filterMasMaxblagun", this.filterMasMaxblagun)
    localStorage.setItem("filterMenosMaxblagun", this.filterMenosMaxblagun)
  }

  ScoreMenosMaxblagun() {
    if (this.scoreMenosMaxblagun === false) {
      this.filterMenosMaxblagun = 'contrast(0%) hue-rotate(100deg)'
      if (this.scoreMasMaxblagun === true) {
        this.filterMasMaxblagun = 'none'
        this.scoreNumberMaxblagun = this.scoreNumberMaxblagun - 2
        this.scoreMasMaxblagun = false
        this.scoreMenosMaxblagun = true
      } else {
        this.scoreMenosMaxblagun = true
        this.scoreNumberMaxblagun = this.scoreNumberMaxblagun - 1
      }
    } else {
      this.filterMenosMaxblagun = 'none'
      this.scoreMenosMaxblagun = false
      this.scoreNumberMaxblagun = this.scoreNumberMaxblagun + 1
    }
    /*enviaos los datos al localstorage*/
    localStorage.setItem("scoreMasMaxblagun", this.scoreMasMaxblagun.toString())
    localStorage.setItem("scoreMenosMaxblagun", this.scoreMenosMaxblagun.toString())
    localStorage.setItem("scoreNumberMaxblagun", this.scoreNumberMaxblagun.toString())
    localStorage.setItem("filterMasMaxblagun", this.filterMasMaxblagun)
    localStorage.setItem("filterMenosMaxblagun", this.filterMenosMaxblagun)
  }

  PublicarComentarioMaxblagun() {
    if (this.inputMaxblaguntxt != '') {
      let arr = this.inputMaxblaguntxt.split(' ');//convertimos el parrafo a array
      let etiqueta = arr.shift()//extraemos la primera palabra o etiqueta
      /*identificamos que  la etiqueta sea verdadera*/
      if ((etiqueta.substr(0, 1)) === "@") {
        this.etiquetaParrafoMaxblagun = etiqueta//le damos la etiqueta a la vaiable q se mostrara
        let stringtxt = arr.toString()//convertimos a string el resto
        let txt = stringtxt.replace(/,/g, " ");//reemplazamos las comas por espacios
        this.inputMaxblaguntxt = txt//pasamos el texto  arreglado a la variable que lo mostrara
      } else {
        this.etiquetaParrafoMaxblagun = ''
      }
      this.animationComentarMaxblagun = 'AnimationPublicarComentClosed'
      setTimeout(() => {
        this.repleyMaxblagun = false
        this.comentariopublicadoMaxblagun = true
        this.animationComentarioPublicadoEliminadoMaxblagun = 'AnimationComentPublicado'
        //score
        this.scoreNumberJuliusomo4 = 0
        this.filterMasJuliusomo4 = 'none'
        this.filterMenosJuliusomo4 = 'none'
        this.scoreMasJuliuomo4 = false
        this.scoreMenossJuliuomo4 = false
        //actualizacion
        this.comentarioVisibleMaxblagun = true
        this.comentarioEnActualizacionMaxblagun = false
        this.replyNoreplyMaxblagun = 'Reply'
        /*enviamos los datos al localstorage*/
        localStorage.setItem("repleyMaxblagun", 'false')
        localStorage.setItem("comentariopublicadoMaxblagun", 'true')
        localStorage.setItem("etiquetaParrafoMaxblagun", this.etiquetaParrafoMaxblagun)
        localStorage.setItem("inputMaxblaguntxt", this.inputMaxblaguntxt)

      }, 500);
      this.tiempoDePublicadoRegistroMaxblagun = Date.now()
      localStorage.setItem("tiempoDePublicadoRegistroMaxblagun",this.tiempoDePublicadoRegistroMaxblagun)
      this.tiempoPublicadoMaxblagun = 0 + " minutes ago"
      setInterval(() => {
        this.tiempoPublicadoMaxblagun = this.TiempoPublicado(this.tiempoDePublicadoRegistroMaxblagun);
      }, 60000);

    } else {
      let cajaDeTexto = document.getElementById(this.cajaTextoamyrobson) as HTMLImageElement;
      cajaDeTexto.focus()
    }

  }

  ReplyMaxblagun() {
    if (this.comentariopublicadoMaxblagun === true) {
      this.opacityMaxblagun = '35%'
      setTimeout(() => {
        this.opacityMaxblagun = '100%'
      }, 600);
    } else {
      if (this.repleyMaxblagun === true) {
        this.animationComentarMaxblagun = 'AnimationPublicarComentClosed'
        setTimeout(() => {
          this.repleyMaxblagun = false
        }, 500);
        this.replyNoreplyMaxblagun = 'Reply'
      } else {
        this.animationComentarMaxblagun = 'AnimationPublicarComentOpen'
        this.repleyMaxblagun = true
        this.inputMaxblaguntxt = "@Maxblagun "
        this.repleyMaxblagun = true
        setTimeout(() => {
          let cajaDeTexto = document.getElementById(this.cajaTextoMaxblagun) as HTMLImageElement;
          cajaDeTexto.focus()
        }, 100);
        this.replyNoreplyMaxblagun = 'No Reply'
      }
    }
  }
  /*funcion para actualizar un mensaje*/

  updateMaxblagun() {
    if (this.inputMaxblaguntxt != '') {
      this.comentarioEnActualizacionMaxblagun = false;
      this.comentarioVisibleMaxblagun = true
      localStorage.setItem("inputMaxblaguntxt", this.inputMaxblaguntxt)
    } else {
      let cajaDeTexto = document.getElementById(this.cajaTextoMaxblagun) as HTMLImageElement;
      cajaDeTexto.focus()
    }
  }

  /*funcion para eliminar un mensaje*/

  alertaEliminarMaxblagun() {
    this.ventanaAlerta = true
    this.comentarioEnEliminacion = 'Maxblagun'
    this.animationAlert = 'AnimationAlertOpen'
    this.animationFondoAlert = 'AnimationopacityFondoOpen'
  }

  /*----------------------------------------------------------*/
  /* Funciones del Chat de remsesmiro*/

  /*Variables remsesmiro*/
  comentariopublicadoremsesmiro!: boolean
  repleyremsesmiro!: boolean
  inputremsesmirotxt: any
  replyNoreplyremsesmiro: string = 'Reply'
  cajaTextoremsesmiro: string = 'cajaTextoremsesmiro'
  etiquetaParraforemsesmiro!: string
  comentarioVisibleremsesmiro: boolean = true
  comentarioEnActualizacionremsesmiro: boolean = false
  tiempoDePublicadoRegistroRemsesmiro: any
  tiempoPublicadoRemsesmiro: any
  //animaciones
  animationComentarremsesmiro!: string
  animationComentarioPublicadoEliminadoremsesmiro!: string
  opacityremsesmiro!: string
  /*variables score*/
  scoreMasremsesmiro: boolean = false
  scoreMenosremsesmiro: boolean = false
  filterMasremsesmiro!: string
  filterMenosremsesmiro!: string
  scoreNumberremsesmiro: number = (this.dataJson.comments[1].replies[0].score)

  /*Funciones Score*/

  ScoreMasremsesmiro() {
    if (this.scoreMasremsesmiro === false) {
      this.filterMasremsesmiro = 'contrast(0%) hue-rotate(100deg)'
      if (this.scoreMenosremsesmiro === true) {
        this.scoreNumberremsesmiro = this.scoreNumberremsesmiro + 2
        this.filterMenosremsesmiro = 'none'
        this.scoreMenosremsesmiro = false
        this.scoreMasremsesmiro = true
      } else {
        this.scoreMasremsesmiro = true
        this.scoreNumberremsesmiro = this.scoreNumberremsesmiro + 1
      }
    } else {
      this.filterMasremsesmiro = 'none'
      this.scoreMasremsesmiro = false
      this.scoreNumberremsesmiro = this.scoreNumberremsesmiro - 1
    }
    /*enviaos los datos al localstorage*/
    localStorage.setItem("scoreMasremsesmiro", this.scoreMasremsesmiro.toString())
    localStorage.setItem("scoreMenosremsesmiro", this.scoreMenosremsesmiro.toString())
    localStorage.setItem("scoreNumberremsesmiro", this.scoreNumberremsesmiro.toString())
    localStorage.setItem("filterMasremsesmiro", this.filterMasremsesmiro)
    localStorage.setItem("filterMenosremsesmiro", this.filterMenosremsesmiro)
  }

  ScoreMenosremsesmiro() {
    if (this.scoreMenosremsesmiro === false) {
      this.filterMenosremsesmiro = 'contrast(0%) hue-rotate(100deg)'
      if (this.scoreMasremsesmiro === true) {
        this.filterMasremsesmiro = 'none'
        this.scoreNumberremsesmiro = this.scoreNumberremsesmiro - 2
        this.scoreMasremsesmiro = false
        this.scoreMenosremsesmiro = true
      } else {
        this.scoreMenosremsesmiro = true
        this.scoreNumberremsesmiro = this.scoreNumberremsesmiro - 1
      }
    } else {
      this.filterMenosremsesmiro = 'none'
      this.scoreMenosremsesmiro = false
      this.scoreNumberremsesmiro = this.scoreNumberremsesmiro + 1
    }
    /*enviaos los datos al localstorage*/
    localStorage.setItem("scoreMasremsesmiro", this.scoreMasremsesmiro.toString())
    localStorage.setItem("scoreMenosremsesmiro", this.scoreMenosremsesmiro.toString())
    localStorage.setItem("scoreNumberremsesmiro", this.scoreNumberremsesmiro.toString())
    localStorage.setItem("filterMasremsesmiro", this.filterMasremsesmiro)
    localStorage.setItem("filterMenosremsesmiro", this.filterMenosremsesmiro)
  }

  /*funcion para responder un mensaje*/

  Replyremsesmiro() {
    if (this.comentariopublicadoremsesmiro === true) {
      this.opacityremsesmiro = '35%'
      setTimeout(() => {
        this.opacityremsesmiro = '100%'
      }, 600);
    } else {
      if (this.repleyremsesmiro === true) {
        this.animationComentarremsesmiro = 'AnimationPublicarComentClosed'
        setTimeout(() => {
          this.repleyremsesmiro = false
        }, 500);
        this.replyNoreplyremsesmiro = 'Reply'
      } else {
        this.animationComentarremsesmiro = 'AnimationPublicarComentOpen'
        this.repleyremsesmiro = true
        this.inputremsesmirotxt = "@ramsesmiron "
        this.repleyremsesmiro = true
        setTimeout(() => {
          let cajaDeTexto = document.getElementById(this.cajaTextoremsesmiro) as HTMLImageElement;
          cajaDeTexto.focus()
        }, 100);
        this.replyNoreplyremsesmiro = 'No Reply'
      }
    }
  }

  /*funcion para publicar un mensaje*/

  PublicarComentarioremsesmiro() {
    if (this.inputremsesmirotxt != '') {
      let arr = this.inputremsesmirotxt.split(' ');//convertimos el parrafo a array
      let etiqueta = arr.shift()//extraemos la primera palabra o etiqueta
      /*identificamos que  la etiqueta sea verdadera*/
      if ((etiqueta.substr(0, 1)) === "@") {
        this.etiquetaParraforemsesmiro = etiqueta//le damos la etiqueta a la vaiable q se mostrara
        let stringtxt = arr.toString()//convertimos a string el resto
        let txt = stringtxt.replace(/,/g, " ");//reemplazamos las comas por espacios
        this.inputremsesmirotxt = txt//pasamos el texto  arreglado a la variable que lo mostrara
      } else {
        this.etiquetaParraforemsesmiro = ''
      }
      this.animationComentarremsesmiro = 'AnimationPublicarComentClosed'
      setTimeout(() => {
        this.repleyremsesmiro = false
        this.comentariopublicadoremsesmiro = true
        this.animationComentarioPublicadoEliminadoremsesmiro = 'AnimationComentPublicado'
        //score
        this.scoreNumberJuliusomo2 = 0
        this.filterMasJuliusomo2 = 'none'
        this.filterMenosJuliusomo2 = 'none'
        this.scoreMasJuliuomo2 = false
        this.scoreMenossJuliuomo2 = false
        //actualiazar
        this.comentarioVisibleremsesmiro = true
        this.comentarioEnActualizacionremsesmiro = false
        this.replyNoreplyremsesmiro = 'Reply'
        /*enviamos los datos al localstorage*/
        localStorage.setItem("repleyremsesmiro", 'false')
        localStorage.setItem("comentariopublicadoremsesmiro", 'true')
        localStorage.setItem("etiquetaParraforemsesmiro", this.etiquetaParraforemsesmiro)
        localStorage.setItem("inputremsesmirotxt", this.inputremsesmirotxt)

      }, 500);

      this.tiempoDePublicadoRegistroRemsesmiro = Date.now()
      localStorage.setItem("tiempoDePublicadoRegistroRemsesmiro",this.tiempoDePublicadoRegistroRemsesmiro)
      this.tiempoPublicadoRemsesmiro = 0 + " minutes ago"
      setInterval(() => {
        this.tiempoPublicadoRemsesmiro = this.TiempoPublicado(this.tiempoDePublicadoRegistroRemsesmiro);
      }, 60000);

    } else {
      let cajaDeTexto = document.getElementById(this.cajaTextoremsesmiro) as HTMLImageElement;
      cajaDeTexto.focus()
    }

  }

  /*funcion para actualizar un mensaje*/

  updateremsesmiro() {
    if (this.inputremsesmirotxt != '') {
      this.comentarioEnActualizacionremsesmiro = false;
      this.comentarioVisibleremsesmiro = true
      localStorage.setItem("inputremsesmirotxt", this.inputremsesmirotxt)

    } else {
      let cajaDeTexto = document.getElementById(this.cajaTextoremsesmiro) as HTMLImageElement;
      cajaDeTexto.focus()
    }
  }

  /*funcion para eliminar un mensaje*/

  alertaEliminarremsesmiro() {
    this.ventanaAlerta = true
    this.comentarioEnEliminacion = 'remsesmiro'
    this.animationAlert = 'AnimationAlertOpen'
    this.animationFondoAlert = 'AnimationopacityFondoOpen'
  }

  /*-----------------------------------------------------------------*/
  /*Comentario ya publicado de juliusomo*/

  /*Variables */
  /*score juliusomo1*/
  scorejuliusomo1: number = 0
  filterMasjuliusomo1!: string
  filterMenosjuliusomo1!: string
  scoreMasJuliuomo1: boolean = false
  scoreMenossJuliuomo1: boolean = false
  /*score juliusomo2*/
  scoreNumberJuliusomo2: number = 0
  scoreMasJuliuomo2: boolean = false
  scoreMenossJuliuomo2: boolean = false
  filterMasJuliusomo2!: string
  filterMenosJuliusomo2!: string
  /*score juliusomo3*/
  scoreNumberJuliusomo3: number = (this.dataJson.comments[1].replies[1].score)
  scoreMasJuliuomo3: boolean = false
  scoreMenossJuliuomo3: boolean = false
  filterMasJuliusomo3!: string
  filterMenosJuliusomo3!: string
  /*score juliusomo4*/
  scoreNumberJuliusomo4: number = 0
  scoreMasJuliuomo4: boolean = false
  scoreMenossJuliuomo4: boolean = false
  filterMasJuliusomo4!: string
  filterMenosJuliusomo4!: string
  /*score General*/
  scoreGeneral: number = 0
  filterMasGeneral!: string
  filterMenosGeneral!: string
  scoreMasGeneral: boolean = false
  scoreMenosGeneral: boolean = false

  /*--*/
  inputJuliusomo3txt: any = this.dataJson.comments[1].replies[1].content
  etiquetaParrafoJuliusomo3: string = '@ramsesmiron'
  cajaTextoJuliusomo3txt: string = 'cajaTextoJuliusomo3txt'
  RespuestaYapublicadaDeJuliusomo3: boolean = true
  animationComentarioPublicadoEliminadoJuliusomo3!: string
  comentarioVisibleJuliusomo3: boolean = true
  comentarioEnActualizacionJuliusomo3: boolean = false

  /*Funciones score juliusumo1*/
  ScoreMasjuliusomo1() {
    if (this.scoreMasJuliuomo1 === false) {
      this.filterMasjuliusomo1 = 'contrast(0%) hue-rotate(100deg)'
      if (this.scoreMenossJuliuomo1 === true) {
        this.scorejuliusomo1 = this.scorejuliusomo1 + 2
        this.filterMenosjuliusomo1 = 'none'
        this.scoreMenossJuliuomo1 = false
        this.scoreMasJuliuomo1 = true
      } else {
        this.scoreMasJuliuomo1 = true
        this.scorejuliusomo1 = this.scorejuliusomo1 + 1
      }
    } else {
      this.filterMasjuliusomo1 = 'none'
      this.scoreMasJuliuomo1 = false
      this.scorejuliusomo1 = this.scorejuliusomo1 - 1
    }
    /*enviaos los datos al localstorage*/
    localStorage.setItem("scoreMasJuliuomo1", this.scoreMasJuliuomo1.toString())
    localStorage.setItem("scoreMenossJuliuomo1", this.scoreMenossJuliuomo1.toString())
    localStorage.setItem("scorejuliusomo1", this.scorejuliusomo1.toString())
    localStorage.setItem("filterMasjuliusomo1", this.filterMasjuliusomo1)
    localStorage.setItem("filterMenosjuliusomo1", this.filterMenosjuliusomo1)
  }
  ScoreMenosjuliusomo1() {
    if (this.scoreMenossJuliuomo1 === false) {
      this.filterMenosjuliusomo1 = 'contrast(0%) hue-rotate(100deg)'
      if (this.scoreMasJuliuomo1 === true) {
        this.filterMasjuliusomo1 = 'none'
        this.scorejuliusomo1 = this.scorejuliusomo1 - 2
        this.scoreMasJuliuomo1 = false
        this.scoreMenossJuliuomo1 = true
      } else {
        this.scoreMenossJuliuomo1 = true
        this.scorejuliusomo1 = this.scorejuliusomo1 - 1
      }
    } else {
      this.filterMenosjuliusomo1 = 'none'
      this.scoreMenossJuliuomo1 = false
      this.scorejuliusomo1 = this.scorejuliusomo1 + 1
    }
    /*enviaos los datos al localstorage*/
    localStorage.setItem("scoreMasJuliuomo1", this.scoreMasJuliuomo1.toString())
    localStorage.setItem("scoreMenossJuliuomo1", this.scoreMenossJuliuomo1.toString())
    localStorage.setItem("scorejuliusomo1", this.scorejuliusomo1.toString())
    localStorage.setItem("filterMasjuliusomo1", this.filterMasjuliusomo1)
    localStorage.setItem("filterMenosjuliusomo1", this.filterMenosjuliusomo1)
  }
  /*Funciones score juliusomo2*/

  ScoreMasJuliusomo2() {
    if (this.scoreMasJuliuomo2 === false) {
      this.filterMasJuliusomo2 = 'contrast(0%) hue-rotate(100deg)'
      if (this.scoreMenossJuliuomo2 === true) {
        this.scoreNumberJuliusomo2 = this.scoreNumberJuliusomo2 + 2
        this.filterMenosJuliusomo2 = 'none'
        this.scoreMenossJuliuomo2 = false
        this.scoreMasJuliuomo2 = true
      } else {
        this.scoreMasJuliuomo2 = true
        this.scoreNumberJuliusomo2 = this.scoreNumberJuliusomo2 + 1
      }
    } else {
      this.filterMasJuliusomo2 = 'none'
      this.scoreMasJuliuomo2 = false
      this.scoreNumberJuliusomo2 = this.scoreNumberJuliusomo2 - 1
    }
    /*enviaos los datos al localstorage*/
    localStorage.setItem("scoreMasJuliuomo2", this.scoreMasJuliuomo2.toString())
    localStorage.setItem("scoreMenossJuliuomo2", this.scoreMenossJuliuomo2.toString())
    localStorage.setItem("scoreNumberJuliusomo2", this.scoreNumberJuliusomo2.toString())
    localStorage.setItem("filterMasJuliusomo2", this.filterMasJuliusomo2)
    localStorage.setItem("filterMenosJuliusomo2", this.filterMenosJuliusomo2)
  }
  ScoreMenosJuliusomo2() {
    if (this.scoreMenossJuliuomo2 === false) {
      this.filterMenosJuliusomo2 = 'contrast(0%) hue-rotate(100deg)'
      if (this.scoreMasJuliuomo2 === true) {
        this.filterMasJuliusomo2 = 'none'
        this.scoreNumberJuliusomo2 = this.scoreNumberJuliusomo2 - 2
        this.scoreMasJuliuomo2 = false
        this.scoreMenossJuliuomo2 = true
      } else {
        this.scoreMenossJuliuomo2 = true
        this.scoreNumberJuliusomo2 = this.scoreNumberJuliusomo2 - 1
      }
    } else {
      this.filterMenosJuliusomo2 = 'none'
      this.scoreMenossJuliuomo2 = false
      this.scoreNumberJuliusomo2 = this.scoreNumberJuliusomo2 + 1
    }
    /*enviaos los datos al localstorage*/
    localStorage.setItem("scoreMasJuliuomo2", this.scoreMasJuliuomo2.toString())
    localStorage.setItem("scoreMenossJuliuomo2", this.scoreMenossJuliuomo2.toString())
    localStorage.setItem("scoreNumberJuliusomo2", this.scoreNumberJuliusomo2.toString())
    localStorage.setItem("filterMasJuliusomo2", this.filterMasJuliusomo2)
    localStorage.setItem("filterMenosJuliusomo2", this.filterMenosJuliusomo2)
  }
  /*Funciones score juliusomo3*/

  ScoreMasJuliusomo3() {
    if (this.scoreMasJuliuomo3 === false) {
      this.filterMasJuliusomo3 = 'contrast(0%) hue-rotate(100deg)'
      if (this.scoreMenossJuliuomo3 === true) {
        this.scoreNumberJuliusomo3 = this.scoreNumberJuliusomo3 + 2
        this.filterMenosJuliusomo3 = 'none'
        this.scoreMenossJuliuomo3 = false
        this.scoreMasJuliuomo3 = true
      } else {
        this.scoreMasJuliuomo3 = true
        this.scoreNumberJuliusomo3 = this.scoreNumberJuliusomo3 + 1
      }
    } else {
      this.filterMasJuliusomo3 = 'none'
      this.scoreMasJuliuomo3 = false
      this.scoreNumberJuliusomo3 = this.scoreNumberJuliusomo3 - 1
    }
    /*enviaos los datos al localstorage*/
    localStorage.setItem("scoreMasJuliuomo3", this.scoreMasJuliuomo3.toString())
    localStorage.setItem("scoreMenossJuliuomo3", this.scoreMenossJuliuomo3.toString())
    localStorage.setItem("scoreNumberJuliusomo3", this.scoreNumberJuliusomo3.toString())
    localStorage.setItem("filterMasJuliusomo3", this.filterMasJuliusomo3)
    localStorage.setItem("filterMenosJuliusomo3", this.filterMenosJuliusomo3)
  }
  ScoreMenosJuliusomo3() {
    if (this.scoreMenossJuliuomo3 === false) {
      this.filterMenosJuliusomo3 = 'contrast(0%) hue-rotate(100deg)'
      if (this.scoreMasJuliuomo3 === true) {
        this.filterMasJuliusomo3 = 'none'
        this.scoreNumberJuliusomo3 = this.scoreNumberJuliusomo3 - 2
        this.scoreMasJuliuomo3 = false
        this.scoreMenossJuliuomo3 = true
      } else {
        this.scoreMenossJuliuomo3 = true
        this.scoreNumberJuliusomo3 = this.scoreNumberJuliusomo3 - 1
      }
    } else {
      this.filterMenosJuliusomo3 = 'none'
      this.scoreMenossJuliuomo3 = false
      this.scoreNumberJuliusomo3 = this.scoreNumberJuliusomo3 + 1
    }
    /*enviaos los datos al localstorage*/
    localStorage.setItem("scoreMasJuliuomo3", this.scoreMasJuliuomo3.toString())
    localStorage.setItem("scoreMenossJuliuomo3", this.scoreMenossJuliuomo3.toString())
    localStorage.setItem("scoreNumberJuliusomo3", this.scoreNumberJuliusomo3.toString())
    localStorage.setItem("filterMasJuliusomo3", this.filterMasJuliusomo3)
    localStorage.setItem("filterMenosJuliusomo3", this.filterMenosJuliusomo3)
  }
  /*Funciones score juliusomo4*/

  ScoreMasJuliusomo4() {
    if (this.scoreMasJuliuomo4 === false) {
      this.filterMasJuliusomo4 = 'contrast(0%) hue-rotate(100deg)'
      if (this.scoreMenossJuliuomo4 === true) {
        this.scoreNumberJuliusomo4 = this.scoreNumberJuliusomo4 + 2
        this.filterMenosJuliusomo4 = 'none'
        this.scoreMenossJuliuomo4 = false
        this.scoreMasJuliuomo4 = true
      } else {
        this.scoreMasJuliuomo4 = true
        this.scoreNumberJuliusomo4 = this.scoreNumberJuliusomo4 + 1
      }
    } else {
      this.filterMasJuliusomo4 = 'none'
      this.scoreMasJuliuomo4 = false
      this.scoreNumberJuliusomo4 = this.scoreNumberJuliusomo4 - 1
    }
    /*enviaos los datos al localstorage*/
    localStorage.setItem("scoreMasJuliuomo4", this.scoreMasJuliuomo4.toString())
    localStorage.setItem("scoreMenossJuliuomo4", this.scoreMenossJuliuomo4.toString())
    localStorage.setItem("scoreNumberJuliusomo4", this.scoreNumberJuliusomo4.toString())
    localStorage.setItem("filterMasJuliusomo4", this.filterMasJuliusomo4)
    localStorage.setItem("filterMenosJuliusomo4", this.filterMenosJuliusomo4)
  }

  ScoreMenosJuliusomo4() {
    if (this.scoreMenossJuliuomo4 === false) {
      this.filterMenosJuliusomo4 = 'contrast(0%) hue-rotate(100deg)'
      if (this.scoreMasJuliuomo4 === true) {
        this.filterMasJuliusomo4 = 'none'
        this.scoreNumberJuliusomo4 = this.scoreNumberJuliusomo4 - 2
        this.scoreMasJuliuomo4 = false
        this.scoreMenossJuliuomo4 = true
      } else {
        this.scoreMenossJuliuomo4 = true
        this.scoreNumberJuliusomo4 = this.scoreNumberJuliusomo4 - 1
      }
    } else {
      this.filterMenosJuliusomo4 = 'none'
      this.scoreMenossJuliuomo4 = false
      this.scoreNumberJuliusomo4 = this.scoreNumberJuliusomo4 + 1
    }
    /*enviaos los datos al localstorage*/
    localStorage.setItem("scoreMasJuliuomo4", this.scoreMasJuliuomo4.toString())
    localStorage.setItem("scoreMenossJuliuomo4", this.scoreMenossJuliuomo4.toString())
    localStorage.setItem("scoreNumberJuliusomo4", this.scoreNumberJuliusomo4.toString())
    localStorage.setItem("filterMasJuliusomo4", this.filterMasJuliusomo4)
    localStorage.setItem("filterMenosJuliusomo4", this.filterMenosJuliusomo4)
  }
  /*Funciones score General*/

  ScoreMasGeneral() {
    if (this.scoreMasGeneral === false) {
      this.filterMasGeneral = 'contrast(0%) hue-rotate(100deg)'
      if (this.scoreMenosGeneral === true) {
        this.scoreGeneral = this.scoreGeneral + 2
        this.filterMenosGeneral = 'none'
        this.scoreMenosGeneral = false
        this.scoreMasGeneral = true
      } else {
        this.scoreMasGeneral = true
        this.scoreGeneral = this.scoreGeneral + 1
      }
    } else {
      this.filterMasGeneral = 'none'
      this.scoreMasGeneral = false
      this.scoreGeneral = this.scoreGeneral - 1
    }
    /*enviaos los datos al localstorage*/
    localStorage.setItem("scoreMasGeneral", this.scoreMasGeneral.toString())
    localStorage.setItem("scoreMenosGeneral", this.scoreMenosGeneral.toString())
    localStorage.setItem("scoreGeneral", this.scoreGeneral.toString())
    localStorage.setItem("filterMasGeneral", this.filterMasGeneral)
    localStorage.setItem("filterMenosGeneral", this.filterMenosGeneral)
  }

  ScoreMenosGeneral() {
    if (this.scoreMenosGeneral === false) {
      this.filterMenosGeneral = 'contrast(0%) hue-rotate(100deg)'
      if (this.scoreMasGeneral === true) {
        this.filterMasGeneral = 'none'
        this.scoreGeneral = this.scoreGeneral - 2
        this.scoreMasGeneral = false
        this.scoreMenosGeneral = true
      } else {
        this.scoreMenosGeneral = true
        this.scoreGeneral = this.scoreGeneral - 1
      }
    } else {
      this.filterMenosGeneral = 'none'
      this.scoreMenosGeneral = false
      this.scoreGeneral = this.scoreGeneral + 1
    }
    /*enviaos los datos al localstorage*/
    localStorage.setItem("scoreMasGeneral", this.scoreMasGeneral.toString())
    localStorage.setItem("scoreMenosGeneral", this.scoreMenosGeneral.toString())
    localStorage.setItem("scoreGeneral", this.scoreGeneral.toString())
    localStorage.setItem("filterMasGeneral", this.filterMasGeneral)
    localStorage.setItem("filterMenosGeneral", this.filterMenosGeneral)
  }

  /*funcion para eliminar un mensaje*/

  alertaEliminarJuliusomo3() {

    this.ventanaAlerta = true
    this.comentarioEnEliminacion = 'Juliusomo3'
    this.animationAlert = 'AnimationAlertOpen'
    this.animationFondoAlert = 'AnimationopacityFondoOpen'

  }
  /*funcion para actualizar un mensaje*/

  updateJuliusomo3txt() {
    if (this.inputJuliusomo3txt != '' && this.inputJuliusomo3txt != null) {
      this.comentarioEnActualizacionJuliusomo3 = false;
      this.comentarioVisibleJuliusomo3 = true
      localStorage.setItem("inputJuliusomo3txt", this.inputJuliusomo3txt)
    } else {
      let cajaDeTexto = document.getElementById(this.cajaTextoJuliusomo3txt) as HTMLImageElement;
      cajaDeTexto.focus()
    }
  }

  /*----------------------------------------------------*/
  /*GENERAL*/

  inputGeneraltxt!: string
  comentariopublicadoGeneral!: boolean
  animationComentarioPublicadoEliminadoGeneral!: string
  comentarioVisibleGeneral!: boolean
  comentarioEnActualizacionGeneral!: boolean
  opacityGeneral!: string
  textareaGeneral: boolean = true
  txtbox1: string = 'txtbox1'
  cajaTextoGeneral: string = 'cajaTextoGeneral'
  tiempoDePublicadoRegistroGeneral: any
  tiempoPublicadoGeneral: any

  PublicarComentGeneral() {
    if (this.inputGeneraltxt != '' && this.inputGeneraltxt != null) {
      this.textareaGeneral = false
      this.comentariopublicadoGeneral = true
      this.animationComentarioPublicadoEliminadoGeneral = 'AnimationtextoPublicado'
      //score
      this.scoreGeneral = 0
      this.filterMasGeneral = 'none'
      this.filterMenosGeneral = 'none'
      this.scoreMasGeneral = false
      this.scoreMenosGeneral = false
      //actualizacion

      this.comentarioVisibleGeneral = true
      this.comentarioEnActualizacionGeneral = false
      //localstorage
      localStorage.setItem("textareaGeneral", 'false')
      localStorage.setItem("comentariopublicadoGeneral", 'true')
      localStorage.setItem("inputGeneraltxt", this.inputGeneraltxt)

      this.tiempoDePublicadoRegistroGeneral = Date.now()
      localStorage.setItem("tiempoDePublicadoRegistroGeneral",this.tiempoDePublicadoRegistroGeneral)
      this.tiempoPublicadoGeneral = 0 + " minutes ago"
      setInterval(() => {
        this.tiempoPublicadoGeneral = this.TiempoPublicado(this.tiempoDePublicadoRegistroGeneral);
      }, 60000);
    } else {
      let cajaDeTexto = document.getElementById(this.txtbox1) as HTMLImageElement;
      cajaDeTexto.focus()
    }
  }
  alertaEliminaGeneral() {
    this.ventanaAlerta = true
    this.comentarioEnEliminacion = 'General'
    this.animationAlert = 'AnimationAlertOpen'
    this.animationFondoAlert = 'AnimationopacityFondoOpen'
  }
  updateGeneral() {
    if (this.inputGeneraltxt != '') {
      this.comentarioEnActualizacionGeneral = false;
      this.comentarioVisibleGeneral = true
      localStorage.setItem("inputGeneraltxt", this.inputGeneraltxt)

    } else {
      let cajaDeTexto = document.getElementById(this.cajaTextoGeneral) as HTMLImageElement;
      cajaDeTexto.focus()
    }
  }

  /*-------------------------------------*/
  /*metodos que definen si eliminar un comentario*/

  /*Variables*/
  animationAlert!: string
  animationFondoAlert!: string
  ventanaAlerta: boolean = false
  comentarioEnEliminacion: string = ''

  /*funcion al cancelar el mensaje de alerta*/
  cancelarAlert() {
    this.animationAlert = 'AnimationAlertClosed'
    this.animationFondoAlert = 'AnimationopacityFondoClosed'
    setTimeout(() => {
      this.ventanaAlerta = false
    }, 500);
  }
  /*funciono para identificar cual comentario eliminar*/
  DeleteAlert() {
    this.animationAlert = 'AnimationAlertClosed'
    this.animationFondoAlert = 'AnimationopacityFondoClosed'
    setTimeout(() => {
      this.ventanaAlerta = false
      if (this.comentarioEnEliminacion === 'amyrobson') {
        this.animationComentarioPublicadoEliminado = 'animationDeleteComentario'
        setTimeout(() => {
          this.comentariopublicadoamyrobson = false

          localStorage.removeItem("repleyamyrobson")
          localStorage.removeItem("comentariopublicadoamyrobson")
          localStorage.setItem("scoreMasJuliuomo1", this.scoreMasJuliuomo1.toString())
          localStorage.removeItem("scoreMenossJuliuomo1")
          localStorage.removeItem("scorejuliusomo1")
          localStorage.removeItem("filterMasjuliusomo1")
          localStorage.removeItem("filterMenosjuliusomo1")
          localStorage.removeItem("tiempoDePublicadoRegistro")
        }, 500);
      } else {
        if (this.comentarioEnEliminacion === 'remsesmiro') {
          this.animationComentarioPublicadoEliminadoremsesmiro = 'animationDeleteComentario'
          setTimeout(() => {
            this.comentariopublicadoremsesmiro = false
            localStorage.removeItem("repleyremsesmiro")
            localStorage.removeItem("comentariopublicadoremsesmiro")
            localStorage.removeItem("scoreMasJuliuomo2")
            localStorage.removeItem("scoreMenossJuliuomo2")
            localStorage.removeItem("scoreNumberJuliusomo2")
            localStorage.removeItem("filterMasJuliusomo2")
            localStorage.removeItem("filterMenosJuliusomo2")
            localStorage.removeItem("tiempoDePublicadoRegistroRemsesmiro")
          }, 500);
        } else {
          if (this.comentarioEnEliminacion === 'Juliusomo3') {
            this.animationComentarioPublicadoEliminadoJuliusomo3 = 'animationDeleteComentario'
            setTimeout(() => {
              this.RespuestaYapublicadaDeJuliusomo3 = false
              localStorage.setItem("RespuestaYapublicadaDeJuliusomo3", this.RespuestaYapublicadaDeJuliusomo3.toString())
            }, 500);
          } else {
            if (this.comentarioEnEliminacion === 'Maxblagun') {
              this.animationComentarioPublicadoEliminadoMaxblagun = 'animationDeleteComentario'
              setTimeout(() => {
                this.comentariopublicadoMaxblagun = false
                localStorage.removeItem("repleyMaxblagun")
                localStorage.removeItem("comentariopublicadoMaxblagun")
                localStorage.removeItem("scoreMasJuliuomo4")
                localStorage.removeItem("scoreMenossJuliuomo4")
                localStorage.removeItem("scoreNumberJuliusomo4")
                localStorage.removeItem("filterMasJuliusomo4")
                localStorage.removeItem("filterMenosJuliusomo4")
                localStorage.removeItem("tiempoDePublicadoRegistroMaxblagun")
              }, 500);
            } else {
              if (this.comentarioEnEliminacion === 'General') {
                this.textareaGeneral = true
                this.inputGeneraltxt = ''
                this.comentariopublicadoGeneral = false
                localStorage.removeItem("textareaGeneral")
                localStorage.removeItem("comentariopublicadoGeneral")
                localStorage.removeItem("inputGeneraltxt")
                localStorage.removeItem("scoreMasGeneral")
                localStorage.removeItem("scoreMenosGeneral")
                localStorage.removeItem("scoreGeneral")
                localStorage.removeItem("filterMasGeneral")
                localStorage.removeItem("filterMenosGeneral")
                localStorage.removeItem("tiempoDePublicadoRegistroGeneral")
              }
            }
          }
        }
      }
    }, 500);
  }

  /*funcion de tiempo*/

  TiempoPublicado(tiempEnElqPublica: any) {
    var TiempoAretornar

    var tiempoActualizado = Date.now()
    var tiempoRedondeado = Math.floor(((tiempoActualizado - tiempEnElqPublica) / 60000))

    if (tiempoRedondeado < 60) {
      TiempoAretornar = tiempoRedondeado + " minutes ago"
    } else {
      if (tiempoRedondeado < 1440) {
        TiempoAretornar = (Math.floor(tiempoRedondeado / 60)) + " hours ago"
      } else {
        if (tiempoRedondeado < 43800) {
          TiempoAretornar = (Math.floor(tiempoRedondeado / 1440)) + " days ago"
        } else {
          if (tiempoRedondeado < 525600) {
            TiempoAretornar = (Math.floor(tiempoRedondeado / 43800)) + " months ago"
          } else {
            if (tiempoRedondeado > 525600) {
              TiempoAretornar = (Math.floor(tiempoRedondeado / 525600)) + " years ago"
            }
          }
        }
      }
    }
    return TiempoAretornar
  }




  /*localstorage*/
  localstorage: boolean = false
  openLocalstorage() {
    if (this.localstorage === false) {
      this.localstorage = true
    } else {
      this.localstorage = false
    }
  }
  butonLocalstorage() {
    localStorage.clear()
    this.localstorage = false
    window.location.reload()
  }
}

