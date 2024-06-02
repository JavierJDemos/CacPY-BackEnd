let encabezado = `
    <div id="logo">
    <a href="index.html"><img src="./static/img/logo-ST-T.png" height="120" alt="Logo"></a>
    </div>
    <div class="flex-titulo">
    <div class="span1">
        <span class="texto">Extralife</span>
    </div>
    <div class="span2">
        <span class="texto"> e l e c t r o d o m é s t i c o s</span>
    </div>
    </div>
    <div class="flex-nav">
    <nav>
        <a href="index">Inicio</a>
        <a href="productos">Productos</a>
        <a href="index#contacto">Contacto</a>
        <a id="qs" href="index#quienes_somos">Quiénes somos</a>
    </nav>
    </div>
`
document.querySelector("#header").innerHTML = encabezado