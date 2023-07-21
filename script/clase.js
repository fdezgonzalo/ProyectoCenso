//clase en cual guarda los datos del usuario tipo censista 
class Censista {

    constructor(unaId, unUsuario, unaContrasenia, unNombreCompleto) {

        this.id = unaId
        this.usuario = unUsuario;
        this.contrasenia = unaContrasenia;
        this.nombre_completo = unNombreCompleto;
    }
}

//clase invitado, por el momento vacia por causa de dudas, no saber si directamente tendra un tipo de clase
class Invitado {

    constructor(unUsuario, unaContrasenia, unNombreCompleto, unaCedulaInvitado) {

        this.usuario = unUsuario;
        this.contrasenia = unaContrasenia;
        this.nombre_completo = unNombreCompleto;
        this.cedula_invitado = 0;
    }
}

//clase de datos sobre el censo, guardado todos los datos agregado tanto censista como invitado
class Dato_Censo {

    constructor(unId, unaCedula, unNombre, unApellido, unaEdad, unDepartamento, unaOcupacion, unEstado, unCensistaAsignado) {

        this.id = unId;
        this.cedula = unaCedula;
        this.nombre = unNombre;
        this.apellido = unApellido;
        this.edad = unaEdad;
        this.departamento = unDepartamento;
        this.ocupacion = unaOcupacion;
        this.estado = unEstado;
        this.censita_asignado = unCensistaAsignado;
    }
}

class Ocupacion {

    constructor(unId, unaOcupacion) {

        this.id = unId;
        this.ocupacion = unaOcupacion;
    }
}

class Departamento {

    constructor(unId, unDepartamento) {

        this.id = unId;
        this.departamento = unDepartamento;
    }
}

class Gente_Censada {

    constructor(unId, unDepartamento) {

        this.id = unId;
        this.departamento = unDepartamento;
        this.cant_estudian = 0;
        this.cant_noTrabajan = 0;
        this.cant_dependiente_independiente = 0;
        this.pctj_total_censados = 0;
    }
}