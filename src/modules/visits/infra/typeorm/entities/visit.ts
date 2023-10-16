import Visitor from '@modules/visitors/infra/typeorm/entities/visitor';
import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

class Visit {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'date' })
	entryDate: string;

	@Column({ type: 'time' })
	entryTime: string;

	@Column()
	unit: string;

	@Column()
	condominiun: string;

	@ManyToOne(() => Visitor, (visitor) => visitor.visits)
	visitor: Visitor;
}

export default Visit;
