select 
    estado.nome as Estado,
    cidade.nome as Cidade,
    regiao as Região
from estados estado, cidades cidade
where estado.id = cidade.estado_id;

select 
    c.nome as Cidade,
    e.nome as Estado,
    regiao as Região
from estados e
inner join cidades c 
    on e.id = c.estado_id