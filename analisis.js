console.log(salarios);

//analisis por persona

function encontrarPersona(personaEnBusqueda) {
    return salarios.find((persona) => persona.name == personaEnBusqueda); 
    
    /*{
        return persona.name == personaEnBusqueda
    });
    return persona;*/
}

function medianaPorPersona(nombrePersona) {
   const trabajos = encontrarPersona(nombrePersona).trabajos;

   const salarios = trabajos.map(function (elemento) {
    return elemento.salario;
   });
   const medianaSalarios = PlatziMath.calcularMediana(salarios);
  /* console.log(salarios)*/
   return medianaSalarios;

}

function proyeccionPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    let porcentajesCrecimiento = [];

    for (let i = 1; i < trabajos.length; i++) {
        const salarioActual = trabajos[i].salario;
        const salarioPasado= trabajos[i - 1].salario;
        const crecimiento = salarioActual - salarioPasado; 
        const porcentajeCrecimiento = crecimiento / salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento);
    }


    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);
   

    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumentoSalario = ultimoSalario * medianaPorcentajesCrecimiento;
    const nuevoSalario = ultimoSalario + aumentoSalario;
    return nuevoSalario;
}

//analisis empresarial

const empresas = {};

for (persona of salarios) {
    for (trabajo of persona.trabajos) {

        if (!empresas[trabajo.empresa]) {
            empresas[trabajo.empresa] = {};
        }

        if (!empresas[trabajo.empresa][trabajo.year]) {
            empresas[trabajo.empresa][trabajo.year] = [];
        }

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
       
    }
}
/*console.log({empresas});*/

function medianaEmpresaYear(nombre, year) {
    if (!empresas[nombre]) {
        console.warn('La empresa no existe');
    } else if (!empresas[nombre][year]) {
        console.warn('La empresa no dio salarios ese año');
    } else {
        return PlatziMath.calcularMediana(empresas[nombre][year])
    }
}

function proyeccionEmpresa(nombre) {
    if (!empresas[nombre]) {
        console.warn('La empresa no existe');
    } else {
       const empresaYears =  Object.keys(empresas[nombre]);
       const listaMedianaYears = empresaYears.map((year) => {
        return medianaEmpresaYear(nombre, year);
       });
       let porcentajesCrecimiento = [];

    for (let i = 1; i < listaMedianaYears.length; i++) {
        const salarioActual = listaMedianaYears[i];
        const salarioPasado= listaMedianaYears[i - 1];
        const crecimiento = salarioActual - salarioPasado; 
        const porcentajeCrecimiento = crecimiento / salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento);
    }


    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);
   
    const ultimaMediana = listaMedianaYears[listaMedianaYears.length - 1];
    const aumentoMed = ultimaMediana * medianaPorcentajesCrecimiento;
    const nuevaMediana = ultimaMediana + aumentoMed;
    return nuevaMediana;

    }
}

// analisis general
function medianaGeneral() {
    const listaMedianas = salarios.map(
        persona => medianaPorPersona(persona.name));
    const mediana = PlatziMath.calcularMediana(listaMedianas);
    return mediana;
}

function medianaTop10() {
    const listaMedianas = salarios.map(
        persona => medianaPorPersona(persona.name)
    );

    const medianasOrdenadas = PlatziMath.ordenarLista(listaMedianas);

        const cantidad = listaMedianas.length / 10;
        const limite = listaMedianas.length - cantidad;

        const top10 = medianasOrdenadas.slice(limite, medianasOrdenadas.length);

        const medianaTop10 = PlatziMath.calcularMediana(top10);

        return medianaTop10;
}