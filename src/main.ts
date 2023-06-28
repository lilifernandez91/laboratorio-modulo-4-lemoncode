const turno = document.getElementById('turno')
const cambiarTurno = (document.getElementById('cambiar-turno') as HTMLInputElement)

const handleTurno = (ev: Event) => {
    ev.preventDefault()
    let obtenerId
    if (ev.currentTarget instanceof HTMLElement) {
        obtenerId = ev.currentTarget.id
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
    if (turno && cambiarTurno) {
        turno.innerHTML = cambiarTurno.value.toString().padStart(2, '0')
    }
}

const handleReiniciar = (ev: Event) => {
    ev.preventDefault()
    if (turno && cambiarTurno) {
        turno.innerHTML = '01'
        cambiarTurno.value = ''
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


