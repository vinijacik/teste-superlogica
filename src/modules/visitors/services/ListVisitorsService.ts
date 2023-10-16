import { inject, singleton } from 'tsyringe';
import IVisitorsRepository from '../interfaces/IVisitorsRepository';
import IListVisitorsDto from '../dtos/IListVisitorsDto';
import IVisitor from '../infra/typeorm/interfaces/IVisitor';

@singleton()
class ListVisitorsService {
	constructor(
		@inject('VisitorsRepository')
		private visitorsRepository: IVisitorsRepository,
	) {}

	async execute(input: IListVisitorsDto): Promise<Array<IVisitor>> {
		const visitors = await this.visitorsRepository.listVisitors(input);
		return visitors;
	}
}

export default ListVisitorsService;
