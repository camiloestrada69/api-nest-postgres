import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { FUENTES } from "../../../utils/enums/fuentes";
import { AMBIENTES } from "../../../utils/enums/ambientes";

export class ConexionDTO{

  @AutoMap()
  @ApiProperty()
  id: number;

  @ApiProperty()
  @AutoMap()
  nombre: string;

  @ApiProperty()
  @AutoMap()
  url: string;

  @ApiProperty()
  @AutoMap()
  idUsuario: number;

  @ApiProperty()
  @AutoMap()
  usuario: string;

  @ApiProperty()
  @AutoMap()
  contrasena: string;


  @ApiProperty()
  @AutoMap()
  fuente: FUENTES;

  @ApiProperty()
  @AutoMap()
  ambiente: AMBIENTES;
}
