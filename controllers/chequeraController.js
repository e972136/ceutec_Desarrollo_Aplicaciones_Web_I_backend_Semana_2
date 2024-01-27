import { db } from '../db/conn.js';

const postChequera = async (req, res)=>{
    const {numero_cheque,a_nombre_de,monto_cheque} = req.body;

    const params = [numero_cheque,a_nombre_de,monto_cheque];

    const sql = `insert into tbl_chequera(numero_cheque,a_nombre_de,monto_cheque)
                values ($1, $2, $3) returning *
                `;
    const result = await db.query(sql,params);

    res.json(result);

};

const getChequera = async (req, res)=>{
    

    const sql = `select * from tbl_chequera`;
    const result = await db.query(sql);

    res.json(result);

};

const putChequera = async (req, res)=>{
    const {numero_cheque,a_nombre_de,monto_cheque}=req.body;
    const {id} = req.params;

    const params =[
        numero_cheque,a_nombre_de,monto_cheque,
        id
    ];

    const sql = `update tbl_chequera 
                    set numero_cheque = $1, a_nombre_de = $2 , monto_cheque = $3
                    where id = $4 returning *`;

    const result = await db.query(sql,params);

    res.json(result);

};

const delChequera = async (req, res)=>{
    
    const {id} = req.params;

    const params =[        
        id
    ];

    const sql = `delete from tbl_chequera
                    where id = $1 returning *`;

    const result = await db.query(sql,params);

    res.json(result);

};

export {
    postChequera,
    getChequera,
    putChequera,
    delChequera
};

