const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

let cambioFondo= ()=>{
    document.getElementById('boton_form').style.background='#0d6efd'
    document.getElementById('boton_form').style.color='#ffffff'
}
let vueltaColor = () => {
    document.getElementById('boton_form').style.background='#0dcaf0'
    document.getElementById('boton_form').style.color='#ffffff'
}

// #0d6efd
// #198754