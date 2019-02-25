/*
---------------------------------------------------------------------------------------------------------
CONFIGURACION GALERIA
---------------------------------------------------------------------------------------------------------
*/
var selector = "bs_";
var indice = 1;
var desc_bb = ["",""];
var desc_bd = ["",""];
var desc_de = ["",""];
var desc_re = ["",""];
/*
---------------------------------------------------------------------------------------------------------
CONFIGURACION RECUERDOS
---------------------------------------------------------------------------------------------------------
*/
var selector_ryd = "de_";
var indice_ryd = 1;
var sub_indice_ryd = 1;
var desc_ryd = ["Decoraciones",
                "Arco de globos",
                "Alfileteros",
                "Toalleros",
                "Jabones",
                "Dulceros",
                "Muñecos de crochet",
                "Servilleteros"];
var selector_ryd = ["de_",
                    "ag_",
                    "al_",
                    "to_",
                    "ja_",
                    "du_",
                    "mu_",
                    "se_"];
/*
---------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------
*/
var paquete_b1 = ["Brochetas de bombones",
                  "Bolsas de chicharrones",
                  "Bolsas de palomitas",
                  "Paletas dulces",
                  "Paletas picosas",
                  "Mamuts",
                  "Bocadines",
                  "Lunetas",
                  "Mazapanes",
                  "Decoración con papel china y foamy",
                  "Un mesero por 5 horas",
                  "Montaje y demontaje (Mesa no incluida en el servicio)",
                  "Flete (Eventos fuera de la CDMX tienen costo adicional)"];
var paquete_b2 = ["30 bolsas de palomitas",
                  "30 bolsas de chicharrones",
                  "30 bolsas de papas fritas",
                  "30 bombones",
                  "Un contenedor de dulces",
                  "Un contenedor de dulces picosos",
                  "Un contenedor de gomitas",
                  "30 bocadines",
                  "36 mini pelones",
                  "45 mini Snickers",
                  "45 mini m&m's",
                  "24 cupcakes",
                  "extra"];
var paquete_b2 = ["30 bolsas de palomitas",
                  "30 bolsas de chicharrones",
                  "30 bolsas de papas fritas",
                  "30 bombones",
                  "Un contenedor de dulces",
                  "Un contenedor de dulces picosos",
                  "Un contenedor de gomitas",
                  "30 bocadines",
                  "36 mini pelones",
                  "45 mini Snickers",
                  "45 mini m&m's",
                  "24 cupcakes",
                  "25 trufas",
                  "24 enjambres"];
var paquete_s1 = ["Brochetas de bombones",
                  "Brochetas de gomitas",
                  "Bolsas de chicharrones",
                  "Bolsas de palomitas",
                  "Paletas dulces",
                  "Paletas picosas",
                  "Mamuts",
                  "Bocadines",
                  "Lunetas",
                  "Mazapanes",
                  "Duvalines",
                  "Mamilas",
                  "Gomitas",
                  "Complementos de decoración, pinzas, salsas",
                  "Decoración con papel china y foamy",
                  "Un mesero por 5 horas",
                  "Montaje y demontaje (Mesa no incluida en el servicio)",
                  "Flete (Eventos fuera de la CDMX tienen costo adicional)"];
var paquete_s2 = ["40 bolsas de palomitas",
                  "40 bolsas de chicharrones",
                  "40 bolsas de cacahuates",
                  "Un contenedor de dulces",
                  "Un contenedor de dulces picosos",
                  "Un contenedor de gomitas",
                  "30 bocadines",
                  "18 mini pelones",
                  "45 mini Snickers",
                  "45 mini m&m's",
                  "30 cupcakes",
                  "50 popotes de chile",
                  "24 brownies",
                  "24 enjambres"];
var paquete_s3 = ["40 bolsas de palomitas",
                  "40 bolsas de chicharrones",
                  "40 bolsas de chetotis",
                  "40 bolsas de papas fritas",
                  "20 bolsas de cacahuates",
                  "Un contenedor de dulces",
                  "Un contenedor de dulces picosos",
                  "Un contenedor de gomitas",
                  "20 cachetadas",
                  "30 bocadines",
                  "36 mini pelones",
                  "45 mini Snickers",
                  "45 mini m&m's",
                  "30 cupcakes",
                  "50 popotes de chile",
                  "30 brownies",
                  "30 enjambres"];
var paquete_l1 = ["Brochetas de bombones",
                  "Brochetas de gomitas",
                  "Bolsas de chicharrones",
                  "Bolsas de palomitas",
                  "Bolsas de papas",
                  "Paletas dulces",
                  "Paletas picosas",
                  "Mamuts",
                  "Bocadines",
                  "Lunetas",
                  "Mazapanes",
                  "Duvalines",
                  "Mamilas",
                  "Gomitas",
                  "Cristaleria",
                  "Complementos de decoración, pinzas, salsas",
                  "Decoración con papel china y foamy",
                  "Un mesero por 5 horas",
                  "Montaje y demontaje (Mesa no incluida en el servicio)",
                  "Flete (Eventos fuera de la CDMX tienen costo adicional)"];
var paquete_l2 = ["40 bolsas de palomitas",
                  "40 bolsas de chicharrones",
                  "40 bolsas de chetotis",
                  "40 bolsas de papas fritas",
                  "20 bolsas de cacahuates",
                  "Un contenedor de dulces",
                  "Un contenedor de dulces picosos",
                  "Un contenedor de gomitas",
                  "20 cachetadas",
                  "30 bocadines",
                  "36 mini pelones",
                  "45 mini Snickers",
                  "45 mini m&m's",
                  "30 cupcakes",
                  "50 popotes de chile",
                  "30 brownies",
                  "30 enjambres"];
var paquete_l3 = ["40 bolsas de palomitas",
                  "40 bolsas de chicharrones",
                  "40 bolsas de chetotis",
                  "40 bolsas de papas fritas",
                  "20 bolsas de cacahuates",
                  "Un contenedor de dulces",
                  "Un contenedor de dulces picosos",
                  "Un contenedor de gomitas",
                  "20 cachetadas",
                  "30 bocadines",
                  "36 mini pelones",
                  "45 mini Snickers",
                  "45 mini m&m's",
                  "30 cupcakes",
                  "50 popotes de chile",
                  "30 brownies",
                  "30 enjambres"];


/*
---------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------
*/

function setGaleria(){
  document.getElementById('mpGaleria').style.textDecoration = "underline";
  document.getElementById('mpGaleria').style.color = "#FDA5CF";
  document.getElementById('bs').style.textDecoration = "underline";
  document.getElementById('bs').style.color = "#FDA5CF";
}

function setRecuerdos(){
  document.getElementById('mpRec').style.textDecoration = "underline";
  document.getElementById('mpRec').style.color = "#FDA5CF";
}

function doOpen(redSoc){
  switch(redSoc) {
      case 'fb':
          window.open("https://www.facebook.com/candycatmx");
          break;
      case 'tw':
          window.open("https://twitter.com/candycatmx");
          break;
      case 'in':
          window.open("https://www.instagram.com/candycatmx/");
          break;
      default:
          return 0;
  }
}

function cargaImagenes(id){
  document.getElementById(id).style.textDecoration = "underline";
  document.getElementById(id).style.color = "#FDA5CF";
  switch (id) {
    case 'bs':
      selector = "bs_";
      document.getElementById('bd').style.textDecoration = "none";
      document.getElementById('bd').style.color = "#FFFFFF";
      document.getElementById('de').style.textDecoration = "none";
      document.getElementById('de').style.color = "#FFFFFF";
      document.getElementById('re').style.textDecoration = "none";
      document.getElementById('re').style.color = "#FFFFFF";
      cargaBabyShower();
      break;
    case 'bd':
    selector = "bd_";
    document.getElementById('bs').style.textDecoration = "none";
    document.getElementById('bs').style.color = "#FFFFFF";
    document.getElementById('de').style.textDecoration = "none";
    document.getElementById('de').style.color = "#FFFFFF";
    document.getElementById('re').style.textDecoration = "none";
    document.getElementById('re').style.color = "#FFFFFF";
    cargaBoda();
      break;
    case 'de':
    selector = "de_";
    document.getElementById('bd').style.textDecoration = "none";
    document.getElementById('bd').style.color = "#FFFFFF";
    document.getElementById('bs').style.textDecoration = "none";
    document.getElementById('bs').style.color = "#FFFFFF";
    document.getElementById('re').style.textDecoration = "none";
    document.getElementById('re').style.color = "#FFFFFF";
    cargaDecoraciones();
      break;
    case 're':
    selector = "re_";
    document.getElementById('bd').style.textDecoration = "none";
    document.getElementById('bd').style.color = "#FFFFFF";
    document.getElementById('de').style.textDecoration = "none";
    document.getElementById('de').style.color = "#FFFFFF";
    document.getElementById('bs').style.textDecoration = "none";
    document.getElementById('bs').style.color = "#FFFFFF";
    cargaRecuerdos();
      break;
    default:

  }
}

function cargaBabyShower(){
  var i = 0;
  for(i=0; i != 20; i++){
    if(i < 20){
      var img1 = document.getElementById('ima' + (i + 1));
      img1.src = "images/galeria/bs_" + (i + 1) + ".jpg";
    }else {
      var img1 = document.getElementById('ima' + (i + 1));
      img1.src = "images/noimage.png";
      //document.getElementById('li' + (i + 1)).style.display = "none";
    }
  }
}

function cargaBoda(){
  var i = 0;
  for(i=0; i != 20; i++){
    if(i < 15){
      var img1 = document.getElementById('ima' + (i + 1));
      img1.src = "images/galeria/bd_" + (i + 1) + ".jpg";
    }else {
      var img1 = document.getElementById('ima' + (i + 1));
      img1.src = "images/noimage.png";
      //document.getElementById('li' + (i + 1)).style.display = "none";
    }
  }
}

function cargaDecoraciones(){
  var i = 0;
  for(i=0; i != 20; i++){
    if(i < 3){
      var img1 = document.getElementById('ima' + (i + 1));
      img1.src = "images/galeria/de_" + (i + 1) + ".jpg";
    }else {
      var img1 = document.getElementById('ima' + (i + 1));
      img1.src = "images/noimage.png";
      //document.getElementById('li' + (i + 1)).style.display = "none";
    }
  }
}

function cargaRecuerdos(){
  var i = 0;
  for(i=0; i != 20; i++){
    if(i < 2){
      var img1 = document.getElementById('ima' + (i + 1));
      img1.src = "images/galeria/re_" + (i + 1) + ".jpg";
    }else {
      var img1 = document.getElementById('ima' + (i + 1));
      img1.src = "images/noimage.png";
      //document.getElementById('li' + (i + 1)).style.display = "none";
    }
  }
}


function carga(id){
  document.getElementById('li' + id).style.display = "block";
}

function muestraModal(id){
    if(document.getElementById('ima' + id).src.includes("images/noimage.png")){
      return;
    }else {
      indice = Number(id);
      document.getElementById('img1').style.display = "block";
      document.getElementById('image_modal').src = "images/galeria/" + selector + id + ".jpg";
    }
}

function ocultaModal(){
  document.getElementById('img1').style.display = "none";
}

function atras(){
  var variable = 0, index = 1;
  if(selector == "bs_"){variable = 20;}
  if(selector == "bd_"){variable = 15;}
  if(selector == "de_"){variable = 3;}
  if(selector == "re_"){variable = 2;}
  if(indice == 1){
    index = variable;
  }else {
    index = indice - 1;
  }
  indice = Number(index);
  document.getElementById('image_modal').src = "images/galeria/" + selector + index + ".jpg";
}

function adelante(){
  var variable = 0, index = 1;
  if(selector == "bs_"){variable = 20;}
  if(selector == "bd_"){variable = 15;}
  if(selector == "de_"){variable = 3;}
  if(selector == "re_"){variable = 2;}
  if(indice == variable){
    index = 1;
  }else {
    index = indice + 1;
  }
  indice = Number(index);
  document.getElementById('image_modal').src = "images/galeria/" + selector + index + ".jpg";
}

function muestraModalRecuerdos(id){
    indice_ryd = Number(id);
    selector_ryd[indice_ryd - 1];
    if(document.getElementById('ima' + id).src.includes("images/noimage.png")){
      return;
    }else {
      indice = Number(id);
      document.getElementById('img1').style.display = "block";
      document.getElementById('ryd_title').innerHTML = desc_ryd[indice_ryd - 1];
      document.getElementById('image_modal').src = "images/ryd/" + indice_ryd + "_" +selector_ryd[indice_ryd - 1] + sub_indice_ryd + ".jpg";
    }
}

function atras_ryd(){
  var variable = 8, index = 1;
  if(indice_ryd == 1){
    index = variable;
  }else {
    index = indice_ryd - 1;
  }
  indice_ryd = index;
  document.getElementById('ryd_title').innerHTML = desc_ryd[indice_ryd - 1];
  document.getElementById('image_modal').src = "images/ryd/" + indice_ryd + "_" + selector_ryd[index - 1] + sub_indice_ryd + ".jpg";
}

function adelante_ryd(){
  var variable = 8, index = 1;
  if(indice_ryd == variable){
    index = 1;
  }else {
    index = indice_ryd + 1;
  }
  indice_ryd = index;
  document.getElementById('ryd_title').innerHTML = desc_ryd[indice_ryd - 1];
  document.getElementById('image_modal').src = "images/ryd/" + indice_ryd + "_" + selector_ryd[index - 1] + sub_indice_ryd + ".jpg";
}

function showPaquete(id){
  switch (id) {
    case 'b1':
        location.href = "paquete_basico1.html";
      break;
    case 'b2':
          location.href = "paquete_basico2.html";
      break;
    case 'b3':
          location.href = "paquete_basico3.html";
      break;
    case 's1':
        location.href = "paquete_surtido1.html";
      break;
    case 's2':
          location.href = "paquete_surtido2.html";
      break;
    case 's3':
          location.href = "paquete_surtido3.html";
      break;
    case 'l1':
        location.href = "paquete_lujo1.html";
      break;
    case 'l2':
          location.href = "paquete_lujo2.html";
      break;
    case 'l3':
          location.href = "paquete_lujo3.html";
      break;
    default:
  }
}

function showPaquete_p(id){
  switch (id) {
    case 'b1':
        document.getElementById('titulo_paquete').style.color = '#9990C7';
        document.getElementById('titulo_paquete').innerHTML = "Paquete básico";
        document.getElementById('tipo_paquete').innerHTML = "Descripción:";
      //  document.getElementById('descripcion_paquete').innerHTML = "Un paquete muy completo y con una gran variedad de dulces a la medida de tu bolsillo. \n Pregunta por nuestras promociones, ¡nosotros podemos ayudarte a diseñar la mejor mesa de dulces a la medida del numero de tus invitados! (La mesa para montar los dulces no esta incluida en el servicio, tiene un costo adicional)";
        document.getElementById('precio1').innerHTML = " $1,400.00";
        document.getElementById('precio2').innerHTML = " $1,750.00";
        document.getElementById('precio3').innerHTML = " $2,100.00";
        document.getElementById('precio4').innerHTML = " $2,500.00";
        document.getElementById('precio5').innerHTML = " $2,900.00";
        document.getElementById('tipo_paquete').style.color = '#9990C7';
        document.getElementById('precio_label1').style.color = '#9990C7';
        document.getElementById('precio_label2').style.color = '#9990C7';
        document.getElementById('precio_label3').style.color = '#9990C7';
        document.getElementById('precio_label4').style.color = '#9990C7';
        document.getElementById('precio_label5').style.color = '#9990C7';
        document.getElementById('leyenda').style.display = 'block';
        llenaDatos(id, paquete_b1);
      break;
    case 'b2':
          document.getElementById('titulo_paquete').style.color = '#9990C7';
          document.getElementById('titulo_paquete').innerHTML = "Paquete básico";
          document.getElementById('tipo_paquete').innerHTML = "80 - 100 personas";
          document.getElementById('descripcion_paquete').innerHTML = "Básico, en el que la decoración se hace con los colores del evento y se complementa con decoracion alusiva. \n Dentro de la CDMX el envio y montaje de la mesa esta incluida en el precio. Para eventos fuera de la CDMX existe un costo extra de transportación que depende de la dirección del evento.";
          document.getElementById('precio').innerHTML = "MXN $60.00";
          document.getElementById('tipo_paquete').style.color = '#9990C7';
          document.getElementById('precio_label').style.color = '#9990C7';
          document.getElementById('leyenda').style.display = 'none';
          llenaDatos(id, paquete_b2);
      break;
    case 'b3':
          document.getElementById('titulo_paquete').style.color = '#9990C7';
          document.getElementById('titulo_paquete').innerHTML = "Paquete básico";
          document.getElementById('tipo_paquete').innerHTML = "110 - 130 personas";
          document.getElementById('descripcion_paquete').innerHTML = "Básico, en el que la decoración se hace con los colores del evento y se complementa con decoracion alusiva. \n Dentro de la CDMX el envio y montaje de la mesa esta incluida en el precio. Para eventos fuera de la CDMX existe un costo extra de transportación que depende de la dirección del evento.";
          document.getElementById('precio').innerHTML = "$3,599";
          document.getElementById('tipo_paquete').style.color = '#9990C7';
          document.getElementById('precio_label').style.color = '#9990C7';
          document.getElementById('leyenda').style.display = 'none';
          llenaDatos(id, paquete_b3);
      break;
    case 's1':
        document.getElementById('titulo_paquete').style.color = '#FDA5CF';
        document.getElementById('titulo_paquete').innerHTML = "Paquete surtido";
        document.getElementById('tipo_paquete').innerHTML = "Descripción:";
        //document.getElementById('descripcion_paquete').innerHTML = "Un paquete con un gran surtido y variedad de dulces para consentir a tus invitados. \n Pregunta por nuestras promociones, ¡nosotros podemos ayudarte a diseñar la mejor mesa de dulces a la medida del numero de tus invitados! (La mesa para montar los dulces no esta incluida en el servicio, tiene un costo adicional)";
        document.getElementById('precio1').innerHTML = " $1,950.00";
        document.getElementById('precio2').innerHTML = " $2,350.00";
        document.getElementById('precio3').innerHTML = " $2,800.00";
        document.getElementById('precio4').innerHTML = " $3,400.00";
        document.getElementById('precio5').innerHTML = " $3,850.00";
        document.getElementById('tipo_paquete').style.color = '#FDA5CF';
        document.getElementById('precio_label1').style.color = '#FDA5CF';
        document.getElementById('precio_label2').style.color = '#FDA5CF';
        document.getElementById('precio_label3').style.color = '#FDA5CF';
        document.getElementById('precio_label4').style.color = '#FDA5CF';
        document.getElementById('precio_label5').style.color = '#FDA5CF';
        document.getElementById('leyenda').style.display = 'block';
        llenaDatos(id, paquete_s1);
      break;
    case 's2':
          document.getElementById('titulo_paquete').style.color = '#FDA5CF';
          document.getElementById('titulo_paquete').innerHTML = "Paquete surtido";
          document.getElementById('tipo_paquete').innerHTML = "80 - 100 personas";
          document.getElementById('descripcion_paquete').innerHTML = "Surtido, en este paquete podrás contar con una decoración acorde a los colores de tu evento y se complementa con una gran variedad de dulces para elegir \n Dentro de la CDMX el envio y montaje de la mesa esta incluida en el precio. Para eventos fuera de la CDMX existe un costo extra de transportación que depende de la dirección del evento.";
          document.getElementById('precio').innerHTML = "$4,199";
          document.getElementById('tipo_paquete').style.color = '#FDA5CF';
          document.getElementById('precio_label').style.color = '#FDA5CF';
          document.getElementById('leyenda').style.display = 'none';
          llenaDatos(id, paquete_s2);
      break;
    case 's3':
          document.getElementById('titulo_paquete').style.color = '#FDA5CF';
          document.getElementById('titulo_paquete').innerHTML = "Paquete surtido";
          document.getElementById('tipo_paquete').innerHTML = "110 - 130 personas";
          document.getElementById('descripcion_paquete').innerHTML = "Surtido, en este paquete podrás contar con una decoración acorde a los colores de tu evento y se complementa con una gran variedad de dulces para elegir \n Dentro de la CDMX el envio y montaje de la mesa esta incluida en el precio. Para eventos fuera de la CDMX existe un costo extra de transportación que depende de la dirección del evento.";
          document.getElementById('precio').innerHTML = "$5,299";
          document.getElementById('tipo_paquete').style.color = '#FDA5CF';
          document.getElementById('precio_label').style.color = '#FDA5CF';
          document.getElementById('leyenda').style.display = 'none';
          llenaDatos(id, paquete_s3);
      break;
    case 'l1':
        document.getElementById('titulo_paquete').style.color = '#4E91DF';
        document.getElementById('titulo_paquete').innerHTML = "Paquete de lujo";
        document.getElementById('tipo_paquete').innerHTML = "Descripción:";
        //document.getElementById('descripcion_paquete').innerHTML = "Un paquete con un gran surtido y variedad de dulces para consentir a tus invitados agregando un toque personalizado a tu decoración \n Pregunta por nuestras promociones, ¡nosotros podemos ayudarte a diseñar la mejor mesa de dulces a la medida del numero de tus invitados! (La mesa para montar los dulces no esta incluida en el servicio, tiene un costo adicional)";
        document.getElementById('precio1').innerHTML = " $2,800.00";
        document.getElementById('precio2').innerHTML = " $3,900.00";
        document.getElementById('precio3').innerHTML = " $4,700.00";
        document.getElementById('precio4').innerHTML = " $5,550.00";
        //document.getElementById('precio5').innerHTML = " $60.00";
        document.getElementById('tipo_paquete').style.color = '#4E91DF';
        document.getElementById('precio_label1').style.color = '#4E91DF';
        document.getElementById('precio_label2').style.color = '#4E91DF';
        document.getElementById('precio_label3').style.color = '#4E91DF';
        document.getElementById('precio_label4').style.color = '#4E91DF';
        document.getElementById('precio_label5').style.color = '#4E91DF';
        document.getElementById('leyenda').style.display = 'block';
        llenaDatos(id, paquete_l1);
      break;
    case 'l2':
          document.getElementById('titulo_paquete').style.color = '#4E91DF';
          document.getElementById('titulo_paquete').innerHTML = "Paquete de lujo";
          document.getElementById('tipo_paquete').innerHTML = "80 - 100 personas";
          document.getElementById('descripcion_paquete').innerHTML = "De lujo, en este paquete contarás con una decoración acorde a los colores y tématica de tu evento. \n Se complementa con una gran variedad de dulces para elegir y objetos alusivos \n Dentro de la CDMX el envio y montaje de la mesa esta incluida en el precio. Para eventos fuera de la CDMX existe un costo extra de transportación que depende de la dirección del evento.";
          document.getElementById('precio').innerHTML = "$5,699";
          document.getElementById('tipo_paquete').style.color = '#4E91DF';
          document.getElementById('precio_label').style.color = '#4E91DF';
          document.getElementById('leyenda').style.display = 'block';
          llenaDatos(id, paquete_l2);
      break;
    case 'l3':
          document.getElementById('titulo_paquete').style.color = '#4E91DF';
          document.getElementById('titulo_paquete').innerHTML = "Paquete de lujo";
          document.getElementById('tipo_paquete').innerHTML = "110 - 130 personas";
          document.getElementById('descripcion_paquete').innerHTML = "De lujo, en este paquete contarás con una decoración acorde a los colores y tématica de tu evento. \n Se complementa con una gran variedad de dulces para elegir y objetos alusivos \n Dentro de la CDMX el envio y montaje de la mesa esta incluida en el precio. Para eventos fuera de la CDMX existe un costo extra de transportación que depende de la dirección del evento.";
          document.getElementById('precio').innerHTML = "$7,899";
          document.getElementById('tipo_paquete').style.color = '#4E91DF';
          document.getElementById('leyenda').style.display = 'block';
          llenaDatos(id, paquete_l3);
      break;
    default:
  }
}

function llenaDatos(id, lista){
  var i;
  for(i = 0; i!= lista.length; i++){
    document.getElementById("li_" + ( i + 1 ) + "").style.display= 'block';
    document.getElementById("sp" + ( i + 1 ) + "").innerHTML = lista[i];
  }
}

function Contacto(){
  window.scrollTo(0,document.body.scrollHeight);
}

function mesa(){
  location.href = "index.html";
}

function mesa_self(){
  location.href = "#mesa";
}

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, '1000', function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
