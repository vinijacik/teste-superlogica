import Visit from '@modules/visits/infra/typeorm/entities/visit';
import {
	Entity,
	BaseEntity,
	Column,
	PrimaryGeneratedColumn,
	OneToMany,
} from 'typeorm';

@Entity()
class Visitor extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	fullName: string;

	@Column({ unique: true })
	document: string;

	@OneToMany(() => Visit, (visit) => visit.visitor)
	visits: Visit[];
}

export default Visitor;
