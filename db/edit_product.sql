update products
set product_name = $1, price = $2, imageUrl = $3
where id = $4
select * from products;