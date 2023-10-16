import IVisitor from '@modules/visitors/infra/typeorm/interfaces/IVisitor';

interface IVisit {
	id?: number;
	entryDate: string;
	entryTime: string;
	unit: string;
	condominiun: string;
	visitor?: IVisitor;
}

export default IVisit;
