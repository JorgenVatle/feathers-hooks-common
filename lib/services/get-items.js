
module.exports = function (context) {
  let items;
  
  if (context.params && context.params._actOn === 'dispatch') {
    items = context.dispatch;
  } else if (context.type === 'before') {
    items = context.data;
  } else {
    items = context.result;
  }

  return items && context.method === 'find' ? items.data || items : items;
};
