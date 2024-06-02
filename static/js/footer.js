let nav_pie = `
    <nav>
    <a href="index">Inicio</a>
    <a href="index#contacto">Contacto</a>
    <a id="qsf" href="index#quienes_somos">¿Quiénes somos?</a>
    <a id="tcf" href="terminos">Terminos y Condiciones</a>
    </nav>
`

let data = [
    {
        imagen: "./static/img/visa@2x.png",
        tarjeta: "visa"
    },
    {
        imagen: "./static/img/mastercard@2x.png",
        tarjeta: "mastercard"
    },
    {

        imagen: "./static/img/amex@2x.png",
        tarjeta: "amex"
    },
    {
        imagen: "./static/img/diners@2x.png",
        tarjeta: "diners"
    },
    {
        imagen: "./static/img/argencard@2x.png",
        tarjeta: "ar_argencard"
    },
    {
        imagen: "./static/img/mercadopago@2x.png",
        tarjeta: "mercadopago"
    },
    {
        imagen: "./static/img/CuentaDNI.png",
        tarjeta: "cuentadni"
    },
    {
        imagen: "./static/img/Transferencia.png",
        tarjeta: "transferencia"
    },
    {
        imagen: "./static/img/maestro@2x.png",
        tarjeta: "maestro"
    },
    {
        imagen: "./static/img/visadebit@2x.png",
        tarjeta: "visadebit"
    }]

let texto = `
    <h4>Aceptamos estos medios de pago</h4>
    <br>
    <div>
`
for (let tarj of data) {
    texto += `
    <img src=${tarj.imagen} 
    alt=${tarj.tarjeta} 
    width="48" height="30">
    `
}

let pie = `
    <div>
    <span>Copyright Extralife electrodomésticos - 2024. Todos los derechos reservados.</span>
    </div>
    <!-- desarrolladores -->
    <div>
    <span>&copy; Grupo NN</span>
    <span>Email: <a href="mailto:mail@mail.com">mail@mail.com</a></span>
    </div>
    <br>
`

document.querySelector("#nav-footer").innerHTML = nav_pie
document.querySelector("#medios_pago").innerHTML = texto+"</div><br>"
document.querySelector("#pie").innerHTML = pie