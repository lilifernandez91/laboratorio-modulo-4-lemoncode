const handleTurno = (ev: Event) => {
    ev.preventDefault()
    const turno = document.getElementById('turno') as HTMLElement
    const obtenerId = (ev.currentTarget as HTMLElement).id
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
    const turno = document.getElementById('turno') as HTMLElement
    const cambiarTurno = (document.getElementById('cambiar-turno') as HTMLInputElement).value
    if (turno && cambiarTurno) {
        turno.innerHTML = cambiarTurno.toString().padStart(2, '0')
    }
}

const handleReiniciar = (ev: Event) => {
    ev.preventDefault()
    const turno = document.getElementById('turno') as HTMLElement
    const cambiarTurno = document.getElementById('cambiar-turno') as HTMLInputElement
    if (turno && cambiarTurno) {
        turno.innerHTML = '01'
        cambiarTurno.value = ''
    }
}

const buttonAnterior = document.getElementById('anterior')
const buttonSiguiente = document.getElementById('siguiente')

if (buttonAnterior && buttonSiguiente) {
    buttonAnterior.addEventListener('click', handleTurno)
    buttonSiguiente.addEventListener('click', handleTurno)
}

const buttonCambiar = document.getElementById('cambiar')

if (buttonCambiar) {
    buttonCambiar.addEventListener('click', handleCambiarTurno)
}

const buttonReiniciar = document.getElementById('reiniciar')

if (buttonReiniciar) {
    buttonReiniciar.addEventListener('click', handleReiniciar)
}


