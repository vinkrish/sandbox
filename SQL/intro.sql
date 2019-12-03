/*
Data Definition and Constraints:
The CREATE statement in SQL has a few important constraints that are highlighted below.

NOT NULL: 
The NOT NULL constraint indicates that the column cannot contain a null value.
*/

CREATE TABLE IF NOT EXISTS customer_transactions (
    customer_id int NOT NULL, 
    store_id int, 
    spent numeric
);

/*
You can add NOT NULL constraints to more than one column.
*/

CREATE TABLE IF NOT EXISTS customer_transactions (
    customer_id int NOT NULL, 
    store_id int NOT NULL, 
    spent numeric
);

/*
UNIQUE:
The UNIQUE constraint is used to specify that the data across all the rows in one column are unique within the table. 
The UNIQUE constraint can also be used for multiple columns, so that the combination of the values across those columns will be unique within the table. 
In this latter case, the values within 1 column do not need to be unique.
*/

CREATE TABLE IF NOT EXISTS customer_transactions (
    customer_id int NOT NULL UNIQUE, 
    store_id int NOT NULL UNIQUE, 
    spent numeric 
);

/*
Another way to write a UNIQUE constraint is to add a table constraint using commas to separate the columns.
*/

CREATE TABLE IF NOT EXISTS customer_transactions (
    customer_id int NOT NULL, 
    store_id int NOT NULL, 
    spent numeric,
    UNIQUE (customer_id, store_id, spent)
);

/*
PRIMARY KEY:
The PRIMARY KEY constraint is defined on a single column, and every table should contain a primary key. 
The values in this column uniquely identify the rows in the table. If a group of columns are defined as a primary key, they are called a composite key. 
That means the combination of values in these columns will uniquely identify the rows in the table.
By default, the PRIMARY KEY constraint has the unique and not null constraint built into it.
*/

CREATE TABLE IF NOT EXISTS store (
    store_id int PRIMARY KEY, 
    store_location_city text,
    store_location_state text
);

/*
Here is an example for a group of columns serving as composite key.
*/

CREATE TABLE IF NOT EXISTS customer_transactions (
    customer_id int, 
    store_id int, 
    spent numeric,
    PRIMARY KEY (customer_id, store_id)
);

/*
Upsert

In RDBMS language, the term upsert refers to the idea of inserting a new row in an existing table, or updating the row if it already exists in the table. 
The action of updating or inserting has been described as "upsert".

INSERT:
The INSERT statement adds in new rows within the table. The values associated with specific target columns can be added in any order.
*/

CREATE TABLE IF NOT EXISTS customer_address (
    customer_id int PRIMARY KEY, 
    customer_street varchar NOT NULL,
    customer_city text NOT NULL,
    customer_state text NOT NULL
);

INSERT into customer_address (
VALUES
    (432, '758 Main Street', 'Chicago', 'IL'
);

/*
Now let's assume that the customer moved and we need to update the customer's address. However we do not want to add a new customer id. 
In other words, if there is any conflict on the customer_id, we do not want that to change.
*/

INSERT INTO customer_address (customer_id, customer_street, customer_city, customer_state)
VALUES
 (
 432, '923 Knox Street', 'Albany', 'NY'
 ) 
ON CONFLICT (customer_id) 
DO NOTHING;

INSERT INTO customer_address (customer_id, customer_street)
VALUES
    (
    432, '923 Knox Street, Suite 1' 
) 
ON CONFLICT (customer_id) 
DO UPDATE
    SET customer_street  = EXCLUDED.customer_street;
