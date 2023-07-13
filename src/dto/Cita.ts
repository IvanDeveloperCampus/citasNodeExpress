import { Expose, Type, Transform } from "class-transformer";
import moment from "moment";

export class Cita {
  @Expose({ name: "fecha" })
  @Transform(
    ({ value }) => {
      const fecha = moment(value, "YYYY-MM-DD");
      if (fecha.isValid()) {
        return fecha.toDate();
      } else {
        throw { status: 400, message: "La fecha de la cita no es valida" };
      }
    },
    { toClassOnly: true }
  )
  cit_fecha: Date;
}
