class Sistema {

    constructor() {

        this.censistas = [

            new Censista(1, "juan43", "Contra123", "JUAN PEREZ"),
            new Censista(2, "gabrielpz", "Contra123", "GABRIEL LOPEZ"),
            new Censista(3, "maria2023", "Contra123", "MARIA PEREIRA")
        ];

        this.invitados = [

            new Invitado("invitado123", "invitado", "USUARIO INVITADO")
        ];

        this.datos_censo = [

            new Dato_Censo(1, 91257975, "LUIS", "GUERRA", 21, "Montevideo", "Estudiante", false, 1),
            new Dato_Censo(2, 5203170, "ADRIAN", "GUTIERREZ", 87, "Canelones", "No Trabaja", true, 3),
            new Dato_Censo(3, 93965421, "LUISA", "OLIVERA", 31, "Salto", "Dependiente", false, 1),
            new Dato_Censo(4, 32970657, "MARTHA", "NANDRU", 29, "Rivera", "Independiente", true, 2),
            new Dato_Censo(5, 8757889, "MARCOS", "PAZ", 20, "Florida", "No Trabaja", true, 2),
            new Dato_Censo(6, 78929725, "GERVACIO", "GUERRA", 46, "Canelones", "No Trabaja", true, 2),
            new Dato_Censo(7, 26172376, "ANA", "OLIMAR", 52, "Artigas", "Dependiente", false, 3),
            new Dato_Censo(8, 40599306, "JASMIN", "", 23, "Montevideo", "Dependiente", false, 1),
            new Dato_Censo(9, 25390606, "LUIS", "GOMEZ", 28, "Canelones", "Estudiante", true, 1),
            new Dato_Censo(10, 54052847, "SILVINA", "PEREZ", 50, "Treinta y Tres", "Independiente", true, 2),
            new Dato_Censo(11, 72799629, "ALVARO", "CURVELO", 31, "Montevideo", "Estudiante", true, 3),
            new Dato_Censo(12, 11957210, "JULIO", "PEREZ", 55, "Montevideo", "Dependiente", true, 3),
            new Dato_Censo(13, 85217822, "LUIS", "RODRIGUEZ", 34, "Maldonado", "Dependiente", false, 2),
            new Dato_Censo(14, 44219275, "ALVARO", "", 29, "Durazno", "Independiente", false, 1),
            new Dato_Censo(15, 20692780, "ESTHER", "FIGUEREDO", 45, "Paysandú", "Dependiente", true, 3),
            new Dato_Censo(16, 31308542, "MARIO", "OLMOS", 40, "Tacuarembo", "Estudiante", false, 3),
            new Dato_Censo(17, 6928961, "GABRIELA", "RUIZ", 17, "Montevideo", "Dependiente", false, 3),
            new Dato_Censo(18, 64304690, "MICAELA", "PARDO", 21, "Treinta y Tres", "Independiente", false, 2),
            new Dato_Censo(19, 85195860, "", "SALTA", 19, "Soriano", "Independiente", false, 2),
            new Dato_Censo(20, 28774663, "GONZALO", "BERCO", 15, "Montevideo", "Dependiente", true, 1),
            new Dato_Censo(21, 51177654, "BRUNO", "LESMAR", 200, "Montevideo", "Dependiente", true, 1),
            new Dato_Censo(22, 2423622, "VICTOR", "ADOQUE", 103, "Treinta y Tres", "No Trabaja", false, 3),
            new Dato_Censo(23, 75948912, "SANDRA", "SANCHEZ", 16, "Montevideo", "Independiente", false, 2),
            new Dato_Censo(24, 37574600, "FRANCO", "DO SANTO", 40, "Maldonado", "Estudiante", false, 1),
            new Dato_Censo(25, 3237775, "SANTIAGO", "FERRO", 99, "Flores", "No Trabaja", true, 2),
            new Dato_Censo(26, 12044945, "HECTOR", "ALBAR", 31, "Montevideo", "Dependiente", true, 3),
            new Dato_Censo(27, 10225111, "GERMAN", "", 19, "Canelones", "Dependiente", false, 1),
            new Dato_Censo(28, 59802019, "MATIAS", "MESA", 25, "Artigas", "No Trabaja", true, 1),
            new Dato_Censo(29, 77575866, "JORGE", "PALMAR", 41, "Soriano", "Estudiante", true, 2),
            new Dato_Censo(30, 42135431, "ROMINA", "PARDO", 133, "Salto", "No Trabaja", false, 3),
            new Dato_Censo(31, 90300393, "JUAN", "PARDO", 30, "Cerro Largo", "No Trabaja", true, 3),
            new Dato_Censo(32, 25823550, "ROBERTO", "CARLOS", 140, "Colonia", "No Trabaja", false, 1),
            new Dato_Censo(33, 77268546, "LIONEL", "MESSI", 30, "Rio Negro", "No Trabaja", true, 3),
            new Dato_Censo(34, 35267924, "ROMINA", "PARDO", 15, "Lavalleja", "No Trabaja", true, 1),
            new Dato_Censo(35, 54820454, "MARIA", "PARDO", 29, "Rio Negro", "No Trabaja", false, 2),
            new Dato_Censo(36, 10007056, "ROBERTO", "LOPEZ", 1500, "Durazno", "No Trabaja", false, 3),
            new Dato_Censo(37, 24635954, "PEPE", "HERNANDEZ", 33, "San Jose", "No Trabaja", false, 1),

        ];

        this.departamentos = [

            new Departamento(1, "Artigas"),
            new Departamento(2, "Canelones"),
            new Departamento(3, "Cerro Largo"),
            new Departamento(4, "Colonia"),
            new Departamento(5, "Durazno"),
            new Departamento(6, "Flores"),
            new Departamento(7, "Florida"),
            new Departamento(8, "Lavalleja"),
            new Departamento(9, "Maldonado"),
            new Departamento(10, "Montevideo"),
            new Departamento(11, "Paysandú"),
            new Departamento(12, "Rio Negro"),
            new Departamento(13, "Rivera"),
            new Departamento(14, "Rocha"),
            new Departamento(15, "Salto"),
            new Departamento(16, "San Jose"),
            new Departamento(17, "Soriano"),
            new Departamento(18, "Tacuarembo"),
            new Departamento(19, "Treinta y Tres"),
        ];

        this.gente_censada = [

            new Gente_Censada(1, "Artigas"),
            new Gente_Censada(2, "Canelones"),
            new Gente_Censada(3, "Cerro Largo"),
            new Gente_Censada(4, "Colonia"),
            new Gente_Censada(5, "Durazno"),
            new Gente_Censada(6, "Flores"),
            new Gente_Censada(7, "Florida"),
            new Gente_Censada(8, "Lavalleja"),
            new Gente_Censada(9, "Maldonado"),
            new Gente_Censada(10, "Montevideo"),
            new Gente_Censada(11, "Paysandú"),
            new Gente_Censada(12, "Rio Negro"),
            new Gente_Censada(13, "Rivera"),
            new Gente_Censada(14, "Rocha"),
            new Gente_Censada(15, "Salto"),
            new Gente_Censada(16, "San Jose"),
            new Gente_Censada(17, "Soriano"),
            new Gente_Censada(18, "Tacuarembo"),
            new Gente_Censada(19, "Treinta y Tres")
        ];

        this.ocupaciones = [

            new Ocupacion(1, "Dependiente"),
            new Ocupacion(2, "Independiente"),
            new Ocupacion(3, "Estudiante"),
            new Ocupacion(4, "No Trabaja")
        ];

    }


    agregar_censista(censista) {
        this.censistas.push(censista);
    }

    //Funcion para pushear la informacion ingresada al arreglo de datos
    agregar_datos_del_censo(datos) {
        this.datos_censo.push(datos);
    };

    //Funcion para eliminar del arreglo de datos los datos de la persona que lu utilice
    eliminar_datos_censo(pos) {
        this.datos_censo.splice(pos, 1);
    };

    buscar_elemento(arr_elementos, propiedad, busqueda) {

        let existe = false;
        for (let i = 0; i < arr_elementos.length; i++) {
            const un_elemento = arr_elementos[i];
            if (un_elemento[propiedad] === busqueda) {
                existe = true;
                break;
            }
        }
        return existe;
    }

    obtener_objeto(arr_elementos, propiedad, busqueda) {

        let objeto = null;

        for (let i = 0; i < arr_elementos.length; i++) {
            const un_elemento = arr_elementos[i];
            if (un_elemento[propiedad] === busqueda) {

                objeto = un_elemento;
                break;
            }
        }

        return objeto;
    }

    //Funcion para validar la contra ingresada en el registro de usuarios, si es valida retorna true, sino, retorna false
    validar_contrasena_registro(contrasena) {

        // Verificar longitud mínima de 5 caracteres
        let contrasena_valida = false;
        let min_caracteres_contrasena = false;
        let tiene_mayuscula = false;
        let tiene_minuscula = false;
        let tiene_numero = false;

        if (contrasena.length > 5) {
            min_caracteres_contrasena = true;
        }

        for (let i = 0; i < contrasena.length; i++) {

            let caracter = contrasena.charAt(i);

            if (caracter >= 'A' && caracter <= 'Z') {
                tiene_mayuscula = true;
            } else if (caracter >= 'a' && caracter <= 'z') {
                tiene_minuscula = true;
            } else if (caracter >= '0' && caracter <= '9') {
                tiene_numero = true;
            }

            // Si ya se encontraron los tres tipos de caracteres, salir del bucle
            if (tiene_mayuscula && tiene_minuscula && tiene_numero) {
                break;
            }
        }
        // Verificar que se cumplan todos los criterios
        if (min_caracteres_contrasena && tiene_mayuscula && tiene_minuscula && tiene_numero) {
            contrasena_valida = true;
        }
        return contrasena_valida;
    };

    //Funcion para validar el usuario ingresado en el registro de usuarios, si el usuarui ingresado aun no existe, retorna true, sino, retorna false
    validar_usuario_registro(usuario) {

        let usuario_valido = false;
        let usuario_existente = sistema.buscar_elemento(sistema.censistas, "usuario", usuario);

        if (usuario.toLowerCase() !== usuario_existente.toLowerCase()) {
            usuario_valido = true;
        }
        return usuario_valido;
    };

    //Funcion para validar el ingreso, si el usuario y la contra ingresados coinciden con los guardados en el sistema retorna true, sino, retorna false
    validar_login(usuario_ingresado, contra_ingresada) {

        let flag = false;

        let persona = this.obtener_objeto(sistema.censistas, "usuario", usuario_ingresado);

        if (persona != null) {

            let usuario = persona.usuario;
            let contra = persona.contrasenia;

            if (contra_ingresada === contra && usuario_ingresado === usuario) {
                flag = true;
            }
        }

        return flag;
    };

    //Funcion para cerrar sesion, elimina el usuario logueado
    cerrar_sesion() {
        censita_ingresado = null;
    };

};//FIN SISTEMA

