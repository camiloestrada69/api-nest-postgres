import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { FUENTES } from "../../../utils/enums/fuentes";
import { AMBIENTES } from "../../../utils/enums/ambientes";
import { AutoMap } from "@automapper/classes";

@Entity('Conexiones')
export class ConexionEntity extends BaseEntity{

  @PrimaryGeneratedColumn({ name: 'Id', type: 'int' })
  @AutoMap()
  id: number;

  @PrimaryGeneratedColumn({ name: 'Id_usuario', type: 'int' })
  @AutoMap()
  idUsuario: number;

  @Column({ length: 50, name: 'Nombre', type: 'varchar', nullable: false })
  @AutoMap()
  nombre: string;

  @Column({ name: 'Url', type: 'varchar', nullable: false })
  @AutoMap()
  url: string;

  @Column({ name: 'Usuario', type: 'varchar', nullable: false })
  @AutoMap()
  usuario: string;

  @Column({ name: 'Contraseña', type: 'varchar', nullable: false })
  @AutoMap()
  contrasena: string;


  @Column({
    name: 'Fuente',
    default: FUENTES.AZURE_DATA_LAKE,
    type: 'varchar',
    nullable: false
  })
  @AutoMap()
  fuente: FUENTES;

  @Column({
    name: 'Ambiente',
    default: AMBIENTES.PRUEBAS,
    type: 'varchar',
    nullable: false
  })
  @AutoMap()
  ambiente: AMBIENTES;

}
