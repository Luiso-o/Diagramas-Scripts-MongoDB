
db.createCollection( 'Anteojos', {validator: {$jsonSchema: {bsonType: 'object',title:'Anteojos',required: [         'Marca',          'Graduacion',          'TipoDeMontura',          'ColorDeMontura',          'ColorDeVidrios',          'Precio',          'Proveedor',          'Clientes'],properties: {Marca: {bsonType: 'string'},Graduacion: {bsonType: 'string'},TipoDeMontura: {bsonType: 'object',
title:'object',properties: {Flotante: {bsonType: 'bool'},Pasta: {bsonType: 'bool'},Metalica: {bsonType: 'bool'}}},ColorDeMontura: {bsonType: 'string'},ColorDeVidrios: {bsonType: 'string'},Precio: {bsonType: 'int'},Proveedor: {bsonType: 'objectId'},Clientes: {bsonType: 'objectId'}}         }      }});  