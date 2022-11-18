import { ConflictException, Injectable } from "@nestjs/common";
import { ConexionRepository } from "../../repository/conexion.repository";
import { ConexionEntity } from "../../../model/entity/conexion.entity";
import { Transactional } from "typeorm-transactional-cls-hooked";
import { Connection } from "typeorm";

@Injectable()
export class ConexionService {
  conexionRepository: ConexionRepository;

  constructor(private readonly connection: Connection) {
    this.conexionRepository = this.connection.getCustomRepository(ConexionRepository);
  }

  public async listarConexiones():Promise<ConexionEntity[]>{
    return await this.conexionRepository.find();
  }

  public async crearConexion(conexion: ConexionEntity): Promise<ConexionEntity> {
    return await this.conexionRepository.save(conexion);
  }

  public async actualizarConexion(conexion: ConexionEntity): Promise<ConexionEntity> {
    return await this.conexionRepository.save(conexion);
  }

  public async consultarConexionPorId(id: number): Promise<ConexionEntity> {
    const conexion = await this.conexionRepository.findOne(id);
    if (conexion == null) {
      throw new ConflictException('La conexión no existe');
    }
    return  conexion;
  }


  @Transactional()
  public async actualizarTranc(conexion: ConexionEntity): Promise<ConexionEntity> {
    const conexionActualizada = await this.conexionRepository.save(conexion);

    const conexionConsultada = await this.conexionRepository.findOne(conexion.id+1);
    if (conexionConsultada == null) {
      throw new ConflictException('La conexión no existe');
    }
    return conexionActualizada;
  }

}
