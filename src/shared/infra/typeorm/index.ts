import Visitor from '@modules/visitors/infra/typeorm/entities/visitor';
import { DataSource } from 'typeorm';

const dataSource = new DataSource({
	type: 'postgres',
	host: 'localhost',
	port: 3306,
	username: 'root',
	password: 'root',
	database: 'postgres',
	entities: [Visitor],
});

export default dataSource;
