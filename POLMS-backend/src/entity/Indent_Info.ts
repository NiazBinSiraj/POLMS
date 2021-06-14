import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class Indent_Info {
    @PrimaryColumn()
    indent_no: number;

    @Column()
    indent_issue: string;

    @Column()
    indent_expire: string;

    @Column()
    vehicle_type: string;

    @Column()
    no_of_vehicles: number;
}
