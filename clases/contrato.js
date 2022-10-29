/*datos contrato = {
    destino: destino,
    fechaInicio: fechaInicio,
    fechaFin: fechaFin,
    monto: monto,
    moneda: moneda,
    interesMoraDiaria: interesMoraDiaria,
    comisionMensual: comisionMensual,
    comisionCelebracion: comisionCelebracion,
    observaciones: observaciones
*/
export class Contrato{
    constructor(idPropiedad, propietarios, inquilinos, garantes, datosContrato) {
        this.idPropiedad = idPropiedad;
        this.propietarios = propietarios;
        this.garantes = garantes;
        this.inquilinos = inquilinos;
        this.destino = datosContrato.destino;
        this.fechaInicio = datosContrato.fechaInicio;
        this.fechaFin = datosContrato.fechaFin;
        this.monto = datosContrato.monto;
        this.moneda = datosContrato.moneda;
        this.interesMoraDiaria = datosContrato.interesMoraDiaria;
        this.comisionMensual = datosContrato.comisionMensual;
        this.comisionCelebracion = datosContrato.comisionCelebracion;
        this.observaciones = datosContrato.observaciones;
        this.id = "";
    }
    async guardarContrato() {
        const data = {
            destino: this.destino,
            fecha_inicio: this.fechaInicio,
            fecha_fin: this.fechaFin,
            comision_celebracion: this.comisionCelebracion,
            comision_mensual: this.comisionMensual,
            intereses_mora_diaria: this.interesMoraDiaria,
            monto: this.monto,
            moneda: this.moneda,
            propiedad: this.idPropiedad,
            inquilinos: this.inquilinos[0],
            garantes: this.garantes[0],
            // observaciones: this.observaciones
        };
        const res = await fetch(/*URL*/ "http://localhost:5000/api/v1/" + "contratos", {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be string or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .then(data => data)
          .catch(error => console.error('Error:', error))
          return res.data._id;
    }
}