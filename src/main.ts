const handleTurno = (ev: Event) => {
    const turno = document.getElementById('turno')
    const obtenerId = (ev.currentTarget as HTMLElement).id
    let valor
    if (turno !== null) {
        if (obtenerId === 'siguiente') {
            ev.preventDefault()
            valor = Number(turno.innerHTML) + 1
        } else {
            valor = Number(turno.innerHTML) - 1
        }
        turno.innerHTML = valor.toString().padStart(2, '0')
    }
}

const handleCambiarTurno = () => {
    const turno = document.getElementById('turno')
    const cambiarTurno = (document.getElementById('cambiar-turno') as HTMLInputElement).value
    if (turno !== null) {
        turno.innerHTML = cambiarTurno.toString().padStart(2, '0')
    }
}

const handleReiniciar = () => {
    const turno = document.getElementById('turno')
    const cambiarTurno = (document.getElementById('cambiar-turno') as HTMLInputElement)
    if (turno !== null && cambiarTurno !== null) {
        turno.innerHTML = '01'
        cambiarTurno.value = ''
    }
}

const buttonAnterior = document.getElementById('anterior')
const buttonSiguiente = document.getElementById('siguiente')

if (buttonAnterior !== null && buttonSiguiente !== null) {
    buttonAnterior.addEventListener('click', handleTurno)
    buttonSiguiente.addEventListener('click', handleTurno)
}

const buttonCambiar = document.getElementById('cambiar')

if (buttonCambiar !== null) {
    buttonCambiar.addEventListener('click', handleCambiarTurno)
}

const buttonReiniciar = document.getElementById('reiniciar')

buttonReiniciar?.addEventListener('click', handleReiniciar)

