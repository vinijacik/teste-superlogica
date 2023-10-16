import IVisitor from '@modules/visitors/infra/typeorm/interfaces/IVisitor';

interface IVisit {
	entryDate: string;
	entryTime: string;
	unit: string;
	condominiun: string;
	visitor: IVisitor;
}

export default IVisit;
