ALTER DATABASE
    db_ecommerce
    CHARACTER SET = utf8mb4
    COLLATE = utf8mb4_unicode_ci;

ALTER TABLE
    tb_address
    CONVERT TO CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

ALTER TABLE
    tb_category
    CONVERT TO CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

ALTER TABLE
    tb_order
    CONVERT TO CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

ALTER TABLE
    tb_order_item
    CONVERT TO CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

ALTER TABLE
    tb_product
    CONVERT TO CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

ALTER TABLE
    tb_user
    CONVERT TO CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;



INSERT INTO tb_user (dt_birth, ds_cpf, ds_email, ds_first_name, ds_gender, ds_last_name, password, ds_phone)
VALUES ("19950805", "398.588.321-05", "hugohenkel0@gmail.com", "Hugo", "Masculino", "Goes", "123456", "(11) 92344-4562");

INSERT INTO tb_user (dt_birth, ds_cpf, ds_email, ds_first_name, ds_gender, ds_last_name, password, ds_phone)
VALUES ("19640702", "333.588.321-05", "ringo_star@gmail.com", "Ringo", "Masculino", "Star", "654321", "(11) 92344-4221");

INSERT INTO tb_user (dt_birth, ds_cpf, ds_email, ds_first_name, ds_gender, ds_last_name, password, ds_phone)
VALUES ("19670122", "333.532.321-05", "john_lennon@gmail.com", "John", "Masculino", "Lennon", "324651", "(11) 92344-4241");

INSERT INTO tb_user (dt_birth, ds_cpf, ds_email, ds_first_name, ds_gender, ds_last_name, password, ds_phone)
VALUES ("19500303", "333.588.344-05", "george_harrinson@gmail.com", "George", "Masculino", "Harrinson", "312564", "(11) 92344-3512");

INSERT INTO tb_address (cep, ds_state, ds_city, ds_district, ds_street, ds_number, id_user)
VALUES  ("04502003", "SP", "São Paulo", "Morumbi", "Avenida Giovani Gronchi", "2053", 1);

INSERT INTO tb_address (cep, ds_state, ds_city, ds_district, ds_street, ds_number, id_user)
VALUES  ("04703003", "SP", "São Paulo", "Chacara Santo Antonio", "Rua Alexandre Dumas", "321", 2);

INSERT INTO tb_address (cep, ds_state, ds_city, ds_district, ds_street, ds_number, id_user)
VALUES  ("04020003", "SP", "São Paulo", "Vila Nova Conceicao", "Avenida Santo Amaro", "1000", 3);

INSERT INTO tb_address (cep, ds_state, ds_city, ds_district, ds_street, ds_number, id_user)
VALUES  ("04404003", "SP", "São Paulo", "Morumbi", "Avenida Morumbi", "10533", 4);

INSERT INTO tb_address (cep, ds_state, ds_city, ds_district, ds_street, ds_number, id_user)
VALUES  ("05303003", "SP", "São Paulo", "Centro", "Avenida Rudge Ramos", "123", 4);

INSERT INTO tb_category (ds_name)
VALUES ("Gasolina");

INSERT INTO tb_category (ds_name)
VALUES ("Etanol");

INSERT INTO tb_category (ds_name)
VALUES ("Diesel");

INSERT INTO tb_category (ds_name)
VALUES ("Querosene");

INSERT INTO tb_product (ds_name, ds_description, vl_price, ds_image, nr_quant_stock, id_category)
VALUES ("Gasolina Comum", "LOREM IPSUM LOREM IPSUM LOREM IPSUM", 3.52, "imgURL", 1500, 1);

INSERT INTO tb_product (ds_name, ds_description, vl_price, ds_image, nr_quant_stock, id_category)
VALUES ("Gasolina Aditivada", "LOREM IPSUM LOREM IPSUM LOREM IPSUM", 5.45, "imgURL", 9000, 1);

INSERT INTO tb_product (ds_name, ds_description, vl_price, ds_image, nr_quant_stock, id_category)
VALUES ("Etanol Comum", "LOREM IPSUM LOREM IPSUM LOREM IPSUM", 3.99, "imgURL", 3500, 2);

INSERT INTO tb_product (ds_name, ds_description, vl_price, ds_image, nr_quant_stock, id_category)
VALUES ("Etanol Adivitado", "LOREM IPSUM LOREM IPSUM LOREM IPSUM", 4.21, "imgURL", 600, 2);

INSERT INTO tb_product (ds_name, ds_description, vl_price, ds_image, nr_quant_stock, id_category)
VALUES ("Diesel Comum", "LOREM IPSUM LOREM IPSUM LOREM IPSUM", 4.42, "imgURL", 3000, 3);

INSERT INTO tb_product (ds_name, ds_description, vl_price, ds_image, nr_quant_stock, id_category)
VALUES ("Etanol Adivitado", "LOREM IPSUM LOREM IPSUM LOREM IPSUM", 4.55, "imgURL", 3200, 3);

INSERT INTO tb_product (ds_name, ds_description, vl_price, ds_image, nr_quant_stock, id_category)
VALUES ("Querosene Industrial", "LOREM IPSUM LOREM IPSUM LOREM IPSUM", 10.25, "imgURL", 5200, 4);

INSERT INTO tb_product (ds_name, ds_description, vl_price, ds_image, nr_quant_stock, id_category)
VALUES ("Querosene de Aviação", "LOREM IPSUM LOREM IPSUM LOREM IPSUM", 30.32, "imgURL", 6700, 4);

