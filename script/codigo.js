window.addEventListener("load", inicio);

function inicio() {

    cargar_ocupaciones();
    cargar_departamentos("#slc_datos_departamento");
    cargar_datos_censo_porvalidar();
    document.querySelector("#logo-inicio").addEventListener("click", mostrar_pantalla_incio);
    document.querySelector("#btn_iniciar").addEventListener("click", mostrar_ingreso_cedula);
    document.querySelector("#a-iniciar-sesion").addEventListener("click", mostrar_inicio_censista);
    document.querySelector("#a-registrar-usuario").addEventListener("click", mostrar_registro_censista);
    document.querySelector("#btn_registrar").addEventListener("click", sign_in);
    document.querySelector("#btn_buscar_cedula").addEventListener("click", buscar_cedula);
    document.querySelector("#btn_ingresar").addEventListener("click", ingresar_censista);
    document.querySelector("#btn_guardar_dato_censo").addEventListener("click", guardar_datos_censo);
    document.querySelector("#btn_eliminar_dato_censo").addEventListener("click", eliminar_datos_censo);
    document.querySelector("#btn-buscador-cedulas-censista").addEventListener("click", buscar_personas_por_validar)
    document.querySelector("#btn-validar-datos").addEventListener("click", validar_datos_censo);
    document.querySelector("#btn_reasignar_censita").addEventListener("click", reasignar_censita);
    document.querySelector("#btn-aceptar-validado").addEventListener("click", ocultar_alerta_validado);
    document.querySelector("#btn-aceptar-cedula-invalida").addEventListener("click", ocultar_alerta_cedula_invalida);
    document.querySelector("#btn-aceptar-datos-guardados").addEventListener("click", ocultar_alerta_datos_guardados);
    document.querySelector("#btn-aceptar-datos-incorrectos").addEventListener("click", ocultar_alerta_datos_incorrectos);
    document.querySelector("#navbar-censar").addEventListener("click", censar_persona_navbar);
    document.querySelector("#navbar-buscar-censo").addEventListener("click", buscar_censo_navbar);
    document.querySelector("#navbar-estadisticas-generales").addEventListener("click", ver_estadisticas_navbar);
    document.querySelector("#navbar-estadisticas-censista").addEventListener("click", generar_tabla_info_est_censista);
    document.querySelector("#navbar-cerrar-sesion").addEventListener("click", cerrar_sesion_navbar);
}

//let usuario_logeado = sistema.censistas; //variable con objetivo de guardar que usuario se encuetra con sesion iniciada en la aplicacion.

let sistema = new Sistema();

let generador_Id_datos_censo = 31;
let generador_Id_censistas = 4;
let cant_censistas = 3;

let usuario_invitado = null
let censista_ingresado = null

//FUNCIONES DEL NAVBAR
function censar_persona_navbar() {

};

function buscar_censo_navbar() {

}

function ver_estadisticas_navbar() {
    procesar_gente_censada();
}

//OCULTAR Y MOSTRAR PANTALLAS

function mostrar_pantalla_incio() {
    document.querySelector("#div-inicio").removeAttribute("hidden")
    document.querySelector("#contenedor-ingreso").setAttribute("hidden", "")
    document.querySelector("#contenedor-registro").setAttribute("hidden", "")
    document.querySelector("#container-ingreso-invitado").setAttribute("hidden", "")
    document.querySelector("#container-ingreso-datos").setAttribute("hidden", "")
    document.querySelector("#div-mostrar-datos").setAttribute("hidden", "")
    document.querySelector("div-info-est-invitado").setAttribute("hidden", "")
}

function mostrar_ingreso_cedula() {
    document.querySelector("#div-inicio").setAttribute("hidden", "")
    document.querySelector("#container-ingreso-invitado").removeAttribute("hidden")
}

function mostrar_inicio_censista() {
    document.querySelector("#div-inicio").setAttribute("hidden", "")
    document.querySelector("#contenedor-ingreso").removeAttribute("hidden")
}

function mostrar_registro_censista() {
    document.querySelector("#contenedor-ingreso").setAttribute("hidden", "")
    document.querySelector("#contenedor-registro").removeAttribute("hidden")
}


function cerrar_sesion_navbar() {
    cerrar_sesion()
    document.querySelector("#texto-usuario").innerHTML = ``;
    document.querySelector("#texto-usuario").setAttribute("hidden", "")
    document.querySelector("#navbar-opciones-censista").setAttribute("hidden", "")
}


//INICIAR SESION
function ingresar_censista() {

    let mensaje = "";
    let usuario_ingresado = document.getElementById("txt_ingreso_usuario").value;
    let contra_ingresada = document.getElementById("txt_ingreso_contra").value;
    let usuario_minusculas = usuario_ingresado.toLowerCase();
    let usuario_censista_existe = sistema.buscar_elemento(sistema.censistas, "usuario", usuario_minusculas);
    let login_validado = sistema.validar_login(usuario_minusculas, contra_ingresada)

    if (usuario_censista_existe) {

        if (login_validado) {


            let usuario_censista = sistema.obtener_objeto(sistema.censistas, "usuario", usuario_minusculas);
            censista_ingresado = usuario_censista;
            cargar_censistas();
            if (censista_ingresado != null) {
                document.getElementById("txt_ingreso_usuario").value = "";
                document.getElementById("txt_ingreso_contra").value = "";
                document.querySelector("#texto-usuario").innerHTML = `BIENVENIDO ${usuario_censista.nombre_completo}`;
                document.querySelector("#texto-usuario").removeAttribute("hidden")
                document.querySelector("#navbar-opciones-censista").removeAttribute("hidden")

            }
        }
    } else if (!login_validado) {
        alert("Datos incorrectos")
    }

    document.getElementById("p_ingreso").innerHTML = mensaje;
}

//==========================================================================================

//============ carga dinamica de los select en el html =========================================================================
function cargar_departamentos(departamento) {

    document.querySelector(departamento).innerHTML = `<option value="-1">Seleccione una opcion...</option>`;

    for (let i = 0; i < sistema.departamentos.length; i++) {

        const unDepartamento = sistema.departamentos[i];
        document.querySelector(departamento).innerHTML += `<option value="${unDepartamento.id}">
            ${unDepartamento.departamento}
        </option>`
    }
}

function cargar_ocupaciones() {

    document.querySelector("#slc_datos_ocupacion").innerHTML = `<option value="-1">Seleccione una opcion...</option>`;

    for (let i = 0; i < sistema.ocupaciones.length; i++) {

        const unaOcupacion = sistema.ocupaciones[i];
        document.querySelector("#slc_datos_ocupacion").innerHTML += `<option value="${unaOcupacion.id}">
            ${unaOcupacion.ocupacion}
        </option>`
    }
}

function cargar_datos_censo_porvalidar() {

    document.querySelector("#slc-personas-por-validar").innerHTML = `<option value="-1">Seleccione una opcion...</option>`;

    for (let i = 0; i < sistema.datos_censo.length; i++) {

        if (sistema.datos_censo[i].estado != true) {

            const un_dato_censo = sistema.datos_censo[i];

            document.querySelector("#slc-personas-por-validar").innerHTML += `<option value="${un_dato_censo.id}">
        Cedula: ${un_dato_censo.cedula} Persona: ${un_dato_censo.nombre} Apellido: ${un_dato_censo.apellido}
      </option>`
        }
    }
}

function cargar_censistas() {

    document.querySelector("#slc-censistas-disponibles").innerHTML = `<option value="-1">Seleccione una opcion...</option>`;

    for (let i = 0; i < sistema.censistas.length; i++) {

        const un_censista = sistema.censistas[i];

        if (censista_ingresado === null || un_censista.usuario != censista_ingresado.usuario) {

            document.querySelector("#slc-censistas-disponibles").innerHTML += `<option value="${un_censista.id}">
        ${un_censista.nombre_completo}
      </option>`
        }
    }
}

//============ fincarga dinamica de los select en el html ==========================================================================


//BUSCAR CEDULA
function buscar_cedula() {

    let ingreso_cedula = document.querySelector("#txt_num_cedula");
    let cedula_limpia = limpiar_cedula(ingreso_cedula.value)
    let cedula_verificada = verificar_cedula(cedula_limpia)
    let cedula = document.querySelector("#txt_datos_cedula");
    let nombre = document.querySelector("#txt_datos_nombre");
    let apellido = document.querySelector("#txt_datos_apellido");
    let edad = document.querySelector("#txt_datos_edad");
    let departamento_seleccionado = document.querySelector("#slc_datos_departamento");
    let ocupacion_seleccionada = document.querySelector("#slc_datos_ocupacion");

    cedula.value = ""
    nombre.value = ""
    apellido.value = ""
    edad.value = ""
    departamento_seleccionado.value = -1
    ocupacion_seleccionada.value = -1

    //Buscamos la persona en sistema.datos_censo segun la cedula ingresada 
    if (sistema.buscar_elemento(sistema.datos_censo, "cedula", Number(ingreso_cedula.value))) {

        let persona = sistema.obtener_objeto(sistema.datos_censo, "cedula", Number(ingreso_cedula.value))
        let departamento = sistema.obtener_objeto(sistema.departamentos, "departamento", persona.departamento)
        let ocupacion = sistema.obtener_objeto(sistema.ocupaciones, "ocupacion", persona.ocupacion)

        //Si la persona ya esta validada muestra un alerta
        if (persona.estado === true) {
            alert("La persona ya ha sido validada")

            //Si no esta validada pero ya guardo sus datos, precarga los mismos en los campos de guardar datos
        } else if (persona.estado === false) {
            document.querySelector("#container-ingreso-invitado").setAttribute("hidden", "")
            document.querySelector("#container-ingreso-datos").removeAttribute("hidden")
            document.querySelector("#btn_eliminar_dato_censo").removeAttribute("hidden")
            cedula.setAttribute("disabled", "")
            cedula.value = persona.cedula
            nombre.value = persona.nombre
            apellido.value = persona.apellido
            edad.value = persona.edad
            departamento_seleccionado.value = departamento.id
            ocupacion_seleccionada.value = ocupacion.id
        }
        //Si no esta validada, y aun no precargo los datos, muestra el formulario para ingresar los datos
    } else if (cedula_verificada) {
        document.querySelector("#container-ingreso-invitado").setAttribute("hidden", "")
        document.querySelector("#btn_eliminar_dato_censo").setAttribute("hidden", "")
        document.querySelector("#container-ingreso-datos").removeAttribute("hidden");
        cedula.setAttribute("disabled", "")
        cedula.value = cedula_limpia;
        usuario_invitado = sistema.invitados;
    } else {
        alert("La cedula ingresada no es válida ")
    }

};

//FIN BUSCADOR DE CEDULA

//GUARDAR DATOS
function guardar_datos_censo() {

    let cedula = document.querySelector("#txt_datos_cedula").value;
    let nombre = document.querySelector("#txt_datos_nombre").value;
    let apellido = document.querySelector("#txt_datos_apellido").value;
    let edad = document.querySelector("#txt_datos_edad").value;
    let departamento_seleccionado = document.querySelector("#slc_datos_departamento").value;
    let ocupacion_seleccionada = document.querySelector("#slc_datos_ocupacion").value;
    let cedula_limpia = limpiar_cedula(cedula)
    let cedula_verificada = verificar_cedula(cedula_limpia)

    //Obtenemos el departamento y la ocupacion segun la opcion seleccionada en el select
    let departamento = sistema.obtener_objeto(sistema.departamentos, "id", Number(departamento_seleccionado));
    let ocupacion = sistema.obtener_objeto(sistema.ocupaciones, "id", Number(ocupacion_seleccionada));

    //Buscamos la cedula ingresada para saber si ya esta en el sistema
    let persona = sistema.obtener_objeto(sistema.datos_censo, "cedula", Number(cedula));

    //Si la cedula ingresada ya tiene datos precargados, los reescribimos con los que se ingresen en el formulario
    if (sistema.buscar_elemento(sistema.datos_censo, "cedula", Number(cedula))) {

        persona.nombre = nombre.toUpperCase();
        persona.apellido = apellido.toUpperCase();
        persona.edad = Number(edad)
        persona.departamento = departamento.departamento
        persona.ocupacion = ocupacion.ocupacion
        vaciar_campos();
        alert("Los datos de su censo se han modificados")

        //Sino, si todos los datos son validos, pushea el nuevo objeto al sistema
    } else if (cedula_verificada && validar_nombre(nombre) && validar_nombre(apellido) && validar_edad(Number(edad)) && validar_departamento(Number(departamento_seleccionado)) && validar_ocupacion(Number(ocupacion_seleccionada))) {
        sistema.datos_censo.push(new Dato_Censo(generador_Id_datos_censo, Number(cedula), nombre.toUpperCase(), apellido.toUpperCase(), Number(edad), departamento.departamento, ocupacion.ocupacion, false, Number(sistema.censistas[Math.floor(Math.random() * sistema.censistas.length)].id)))
        generador_Id_datos_censo++;
        alert("Datos guardados con exito")
        vaciar_campos();
        document.querySelector("#txt_datos_cedula").removeAttribute("disabled")
    } else if (nombre === "" || apellido === "" || edad === "" || departamento_seleccionado === "-1" || ocupacion_seleccionada === "-1") {
        alert("No puede haber campos vacios")

    }
    else {
        document.querySelector("#div-ingreso-datos").setAttribute("hidden", "")
        document.querySelector("#alert-datos-incorrectos").removeAttribute("hidden")
        document.querySelector("#btn-aceptar-datos-incorrectos").removeAttribute("hidden")
    }

};

function ocultar_alerta_datos_guardados() {
    document.querySelector("#alert-datos-guardados").setAttribute("hidden", "");
    document.querySelector("#btn-aceptar-datos-guardados").setAttribute("hidden", "");
    document.querySelector("#div-ingreso-datos").removeAttribute("hidden");
}

function ocultar_alerta_datos_incorrectos() {
    document.querySelector("#alert-datos-incorrectos").setAttribute("hidden", "");
    document.querySelector("#btn-aceptar-datos-incorrectos").setAttribute("hidden", "");
    document.querySelector("#div-ingreso-datos").removeAttribute("hidden");
}
//FIN GUARDAR DATOS

//ELIMINAR DATOS DE PERSONAS AUN NO VALIDADAS
function eliminar_datos_censo() {
    let cedula = Number(document.querySelector("#txt_datos_cedula").value);
    let confirmar_eliminar_datos = confirm("¿Seguro que desea eliminar los datos de su censo?");

    if (confirmar_eliminar_datos) {
        for (let i = 0; i < sistema.datos_censo.length; i++) {
            if (sistema.datos_censo[i].cedula === cedula) {
                sistema.eliminar_datos_censo(i);
            };
        };
        alert("Se han eliminado los datos correctamente")
    };


};
//FIN ELIMINAR DATOS

function reasignar_censita() {

    let valor_slc_personas_por_validar = Number(document.querySelector("#slc-personas-por-validar").value);
    let valor_slc_censistas_disponibles = Number(document.querySelector("#slc-censistas-disponibles").value);
    let mensaje = "";

    if (valor_slc_personas_por_validar != -1 && valor_slc_censistas_disponibles != -1) {

        for (let i = 0; i < sistema.datos_censo.length; i++) {

            const un_censo = sistema.datos_censo[i];

            if (un_censo.estado === false) {

                if (un_censo.id === valor_slc_personas_por_validar) {

                    un_censo.censita_asignado = valor_slc_censistas_disponibles;

                }
            }

        }
    } else {

        mensaje = "no a seleccionado una opcion "
    }

};

//BUSCAR PERSONAS AUN NO VALIDADAS
let cedula_por_validar = null

function buscar_personas_por_validar() {

    let cedula_buscada = document.querySelector("#txt-bucador-cedulas-censista").value
    let div_tabla = document.querySelector("#tabla-datos")
    let p_estado = document.querySelector("#p-estado-persona")
    let cedula = document.querySelector("#txt_datos_cedula");
    let nombre = document.querySelector("#txt_datos_nombre");
    let apellido = document.querySelector("#txt_datos_apellido");
    let edad = document.querySelector("#txt_datos_edad");
    let departamento_seleccionado = document.querySelector("#slc_datos_departamento");
    let ocupacion_seleccionada = document.querySelector("#slc_datos_ocupacion");
    let boton_guardar_datos = document.querySelector("#btn_guardar_dato_censo");

    if (sistema.buscar_elemento(sistema.datos_censo, "cedula", Number(cedula_buscada))) {
        let persona = sistema.obtener_objeto(sistema.datos_censo, "cedula", Number(cedula_buscada))
        let departamento = sistema.obtener_objeto(sistema.departamentos, "departamento", persona.departamento)
        let ocupacion = sistema.obtener_objeto(sistema.ocupaciones, "ocupacion", persona.ocupacion)

        cedula.value = persona.cedula
        nombre.value = persona.nombre
        apellido.value = persona.apellido
        edad.value = persona.edad
        departamento_seleccionado.value = departamento.id
        ocupacion_seleccionada.value = ocupacion.id

        if (persona.estado === true) {
            p_estado.innerHTML = "Estado: Validado"
            boton_guardar_datos.setAttribute("disabled", "")
            cedula_por_validar = null
        } else {
            p_estado.innerHTML = "Estado: Por validar"
            boton_guardar_datos.removeAttribute("disabled", "")
            cedula_por_validar = cedula_buscada
        }

    } else {
        alert("Cedula no encontrada en el sistema")
    }

};

//VALIDAR DATOS 
function validar_datos_censo() {

    if (cedula_por_validar != null) {
        let persona = sistema.obtener_objeto(sistema.datos_censo, "cedula", Number(cedula_por_validar))
        persona.estado = true
        alert("Usuario validado")
    } else {
        alert("Esta persona ya se encuentra validada")
    }
};


function filtrar_validados(objeto) {
    return objeto.estado === true
};

//GENERAR TABLA INFORMACION ESTADISTICA PARA CENSISTAS
function generar_tabla_info_est_censista() {


    let personas = sistema.datos_censo;
    let personas_validas = 0
    let personas_por_validar = 0
    let porcentaje_por_validar = 0

    for (let i = 0; i < personas.length; i++) {

        if (personas[i].estado === true) {

            personas_validas++
        } else {
            personas_por_validar++
        }
    }

    porcentaje_por_validar = ((personas_por_validar / sistema.datos_censo.length) * 100).toFixed(0);

    document.querySelector("#div-info-est-censista").innerHTML = `
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">Cantidad de personas censadas</th>
        <th>${personas_validas} personas</th>
      </tr>
    </thead>
    <tbody id="tbody-info-est-censistas">
    </tbody>
  </table>`

    let tbody = document.querySelector("#tbody-info-est-censistas");

    //For para recorrer el arreglo de departamentos
    for (let i = 0; i < sistema.departamentos.length; i++) {

        let departamento = sistema.departamentos[i].departamento
        let censados_por_departamento = 0

        //For para recorrer el arreglo de datos guardados
        for (let j = 0; j < sistema.datos_censo.length; j++) {

            let persona = sistema.datos_censo[j]

            if (persona.departamento === departamento) {
                if (persona.estado === true) {
                    censados_por_departamento++
                }
            }
        }
        tbody.innerHTML += `
    <tr>
      <td>Personas censadas y validadas en <b>${departamento}</b></td>
      <td>${censados_por_departamento} personas</td>
    </tr>`

    };



    tbody.innerHTML += `
  <tr>
    <td><b>Porcentaje de personas pendientes de validar sus datos</b></td>
    <td><b>${porcentaje_por_validar}%</b></td>
  </tr>
  <tr>
    <td>Porcentaje de mayores y menores censados en <select id="slc-info-est-censistas"></select></td>
    <td id="porcentaje-mayores-menores"></td>    
  </tr>
  `
    cargar_departamentos("#slc-info-est-censistas")

    document.querySelector("#slc-info-est-censistas").addEventListener("change", porcentaje_mayores_menores)

    function porcentaje_mayores_menores() {
        let departamento_seleccionado = document.querySelector("#slc-info-est-censistas").value
        let departamento = sistema.obtener_objeto(sistema.departamentos, "id", Number(departamento_seleccionado));
        let mayores = 0
        let menores = 0
        let cantidad_personas = 0
        let porcentaje_mayores = 0
        let porcentaje_menores = 0

        for (let i = 0; i < sistema.datos_censo.length; i++) {
            let persona = sistema.datos_censo[i]
            o
            if (persona.departamento === departamento.departamento) {

                if (persona.estado === true) {
                    cantidad_personas++
                    if (persona.edad >= 18) {
                        mayores++
                    } else {
                        menores++
                    }

                    porcentaje_mayores = ((mayores / cantidad_personas) * 100).toFixed(0)
                    porcentaje_menores = ((menores / cantidad_personas) * 100).toFixed(0)
                }

                document.querySelector("#porcentaje-mayores-menores").innerHTML = `Mayores: ${porcentaje_mayores}% <br> Menores: ${porcentaje_menores}%`
            }
        }
    };
}  //FIN GENERAR TABLA

//↓ funcion para poder ser registrado en la aplicacion y ser un nuevo tipo de usuario no existente
function sign_in() {

    let usuario = document.getElementById("txt_registro_usuario").value;
    let contrasenia = document.getElementById("txt_registro_contra").value;
    let nombre_completo = document.getElementById("txt_registro_nombre").value;

    let usuario_minus = usuario.toLowerCase();
    let nombre_completo_mayus = nombre_completo.toUpperCase();

    let usuario_valido = sistema.buscar_elemento(sistema.censistas, "usuario", usuario_minus);
    let contrasenia_valida = sistema.validar_contrasena_registro(contrasenia);

    if (!usuario_valido && contrasenia_valida) {
        let nuevo_censista = new Censista(generador_Id_censistas, usuario_minus, contrasenia, nombre_completo_mayus);
        sistema.agregar_censista(nuevo_censista);
        generador_Id_censistas++;
        document.querySelector("#txt_registro_nombre").value = "";
        document.querySelector("#txt_registro_usuario").value = "";
        document.querySelector("#txt_registro_contra").value = "";
        alert("Usuario censista registrado exitosamente")
    } else if (usuario === "" || contrasenia === "" || nombre_completo === "") {
        alert("Los campos no pueden estar vacios")
    } else if (usuario_valido) {
        alert("El usuario ya existe")
    } else if (!contrasenia_valida) {
        alert("Contraseña invalida")

    }
};

//verificaciones de datos ingresados ------------------------------------------------------

function limpiar_cedula(cedula) { //elimina cualquier caracter que no sean numeros

    let cedula_solo_num_string = "";

    for (let i = 0; i < cedula.length; i++) {

        caracter_cedula = cedula.charAt(i);

        if (caracter_cedula >= '0' && caracter_cedula <= '9') {

            cedula_solo_num_string += caracter_cedula;
        }

    }

    return cedula_solo_num_string;
}

function verificar_cedula(cedula_solo_num) {

    let cedula_valida = false;

    if (cedula_solo_num.length < 9 && cedula_solo_num.length > 6) {

        if (cedula_solo_num.length === 7) {

            cedula_solo_num = "0" + cedula_solo_num;
        }

        let multiplicador = "2987634";
        let digitoVerificar = cedula_solo_num.charAt(cedula_solo_num.length - 1);
        let acumulador = 0;

        for (let i = 0; i < cedula_solo_num.length - 1; i++) {
            acumulador += Number(cedula_solo_num.charAt(i)) * Number(multiplicador.charAt(i));
        }

        let digitoVerificador = (10 - (acumulador % 10)) % 10;

        if (digitoVerificador === Number(digitoVerificar)) {

            cedula_valida = true;
        }
    }
    return cedula_valida;
}


function validar_nombre(nombre) {

    let nombre_valido = false;

    for (let i = 0; i < nombre.length; i++) {

        let caracter = nombre.charAt(i);

        if ((caracter >= 'a' && caracter <= 'z') || (caracter >= 'A' && caracter <= 'Z')) {

            nombre_valido = true;
        }
    }

    return nombre_valido;
}

function validar_edad(edad) {

    let edad_valida = false;

    if (edad >= 0 && edad <= 130) {

        edad_valida = true;
    }

    return edad_valida;
}

function validar_departamento(departamento) {

    let departamento_valido = true;

    if (departamento === -1) {

        departamento_valido = false;
    }

    return departamento_valido;
}

function validar_ocupacion(ocupacion) {

    let ocupacion_valida = true;

    if (ocupacion === -1) {

        ocupacion_valida = false;
    }

    return ocupacion_valida;
}


//funcion que, cuando un boton cause que se use, sea para que una vez que el usuario quiera salir de la aplicacion, cierre su sesion y vuelva,
function cerrar_sesion() {

    censista_ingresado = null;

    //borrar lo ingresado por el usuario en los labels y volver a la pantalla principal 
}

function procesar_gente_censada() {

    for (let i = 0; i < sistema.gente_censada.length; i++) {

        const departamento_por_persona = sistema.gente_censada[i];
        let personas_por_departamento = 0;

        for (let j = 0; j < sistema.datos_censo.length; j++) {

            const datos_censo_persona = sistema.datos_censo[j];

            if (departamento_por_persona.departamento === datos_censo_persona.departamento) {

                //se pregunto por cada caso el tipo de ocupacion si coincide, si es asi, se incrementa en uno, para poder llevar cuantitativamente la cantidad de cada personas
                //en esa ocupacion por departamento
                personas_por_departamento++;

                if (datos_censo_persona.ocupacion === "Estudiante") {

                    departamento_por_persona.cant_estudian++;
                }

                if (datos_censo_persona.ocupacion === "No Trabaja") {

                    departamento_por_persona.cant_noTrabajan++;
                }

                if (datos_censo_persona.ocupacion === "Dependiente" || datos_censo_persona.ocupacion === "Independiente") {

                    departamento_por_persona.cant_dependiente_independiente++;
                }

                let porcentaje_total_por_departamento = (personas_por_departamento / sistema.datos_censo.length) * 100;
                departamento_por_persona.pctj_total_censados = porcentaje_total_por_departamento.toFixed(2);
            }
        }
    }

    lista_gente_censada();
}

//tabla dinamica para la gente censada (invitado)
function lista_gente_censada() {

    document.querySelector("#div-info-est-invitado").innerHTML = `
  <table id="tabla-info-est-invitado" class="table table-striped">
            <thead>
                <tr>
                    <td><b>Departamento</b></td>
                    <td><b>Estudian</b></td>
                    <td><b>No trabajan</b></td>
                    <td><b>Independientes y Dependientes</b></td>
                    <td><b>Porcentaje del total de Censados</b></td>
                </tr>
            </thead>
            <tbody id="tb_lista_censados">
            </tbody>
        </table>`

    document.querySelector("#tb_lista_censados").innerHTML = "";

    for (let i = 0; i < sistema.gente_censada.length; i++) {

        document.querySelector("#tb_lista_censados").innerHTML += `<tr>

    <td>${sistema.gente_censada[i].departamento}</td>
    <td>${sistema.gente_censada[i].cant_estudian}</td>
    <td>${sistema.gente_censada[i].cant_noTrabajan}</td>
    <td>${sistema.gente_censada[i].cant_dependiente_independiente}</td>
    <td>${sistema.gente_censada[i].pctj_total_censados}%</td>
    `
    }
}

function vaciar_campos() {

    document.querySelector("#txt_datos_cedula").value = "";
    document.querySelector("#txt_datos_nombre").value = "";
    document.querySelector("#txt_datos_apellido").value = "";
    document.querySelector("#txt_datos_edad").value = "";
    document.querySelector("#slc_datos_departamento").value = -1;
    document.querySelector("#slc_datos_ocupacion").value = -1;
}
