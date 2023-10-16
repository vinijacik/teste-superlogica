import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Visitor extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	fullName: string;

	@Column({ type: 'date' })
	entryDate: string;

	@Column({ type: 'time' })
	entryTime: string;

	@Column()
	unit: string;

	@Column()
	condominiun: string;
}

export default Visitor;
