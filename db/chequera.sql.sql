-- Active: 1705979042290@@localhost@5432@clase@public
create Table tbl_chequera(
    id SERIAL PRIMARY KEY,
    numero_cheque VARCHAR(10),
    a_nombre_de VARCHAR(50),
    monto_cheque DECIMAL(9,2)
);
