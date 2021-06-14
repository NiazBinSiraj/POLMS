import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class Driver {
    @PrimaryColumn()
    user_id: number;

    @Column()
    personal_no: number;

    @Column()
    license_no: string;

    @Column()
    license_type: string;

    @Column()
    license_issue: string;

    @Column()
    license_expire: string;
}
