import { inject, singleton } from 'tsyringe';
import IVisitorsRepository from '../interfaces/IVisitorsRepository';
import IVisitor from '../infra/typeorm/interfaces/IVisitor';
import IPatchVisitorDto from '../dtos/IPatchVisitorDto';
import Err from '@shared/errors';

@singleton()
class PatchVisitorService {
	constructor(
		@inject('VisitorsRepository')
		private visitorsRepository: IVisitorsRepository,
	) {}

	async execute(input: IPatchVisitorDto): Promise<IVisitor> {
		let visitor = await this.visitorsRepository.findOneById(input.id);
		if (!visitor) throw Err.visitorNotFound();

		visitor = await this.visitorsRepository.patchVisitor(input);

		return visitor;
	}
}

export default PatchVisitorService;
