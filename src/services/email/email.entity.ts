import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { IsString, IsOptional } from "class-validator";
import { CrudEntity } from "@eicrud/core/crud";


@Entity()
export default class Email implements CrudEntity {

    @PrimaryKey({ name: '_id' })
    @IsString()
    @IsOptional()
    id: string;

    @Property()
    createdAt: Date;

    @Property()
    updatedAt: Date;

}