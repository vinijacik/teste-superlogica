import Visit from '@modules/visits/infra/typeorm/entities/visit';

interface IVisitor {
	id?: number;
	fullName: string;
	document: string;
	visits: Visit[];
}

export default IVisitor;
