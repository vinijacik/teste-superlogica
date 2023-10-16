import { inject, singleton } from 'tsyringe';
import IVisitorsRepository from '../interfaces/IVisitorsRepository';
import ICreateVisitorDto from '../dtos/ICreateVisitorDto';
import IVisitor from '../infra/typeorm/interfaces/IVisitor';

@singleton()
class CreateVisitorService {
	constructor(
		@inject('VisitorsRepository')
		private visitorsRepository: IVisitorsRepository,
	) {}

	async execute(input: ICreateVisitorDto): Promise<IVisitor> {
		const newVisitor = await this.visitorsRepository.createVisitor(input);
		return newVisitor;
	}
}

export default CreateVisitorService;
