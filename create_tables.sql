DROP DATABASE [IF EXISTS] clubbi;
CREATE DATABASE clubbi;

\c clubbi

DROP TABLE IF EXISTS public.items;

CREATE TABLE IF NOT EXISTS public.items
(
    product_id integer NOT NULL DEFAULT nextval('items_product_id_seq'::regclass),
    unit_price double precision,
    description character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT items_pkey PRIMARY KEY (product_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.items
    OWNER to postgres;

CREATE TABLE IF NOT EXISTS public.orders
(
    order_id integer NOT NULL DEFAULT nextval('orders_order_id_seq'::regclass),
    client_id integer,
    order_status character varying(40) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT orders_pkey PRIMARY KEY (order_id)
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.orders
    OWNER to postgres;

DROP TABLE IF EXISTS public.item_orders;
CREATE TABLE IF NOT EXISTS public.item_orders
(
    id integer NOT NULL DEFAULT nextval('item_orders_id_seq'::regclass),
    order_id integer,
    product_id integer,
    qtde integer,
    CONSTRAINT item_orders_pkey PRIMARY KEY (id),
    CONSTRAINT item_orders_order_id_fkey FOREIGN KEY (order_id)
        REFERENCES public.orders (order_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT item_orders_product_id_fkey FOREIGN KEY (product_id)
        REFERENCES public.items (product_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.item_orders
    OWNER to postgres;

INSERT INTO public.orders (client_id, order_status)
VALUES  (3,'concluido'),
        (1,'cancelado'),
        (9,'em progresso');

INSERT INTO public.items (unit_price, description)
VALUES  ( 5.60, 'Arroz' ),
        ( 6.80, 'Feijão' ),
        ( 2.50, 'Sal' ),
        ( 4.95, 'Açúcar' ),
        ( 7.30, 'Açúcar Mascavo' ),
        ( 6.10, 'Bis Branco' ),
        ( 3.15, 'Snikers' ),
        ( 5.99, 'Ketchup' ),
        ( 3.25, 'Esponja' ),
        ( 4.15, 'Detergente' ),
        ( 45.0, 'Kinder Ovo( 100mg )' ),
        ( 94.0, 'Ovo de Páscoa( 200g )' ),
        ( 5.00, 'Barra de Chocolate ( 100g )' );

INSERT INTO public.item_orders(order_id, product_id, qtde)
	VALUES  (1, 1, 10),
            (1, 3, 9),
            (2, 5, 7),
            (2, 3, 15),
            (3, 2, 5);