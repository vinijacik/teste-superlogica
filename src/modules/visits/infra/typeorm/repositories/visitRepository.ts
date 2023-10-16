import ICreateVisitorDto from '@modules/visits/dtos/ICreateVisitDto';
import IVisitsRepository from '@modules/visits/interfaces/IVisitsRepository';
import IVisit from '../interfaces/IVisit';

class VisitsRepository implements IVisitsRepository {
	async createVisit(input: ICreateVisitorDto): Promise<IVisit> {
		throw new Error('Method not implemented.');
	}
	listVisits(): IVisit[] {
		throw new Error('Method not implemented.');
	}
}

export default VisitsRepository;
