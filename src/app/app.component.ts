import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import data from 'src/assets/json/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interactive-comments-section';
  dataJson: any = data // extraccion de datos del json

  /* variables para el chat de Amyrobson */
  repleyamyrobson: any = false
  inputAmyrobsontxt: any = "@Amyrobson "
  comentariopublicadoamyrobson: any = false
  comentarioVisibleamyrobson: any = true
  comentarioEnActualizacionamyrobson: any = false
  cajaTextoamyrobson: any = "cajaTextoamyrobson"
  replyNoreply: any = 'Reply'
  /*scroeAmyrobson*/
  scoreMasRobson: any = false
  scoreMenosRobson:any=false
  filterMasRoobson: any
  filterMenosRobson:any
  scoreNumberRobson:any=(this.dataJson.comments[0].score)
  /*variables para el mensaje de alerta*/
  ventanaAlerta: any = false
  comentarioEnEliminacion: any = ''

  /*variables de animaciones*/
  animationComentar: any
  animationAlert: any
  animationFondoAlert: any
  animationComentarioPublicadoEliminado: any

  tiempoDePublicadoRegistro: any

  etiquetaParrafo: any
  opacity: any

  constructor() {
    let answers = new Map<string, string>();
    answers.set("key", "value")
  }
  /* Funciones del Chat de Amyrobson*/
  Replyamyrobson() {//funcion para responder a un mensaje
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
  PublicarComentarioamyrobson() {//publicar la respuesta de un mensaje
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
      this.repleyamyrobson = false
      this.comentariopublicadoamyrobson = true
      this.tiempoDePublicadoRegistro = new Date()
      setInterval(() => {
        this.TiempoPublicado();
      }, 60000);
    } else {
      let cajaDeTexto = document.getElementById(this.cajaTextoamyrobson) as HTMLImageElement;
      cajaDeTexto.focus()
    }

    this.comentarioVisibleamyrobson = true
    this.comentarioEnActualizacionamyrobson = false
    this.replyNoreply = 'Reply'
    this.animationComentarioPublicadoEliminado = 'AnimationComentPublicado'


  }
  updateamyrobson() {//actualizar la respuesta
    if (this.inputAmyrobsontxt != '') {
      this.comentarioEnActualizacionamyrobson = false;
      this.comentarioVisibleamyrobson = true
    } else {
      let cajaDeTexto = document.getElementById(this.cajaTextoamyrobson) as HTMLImageElement;
      cajaDeTexto.focus()
    }
  }
  alertaEliminaramyrobson() {//eliminar la respuesta
    this.ventanaAlerta = true
    this.comentarioEnEliminacion = 'amyrobson'
    this.animationAlert = 'AnimationAlertOpen'
    this.animationFondoAlert = 'AnimationopacityFondoOpen'
  }
  ScoreMasAmyrobson() {
    if (this.scoreMasRobson === false) {
      this.filterMasRoobson = 'contrast(0%) hue-rotate(100deg)'
      this.scoreMasRobson = true
      this.scoreNumberRobson=this.scoreNumberRobson+1
    } else {
      this.filterMasRoobson = 'none'
      this.scoreMasRobson = false
      this.scoreNumberRobson=this.scoreNumberRobson-1
    }
  }
  ScoreMenosAmyrobson(){
    if (this.scoreMenosRobson === false) {
      this.filterMenosRobson = 'contrast(0%) hue-rotate(100deg)'
      this.scoreMenosRobson = true
      this.scoreNumberRobson=this.scoreNumberRobson-1
    } else {
      this.filterMenosRobson = 'none'
      this.scoreMenosRobson = false
      this.scoreNumberRobson=this.scoreNumberRobson+1
    }
  }


  Replymaxblagun() {

  }



  /*metodos que definen si eliminar un comentario*/
  cancelarAlert() {
    this.animationAlert = 'AnimationAlertClosed'
    this.animationFondoAlert = 'AnimationopacityFondoClosed'
    setTimeout(() => {
      this.ventanaAlerta = false

    }, 500);
  }
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

