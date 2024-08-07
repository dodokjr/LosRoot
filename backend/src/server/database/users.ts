import { Users } from "../../model/users";
import { connection } from "./db";
import { QueryError, PoolConnection } from 'mysql2';

const selectAll = (): Promise<Users[]> => {
    return new Promise((resolve, reject) => {
        connection.getConnection((err, conn: PoolConnection) => {
            conn.query("select * from users", (err: QueryError, resultSet: Users[]) => {
                conn.release();
                if (err) {
                    return reject(err);
                }
                return resolve(resultSet);
            });
        });
    });
}
export default { selectAll };