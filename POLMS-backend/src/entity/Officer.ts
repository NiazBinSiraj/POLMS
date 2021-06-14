import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class Officer {
    @PrimaryColumn()
    user_id: number;

    @Column()
    ba_no: number;

    @Column()
    coro_appointment: string;

    @Column()
    coro_no: string;

    @Column()
    coro_date: string;

    @Column()
    coro_expire: string;

}
