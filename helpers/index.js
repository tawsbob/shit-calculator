export function concatClass(...args){
    return args.join(' ').trim()
}
export function addClass(expression, defaultClass, ifConditionalIsTrue, ifConditionalIsFalse = ''){
    return expression ? concatClass(defaultClass, ifConditionalIsTrue) : concatClass(defaultClass, ifConditionalIsFalse)
}

export function orClass(expression, isTrueClass, ifFalseClass){
    return expression ? isTrueClass : ifFalseClass
}

export function renderIf( condition, ifComponent, elseComponent ){
    return condition ? ifComponent : elseComponent
}

export const money_formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });