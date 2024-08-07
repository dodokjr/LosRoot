import { Request, Response } from 'express';
import { Users } from '../../model/users';
import { connection } from '../database/db';
import { QueryError, PoolConnection } from 'mysql2';
import users from '../database/users';

export const user = (req: Request, res: Response) => {
    users.selectAll().then(products => { // .then for async call
        res.status(200).send({
            message: 'OK',
            result: products
        })
    }).catch(err => {
        res.status(500).send({
            message: 'DATABASE ERROR',
            error: err.code
        })
    })
}