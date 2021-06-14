import {Column, Entity, getConnection, PrimaryColumn, Repository} from "typeorm";

@Entity()
export class User_Info {
    @PrimaryColumn()
    user_id: number;

    @Column()
    rank: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    unit: string;

    @Column()
    subunit: string;

    @Column()
    password: string;

    @Column()
    user_type: string;

    @Column()
    contact: string;
}

export async function GetUser_InfoRepository() : Promise<Repository<User_Info>> {
    return getConnection().getRepository(User_Info);
}
