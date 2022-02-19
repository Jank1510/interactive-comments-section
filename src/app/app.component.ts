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


  tiempoDePublicadoRegistro: any


  constructor() {
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
      }, 500);
      this.tiempoDePublicadoRegistro = new Date()
      setTimeout(() => {
        this.TiempoPublicado();
      }, 60000);
    } else {
      let cajaDeTexto = document.getElementById(this.cajaTextoamyrobson) as HTMLImageElement;
      cajaDeTexto.focus()
    }
    this.comentarioVisibleamyrobson = true
    this.comentarioEnActualizacionamyrobson = false
    this.replyNoreply = 'Reply'
  }

  /*funcion para actualizar un mensaje*/

  updateamyrobson() {
    if (this.inputAmyrobsontxt != '') {
      this.comentarioEnActualizacionamyrobson = false;
      this.comentarioVisibleamyrobson = true
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
  }

  /*----------------------------------------------------------*/
  /* Funciones del Chat de Maxblagun*/

  /*Variables Maxblagun*/
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
  }



  Replymaxblagun() {

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
      }, 500);
      this.tiempoDePublicadoRegistro = new Date()
      setInterval(() => {
        this.TiempoPublicado();
      }, 60000);
    } else {
      let cajaDeTexto = document.getElementById(this.cajaTextoremsesmiro) as HTMLImageElement;
      cajaDeTexto.focus()
    }
    this.comentarioVisibleremsesmiro = true
    this.comentarioEnActualizacionremsesmiro = false
    this.replyNoreplyremsesmiro = 'Reply'
    this.animationComentarioPublicadoEliminadoremsesmiro = 'AnimationComentPublicado2'
  }

  /*funcion para actualizar un mensaje*/

  updateremsesmiro() {
    if (this.inputremsesmirotxt != '') {
      this.comentarioEnActualizacionremsesmiro = false;
      this.comentarioVisibleremsesmiro = true
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
  /*score*/
  scoreNumberJuliusomo3: number = (this.dataJson.comments[1].replies[1].score)
  scoreMasJuliuomo3: boolean = false
  scoreMenossJuliuomo3: boolean = false
  /*--*/
  filterMasJuliusomo3!: string
  filterMenosJuliusomo3!: string
  inputJuliusomo3txt: any = this.dataJson.comments[1].replies[1].content
  etiquetaParrafoJuliusomo3: string = '@ramsesmiron'
  cajaTextoJuliusomo3: string = 'cajaTextoJuliusomo3'
  RespuestaYapublicadaDeJuliusomo3: boolean = true
  animationComentarioPublicadoEliminadoJuliusomo3!: string
  comentarioVisibleJuliusomo3: boolean = true
  comentarioEnActualizacionJuliusomo3: boolean = false

  /*Funciones score*/

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
    if (this.inputJuliusomo3txt != '') {
      this.comentarioEnActualizacionJuliusomo3 = false;
      this.comentarioVisibleJuliusomo3 = true
    } else {
      let cajaDeTexto = document.getElementById(this.cajaTextoJuliusomo3) as HTMLImageElement;
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
        }, 500);
      } else {
        if (this.comentarioEnEliminacion === 'remsesmiro') {
          this.animationComentarioPublicadoEliminadoremsesmiro = 'animationDeleteComentario'
          setTimeout(() => {
            this.comentariopublicadoremsesmiro = false
          }, 500);
        } else {
          if (this.comentarioEnEliminacion === 'Juliusomo3') {
            this.animationComentarioPublicadoEliminadoJuliusomo3 = 'animationDeleteComentario'
            setTimeout(() => {
              this.RespuestaYapublicadaDeJuliusomo3 = false
            }, 500);
          }
        }
      }
    }, 500);
  }



  sumador: any = 0
  TiempoPublicado() {
    //hora en q se registro el comentario
    var horas = this.tiempoDePublicadoRegistro.getHours()
    var minutos = this.tiempoDePublicadoRegistro.getMinutes()

    //actualizacion de hora del comentario
    var tiempoActualizado = new Date()
    var horaActualizada = tiempoActualizado.getHours()
    var minutosActualizados = tiempoActualizado.getMinutes()

    //resta de tiempo entre el registro y la fecha actualizada**//

    if (this.sumador < 60) {
      if (minutosActualizados < minutos) {
        var x = 60 - minutos
        minutos = x
      }
      var minutosTranscurridos = minutosActualizados + minutos
      this.sumador = minutosTranscurridos
      console.log(minutosTranscurridos)
    } else {
      console.log("YAPASO UNA HORA")
    }
  }
  PublicarComentario() { }

}

