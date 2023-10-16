import 'reflect-metadata';
import 'dotenv/config';
import '@containers/index';
import dataSource from '@shared/infra/typeorm';

dataSource
	.initialize()
	.then(async () => {
		try {
			app.listen(Environment.SERVER_PORT());
			console.log(`Server listening on port ${Environment.SERVER_PORT()}`);
		} catch (error) {
			console.log(error);
		}
	})
	.catch((error: unknown) => {
		console.log({
			host: Environment.DATABASE_URL(),
			port: Environment.DATABASE_PORT(),
			username: Environment.DATABASE_USER(),
			password: Environment.DATABASE_PASSWORD(),
			database: Environment.DATABASE(),
		});
		console.log(error);
	});
