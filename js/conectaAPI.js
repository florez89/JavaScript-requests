async function listaVideos(){
    const conexion = await fetch("http://localhost:3001/videos");
    const conexionConvertida = conexion.json();
    //console.log(conecionConvertida);
    return conexionConvertida
}

export const conectaAPI={
    listarVideos()
}

//listarVideos();