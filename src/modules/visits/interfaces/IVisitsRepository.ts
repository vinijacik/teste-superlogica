import ICreateVisitDto from '../dtos/ICreateVisitDto';
import IVisit from '../infra/typeorm/interfaces/IVisit';

interface IVisitsRepository {
	createVisit(input: ICreateVisitDto): Promise<IVisit>;
	listVisits(): Promise<Array<IVisit>>;
}

export default IVisitsRepository;
