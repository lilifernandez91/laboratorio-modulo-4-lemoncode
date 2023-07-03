const turno = document.getElementById('turno')
const cambiarTurno = document.getElementById('cambiar-turno')

const handleTurno = (ev: Event) => {
    ev.preventDefault()
    let obtenerId
    if (ev.currentTarget instanceof HTMLButtonElement) {
        obtenerId = ev.currentTarget.id
    }
    else {
        console.error('Ha ocurrido un error')
        return;
    }
    let valor
    if (turno) {
        if (obtenerId === 'siguiente') {
            valor = Number(turno.innerHTML) + 1
        } else {
            valor = Number(turno.innerHTML) - 1
        }
        turno.innerHTML = valor.toString().padStart(2, '0')
    }
}

const handleCambiarTurno = (ev: Event) => {
    ev.preventDefault()
    if (turno && cambiarTurno && cambiarTurno instanceof HTMLInputElement) {
        turno.innerHTML = cambiarTurno.value.toString().padStart(2, '0')
    } else {
        console.error('Ha ocurrido un error al intentar cambiar el turno')
        return;
    }
}

const handleReiniciar = (ev: Event) => {
    ev.preventDefault()
    if (turno && cambiarTurno && cambiarTurno instanceof HTMLInputElement) {
        turno.innerHTML = '01'
        cambiarTurno.value = ''
    } else {
        console.error('Ha ocurrido un error al intentar reiniciar los valores')
        return;
    }
}

const events = () => {
    const buttonAnterior = document.getElementById('anterior')
    const buttonSiguiente = document.getElementById('siguiente')
    const buttonCambiar = document.getElementById('cambiar')
    const buttonReiniciar = document.getElementById('reiniciar')

    if (buttonAnterior && buttonSiguiente && buttonCambiar && buttonReiniciar) {
        buttonAnterior.addEventListener('click', handleTurno)
        buttonSiguiente.addEventListener('click', handleTurno)
        buttonCambiar.addEventListener('click', handleCambiarTurno)
        buttonReiniciar.addEventListener('click', handleReiniciar)
    }
}

document.addEventListener('DOMContentLoaded', events)


