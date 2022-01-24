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