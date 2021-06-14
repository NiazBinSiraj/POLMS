import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class Vehicle_Info {
    @PrimaryColumn()
    vehicle_id: number;

    @Column()
    vehicle_type: string;

    @Column()
    vehicle_class: string;

    @Column()
    initial_mileage: string;

    @Column()
    total_issue_pol_type: string;

    @Column()
    total_issue_pol_amount: string;

    @Column()
    total_usage_pol_type: string;

    @Column()
    total_usage_pol_amount: string;

    @Column()
    total_POL_stock: string;

    @Column()
    last_update: string;
}
