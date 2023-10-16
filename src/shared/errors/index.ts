class Err {
	code: number;
	message: string;

	constructor(code: number, message: string) {
		this.code = code;
		this.message = message;
	}

	static isErr(err: unknown): boolean {
		return err instanceof Err;
	}

	static internalError(): Err {
		return new Err(500, 'Internal server error');
	}

	static visitorNotFound(): Err {
		return new Err(404, 'Visitor not found');
	}
}

export default Err;
