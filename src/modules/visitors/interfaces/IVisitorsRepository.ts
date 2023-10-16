import ICreateVisitor from '../infra/typeorm/interfaces/ICreateVisitor';
import IListVisitors from '../infra/typeorm/interfaces/IListVisitors';
import IPatchVisitor from '../infra/typeorm/interfaces/IPatchVisitor';
import IVisitor from '../infra/typeorm/interfaces/IVisitor';

interface IVisitorsRepository {
	createVisitor(input: ICreateVisitor): Promise<IVisitor>;
	patchVisitor(input: IPatchVisitor): Promise<IVisitor>;
	listVisitors(input: IListVisitors): Promise<Array<IVisitor>>;
	findOneById(id: number): Promise<IVisitor | null>;
}

export default IVisitorsRepository;
