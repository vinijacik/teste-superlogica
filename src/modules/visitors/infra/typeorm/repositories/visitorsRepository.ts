import IVisitorsRepository from '@modules/visitors/interfaces/IVisitorsRepository';
import IVisitor from '../interfaces/IVisitor';
import ICreateVisitor from '../interfaces/ICreateVisitor';
import IPatchVisitor from '../interfaces/IPatchVisitor';
import { singleton } from 'tsyringe';
import { Repository } from 'typeorm';
import Visitor from '../entities/visitor';
import dataSource from '@shared/infra/typeorm';
import IListVisitors from '../interfaces/IListVisitors';

@singleton()
class VisitorsRepository implements IVisitorsRepository {
	private visitorsRepository: Repository<Visitor>;

	constructor() {
		this.visitorsRepository = dataSource.getRepository(Visitor);
	}

	async createVisitor(input: ICreateVisitor): Promise<IVisitor> {
		const newVisitor = this.visitorsRepository.create(input);
		await newVisitor.save();
		return newVisitor;
	}

	async patchVisitor(input: IPatchVisitor): Promise<IVisitor> {
		await this.visitorsRepository.update({ id: input.id }, input);
		const updatedVisitor = await this.visitorsRepository.findOneBy({
			id: input.id,
		});
		return updatedVisitor as Visitor;
	}

	async listVisitors(input: IListVisitors): Promise<IVisitor[]> {
		const visitors = await this.visitorsRepository.find({
			where: input,
		});
		return visitors;
	}

	async findOneById(id: number): Promise<IVisitor | null> {
		const visitor = await this.visitorsRepository.findOneBy({
			id,
		});

		return visitor;
	}
}

export default VisitorsRepository;
