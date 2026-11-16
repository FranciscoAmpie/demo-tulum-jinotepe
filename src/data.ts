export const business = {
  name: 'Tulum Restaurante', city: 'Jinotepe, Carazo, Nicaragua',
  maps: 'https://maps.app.goo.gl/c4WTgPriYt3kuAoZA',
  whatsapp: '', // Número internacional sin + ni espacios, pendiente de confirmar.
  hours: 'Horario pendiente de confirmar',
  phone: 'Teléfono pendiente de confirmar',
};
export const categories = ['Para compartir', 'Platos fuertes', 'Bebidas', 'Postres'];
export const menu: Record<string, {name:string; description:string}[]> = {
  'Para compartir': [{name:'Entradas para compartir',description:'Una selección para comenzar la mesa.'},{name:'Sabores de la casa',description:'Consulta la selección disponible.'}],
  'Platos fuertes': [{name:'Cocina de fusión',description:'Propuestas para disfrutar sin prisa.'},{name:'Especialidades de la casa',description:'Consulta los platos disponibles.'}],
  'Bebidas': [{name:'Mixología',description:'Creaciones para acompañar el momento.'},{name:'Bebidas refrescantes',description:'Consulta las opciones disponibles.'}],
  'Postres': [{name:'Un final dulce',description:'Consulta los postres disponibles.'}]
};
