DROP DATABASE IF EXISTS abctokens;
CREATE DATABASE abctokens;

\c abctokens;

CREATE TABLE tokenTypes (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  fname VARCHAR
);

INSERT INTO tokenTypes (name, fname) VALUES ('SimpleERC20', 'Simple ERC20');
INSERT INTO tokenTypes (name, fname) VALUES ('StandardERC20', 'Standard ERC20');
INSERT INTO tokenTypes (name, fname) VALUES ('BurnableERC20', 'Burnable ERC20');
INSERT INTO tokenTypes (name, fname) VALUES ('CommonERC20', 'Common ERC20');
INSERT INTO tokenTypes (name, fname) VALUES ('PowerfulERC20', 'Powerful ERC20');
