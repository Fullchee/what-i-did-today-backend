-- must be run in the psql shell
CREATE ROLE what_i_did_user WITH LOGIN PASSWORD 'password';

ALTER ROLE api_user CREATEDB;

CREATE DATABASE whatidid;

\c whatidid;
CREATE TYPE work_status AS ENUM (
  'not started',
  'working',
  'submitted for review',
  'delivered',
  'verified',
  'completed'
);

DROP TABLE IF EXISTS work_items;

CREATE TABLE work_items (
  id serial PRIMARY KEY,
  url varchar(255),
  title varchar(255),
  description varchar,
  status work_status
);

DROP TABLE IF EXISTS parent_child;

CREATE TABLE parent_child (
  id serial PRIMARY KEY,
  parent_id int REFERENCES work_items (id),
  child_id int REFERENCES work_items (id)
);

