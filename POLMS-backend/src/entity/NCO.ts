import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class NCO {
    @PrimaryColumn()
    user_id: number;

    @Column()
    personal_no: number;

    @Column()
    nco_appointment: string;

    @Column()
    order_no: string;

    @Column()
    order_date: string;

    @Column()
    order_expire: string;
}
