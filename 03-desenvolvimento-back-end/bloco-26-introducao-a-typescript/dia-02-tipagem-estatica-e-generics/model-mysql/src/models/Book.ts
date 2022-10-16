import connection from "./connection";
import { Pool, RowDataPacket } from "mysql2/promise";

export interface Book {
  id?: number,
  title: string,
  price: number,
  author: string,
  isbn: string,
}

export default class BookModel {
  private connection: Pool;
  constructor() {
    this.connection = connection;
  }

  public async getAll(): Promise<Book[]> {
    const [rows] = await this.connection.execute<(Book & RowDataPacket)[]>('SELECT * FROM books');

    return rows;
  }
}
