import { ConexionEntity } from "../../model/entity/conexion.entity";
import { EntityRepository } from "typeorm";
import { BaseRepository } from "typeorm-transactional-cls-hooked";
import { Injectable } from "@nestjs/common";

@Injectable()
@EntityRepository(ConexionEntity)
export class ConexionRepository extends BaseRepository<ConexionEntity> {

}
