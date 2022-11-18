import { Body, Controller, Get, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { StandardResponse } from "../../../../utils/http-response/standard-response";
import { ConexionFacadeService } from "../../facade/conexion/conexion.facade.service";
import { TAG_CONEXION } from "../../../../utils/constants";
import { ApiTags } from "@nestjs/swagger";
import { ConexionDTO } from "../../../model/dto/conexionDTO";

@ApiTags(TAG_CONEXION)
@Controller('conexiones')
export class ConexionController {
  conexionFacade: ConexionFacadeService
  constructor(conexionFacade: ConexionFacadeService) {
    this.conexionFacade = conexionFacade;
  }

  @Get()
  public async listarConexiones(): Promise<StandardResponse<any[]>> {
    return {
      status: HttpStatus.OK,
      body: await this.conexionFacade.listarConexiones(),
      message: 'Consulta exitosa'
    };
  }

  @Post()
  public async crearConexion(@Body() conexion: ConexionDTO): Promise<StandardResponse<ConexionDTO>> {
    return {
      status: HttpStatus.OK,
      body: await this.conexionFacade.crearConexion(conexion),
      message: 'Creación exitosa'
    };
  }

  @Put()
  public async actualizarConexion(@Body() conexion: ConexionDTO): Promise<StandardResponse<ConexionDTO>> {
    return {
      status: HttpStatus.OK,
      body: await this.conexionFacade.actualizarConexion(conexion),
      message: 'Creación exitosa'
    };
  }

  @Get('/:id')
  public async consultarConexionPorId(@Param('id') id: number): Promise<StandardResponse<ConexionDTO>> {
    return {
      status: HttpStatus.OK,
      body: await this.conexionFacade.consultarConexionPorId(id),
      message: 'La conexión se consulto exitosamente'
    }
  }

  @Put('tranc')
  public async actualizarConexionTrac(@Body() conexion: ConexionDTO): Promise<StandardResponse<ConexionDTO>> {
    return {
      status: HttpStatus.OK,
      body: await this.conexionFacade.transacional(conexion),
      message: 'Creación exitosa'
    };
  }
}
